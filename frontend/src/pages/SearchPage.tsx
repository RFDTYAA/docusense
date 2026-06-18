import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

type Paper = {
  id: string;
  title: string;
  abstract: string;
  categories: string;
  year: number;
  similarity_score: number;
};

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [results, setResults] = useState<Paper[]>([]);
  const [loading, setLoading] = useState(false);

  const [category, setCategory] = useState("all");
  const [yearRange, setYearRange] = useState([2017, 2026]);
  const [sort, setSort] = useState("relevance");

  const [page, setPage] = useState(1);
  const pageSize = 6;

  const categories = [
    "All Categories",
    "Artificial Intelligence",
    "Machine Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Information Retrieval",
    "Neural Networks",
    "Large Language Models",
    "Transformers",
  ];

  const fetchResults = async () => {
    setLoading(true);

    const res = await fetch("http://127.0.0.1:8000/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        category,
        year: yearRange,
        sort,
      }),
    });

    const data = await res.json();
    setResults(data.results || []);
    setLoading(false);
  };

  useEffect(() => {
    if (!query) return;
    fetchResults();
  }, [query, category, yearRange, sort]);

  const handleSearch = () => {
    setSearchParams({ q: query });
    setPage(1);
    fetchResults();
  };

  const paginatedResults = results.slice(
    (page - 1) * pageSize,
    page * pageSize,
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex items-center justify-between px-6 py-4 border-b bg-white">
        <div className="text-xl font-bold text-blue-600">DocuSense</div>
        <div className="flex gap-6 text-sm text-gray-600">
          <a href="/">Home</a>
          <a href="/search" className="text-blue-600 font-medium">
            Search
          </a>
          <a href="/analytics">Analytics</a>
          <a href="/about">About</a>
        </div>
        <button className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm">
          Find Papers
        </button>
      </div>

      <div className="max-w-7xl mx-auto flex gap-6 p-6">
        <div className="w-64 bg-white p-4 rounded-xl border h-fit">
          <h2 className="font-semibold mb-4">CATEGORY</h2>
          <div className="flex flex-col gap-2 text-sm">
            {categories.map((c, i) => (
              <label key={i} className="flex gap-2 items-center">
                <input
                  type="radio"
                  checked={category === c.toLowerCase()}
                  onChange={() => setCategory(c.toLowerCase())}
                />
                {c}
              </label>
            ))}
          </div>

          <h2 className="font-semibold mt-6 mb-2">YEAR RANGE</h2>
          <input
            type="number"
            value={yearRange[0]}
            onChange={(e) =>
              setYearRange([Number(e.target.value), yearRange[1]])
            }
            className="w-full border p-2 rounded mb-2"
          />
          <input
            type="number"
            value={yearRange[1]}
            onChange={(e) =>
              setYearRange([yearRange[0], Number(e.target.value)])
            }
            className="w-full border p-2 rounded"
          />

          <h2 className="font-semibold mt-6 mb-2">SORT</h2>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>

        <div className="flex-1">
          <div className="flex gap-2 mb-6">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for research papers..."
              className="flex-1 border p-3 rounded-xl"
            />
            <button
              onClick={handleSearch}
              className="bg-gray-900 text-white px-6 rounded-xl"
            >
              Search
            </button>
          </div>

          {loading && (
            <div className="text-center text-gray-500">Loading papers...</div>
          )}

          {!loading && results.length === 0 && (
            <div className="text-center text-gray-400">No papers found</div>
          )}

          <div className="space-y-4">
            {paginatedResults.map((paper) => (
              <div
                key={paper.id}
                className="bg-white p-5 rounded-xl border hover:shadow-md transition"
              >
                <div className="flex justify-between">
                  <h3 className="font-semibold text-lg">{paper.title}</h3>
                  <span className="text-blue-600 font-bold">
                    {(paper.similarity_score * 100).toFixed(1)}%
                  </span>
                </div>

                <div className="text-sm text-gray-500 mt-1">
                  {paper.year} · {paper.categories}
                </div>

                <p className="text-sm text-gray-600 mt-3 line-clamp-3">
                  {paper.abstract}
                </p>

                <div className="mt-4 text-sm text-blue-500">
                  FAISS Retrieval + Semantic Ranking
                </div>
              </div>
            ))}
          </div>

          {results.length > pageSize && (
            <div className="flex justify-center gap-2 mt-6">
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className="px-3 py-1 border rounded"
              >
                Prev
              </button>
              <span className="px-3 py-1">{page}</span>
              <button
                onClick={() => setPage(page + 1)}
                disabled={page * pageSize >= results.length}
                className="px-3 py-1 border rounded"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
