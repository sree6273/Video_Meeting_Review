@echo off
echo ===============================
echo Activating virtual environment...
echo ===============================
call venv\Scripts\activate

echo ===============================
echo Setting PYTHONPATH to ./backend
echo ===============================
set PYTHONPATH=./backend

echo ===============================
echo Starting FastAPI server...
echo ===============================
uvicorn app.main:app --reload
