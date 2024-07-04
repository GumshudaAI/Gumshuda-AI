from pydantic import BaseModel

class PostRequestData(BaseModel):
    name: str
    description: str
    city: str
    date: str

class GetResultsData(BaseModel):
    name: str
    description: str
    city: str
    date: str
from pydantic import BaseModel

class PostRequestData(BaseModel):
    name: str
    description: str
    city: str
    date: str

class GetResultsData(BaseModel):
    name: str
    description: str
    city: str
    date: str
