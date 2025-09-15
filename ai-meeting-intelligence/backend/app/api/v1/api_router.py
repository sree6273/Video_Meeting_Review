from fastapi import APIRouter
from app.api.v1.endpoints import upload
from app.api.v1.endpoints import transcript
from app.api.v1.endpoints import summary
from app.api.v1.endpoints import topic





api_router = APIRouter()
api_router.include_router(upload.router, prefix="/upload", tags=["Upload"])
api_router.include_router(transcript.router, prefix="/transcribe", tags=["Transcription"])
api_router.include_router(summary.router, prefix="/summary", tags=["Summary"])
api_router.include_router(topic.router, prefix="/topics", tags=["Topic Modeling"])