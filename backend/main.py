from fastapi import FastAPI, HTTPException, File, UploadFile, Form
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import json
from config import NAMESPACE
from services.embedding_service import generate_embeddings
from services.image_service import get_url
from services.vector_service import initialize_vector_db, upsert_vector, query_vector
from utils import hybrid_scale
import datetime

app = FastAPI()

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize vector database
initialize_vector_db()

@app.get("/heartbeat")
async def heartbeat():
    return JSONResponse(content='Server is running', status_code=200)

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
    sparse_embeds = await generate_embeddings(description, sparse=True)
    dense_embeds = await generate_embeddings(description)
    image_url = await get_url(image_content)

    metadata = {
        "description": description,
        "style_image": image_url,
        "name": name,
        "city": city,
        "date": date,
    }

    await upsert_vector(sparse_embeds, dense_embeds, metadata)
    return JSONResponse(content={"message": "Request posted successfully"}, status_code=201)

@app.post("/get_results/")
async def get_results(finalData: str = Form(...), image: UploadFile = File(...)):
    try:
        final_data = json.loads(finalData)
    except json.JSONDecodeError:
        return JSONResponse(content={"error": "Invalid JSON data in finalData"}, status_code=400)

    name = final_data.get("name")
    description = final_data.get("description")
    city = final_data.get("city")
    fullDescription = description + name + city

    sparse_embeds = await generate_embeddings(fullDescription, sparse=True)
    dense_embeds = await generate_embeddings(description)

    try:
        hdense, hsparse = hybrid_scale(dense_embeds, sparse_embeds, alpha=0.05)
    except HTTPException as exc:
        return exc

    result = await query_vector(hdense, hsparse)
    if not result['matches']:
        raise HTTPException(status_code=404, detail="No matching results found")




    # Convert the result to a JSON-serializable format
    json_result = {
        "matches": [
            {
                "id": match["id"],
                "metadata": {
                    "city": match["metadata"]["city"],
                    "date": match["metadata"]["date"].isoformat(),  # Convert date to string
                    "description": match["metadata"]["description"],
                    "name": match["metadata"]["name"],
                    "style_image": match["metadata"]["style_image"]
                },
                "score": match["score"],
                "values": match["values"]
            } for match in result["matches"]
        ],
        "namespace": result.get("namespace"),
        "usage": result.get("usage")
    }

    # img_urls = [r['metadata']['style_image'] for r in result['matches']]
    # print(result)
    
    return JSONResponse(content={'result': json_result}, status_code=200)