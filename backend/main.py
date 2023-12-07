from fastapi import FastAPI, HTTPException, File, UploadFile
import io
from fastapi.responses import JSONResponse, StreamingResponse
import base64
from pinecone_text.sparse import BM25Encoder
import os
import pinecone
from PIL import Image
import numpy as np
import requests
from dotenv import load_dotenv
from sentence_transformers import SentenceTransformer
import torch

from dotenv import load_dotenv
load_dotenv()  # Load environment variables from the .env file
# Dense vector
from sentence_transformers import SentenceTransformer
import torch
device = 'cuda' if torch.cuda.is_available() else 'cpu'
model = SentenceTransformer(
    'sentence-transformers/clip-ViT-B-32',
    device=device
)

app = FastAPI()
images=[]

# Connect to Pinecone
api_key = os.getenv("PINECONE_API_KEY") or "PINECONE_API_KEY"
env = os.getenv("PINECONE_ENVIRONMENT") or "PINECONE_ENVIRONMENT"
pinecone.init(
    api_key=api_key,
    environment=env
)
index_name = "talaash-ai"
if index_name not in pinecone.list_indexes():
    pinecone.create_index(
      index_name,
      dimension=512,
      metric="dotproduct",
      pod_type="s1"
    )
index = pinecone.Index(index_name)


# Found Query: When we want to post an item to the DB
@app.post("/post_request/")
async def post_request(description: str, image: UploadFile = File(...)):
    global _id
    image_content = await image.read()  
    images[_id]=image_content
    sparse_embeds = bm25.encode_documents(description)
    # create dense vectors
    dense_embeds = model.encode(image_content).tolist()
    # create unique IDs
    metadata={
        "description": description
    }
    upserts = []
    upserts.append({
        'id': _id,
        'sparse_values': sparse_embeds,
        'values': dense_embeds,
        'metadata': metadata
    })
    _id+=1
    # upload the documents to the new hybrid index
    index.upsert(upserts)
    return JSONResponse(content={"message": "Request posted successfully"})



# Helper function
def hybrid_scale(dense, sparse, alpha: float):
    if alpha < 0 or alpha > 1:
        raise ValueError("Alpha must be between 0 and 1")
    hsparse = {
        'indices': sparse['indices'],
        'values':  [v * (1 - alpha) for v in sparse['values']]
    }
    hdense = [v * alpha for v in dense]
    return hdense, hsparse

# Lost Query: When we want to search an item in the DB
@app.post("/get_results/")  
async def get_results(description: str, image: UploadFile = File(...)):
    image_content = await image.read()
    sparse_embeds = bm25.encode_documents(description)
    dense_embeds = model.encode(image_content).tolist()
    hdense, hsparse = hybrid_scale(dense_embeds, sparse_embeds, alpha=0.05)
    metadata={
        "description": description
    }
    result = index.query(
        top_k=4,
        vector=hdense,
        sparse_vector=hsparse,
        include_metadata=True
    )

    # Get image URLs from the images list
    img_urls = [f"/get_image/{int(r['id'])}" for r in result["matches"]]

    return JSONResponse(content={"images": img_urls})


# Helper endpoint to retreive images 
@app.get("/get_image/{image_id}")
async def get_image(image_id: int):
    if image_id < len(images):
        return StreamingResponse(io.BytesIO(images[image_id]), media_type="image/jpeg")
    else:
        raise HTTPException(status_code=404, detail="Image not found")
