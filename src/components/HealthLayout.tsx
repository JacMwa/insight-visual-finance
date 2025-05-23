
import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { HealthSidebar } from "@/components/HealthSidebar";

interface HealthLayoutProps {
  children: React.ReactNode;
}

export function HealthLayout({ children }: HealthLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <HealthSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-16 bg-white border-b border-gray-200 flex items-center px-4 md:px-6 shadow-sm">
            <SidebarTrigger className="mr-4" />
            <h1 className="text-xl md:text-2xl font-bold text-green-600">HealthTracker</h1>
            <div className="ml-auto flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
