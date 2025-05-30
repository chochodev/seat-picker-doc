import { Link } from '@remix-run/react';

export function Footer() {
  return (
    <footer className="relative border-0 border-solid border-t border-slate-800 bg-slate-950">
      <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 bg-gradient-to-b h-1 w-12 rounded mx-auto from-indigo-700 to-sky-700" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Documentation
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  to="/docs/getting-started"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Getting Started
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/installation"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Installation
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/api"
                  className="text-base text-gray-300 hover:text-white"
                >
                  API Reference
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  to="/examples"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Examples
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/chochodev/seat-picker-lib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-300 hover:text-white"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/chochodev/seat-picker-lib/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Issues
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  to="/privacy"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400">
            © {new Date().getFullYear()} Seat Picker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
