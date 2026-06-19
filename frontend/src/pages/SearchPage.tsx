import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import FilterSidebar from "../components/FilterSidebar";
import PaperCard from "../components/PaperCard";
import PaperDetailModal from "../components/PaperDetailModal";
import { searchPapers, type Paper } from "../services/api";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Paper[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Filter
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [yearFrom, setYearFrom] = useState(2017);
  const [yearTo, setYearTo] = useState(2026);
  const [sortBy, setSortBy] = useState("relevance");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [selectedPaper, setSelectedPaper] = useState<Paper | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load query dari URL
  useEffect(() => {
    const urlQuery = searchParams.get("q");
    if (urlQuery) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setQuery(urlQuery);
    }
  }, [searchParams]);

  // Fetch data
  const fetchResults = async (searchQuery: string) => {
    setLoading(true);
    setError("");
    try {
      let data;
      if (searchQuery.trim()) {
        data = await searchPapers(searchQuery, 50);
      } else {
        data = await searchPapers("transformer", 50);
      }
      setResults(data.results || []);
      setCurrentPage(1);
    } catch {
      setError("Gagal mengambil data dari server.");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  // Auto fetch saat query berubah
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchResults(query);
  }, [query]);

  // Filtering + Sorting
  const filteredResults = useMemo(() => {
    let filtered = [...results];

    // === CATEGORY FILTER (Lebih Pintar) ===
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((paper) => {
        const paperText = (
          paper.title +
          " " +
          paper.abstract +
          " " +
          paper.categories.join(" ")
        ).toLowerCase();

        return selectedCategories.some((selectedCat) => {
          const cat = selectedCat.toLowerCase();

          // Cocokkan langsung di kategori
          if (paper.categories.some((c) => c.toLowerCase().includes(cat))) {
            return true;
          }

          // Fallback: cocokkan lewat judul / abstract
          if (cat.includes("artificial intelligence") || cat === "ai") {
            return (
              paperText.includes("artificial intelligence") ||
              paperText.includes(" ai ")
            );
          }
          if (cat.includes("machine learning") || cat === "ml") {
            return (
              paperText.includes("machine learning") ||
              paperText.includes(" ml ")
            );
          }
          if (cat.includes("natural language") || cat.includes("nlp")) {
            return (
              paperText.includes("natural language") ||
              paperText.includes(" nlp ")
            );
          }
          if (cat.includes("computer vision")) {
            return (
              paperText.includes("computer vision") ||
              paperText.includes(" vision ")
            );
          }
          if (cat.includes("neural network")) {
            return paperText.includes("neural network");
          }
          if (cat.includes("large language") || cat.includes("llm")) {
            return (
              paperText.includes("large language") || paperText.includes(" llm")
            );
          }
          if (cat.includes("transformer")) {
            return paperText.includes("transformer");
          }

          // Default: cek apakah kategori muncul di judul/abstract
          return paperText.includes(cat);
        });
      });
    }

    // Year Filter
    filtered = filtered.filter((p) => p.year >= yearFrom && p.year <= yearTo);

    // Sort
    if (sortBy === "newest") {
      filtered.sort((a, b) => b.year - a.year);
    } else if (sortBy === "oldest") {
      filtered.sort((a, b) => a.year - b.year);
    }

    return filtered;
  }, [results, selectedCategories, yearFrom, yearTo, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredResults.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredResults.length);
  const paginatedResults = filteredResults.slice(startIndex, endIndex);

  const handleSearch = () => {
    if (query.trim()) fetchResults(query);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleViewDetail = (paper: Paper) => {
    setSelectedPaper(paper);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Search Bar */}
      <div className="flex gap-3 mb-8">
        <input
          type="text"
          placeholder="Search for research papers..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 border border-gray-300 rounded-2xl px-5 py-3 text-lg focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSearch}
          className="bg-gray-900 hover:bg-black text-white px-8 rounded-2xl font-medium"
        >
          Search
        </button>
      </div>

      <div className="flex gap-8">
        <FilterSidebar
          selectedCategories={selectedCategories}
          onCategoryChange={setSelectedCategories}
          yearFrom={yearFrom}
          yearTo={yearTo}
          onYearChange={(from, to) => {
            setYearFrom(from);
            setYearTo(to);
            setCurrentPage(1);
          }}
          sortBy={sortBy}
          onSortChange={(sort) => {
            setSortBy(sort);
            setCurrentPage(1);
          }}
        />

        <div className="flex-1">
          {/* Showing X-Y of Z */}
          {!loading && filteredResults.length > 0 && (
            <div className="mb-4 text-sm text-gray-600">
              Showing {startIndex + 1}-{endIndex} of {filteredResults.length}{" "}
              results
            </div>
          )}

          {error && <div className="text-red-600 mb-4">{error}</div>}

          {loading ? (
            <div className="text-center py-12 text-gray-500">Loading...</div>
          ) : paginatedResults.length > 0 ? (
            <>
              <div className="space-y-4">
                {paginatedResults.map((paper) => (
                  <PaperCard
                    key={paper.id}
                    {...paper}
                    onViewDetail={() => handleViewDetail(paper)}
                  />
                ))}
              </div>

              {/* Garis Pemisah + Pagination */}
              <div className="border-t border-gray-200 mt-8 pt-6">
                <div className="flex items-center justify-between">
                  {/* Previous - Kiri */}
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    ← Previous
                  </button>

                  {/* Page Info - Tengah */}
                  <span className="text-sm text-gray-600">
                    Page {currentPage} of {totalPages}
                  </span>

                  {/* Next - Kanan */}
                  <button
                    onClick={() =>
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-16 text-gray-500">
              No results found.
            </div>
          )}
        </div>
      </div>

      <PaperDetailModal
        paper={selectedPaper}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onOpenRelated={(relatedPaper) => {
          setSelectedPaper(relatedPaper);
          // Modal tetap terbuka karena kita update selectedPaper
        }}
      />
    </div>
  );
}
