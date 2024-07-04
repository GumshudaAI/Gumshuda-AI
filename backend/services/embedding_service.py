import openai
from pinecone_text.sparse import BM25Encoder
from config import OPENAI_API_KEY

openai.api_key = OPENAI_API_KEY
bm25 = BM25Encoder()
bm25.fit("Import errors are caused due to circular imports most of the time")

async def generate_embeddings(text, sparse=False):
    if sparse:
        return bm25.encode_documents(text)
    
    response = openai.embeddings.create(
        input=text,
        model="text-embedding-3-small",
        dimensions=512,
    )
    return response.data[0].embedding