import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">DS</span>
              </div>
              <span className="text-white text-xl font-semibold">
                DocuSense
              </span>
            </div>
            <p className="text-sm pr-8">
              Semantic search for academic research. Powered by AI to help you
              find the right papers faster.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-medium mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/search" className="hover:text-white">
                  Search Papers
                </Link>
              </li>
              <li>
                <Link to="/analytics" className="hover:text-white">
                  Analytics
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  How it Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / Credits */}
          <div>
            <h4 className="text-white font-medium mb-4">Built by</h4>
            <p className="text-sm">
              Team PJK-GM070
              <br />
              Pijak x IBM SkillsBuild Capstone 2026
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-xs text-center">
          © {new Date().getFullYear()} DocuSense. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
