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


# Load environment variables from .env file
load_dotenv()
# Initialize FastAPI app
app = FastAPI()

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
        return ''
