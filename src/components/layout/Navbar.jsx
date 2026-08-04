import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';

const navLinks = [
  { to: '/features', label: 'Features' },
  { to: '/#how-it-works', label: 'How It Works' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/#demo', label: 'Try AI Demo' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-300 ${
      isActive ? 'text-primary' : 'text-ink-soft hover:text-primary'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-surface-200 bg-white/70 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Logo />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) =>
            link.to.includes('#') ? (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-ink-soft transition-colors duration-300 hover:text-primary"
              >
                {link.label}
              </Link>
            ) : (
              <NavLink key={link.to} to={link.to} className={linkClasses}>
                {link.label}
              </NavLink>
            )
          )}
          <NavLink
            to="/login"
            className="btn-glow rounded-lg bg-gradient-to-r from-primary to-accent px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:brightness-105"
          >
            Login
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-ink-soft hover:text-primary p-2"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 w-64 bg-white border-l border-surface-200 shadow-xl flex flex-col p-6">
            <button
              className="self-end text-ink-soft hover:text-primary p-2 mb-6"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.to.includes('#') ? (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm font-medium text-ink-soft transition-colors duration-300 hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={linkClasses}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                )
              )}
              <NavLink
                to="/login"
                className="mt-4 rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-2 text-center font-semibold text-white transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
