import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Brain } from "lucide-react";

interface Stats {
  total_papers: string;
  categories: number;
  avg_latency_ms: string;
  model: string;
}

export default function Footer() {
  const [stats, setStats] = useState<Stats>({
    total_papers: "343k+",
    categories: 7,
    avg_latency_ms: "~15ms",
    model: "BGE-v1.5",
  });

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/stats")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(() => {});
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* === STATS SECTION === */}
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-12 border-b border-gray-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 text-center">
          <div className="md:border-r border-gray-700">
            <div className="text-4xl font-semibold text-blue-500">
              {stats.total_papers}
            </div>
            <div className="mt-1.5 text-sm tracking-[1.5px] text-gray-400">
              RESEARCH PAPERS
            </div>
          </div>

          <div className="md:border-r border-gray-700">
            <div className="text-4xl font-semibold text-blue-500">
              {stats.categories}+
            </div>
            <div className="mt-1.5 text-sm tracking-[1.5px] text-gray-400">
              AI CATEGORIES
            </div>
          </div>

          <div className="md:border-r border-gray-700">
            <div className="text-4xl font-semibold text-blue-500">
              {stats.avg_latency_ms}
            </div>
            <div className="mt-1.5 text-sm tracking-[1.5px] text-gray-400">
              SEMANTIC SEARCH
            </div>
          </div>

          <div>
            <div className="text-4xl font-semibold text-purple-500">
              {stats.model}
            </div>
            <div className="mt-1.5 text-sm tracking-[1.5px] text-gray-400">
              RETRIEVAL BASE
            </div>
          </div>
        </div>
      </div>

      {/* === MAIN FOOTER === */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10">
          {/* Brand (kiri) */}
          <div className="md:col-span-5 lg:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-semibold tracking-tight text-white">
                DocuSense
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-gray-400">
              Discover AI research using semantic understanding, vector search,
              and state-of-the-art reranking. Your gateway to the future of AI
              literature.
            </p>
          </div>

          {/* Spacer (kosong di tengah) */}
          <div className="hidden md:block md:col-span-1 lg:col-span-2"></div>

          {/* PLATFORM - Lurus dengan SEMANTIC SEARCH */}
          <div className="md:col-span-3 lg:col-span-2">
            <div className="font-semibold text-white mb-4 text-sm tracking-wider">
              PLATFORM
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/search"
                  className="hover:text-white transition-colors"
                >
                  Search Papers
                </Link>
              </li>
              <li>
                <Link
                  to="/analytics"
                  className="hover:text-white transition-colors"
                >
                  Analytics
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  How it Works
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL - Lurus dengan RETRIEVAL BASE */}
          <div className="md:col-span-3 lg:col-span-3">
            <div className="font-semibold text-white mb-4 text-sm tracking-wider">
              LEGAL
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-14 pt-6 flex flex-col md:flex-row justify-between text-xs text-gray-500">
          <div>© 2026 DocuSense. All rights reserved.</div>
          <div className="mt-2 md:mt-0">Powered by Semantic Search</div>
        </div>
      </div>
    </footer>
  );
}
