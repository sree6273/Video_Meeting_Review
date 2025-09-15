class Summarizer:
    def generate_summary(self, transcript: str) -> str:
        if not transcript:
            return "No content to summarize."
        
        # Dummy logic for now
        return f"Summary: {transcript[:100]}..."  # Just returns first 100 chars
