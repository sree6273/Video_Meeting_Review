import os
from fastapi import APIRouter, Query
from app.services.transcription.whisper_service import TranscriptionService
from app.services.topic.topic_modeler import TopicModeler

router = APIRouter()
transcriber = TranscriptionService()
topic_modeler = TopicModeler()

@router.get("/")
def get_topics(filename: str = Query(...)):
    file_path = os.path.join("uploaded_files", filename)

    if not os.path.isfile(file_path):
        return {"error": "File not found."}

    transcript = transcriber.transcribe(file_path)
    topics = topic_modeler.extract_topics(transcript)

    return {
        "filename": filename,
        "topics": topics
    }
