from fastapi import APIRouter
from app.services.search_service import get_search_service

router = APIRouter()

@router.post("/search")
def search(payload: dict):
    query = payload.get("query", "")
    top_k = payload.get("top_k", 5)

    service = get_search_service()
    results = service.search(query, top_k)

    return {
        "query": query,
        "total_results": len(results),
        "results": results
    }