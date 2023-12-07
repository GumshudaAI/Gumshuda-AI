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
