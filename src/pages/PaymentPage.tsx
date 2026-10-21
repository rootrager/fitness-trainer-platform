import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, CreditCard } from "lucide-react";
import { ROUTES } from "@/constants/routes";

const packages: Record<string, { name: string; price: number }> = {
  "1": { name: "پکیج 3 ماهه + تغذیه", price: 1500000 },
  "2": { name: "پکیج 2 ماهه", price: 800000 },
  "3": { name: "پکیج VIP", price: 3000000 },
};

export function PaymentPage() {
  const navigate = useNavigate();
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);
  const [packageData, setPackageData] = useState<{ name: string; price: number } | null>(null);

  useEffect(() => {
    const pkgId = sessionStorage.getItem("selectedPackage");
    if (!pkgId || !packages[pkgId]) {
      navigate(ROUTES.PACKAGES);
      return;
    }
    setSelectedPackageId(pkgId);
    setPackageData(packages[pkgId]);
  }, [navigate]);

  const handleProceed = () => {
    // In real app, this would redirect to Zarinpal payment gateway
    // For now, simulate payment success
    setTimeout(() => {
      navigate(ROUTES.PAYMENT_SUCCESS);
    }, 2000);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price);
  };

  if (!packageData) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md border-0 shadow-xl">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl">پرداخت</CardTitle>
          <CardDescription className="text-base">
            بررسی و تایید سفارش
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">پکیج انتخابی:</span>
              <span className="font-semibold">{packageData.name}</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">مبلغ:</span>
              <span className="text-2xl font-bold">{formatPrice(packageData.price)} تومان</span>
            </div>
          </div>
          <div className="bg-muted/50 rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CreditCard className="size-4" />
              <span>پرداخت از طریق زرین‌پال</span>
            </div>
            <p className="text-xs text-muted-foreground">
              پس از کلیک روی دکمه پرداخت، به صفحه امن زرین‌پال هدایت می‌شوید
            </p>
          </div>
          <Button
            className="w-full"
            size="lg"
            onClick={handleProceed}
          >
            پرداخت و ادامه
            <ArrowRight className="size-4 mr-2" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

