import type { MetaFunction } from "@remix-run/node";
import { FiArrowRight, FiSearch } from "react-icons/fi";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => [
  { title: "Seat Picker – Flexible React Seating UI" },
  {
    name: "description",
    content:
      "A flexible and customizable seating arrangement GUI component for React applications.",
  },
];

export default function Index() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center pb-24 pt-16 text-center">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="text-balance text-4xl font-[600] tracking-tighter text-white sm:text-5xl md:text-7xl">
          Rapidly build{" "}
          <span className="bg-gradient-to-tr from-sky-400 to-indigo-500 bg-clip-text text-transparent">
            modern seat layouts
          </span>
          <br /> for your React apps.
        </h1>
        <p className="mt-8 max-w-4xl text-lg font-medium text-gray-300 md:text-2xl">
          <span className="font-semibold text-sky-400">Seat Picker</span> is a
          flexible, interactive seating arrangement component for event venues,
          theaters, restaurants, and more.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            to="/docs/getting-started"
            className="ease-250 inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-slate-700 to-gray-700 px-6 py-3 text-lg font-semibold text-white shadow-lg transition hover:from-slate-600 hover:to-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            Get started <FiArrowRight className="ml-1" />
          </Link>
          <button
            className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-6 py-3 text-lg font-semibold text-white shadow transition hover:border-sky-400 hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
            type="button"
            // onClick={...} // For search modal
          >
            <FiSearch className="text-sky-400" /> Quick search{" "}
            <span className="ml-2 rounded bg-slate-800 px-2 py-0.5 font-mono text-xs text-sky-400 opacity-80">
              Ctrl K
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
