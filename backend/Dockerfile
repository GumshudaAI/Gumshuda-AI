FROM python:3.9.19-slim 

# Set the working directory in the container
WORKDIR /app

# Copy the dependencies file to the working directory
COPY requirements.txt .

# Install any dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the content of the local src directory to the working directory
COPY . .

EXPOSE 8000

# Specify the command to run on container start
CMD ["uvicorn", "main:app", "--host","0.0.0.0", "--port", "8000"]
