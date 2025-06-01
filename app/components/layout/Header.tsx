import { Link, useLocation } from "@remix-run/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { FiSearch, FiGithub } from "react-icons/fi";
import { SidebarTrigger } from "~/components/ui/sidebar";

export function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  // Keyboard shortcut for search (Ctrl+K) can be added with useEffect if needed

  return (
    <header className="sticky top-0 z-50 w-full border-0 border-b border-solid border-slate-800 bg-slate-950 shadow">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/images/brand-svg.svg"
              alt="Seat Picker"
              className="h-7 w-auto"
            />
            <span className="inline text-xl font-bold text-white">
              Seat Picker
            </span>
          </Link>
        </div>

        {/* Nav links */}
        <nav className="hidden items-center space-x-6 md:flex">
          {/* Search bar (desktop) */}
          <button className="relative flex h-8 w-24 items-center justify-center gap-1 rounded-full border border-solid border-slate-800 bg-slate-900 py-2 text-sm text-white placeholder-gray-400 outline-none transition focus:border-sky-400 focus:ring-1 focus:ring-sky-400">
            <FiSearch className="pointer-events-none text-lg text-sky-400" />
            <span className="w-max select-none rounded bg-slate-800 px-2 py-0.5 font-mono text-xs text-sky-400 opacity-95">
              Ctrl K
            </span>
          </button>

          {/* Nav links */}
          <Link
            to="/docs/getting-started"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Docs
          </Link>
          <Link
            to="/blog"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Blog
          </Link>
          <Link
            to="/playground"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Showcase
          </Link>
          <a
            href="https://github.com/chochodev/seat-picker-lib"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-400 transition hover:text-white"
          >
            <FiGithub />
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-slate-800 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {!isMobileMenuOpen ? (
              <Menu className="h-6 w-6" />
            ) : (
              <X className="h-6 w-6" />
            )}
          </button>
          {location.pathname.startsWith('/docs') && (
            <SidebarTrigger />
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
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
              to="/playground"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-slate-800 hover:text-white"
            >
              Showcase
            </Link>
            <a
              href="https://github.com/chochodev/seat-picker-lib"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-slate-800 hover:text-white"
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
              <span className="absolute right-3 top-1/2 -translate-y-1/2 select-none rounded bg-slate-800 px-2 py-0.5 font-mono text-xs text-sky-400 opacity-80">
                Ctrl K
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
