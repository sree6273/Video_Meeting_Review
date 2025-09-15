from fastapi import FastAPI
'''
from app.api.v1.api_router import api_router

app = FastAPI(
    title="AI Meeting Intelligence Platform",
    version="1.0.0"
)

app.include_router(api_router, prefix="/api/v1")
'''

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "FastAPI working!"}

