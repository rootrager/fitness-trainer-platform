import * as React from "react";
import { DashboardSidebar } from "./DashboardSidebar";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: 'student' | 'coach';
}

export function DashboardLayout({ children, role }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Sidebar */}
      <div className="lg:hidden fixed top-0 right-0 left-0 z-50 border-b bg-background p-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 p-0">
            <div className="p-6">
              <h2 className="text-xl font-bold text-primary mb-8">Fitness Coach</h2>
              <DashboardSidebar role={role} className="relative h-auto w-full lg:hidden" />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <DashboardSidebar role={role} />

      {/* Main Content */}
      <main className="lg:mr-64 min-h-screen p-4 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

