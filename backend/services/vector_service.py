import pinecone
from uuid import uuid4
from config import PINECONE_API_KEY, PINECONE_ENVIRONMENT, INDEX_NAME, NAMESPACE

def initialize_vector_db():
    pinecone.init(api_key=PINECONE_API_KEY, environment=PINECONE_ENVIRONMENT)
    if INDEX_NAME not in pinecone.list_indexes():
        pinecone.create_index(INDEX_NAME, dimension=512, metric="dotproduct", pod_type="s1")

index = pinecone.Index(INDEX_NAME)

async def upsert_vector(sparse_embeds, dense_embeds, metadata):
    upserts = [{
        'id': str(uuid4()),
        'sparse_values': sparse_embeds,
        'values': dense_embeds,
        'metadata': metadata
    }]
    index.upsert(upserts, namespace=NAMESPACE)

async def query_vector(hdense, hsparse):
    return index.query(
        top_k=5,
        vector=hdense,
        sparse_vector=hsparse,
        include_metadata=True,
        namespace=NAMESPACE
    )