import base64
import io
import requests
from PIL import Image
import torch
from fastapi import HTTPException
from sentence_transformers import SentenceTransformer
from pinecone_text.sparse import BM25Encoder

from config import IMG_DB_API_KEY

def init_bm25_encoder():
    bm25 = BM25Encoder()
    # Temporary text for BM25 fitting
    temp = "Import errors are caused due to circular imports most of the time"
    bm25.fit(temp)
    return bm25

def init_sentence_transformer():
    device = 'cuda' if torch.cuda.is_available() else 'cpu'
    return SentenceTransformer('sentence-transformers/clip-ViT-B-32', device=device)

async def get_url(image_content):
    encoded_image = base64.b64encode(image_content).decode("utf-8")
    imgbb_api_url = "https://api.imgbb.com/1/upload"
    data = {
        "key": IMG_DB_API_KEY,
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

def hybrid_scale(dense, sparse, alpha: float):
    if alpha < 0 or alpha > 1:
        raise HTTPException(status_code=400, detail="Alpha must be between 0 and 1")
    hsparse = {
        'indices': sparse['indices'],
        'values': [v * (1 - alpha) for v in sparse['values']]
    }
    hdense = [v * alpha for v in dense]
    return hdense, hsparse
