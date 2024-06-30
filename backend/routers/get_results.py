from fastapi import APIRouter, HTTPException, File, UploadFile, Form
from fastapi.responses import JSONResponse
import json
import io
from PIL import Image

from utils import hybrid_scale
from config import API_KEY, ENV
from schemas import GetResultsData

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
async def get_results(finalData: str = Form(...), image: UploadFile = File(...)):
    try:
        final_data = json.loads(finalData)
    except json.JSONDecodeError:
        return JSONResponse(content={"error": "Invalid JSON data in finalData"}, status_code=400)

    # Access the properties from the JSON object
    name = final_data.get("name")
    description = final_data.get("description")
    city = final_data.get("city")
    date = final_data.get("date")
    fullDescription = description + name + city
    print(fullDescription)
    image_content = await image.read()
    pil_image = Image.open(io.BytesIO(image_content))
    sparse_embeds = bm25.encode_documents(fullDescription)
    dense_embeds = model.encode(pil_image).tolist()

    try:
        hdense, hsparse = hybrid_scale(dense_embeds, sparse_embeds, alpha=0.05)
    except HTTPException as exc:
        return exc  # Return the exception response directly

    result = index.query(
        top_k=5,
        vector=hdense,
        sparse_vector=hsparse,
        include_metadata=True
    )
    if not result['matches']:
        raise HTTPException(status_code=404, detail="No matching results found")
    print(result['matches'])
    img_urls = [r['metadata']['style_image'] for r in result['matches']]
    return JSONResponse(content={'images': img_urls}, status_code=200)
