import { useState } from "react";
import FilterSidebar from "../components/FilterSidebar";
import PaperCard from "../components/PaperCard";
import PaperDetailModal from "../components/PaperDetailModal";
import { searchPapers, type Paper } from "../services/api";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Paper[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedPaper, setSelectedPaper] = useState<Paper | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError("");

    try {
      const data = await searchPapers(query, 10);
      setResults(data.results);
    } catch {
      setError(
        "Gagal mengambil data dari server. Pastikan backend sudah jalan.",
      );
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetail = (paper: Paper) => {
    setSelectedPaper(paper);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPaper(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Search Bar */}
      <div className="flex gap-3 mb-8">
        <input
          type="text"
          placeholder="Search research papers..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1 border border-gray-300 rounded-2xl px-5 py-3 text-lg focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="bg-gray-900 hover:bg-black text-white px-8 rounded-2xl font-medium disabled:opacity-50"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {/* Results */}
      <div className="flex gap-8">
        <FilterSidebar />

        <div className="flex-1">
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-2xl mb-4">
              {error}
            </div>
          )}

          {loading && (
            <div className="text-center py-8 text-gray-500">
              Loading results...
            </div>
          )}

          {!loading && results.length === 0 && query && !error && (
            <div className="text-center py-8 text-gray-500">
              No results found.
            </div>
          )}

          <div className="space-y-4">
            {results.map((paper) => (
              <PaperCard
                key={paper.id}
                {...paper}
                onViewDetail={() => handleViewDetail(paper)}
              />
            ))}
          </div>
        </div>
      </div>

      <PaperDetailModal
        paper={selectedPaper}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}
