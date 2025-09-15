from sklearn.feature_extraction.text import CountVectorizer
from sklearn.decomposition import LatentDirichletAllocation
from typing import List

class TopicModeler:
    def __init__(self, n_topics=3):
        self.n_topics = n_topics

    def extract_topics(self, text: str, num_words: int = 5) -> List[str]:
        vectorizer = CountVectorizer(stop_words='english')
        dtm = vectorizer.fit_transform([text])

        lda = LatentDirichletAllocation(n_components=self.n_topics, random_state=42)
        lda.fit(dtm)

        topics = []
        words = vectorizer.get_feature_names_out()

        for topic_idx, topic in enumerate(lda.components_):
            topic_words = [words[i] for i in topic.argsort()[:-num_words - 1:-1]]
            topics.append("Topic {}: {}".format(topic_idx + 1, ", ".join(topic_words)))

        return topics
