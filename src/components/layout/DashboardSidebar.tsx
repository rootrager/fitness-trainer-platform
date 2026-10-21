import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../ui/utils";
import {
  LayoutDashboard,
  FileText,
  CreditCard,
  MessageSquare,
  Settings,
  Users,
  User,
  LogOut,
} from "lucide-react";
import { Button } from "../ui/button";

interface SidebarItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}

interface DashboardSidebarProps {
  role: 'student' | 'coach';
  className?: string;
}

const studentItems: SidebarItem[] = [
  { label: 'نمای کلی', icon: <LayoutDashboard className="size-5" />, path: '/student/overview' },
  { label: 'برنامه‌های تمرینی', icon: <FileText className="size-5" />, path: '/student/programs' },
  { label: 'پرداخت‌ها', icon: <CreditCard className="size-5" />, path: '/student/payments' },
  { label: 'پشتیبانی', icon: <MessageSquare className="size-5" />, path: '/student/chat' },
  { label: 'تنظیمات', icon: <Settings className="size-5" />, path: '/student/settings' },
];

const coachItems: SidebarItem[] = [
  { label: 'نمای کلی', icon: <LayoutDashboard className="size-5" />, path: '/coach/overview' },
  { label: 'دانش‌آموزان', icon: <Users className="size-5" />, path: '/coach/students' },
  { label: 'پیام‌ها', icon: <MessageSquare className="size-5" />, path: '/coach/messages' },
  { label: 'تنظیمات', icon: <Settings className="size-5" />, path: '/coach/settings' },
];

export function DashboardSidebar({ role, className }: DashboardSidebarProps) {
  const location = useLocation();
  const items = role === 'student' ? studentItems : coachItems;

  return (
    <aside
      className={cn(
        "fixed right-0 top-0 h-screen w-64 border-l bg-background p-6 flex flex-col",
        "hidden lg:flex",
        className
      )}
    >
      <div className="mb-8">
        <h2 className="text-xl font-bold text-primary">Fitness Coach</h2>
        <p className="text-sm text-muted-foreground mt-1">
          {role === 'student' ? 'پنل دانش‌آموز' : 'پنل مربی'}
        </p>
      </div>

      <nav className="flex-1 space-y-1">
        {items.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 border-t">
        <Button variant="ghost" className="w-full justify-start gap-3" asChild>
          <Link to="/">
            <LogOut className="size-5" />
            خروج
          </Link>
        </Button>
      </div>
    </aside>
  );
}

