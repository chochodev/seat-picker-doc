import { Link } from '@remix-run/react';
import { useState, useRef } from 'react';
import { FiSearch, FiGithub } from 'react-icons/fi';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut for search (Ctrl+K) can be added with useEffect if needed

  return (
    <header className="sticky top-0 z-50 w-full border-0 border-solid border-b border-slate-800 bg-slate-950 shadow">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/images/brand-svg.svg"
              alt="Seat Picker"
              className="h-7 w-auto"
            />
            <span className="hidden text-xl font-bold text-white md:inline">
              Seat Picker
            </span>
          </Link>
        </div>

        {/* Search bar (desktop) */}
        <div className="hidden flex-1 items-center justify-center md:flex">
          <div className="relative w-80">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-lg text-sky-400">
              <FiSearch />
            </span>
            <input
              ref={searchInputRef}
              type="text"
              className="w-full rounded-lg border border-slate-800 bg-slate-900 py-2 pl-10 pr-24 text-sm text-white placeholder-gray-400 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400"
              placeholder="Quick search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 select-none rounded bg-slate-800 px-2 py-0.5 text-xs font-mono text-sky-400 opacity-80">
              Ctrl K
            </span>
          </div>
        </div>

        {/* Nav links */}
        <nav className="hidden items-center space-x-6 md:flex">
          <Link
            to="/docs"
            className="text-sm font-medium text-gray-300 hover:text-white transition"
          >
            Docs
          </Link>
          <Link
            to="/blog"
            className="text-sm font-medium text-gray-300 hover:text-white transition"
          >
            Blog
          </Link>
          <Link
            to="/showcase"
            className="text-sm font-medium text-gray-300 hover:text-white transition"
          >
            Showcase
          </Link>
          <a
            href="https://github.com/chochodev/seat-picker-lib"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-400 hover:text-white transition"
          >
            <FiGithub />
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-slate-800 hover:text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            {!isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              to="/docs"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-slate-800 hover:text-white"
            >
              Docs
            </Link>
            <Link
              to="/blog"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-slate-800 hover:text-white"
            >
              Blog
            </Link>
            <Link
              to="/showcase"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-slate-800 hover:text-white"
            >
              Showcase
            </Link>
            <a
              href="https://github.com/chochodev/seat-picker-lib"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-slate-800 hover:text-white flex items-center gap-2"
            >
              <FiGithub /> GitHub
            </a>
          </div>
          <div className="px-4 pb-4">
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-lg text-sky-400">
                <FiSearch />
              </span>
              <input
                type="text"
                className="w-full rounded-lg border border-slate-800 bg-slate-900 py-2 pl-10 pr-24 text-sm text-white placeholder-gray-400 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400"
                placeholder="Quick search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 select-none rounded bg-slate-800 px-2 py-0.5 text-xs font-mono text-sky-400 opacity-80">
                Ctrl K
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
