import { Dumbbell } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-slate-800 p-3 rounded-lg border-2 border-slate-700">
              <Dumbbell className="w-8 h-8 text-white" />
            </div>
          </Link>
          <nav className="flex items-center gap-8">
            <Link 
              to="/" 
              className={`transition-colors uppercase tracking-wider ${
                isActive("/") ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/online-coaching" 
              className={`transition-colors uppercase tracking-wider ${
                isActive("/online-coaching") ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Online Coaching
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors uppercase tracking-wider ${
                isActive("/about") ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors uppercase tracking-wider ${
                isActive("/contact") ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
