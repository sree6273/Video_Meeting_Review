import os
from fastapi import APIRouter, UploadFile, File, HTTPException
from typing import List

UPLOAD_DIR = "uploaded_files"
os.makedirs(UPLOAD_DIR, exist_ok=True)

router = APIRouter()

@router.post("/")
async def upload_files(files: List[UploadFile] = File(...)):
    saved_files = []

    for file in files:
        file_ext = os.path.splitext(file.filename)[1].lower()
        if file_ext not in [".mp3", ".wav", ".mp4", ".m4a"]:
            raise HTTPException(status_code=400, detail=f"Unsupported file type: {file_ext}")

        file_path = os.path.join(UPLOAD_DIR, file.filename)

        with open(file_path, "wb") as f:
            content = await file.read()
            f.write(content)
        
        saved_files.append({"filename": file.filename, "path": file_path})

    return {"uploaded": saved_files}
