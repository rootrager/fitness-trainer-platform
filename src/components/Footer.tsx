import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-slate-800 p-3 rounded-lg border-2 border-slate-700">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <span className="text-white text-xl uppercase tracking-wider">Mark Torres Academy</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              High performance fitness and personal development center. 
              Custom-tailored programs for every athlete.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white uppercase tracking-wider">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                About
              </Link>
              <Link to="/online-coaching" className="text-gray-400 hover:text-white transition-colors text-sm">
                Online Coaching
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white uppercase tracking-wider">Contact</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Address Information</p>
              <p>Mexico</p>
              <p className="mt-4">Telephone: 000 000 00</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Mark Torres Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

