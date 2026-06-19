interface PaperCardProps {
  id: number;
  title: string;
  authors: string;
  year: number;
  abstract: string;
  categories: string[];
  similarity: number;
  onViewDetail: () => void;
}

export default function PaperCard({
  title,
  authors,
  year,
  abstract,
  categories,
  similarity,
  onViewDetail,
}: PaperCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900 pr-4 leading-snug">
          {title}
        </h3>
        <div className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
          {similarity.toFixed(2)}
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-1">
        {authors} • {year}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {categories.map((cat, index) => (
          <span
            key={index}
            className="text-xs bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full"
          >
            {cat}
          </span>
        ))}
      </div>

      <p className="text-sm text-gray-600 line-clamp-3 mb-4">{abstract}</p>

      <button
        onClick={onViewDetail}
        className="text-blue-600 hover:text-blue-700 text-sm font-medium"
      >
        View Details →
      </button>
    </div>
  );
}
