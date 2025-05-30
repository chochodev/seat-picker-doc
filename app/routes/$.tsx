import { Link, useNavigate } from '@remix-run/react';
import {
  ArrowLeft,
  Home,
  FileText,
  Search,
  ChevronRight,
  Armchair,
  MapPin,
  Grid3X3,
} from 'lucide-react';
import { Header } from '~/components/layout/Header';
import { Footer } from '~/components/layout/Footer';

export default function NotFound() {
  const navigate = useNavigate();

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const popularPages = [
    {
      title: 'Getting Started',
      description: 'Learn how to install and set up seat-picker',
      href: '/docs/getting-started',
      icon: FileText,
    },
    {
      title: 'Basic Usage',
      description: 'Create your first seat selection component',
      href: '/docs/basic-usage',
      icon: Armchair,
    },
    {
      title: 'Configuration',
      description: 'Customize layouts, themes, and behavior',
      href: '/docs/configuration',
      icon: Grid3X3,
    },
    {
      title: 'API Reference',
      description: 'Complete reference for all props and methods',
      href: '/docs/api-reference',
      icon: MapPin,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

      <div className="relative flex min-h-screen flex-col">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <div className="flex flex-1 items-center justify-center px-6 py-12">
          <div className="mx-auto max-w-2xl text-center">
            {/* 404 Illustration */}
            <div className="mb-8 flex justify-center">
              {/* Large 404 Text */}
              <div className="text-8xl font-bold text-slate-200 dark:text-slate-700 select-none">
                404
              </div>
            </div>

            {/* Heading and Description */}
            <div className="mb-8">
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
                Oops! This seat is not available
              </h1>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                It looks like the documentation page you&apos;re looking for has
                been moved, renamed, or doesn&apos;t exist. Don&apos;t
                worry—let&apos;s help you find the right seat in our docs!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={goBack}
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 dark:bg-white px-6 py-3 text-sm font-medium text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
              >
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </button>

              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-lg border border-solid border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-6 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
              >
                <Home className="h-4 w-4" />
                Homepage
              </Link>
            </div>

            {/* Popular Pages */}
            <div className="text-left">
              <h2 className="mb-6 text-xl font-semibold text-slate-900 dark:text-slate-100 text-center">
                Popular Documentation Pages
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {popularPages.map((page) => (
                  <Link
                    key={page.href}
                    to={page.href}
                    className="group rounded-lg border border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 p-4 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md ease-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 rounded-md bg-slate-100 dark:bg-slate-700 p-2 group-hover:bg-slate-200 dark:group-hover:bg-slate-600 transition-colors">
                        <page.icon className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {page.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                          {page.description}
                        </p>
                      </div>
                      <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors flex-shrink-0 mt-0.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Search Suggestion */}
            <div className="mt-8 p-4 rounded-lg border-solid border-slate-200 dark:border-slate-800 bg-blue-50 dark:bg-blue-950/30 border">
              <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                <Search className="h-4 w-4" />
                <span className="text-sm font-medium">
                  Still can&apos;t find what you&apos;re looking for?
                </span>
              </div>
              <p className="mt-1 text-start text-sm text-blue-600 dark:text-blue-400">
                Try using the search function in our documentation or{' '}
                <a
                  href="https://github.com/chochodev/seat-picker/issues"
                  className="underline hover:no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  open an issue on GitHub
                </a>{' '}
                if you think this page should exist.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
