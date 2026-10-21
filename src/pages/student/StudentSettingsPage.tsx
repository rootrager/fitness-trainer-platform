import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function StudentSettingsPage() {
  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">تنظیمات</h1>
          <p className="text-muted-foreground">مدیریت تنظیمات حساب کاربری</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>اطلاعات شخصی</CardTitle>
            <CardDescription>ویرایش اطلاعات شخصی خود</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">نام و نام خانوادگی</Label>
                <Input id="name" defaultValue="علی احمدی" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">شماره موبایل</Label>
                <Input id="phone" defaultValue="09123456789" disabled />
              </div>
            </div>
            <Button>ذخیره تغییرات</Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

