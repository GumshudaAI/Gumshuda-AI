import base64
import requests
from fastapi import HTTPException
from config import IMGBB_API_KEY

async def get_url(image_content):
    encoded_image = base64.b64encode(image_content).decode("utf-8")
    imgbb_api_url = "https://api.imgbb.com/1/upload"
    data = {
        "key": IMGBB_API_KEY,
        "image": encoded_image
    }
    response = requests.post(imgbb_api_url, data=data)

    if response.status_code == 200:
        result = response.json()
        return result["data"]["url"]
    else:
        print(f"Failed to upload image. Status code: {response.status_code}")
        raise HTTPException(status_code=response.status_code, detail='Failed to upload image')