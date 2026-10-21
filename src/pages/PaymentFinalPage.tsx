import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, CreditCard } from "lucide-react";
import { ROUTES } from "@/constants/routes";

export function PaymentFinalPage() {
  const navigate = useNavigate();
  const [finalAmount] = useState(500000); // Mock final payment amount

  const handleProceed = () => {
    // In real app, this would redirect to Zarinpal payment gateway
    setTimeout(() => {
      navigate(ROUTES.PAYMENT_SUCCESS);
    }, 2000);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md border-0 shadow-xl">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl">پرداخت نهایی</CardTitle>
          <CardDescription className="text-base">
            برنامه شما آماده است. لطفا پرداخت نهایی را انجام دهید
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">مبلغ پرداخت نهایی:</span>
              <span className="text-2xl font-bold">{formatPrice(finalAmount)} تومان</span>
            </div>
            <Separator />
            <p className="text-sm text-muted-foreground text-center">
              پس از پرداخت، برنامه کامل شما فعال خواهد شد
            </p>
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
            پرداخت نهایی
            <ArrowRight className="size-4 mr-2" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

