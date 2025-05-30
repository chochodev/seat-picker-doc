import { Outlet } from '@remix-run/react';
import { Header } from '~/components/layout/Header';
import { Footer } from '~/components/layout/Footer';

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
