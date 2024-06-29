## Video Demo 
https://youtu.be/rmR56sffJNs?si=5kFHzQZjCUmAKueC


# How to setup locally?

## Backend:
1. go to the `/backend` folder.
2. create python environment `python -m venv venv`
3. activate that environment `source venv/bin/activate` or `source venv/Scripts/activate`
4. install the dependancies using `pip install -r requirements.txt`
5. run the server by `uvicorn main:app --host 0.0.0.0 --port 8000`
6. server is running on port 8000

## Frontend
There are two types of frontend available.
`/frontend` has the react +  `scss` based frontend  (hosted on vercel well)
`/new-frontend` has the react +  mui components (not hosted, but looks better)

1. go to the respective folders
2. `npm intall/yarn install/pnpm install`
3. `npm run dev/pnpm run dev` etc command to run the local frontend server


## Sample ENV File

Pinecone is needed to store vector embeddedings
ImgBB is used to upload images as a blog object, S3 can be configured to be used here as well
OpenAI API key is used to create embeddedings via clip-v2 model. This can also be done locally by importing the model in the RAM.


PINECONE_API_KEY= <get this on https://www.pinecone.io>
PINECONE_ENVIRONMENT=<get this on https://www.pinecone.io>
IMG_DB_API_KEY=<get this one https://api.imgbb.com/>
OPENAI_API_KEY=<open ai api key>


## Deployment: 
`frontend` is deployed on vercel 

Build the docker image using the Dockerfile
and deploy the Docker file in any of the supported services. 