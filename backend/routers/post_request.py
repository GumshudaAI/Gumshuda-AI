from fastapi import APIRouter, HTTPException, File, UploadFile, Form
from fastapi.responses import JSONResponse
import json
import io
from PIL import Image
from uuid import uuid4

from utils import get_url, hybrid_scale
from config import API_KEY, ENV
from schemas import PostRequestData

import pinecone
from sentence_transformers import SentenceTransformer
from pinecone_text.sparse import BM25Encoder

# Initialize BM25 Encoder and Sentence Transformer model
bm25 = BM25Encoder()
model = SentenceTransformer('sentence-transformers/clip-ViT-B-32', device='cuda' if torch.cuda.is_available() else 'cpu')

# Connect to Pinecone
pinecone.init(api_key=API_KEY, environment=ENV)
index_name = "final-database"
if index_name not in pinecone.list_indexes():
    pinecone.create_index(index_name, dimension=512, metric="dotproduct", pod_type="s1")
index = pinecone.Index(index_name)

router = APIRouter()

@router.post("/")
async def post_request(finalData: str = Form(...), image: UploadFile = File(...)):
    try:
        final_data = json.loads(finalData)
    except json.JSONDecodeError:
        return JSONResponse(content={"error": "Invalid JSON data in finalData"}, status_code=400)

    # Access the properties from the JSON object
    name = final_data.get("name")
    description = final_data.get("description")
    city = final_data.get("city")
    date = final_data.get("date")

    image_content = await image.read()
    pil_image = Image.open(io.BytesIO(image_content))
    sparse_embeds = bm25.encode_documents(description)
    dense_embeds = model.encode(pil_image)
    image_url = await get_url(image_content)

    metadata = {
        "description": description,
        "style_image": image_url,
        "name": name,
        "city": city,
        "date": date,
    }
    upserts = [{
        'id': str(uuid4()),
        'sparse_values': sparse_embeds,
        'values': dense_embeds,
        'metadata': metadata
    }]
    index.upsert(upserts)
    return JSONResponse(content={"message": "Request posted successfully"}, status_code=201)