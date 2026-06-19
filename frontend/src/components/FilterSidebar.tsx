interface FilterSidebarProps {
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
  yearFrom: number;
  yearTo: number;
  onYearChange: (from: number, to: number) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export default function FilterSidebar({
  selectedCategories,
  onCategoryChange,
  yearFrom,
  yearTo,
  onYearChange,
  sortBy,
  onSortChange,
}: FilterSidebarProps) {
  const categories = [
    "Artificial Intelligence",
    "Machine Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Information Retrieval",
    "Neural Networks",
    "Large Language Models",
    "Transformers",
  ];

  const handleCategoryToggle = (cat: string) => {
    if (selectedCategories.includes(cat)) {
      onCategoryChange(selectedCategories.filter((c) => c !== cat));
    } else {
      onCategoryChange([...selectedCategories, cat]);
    }
  };

  return (
    <div className="w-72 bg-white border border-gray-200 rounded-3xl p-6 h-fit sticky top-6">
      {/* Category */}
      <div className="mb-8">
        <div className="text-xs font-semibold tracking-wider text-gray-500 mb-3">
          CATEGORY
        </div>
        <div className="space-y-2.5 text-sm">
          {categories.map((cat, index) => (
            <label
              key={index}
              className="flex items-center gap-2.5 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategoryToggle(cat)}
                className="accent-blue-600 w-4 h-4"
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Year Range */}
      <div className="mb-8">
        <div className="text-xs font-semibold tracking-wider text-gray-500 mb-3">
          YEAR RANGE
        </div>
        <div className="flex items-center gap-3">
          <input
            type="number"
            value={yearFrom}
            onChange={(e) =>
              onYearChange(parseInt(e.target.value) || 2017, yearTo)
            }
            className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
          />
          <span className="text-gray-400">-</span>
          <input
            type="number"
            value={yearTo}
            onChange={(e) =>
              onYearChange(yearFrom, parseInt(e.target.value) || 2026)
            }
            className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Sort By */}
      <div>
        <div className="text-xs font-semibold tracking-wider text-gray-500 mb-3">
          SORT BY
        </div>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500"
        >
          <option value="relevance">Relevance</option>
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>
    </div>
  );
}
