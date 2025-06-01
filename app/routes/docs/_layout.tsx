import { SidebarProvider } from "~/components/ui/sidebar";
import { Outlet } from "@remix-run/react";
import AppSidebar from "~/components/layout/Sidebar";
import { Header } from "~/components/layout/Header";
import { Footer } from "~/components/layout/Footer";

const DocLayout = () => {
  return (
    <div className="flex h-screen bg-slate-950">
      <SidebarProvider>
        <AppSidebar />
        <div className="flex-1">
          <Header />
          <main className="px-4 xsm:px-6 md:px-8 bg-slate-950">
            <Outlet />
          </main>
          <Footer />
        </div>
      </SidebarProvider>
    </div>
  );
};

export default DocLayout;
