import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function NotFound() {
  useDocumentTitle('404 — Page Not Found');

  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-surface-100 to-surface-50 px-4">
      <div className="text-center">
        <p className="text-8xl font-display font-bold gradient-text">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-ink">Page Not Found</h1>
        <p className="mt-2 text-ink-soft">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="btn-glow mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-3 font-semibold text-white transition-all duration-300 hover:brightness-105"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
