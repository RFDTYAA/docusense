const API_BASE_URL = "http://127.0.0.1:8000/api";

export interface Paper {
  id: string | number;
  title: string;
  authors: string;
  year: number;
  abstract: string;
  categories: string[];
  similarity: number;
}

export interface SearchResponse {
  results: Paper[];
  total: number;
  query: string;
}

export async function searchPapers(
  query: string,
  topK: number = 10,
): Promise<SearchResponse> {
  const response = await fetch(`${API_BASE_URL}/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: query,
      top_k: topK,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch search results");
  }

  const data = await response.json();

  return {
    query: data.query,
    total: data.total_results || data.total || 0,
    results: data.results || [],
  };
}
