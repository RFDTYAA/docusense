export default function FilterSidebar() {
  return (
    <div className="w-64 bg-white border border-gray-200 rounded-2xl p-5 h-fit sticky top-6">
      <h3 className="font-semibold mb-4">Filters</h3>

      {/* Categories */}
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-700 mb-2">Categories</p>
        <div className="space-y-2 text-sm">
          {[
            "Artificial Intelligence",
            "Machine Learning",
            "Computer Vision",
            "NLP",
            "Transformers",
          ].map((cat, i) => (
            <label key={i} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-blue-600"
                defaultChecked={i < 3}
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      {/* Year Range */}
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-700 mb-2">Year Range</p>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="From"
            className="w-full border rounded-lg px-3 py-1.5 text-sm"
            defaultValue={2018}
          />
          <input
            type="number"
            placeholder="To"
            className="w-full border rounded-lg px-3 py-1.5 text-sm"
            defaultValue={2025}
          />
        </div>
      </div>

      {/* Sort */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">Sort by</p>
        <select className="w-full border rounded-lg px-3 py-2 text-sm">
          <option>Relevance</option>
          <option>Newest First</option>
          <option>Oldest First</option>
        </select>
      </div>
    </div>
  );
}
