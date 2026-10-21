import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/ui/status-badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { CreditCard, FileText, Package, CheckCircle2 } from "lucide-react";

// Mock data
const mockData = {
  initialPayment: { status: "paid" as const, amount: 1500000 },
  finalPayment: { status: "pending" as const, amount: 500000 },
  package: { name: "پکیج 3 ماهه + تغذیه", duration: 3 },
  program: { status: "preparing" as const },
};

export function StudentOverviewPage() {
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price);
  };

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">نمای کلی</h1>
          <p className="text-muted-foreground">وضعیت فعلی برنامه و پرداخت‌های شما</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Initial Payment Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="size-5" />
                  پرداخت اولیه
                </CardTitle>
                <StatusBadge status={mockData.initialPayment.status} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">مبلغ:</span>
                  <span className="text-xl font-bold">
                    {formatPrice(mockData.initialPayment.amount)} تومان
                  </span>
                </div>
                {mockData.initialPayment.status === "paid" && (
                  <div className="flex items-center gap-2 text-success text-sm mt-4">
                    <CheckCircle2 className="size-4" />
                    <span>پرداخت شده</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Final Payment Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="size-5" />
                  پرداخت نهایی
                </CardTitle>
                <StatusBadge status={mockData.finalPayment.status} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">مبلغ:</span>
                  <span className="text-xl font-bold">
                    {formatPrice(mockData.finalPayment.amount)} تومان
                  </span>
                </div>
                {mockData.finalPayment.status === "pending" && (
                  <Button
                    className="w-full"
                    onClick={() => navigate(ROUTES.PAYMENT_FINAL)}
                  >
                    پرداخت نهایی
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Package Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="size-5" />
                پکیج انتخابی
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <span className="text-muted-foreground">نام پکیج:</span>
                  <p className="font-semibold mt-1">{mockData.package.name}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">مدت زمان:</span>
                  <p className="font-semibold mt-1">{mockData.package.duration} ماه</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Program Status Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="size-5" />
                  وضعیت برنامه
                </CardTitle>
                <StatusBadge status={mockData.program.status} />
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {mockData.program.status === "preparing"
                  ? "برنامه شما در حال آماده‌سازی است. به زودی در دسترس قرار خواهد گرفت."
                  : "برنامه شما آماده است و می‌توانید آن را مشاهده کنید."}
              </CardDescription>
              {mockData.program.status === "ready" && (
                <Button
                  className="w-full mt-4"
                  onClick={() => navigate(ROUTES.STUDENT_PROGRAMS)}
                >
                  مشاهده برنامه
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

