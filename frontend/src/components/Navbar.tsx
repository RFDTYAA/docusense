import { Link, useLocation } from "react-router-dom";
import { Brain } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Search", path: "/search" },
    { label: "Analytics", path: "/analytics" },
    { label: "About", path: "/about" },
  ];

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-semibold tracking-tight">
              DocuSense
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all ${
                location.pathname === link.path
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/search"
          className="bg-gray-900 hover:bg-black text-white px-5 py-2 rounded-full text-sm font-medium transition-colors"
        >
          Find Papers
        </Link>
      </div>
    </nav>
  );
}
