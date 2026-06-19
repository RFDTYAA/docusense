export interface Paper {
  id: number;
  title: string;
  authors: string;
  year: number;
  abstract: string;
  categories: string[];
  similarity: number;
}
