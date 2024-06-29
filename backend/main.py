from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import pinecone
import os

from routers import heartbeat, post_request, get_results
from utils import init_bm25_encoder, init_sentence_transformer

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

# Initialize BM25 Encoder
bm25 = init_bm25_encoder()

# Initialize Sentence Transformer model
model = init_sentence_transformer()

# Connect to Pinecone
api_key = os.getenv("PINECONE_API_KEY") or "PINECONE_API_KEY"
env = os.getenv("PINECONE_ENVIRONMENT") or "PINECONE_ENVIRONMENT"
pinecone.init(api_key=api_key, environment=env)

# Define Pinecone index
index_name = "final-database"
if index_name not in pinecone.list_indexes():
    pinecone.create_index(index_name, dimension=512, metric="dotproduct", pod_type="s1")
index = pinecone.Index(index_name)

# Include routers
app.include_router(heartbeat.router)
app.include_router(post_request.router, prefix="/post_request")
app.include_router(get_results.router, prefix="/get_results")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
