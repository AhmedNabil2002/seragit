import { Link, Outlet, useLocation } from "react-router-dom";

import { Code2, Menu, X } from "lucide-react";
import { useState } from "react";


export function RootLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/news", label: "News" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
              <span className="text-lg font-bold text-blue-500 mb-3">SeraGit</span>
              {/* <span className="text-xl font-bold text-[#32c2d4] mb-3"

>SeraGit</span> */}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
          
                  
                    onClick={() => window.scrollTo(0, 0)}
                  
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
             <Link
  to="/services#contact"
  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
>
  Contact Us
</Link>

            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-600" />
              ) : (
                <Menu className="w-6 h-6 text-slate-600" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? "text-blue-600"
                        : "text-slate-600 hover:text-blue-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">

                <span className="text-lg font-bold text-blue-500 mb-3">SeraGit</span>
              </div>
              <p className="text-slate-400 text-sm">
                Building innovative software solutions for tomorrow's
                challenges.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link
                    to="/about"
                    onClick={() => window.scrollTo(0, 0)}
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    onClick={() => window.scrollTo(0, 0)}
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    onClick={() => window.scrollTo(0, 0)}
                    className="hover:text-white transition-colors"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link
                    to="/news"
                    onClick={() => window.scrollTo(0, 0)}
                    className="hover:text-white transition-colors"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>info@seragit.com</li>
                <li>057 2288844-01555720405</li>
                <li>Damietta - Nafie St next to Al Mazloum Mosque</li>
                <li>Cairo - nasr city-3-ismail elkabany</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-slate-400">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-center md:text-left">
                &copy; 2025 SeraGit. All rights reserved.
              </p>
              <div className="flex items-center gap-4 justify-center md:justify-end">
                <a
                  href="https://www.facebook.com/profile.php?id=61574656877733"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07C1.86 17.09 5.98 21.15 10.8 21.95v-6.96H8.21v-2.9h2.6V9.8c0-2.57 1.52-3.99 3.86-3.99 1.12 0 2.3.2 2.3.2v2.53h-1.29c-1.27 0-1.66.79-1.66 1.6v1.9h2.83l-.45 2.9h-2.38v6.96c4.82-.8 8.94-4.86 8.94-9.88z" />
                  </svg>
                </a>
                <a
            href="https://www.linkedin.com/company/i-s-i-s/posts/?feedView=all&viewAsMember=true"
                  
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="linkidin"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5A4.5 4.5 0 1016.5 13 4.5 4.5 0 0012 8.5zm6.6-3.1a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1zM12 15.5A3.5 3.5 0 1115.5 12 3.5 3.5 0 0112 15.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
