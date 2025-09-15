
import os
from fastapi import APIRouter, Query
from app.services.transcription.whisper_service import TranscriptionService
from app.services.summarization.summarizer import Summarizer
from app.services.endpoints.summarization.summarizer import Summarizer

router = APIRouter()
transcriber = TranscriptionService()
summarizer = Summarizer()

@router.get("/")
def summarize_file(filename: str = Query(..., description="Name of uploaded file")):
    file_path = os.path.join("uploaded_files", filename)

    if not os.path.isfile(file_path):
        return {"error": "File not found."}

    transcript = transcriber.transcribe(file_path)
    summary = summarizer.summarize(transcript)

    return {
        "filename": filename,
        "transcript": transcript,
        "summary": summary
    }
