import { SidebarProvider } from '~/components/ui/sidebar';
import { Outlet } from '@remix-run/react';
import AppSidebar from '~/components/layout/Sidebar';
import { Header } from '~/components/layout/Header';
import { Footer } from '~/components/layout/Footer';

const DocLayout = () => {
  return (
    <div className="flex h-screen">
      <SidebarProvider>
        <AppSidebar />
        <div className="flex-1">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </SidebarProvider>
    </div>
  );
};

export default DocLayout;
