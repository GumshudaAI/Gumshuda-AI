from fastapi import FastAPI, HTTPException, File, UploadFile, Form
import io
from fastapi.responses import JSONResponse, StreamingResponse
import base64
from pinecone_text.sparimport BM25Encoder
import os
import pinecone
from PIL import Image
import numpy as np
import requests
from dotenv import load_dotenv
from sentence_transformers import SentenceTransformer
import torch
from fastapi.middleware.cors import CORSMiddleware
from uuid import uuid4
import json
import openai
# Load environment variables from .env file
load_dotenv()
# Initialize FastAPI app
app = FastAPI()
# Allow all origins to access the API (replace "*" with the specific origins you want to allow)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
openai_api_key = os.getenv("OPENAI_API_KEY")
openai.api_key = openai_api_key
# Initialize BM25 Encoder
bm25 = BM25Encoder()

# Initialize Sentence Transformer model
device = 'cuda' if torch.cuda.is_available() else 'cpu'
model = SentenceTransformer('sentence-transformers/clip-ViT-B-32', device=device)


# Connect to Pinecone
api_key = os.getenv("PINECONE_API_KEY") or "PINECONE_API_KEY"
env = os.getenv("PINECONE_ENVIRONMENT") or "PINECONE_ENVIRONMENT"
pinecone.init(api_key=api_key, environment=env)

# Define Pinecone index
# index_name = "talaash-ai"
index_name="final-database"
if index_name not in pinecone.list_indexes():
    pinecone.create_index(index_name, dimension=512, metric="dotproduct", pod_type="s1")
index = pinecone.Index(index_name)


# Temporary text for BM25 fitting
temp = "Import errors are caused due to circular imports most of the time"
_id = 100001
bm25.fit(temp)

# Connect to Img DB
imgbb_api_key = os.getenv("IMG_DB_API_KEY")

# Convert PIL image to base64 and upload to Img BB
async def get_url(image_content):
    encoded_image = base64.b64encode(image_content).decode("utf-8")
    imgbb_api_url = "https://api.imgbb.com/1/upload"
    data = {
        "key": imgbb_api_key,
        "image": encoded_image
    }
    response = requests.post(imgbb_api_url, data=data)

    # Get the URL of the uploaded image
    if response.status_code == 200:
        result = response.json()
        image_url = result["data"]["url"]
        return image_url
    else:
        print(f"Failed to upload image. Status code: {response.status_code}")
        raise HTTPException(status_code=response.status_code, detail='Failed to upload image')
@app.get("/heartbeat")
async def heartbeat():
    return JSONResponse(content='Server is', status_code=200)



# Post request to add an item to the database
@app.post("/post_request/")
async def post_request(finalData: str = Form(...), image: UploadFile = File(...)):
    try:
        final_data = json.loads(finalData)
    except json.JSONDecodeError:
        return JSONResponse(content={"error": "Invalid JSON data in finalData"}, status_code=400)

    name = final_data.get("name")
    description = final_data.get("description")
    city = final_data.get("city")
    date = final_data.get("date")

    image_content = await image.read()
    pil_image = Image.open(io.BytesIO(image_content))
    image_url = await get_url(image_content) 

    # Generate embeddings using OpenAI
    response = openai.Embedding.create(
        input=description,
        model="text-similarity-babbage-001"
    )
    dense_embeds = response['data'][0]['embedding']

    metadata = {
        "description": description,
        "style_image": image_url,
        "name": name, 
        "city": city, 
        "date": date,
    }
    upserts = [{
        'id': str(uuid4()),
        'values': dense_embeds,
        'metadata': metadata
    }]
    index.upsert(upserts)
    return JSONResponse(content={"message": "Request posted successfully"}, status_code=201)
# Helper function to perform hybrid scaling of vectors
def hybrid_scale(dense, sparse, alpha: float):
    if alpha < 0 or alpha > 1:
        raise HTTPException(status_code=400, detail="Alpha must be between 0 and 1")
    hsparse = {
        'indices': sparse['indices'],
        'values': [v * (1 - alpha) for v in sparse['values']]
    }
    hdense = [v * alpha for v in dense]
    return hdense, hsparse


# Search for an item in the database
@app.post("/get_results/")
async def get_results(finalData: str = Form(...), image: UploadFile = File(...)):
    try:
        final_data = json.loads(finalData)
    except json.JSONDecodeError:
        return JSONResponse(content={"error": "Invalid JSON data in finalData"}, status_code=400)

    description = final_data.get("description")
    # Generate embeddings using OpenAI
    response = openai.Embedding.create(
        input=description,
        model="text-similarity-babbage-001"
    )
    dense_embeds = response['data'][0]['embedding']

    result = index.query(
        top_k=5,
        vector=dense_embeds,
        include_metadata=True
    )
    if not result['matches']:
        raise HTTPException(status_code=404, detail="No matching results found")
    img_urls = [r['metadata']['style_image'] for r in result['matches']]
    return JSONResponse(content={'images': img_urls}, status_code=200)