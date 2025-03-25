
import { ReactNode } from "react";
import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <TopBar />
          <SidebarInset className="p-6 overflow-auto">
            <div className="max-w-7xl mx-auto w-full">
              {children}
            </div>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
