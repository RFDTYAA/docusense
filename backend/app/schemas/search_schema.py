from pydantic import BaseModel
from typing import List

class SearchRequest(BaseModel):
    query: str
    top_k: int = 5

class PaperResult(BaseModel):
    id: str
    title: str
    abstract: str
    authors: str
    categories: List[str]
    year: int
    similarity: float

class SearchResponse(BaseModel):
    query: str
    total_results: int
    results: List[PaperResult]