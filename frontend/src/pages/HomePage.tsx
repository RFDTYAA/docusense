import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="flex items-center justify-between px-8 py-5 border-b">
        <div className="font-bold text-xl">DocuSense</div>

        <div className="flex gap-6 text-sm">
          <a href="/" className="font-medium">
            Home
          </a>
          <a href="/search">Search</a>
          <a href="/analytics">Analytics</a>
          <a href="/about">About</a>
        </div>

        <button className="bg-gray-900 text-white px-4 py-2 rounded-xl">
          Find Papers
        </button>
      </nav>

      <section className="text-center mt-20 px-6">
        <div className="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm">
          DocuSense Search Engine v2.0 Live
        </div>

        <h1 className="text-5xl font-bold mt-6 leading-tight">
          Search Research Papers
          <br />
          <span className="text-blue-600">Intelligently</span>
        </h1>

        <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
          Discover AI research using semantic understanding, vector search, and
          cross-encoder reranking.
        </p>

        <div className="mt-10 flex justify-center">
          <div className="flex w-[650px] border rounded-2xl overflow-hidden shadow-sm">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search topics like Large Language Models, Transformers..."
              className="flex-1 px-5 py-4 outline-none"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-6"
            >
              Search Papers
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          {[
            "Transformer",
            "Large Language Models",
            "Machine Learning",
            "Computer Vision",
            "Reinforcement Learning",
          ].map((t) => (
            <span
              key={t}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm cursor-pointer"
              onClick={() => setQuery(t)}
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-24 px-10">
        <h2 className="text-center text-xl font-semibold mb-10">
          Powered by Advanced AI
        </h2>

        <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold">Semantic Embeddings</h3>
            <p className="text-sm text-gray-500 mt-2">
              Understand meaning beyond keywords.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold">FAISS Vector Search</h3>
            <p className="text-sm text-gray-500 mt-2">
              Fast similarity search across millions of papers.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold">Cross Encoder Reranking</h3>
            <p className="text-sm text-gray-500 mt-2">
              Improve ranking accuracy using deep models.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-24 bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-4 text-center">
          <div>
            <div className="text-3xl font-bold">343K+</div>
            <div className="text-sm text-gray-400">Research Papers</div>
          </div>
          <div>
            <div className="text-3xl font-bold">7+</div>
            <div className="text-sm text-gray-400">AI Categories</div>
          </div>
          <div>
            <div className="text-3xl font-bold">~15ms</div>
            <div className="text-sm text-gray-400">Search Speed</div>
          </div>
          <div>
            <div className="text-3xl font-bold">BGE-v1.5</div>
            <div className="text-sm text-gray-400">Embedding Model</div>
          </div>
        </div>
      </section>

      <footer className="px-10 py-10 border-t mt-10 text-sm text-gray-500 flex justify-between">
        <div>DocuSense - AI Research Discovery Engine</div>
        <div className="flex gap-6">
          <span>Search Papers</span>
          <span>Analytics</span>
          <span>How it Works</span>
        </div>
      </footer>
    </div>
  );
}
