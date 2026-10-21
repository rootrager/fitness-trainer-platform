import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserPlus, CreditCard, MessageSquare } from "lucide-react";

// Mock data
const mockStats = {
  activeStudents: 24,
  newSignupsToday: 3,
  pendingPayments: 5,
  unreadMessages: 8,
};

export function CoachOverviewPage() {
  return (
    <DashboardLayout role="coach">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">نمای کلی</h1>
          <p className="text-muted-foreground">آمار و اطلاعات کلی پلتفرم</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">دانش‌آموزان فعال</CardTitle>
              <Users className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.activeStudents}</div>
              <CardDescription className="text-xs mt-1">
                دانش‌آموزانی که در حال حاضر برنامه دارند
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">ثبت‌نام‌های امروز</CardTitle>
              <UserPlus className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.newSignupsToday}</div>
              <CardDescription className="text-xs mt-1">
                ثبت‌نام جدید در 24 ساعت گذشته
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">پرداخت‌های در انتظار</CardTitle>
              <CreditCard className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.pendingPayments}</div>
              <CardDescription className="text-xs mt-1">
                پرداخت نهایی که در انتظار هستند
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">پیام‌های خوانده نشده</CardTitle>
              <MessageSquare className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.unreadMessages}</div>
              <CardDescription className="text-xs mt-1">
                پیام‌های جدید از دانش‌آموزان
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

