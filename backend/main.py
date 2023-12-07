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