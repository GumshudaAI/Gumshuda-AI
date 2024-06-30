from fastapi import APIRouter
from fastapi.responses import JSONResponse

router = APIRouter()

@router.get("/heartbeat")
async def heartbeat():
    return JSONResponse(content='Server is', status_code=200)
