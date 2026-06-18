import pandas as pd
import faiss
import numpy as np

from sentence_transformers import SentenceTransformer

from app.core.config import (
    PAPERS_CSV_PATH,
    FAISS_INDEX_PATH,
    MODEL_NAME,
)


class SemanticSearchService:
    def __init__(self):
        self.papers = self._load_papers()
        self.index = self._load_faiss_index()
        self.model = SentenceTransformer(MODEL_NAME)

        self._validate_index()

    def _load_papers(self):
        if not PAPERS_CSV_PATH.exists():
            raise FileNotFoundError(
                f"File papers.csv tidak ditemukan di: {PAPERS_CSV_PATH}"
            )

        papers = pd.read_csv(PAPERS_CSV_PATH)

        # ID
        if "id" not in papers.columns:
            papers["id"] = papers.index.astype(str)

        # TITLE
        if "title" not in papers.columns:
            papers["title"] = ""

        # ABSTRACT
        if "abstract" not in papers.columns:
            papers["abstract"] = ""

        # CATEGORY
        if "categories" not in papers.columns:
            papers["categories"] = ""

        # YEAR dari update_date
        if "update_date" in papers.columns:
            papers["year"] = pd.to_datetime(
                papers["update_date"],
                errors="coerce"
            ).dt.year.fillna(0).astype(int)
        else:
            papers["year"] = 0

        # authors memang tidak ada
        papers["authors"] = ""

        return papers[["id", "title", "abstract", "authors", "categories", "year"]]

    def _load_faiss_index(self):
        if not FAISS_INDEX_PATH.exists():
            raise FileNotFoundError(
                f"File FAISS tidak ditemukan di: {FAISS_INDEX_PATH}"
            )

        return faiss.read_index(str(FAISS_INDEX_PATH))

    def _validate_index(self):
        if self.index.ntotal != len(self.papers):
            raise ValueError(
                f"Mismatch data: papers={len(self.papers)} vs faiss={self.index.ntotal}"
            )

    def search(self, query: str, top_k: int = 5):
        if not query.strip():
            return []

        query_vector = self.model.encode(
            [query],
            normalize_embeddings=True
        ).astype("float32")

        scores, indices = self.index.search(query_vector, top_k)

        results = []

        for score, idx in zip(scores[0], indices[0]):
            if idx == -1:
                continue

            paper = self.papers.iloc[idx]

            results.append({
                "id": str(paper["id"]),
                "title": str(paper["title"]),
                "abstract": str(paper["abstract"]),
                "authors": "",
                "categories": str(paper["categories"]),
                "year": int(paper["year"]),
                "similarity_score": float(round(score, 4))
            })

        return results

    def get_status(self):
        return {
            "total_papers": len(self.papers),
            "faiss_total_vectors": self.index.ntotal,
            "faiss_dimension": self.index.d,
            "model_name": MODEL_NAME,
        }


# Singleton pattern
_search_service = None


def get_search_service():
    global _search_service

    if _search_service is None:
        _search_service = SemanticSearchService()

    return _search_service