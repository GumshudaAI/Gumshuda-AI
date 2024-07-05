import os
from dotenv import load_dotenv

load_dotenv()

NAMESPACE = "gumshuda"
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")
PINECONE_ENVIRONMENT = os.getenv("PINECONE_ENVIRONMENT")
IMGBB_API_KEY = os.getenv("IMG_DB_API_KEY")
INDEX_NAME =  os.getenv("INDEX_NAME")