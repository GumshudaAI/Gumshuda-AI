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

OR
(incase the above doesn't work, you can switch to running the docker container)
`docker build . -t my-image`
`docker run my-image`

## Frontend

There are two types of frontend available.
`/frontend` has the react + `scss` based frontend (hosted on vercel well)
`/new-frontend` has the react + mui components (not hosted, but looks better)

1. go to the respective folders
2. `npm intall/yarn install/pnpm install`
3. `npm run dev/pnpm run dev` etc command to run the local frontend server

## Sample ENV File

### For backend

Create .env file in the backend directory with the following format-

```
PINECONE_API_KEY= <get this on https://www.pinecone.io>
PINECONE_ENVIRONMENT=<get this on https://www.pinecone.io>
IMG_DB_API_KEY=<get this one https://api.imgbb.com/>
OPENAI_API_KEY=<open ai api key>
INDEX_NAME=<name which you have provided to your database index>
```

Pinecone is needed to store vector embeddedings
ImgBB is used to upload images as a blog object, S3 can be configured to be used here as well
OpenAI API key is used to create embeddedings via clip-v2 model. This can also be done locally by importing the model in the RAM.

### For Frontend:

Add .env file in the frontend directeory with the value of

```
GENERATE_SOURCEMAP=false
```

## Deployment:

`frontend` is deployed on vercel

Build the docker image using the Dockerfile
and deploy the Docker file in any of the supported services.

## Managing Python Versions with conda

This project requires Python 3.9.
Conda allows you to easily manage multiple Python versions on your system.
Here's how to get started:

1. Check Existing Environments (Optional):

To see a list of conda environments on your system, run the following command in your terminal:

`conda env list`
This will display all environments and indicate the currently active one with an asterisk (\*).

2. Create a New Environment (if needed):

If you don't have a Python 3.9 environment, create one using this command:

`conda create -n myenv python=3.9`
Replace myenv with your preferred environment name. This command creates a new environment named myenv with Python 3.9 installed.

3. Activate the Environment:

Once you have a Python 3.9 environment, activate it using:

`conda activate myenv`
This activates the myenv environment, making Python 3.9 the active version for your project.

4. Verify Python Version:

You can verify the active Python version by running:

`python --version`
This should print Python 3.9.x (or similar) confirming successful activation.

5. Deactivate the Environment (Optional):

When you're done working on your project, you can deactivate the environment using:

`conda deactivate`
This deactivates the myenv environment and returns you to the base environment.
