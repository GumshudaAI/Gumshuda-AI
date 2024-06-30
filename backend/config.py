from dotenv import load_dotenv
import os

load_dotenv()

API_KEY = os.getenv("PINECONE_API_KEY")
ENV = os.getenv("PINECONE_ENVIRONMENT")
IMG_DB_API_KEY = os.getenv("IMG_DB_API_KEY")
