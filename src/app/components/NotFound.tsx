import { Link } from "react-router";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-slate-200 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-slate-600 mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
