import httpx
'''
class Summarizer:
    def __init__(self, model: str = "mistral", host: str = "http://localhost:11434"):
        self.model = model
        self.host = host

    def summarize(self, transcript: str) -> str:
        prompt = f"""
        You are a meeting assistant. Analyze the following meeting transcript and generate a structured summary including:

        - Executive Summary
        - Key Topics Discussed
        - Decisions Made
        - Action Items (with assignees if possible)
        - Overall Sentiment (if applicable)

        Transcript:
        {transcript}
        """

        payload = {
            "model": self.model,
            "prompt": prompt,
            "stream": False
        }

        response = httpx.post(f"{self.host}/api/generate", json=payload)
        response.raise_for_status()
        return response.json()["response"]
'''
class Summarizer:
    def generate_summary(self, transcript: str) -> str:
        if not transcript:
            return "No content to summarize."
        
        # Dummy logic for now
        return f"Summary: {transcript[:100]}..."  # Just returns first 100 chars
