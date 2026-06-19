from fastapi import APIRouter
from app.services.search_service import get_search_service
from app.schemas.search_schema import SearchRequest, SearchResponse, PaperResult

router = APIRouter()

@router.post("/search", response_model=SearchResponse)
def search(payload: SearchRequest):
    query = payload.query
    top_k = payload.top_k
    service = get_search_service()
    raw_results = service.search(query, top_k)
    results = [PaperResult(**item) for item in raw_results]
    return SearchResponse(
        query=query,
        total_results=len(results),
        results=results
    )

@router.get("/stats")
def get_stats():
    service = get_search_service()
    status = service.get_status()
    
    return {
        "total_papers": f"{status['total_papers'] // 1000}k+",
        "categories": 7,
        "avg_latency_ms": "~15ms",
        "model": "BGE-v1.5"
    }