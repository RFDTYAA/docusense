import { Link } from "react-router-dom";
import { Search, Zap, Target, Brain } from "lucide-react";

export default function HomePage() {
  const popularTopics = [
    "Transformer",
    "Large Language Models",
    "Machine Learning",
    "Computer Vision",
    "Reinforcement Learning",
    "NLP",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-blue-200 text-blue-600 text-sm mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            DocuSense Search Engine v2.0 Live
          </div>

          <h1 className="text-6xl font-semibold tracking-tighter text-gray-900 mb-4">
            Search Research Papers
            <br />
            <span className="text-blue-600">Intelligently</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10">
            Discover AI research using semantic understanding, vector search,
            and advanced cross-encoder reranking. Find the exact paper you need,
            even if you don't know the right keywords.
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="flex items-center bg-white border border-gray-200 rounded-2xl shadow-sm p-2">
              <div className="flex-1 flex items-center px-5">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Search topics like Large Language Models, Transformers..."
                  className="flex-1 bg-transparent text-lg outline-none placeholder:text-gray-400"
                />
              </div>
              <Link
                to="/search"
                className="bg-gray-900 hover:bg-black transition-colors text-white px-8 py-3 rounded-xl font-medium text-sm"
              >
                Search Papers
              </Link>
            </div>
          </div>

          {/* Popular Topics */}
          <div>
            <div className="text-sm text-gray-500 mb-3 tracking-wider">
              POPULAR TOPICS
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {popularTopics.map((topic, index) => (
                <Link
                  key={index}
                  to={`/search?q=${encodeURIComponent(topic)}`}
                  className="px-5 py-2 bg-white border border-gray-200 hover:border-gray-300 rounded-full text-sm text-gray-700 transition-colors"
                >
                  {topic}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Powered by Advanced AI */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight mb-3">
            Powered by Advanced AI
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Our retrieval pipeline ensures you find the most contextually
            relevant research, instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Semantic Embeddings</h3>
            <p className="text-gray-600 leading-relaxed">
              Understand meaning beyond keywords. We convert papers into dense
              vectors to capture profound conceptual relationships.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">FAISS Vector Search</h3>
            <p className="text-gray-600 leading-relaxed">
              Lightning-fast similarity search across our entire corpus of
              research papers, powered by Facebook AI Similarity Search.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Cross Encoder Reranking
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Improve search relevance. We re-score initial results using a deep
              contextual model to put the best papers first.
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm">
          © 2026 DocuSense. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
