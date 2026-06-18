import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export interface Paper {
  id: string;
  title: string;
  abstract: string;
  authors: string;
  categories: string;
  year: number;
  similarity_score: number;
}

export interface SearchResponse {
  query: string;
  total_results: number;
  results: Paper[];
}

export const searchPapers = async (query: string, top_k = 5) => {
  const response = await API.post<SearchResponse>("/api/search", {
    query,
    top_k,
  });

  return response.data;
};
