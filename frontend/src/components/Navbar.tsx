import { Link, useLocation } from "react-router-dom";
import { Brain, Search } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Search", path: "/search" },
    { label: "Analytics", path: "/analytics" },
    { label: "About", path: "/about" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-semibold tracking-tight text-gray-900">
            DocuSense
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <Link
          to="/search"
          className="flex items-center gap-2 bg-gray-900 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors"
        >
          <Search className="w-4 h-4" />
          Find Papers
        </Link>
      </div>
    </nav>
  );
}
