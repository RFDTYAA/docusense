import { X } from "lucide-react";

interface Paper {
  id: number;
  title: string;
  authors: string;
  year: number;
  abstract: string;
  categories: string[];
  similarity: number;
}

interface PaperDetailModalProps {
  paper: Paper | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PaperDetailModal({
  paper,
  isOpen,
  onClose,
}: PaperDetailModalProps) {
  if (!isOpen || !paper) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center px-8 pt-6 pb-4 border-b">
          <div className="flex gap-2 flex-wrap">
            {paper.categories.map((cat, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 px-3 py-1 rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 p-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <h1 className="text-3xl font-semibold mb-4 leading-tight">
              {paper.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6 flex-wrap">
              <span>Published {paper.year}</span>
              <span>•</span>
              <span>120,543 Citations</span>
              <span className="bg-blue-100 text-blue-700 px-3 py-0.5 rounded-full text-xs font-medium">
                Score: {paper.similarity}
              </span>
            </div>

            <div className="mb-6">
              <div className="text-sm font-medium text-gray-500 mb-1">
                AUTHORS
              </div>
              <p className="text-gray-700">{paper.authors}</p>
            </div>

            <div>
              <div className="font-medium mb-2">Abstract</div>
              <p className="text-gray-600 leading-relaxed">{paper.abstract}</p>
              <p className="text-xs text-gray-400 mt-2 italic">
                * Note: This is a truncated abstract for demonstration purposes.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="space-y-3">
              <a
                href="#"
                target="_blank"
                className="flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-2xl font-medium hover:bg-black transition-colors"
              >
                View on arXiv
              </a>
              <button className="w-full border border-gray-300 py-3 rounded-2xl font-medium hover:bg-gray-50">
                Download PDF
              </button>
            </div>

            {/* Technology Box */}
            <div className="bg-gray-900 text-white rounded-2xl p-5">
              <div className="font-semibold mb-4">Technology Insights</div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Semantic Match</span>
                  <span>{(paper.similarity * 10).toFixed(0)}%</span>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded-full">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${paper.similarity * 10}%` }}
                  />
                </div>
              </div>

              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Retrieval Source</span>
                  <span>FAISS Vector Search</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Reranking Model</span>
                  <span>Cross Encoder</span>
                </div>
              </div>
            </div>

            {/* Related Papers */}
            <div className="border border-gray-200 rounded-2xl p-5">
              <div className="font-semibold mb-3">Related Papers</div>
              <div className="space-y-3 text-sm">
                <div className="hover:text-blue-600 cursor-pointer">
                  BERT: Pre-training of Deep Bidirectional Transformers...
                </div>
                <div className="hover:text-blue-600 cursor-pointer">
                  Language Models are Few-Shot Learners
                </div>
                <div className="hover:text-blue-600 cursor-pointer">
                  An Image is Worth 16x16 Words
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
