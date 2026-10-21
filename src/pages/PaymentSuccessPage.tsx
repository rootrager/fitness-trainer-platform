import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { ROUTES } from "@/constants/routes";

export function PaymentSuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md border-0 shadow-xl">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 rounded-full bg-success/10 flex items-center justify-center">
            <CheckCircle2 className="size-10 text-success" />
          </div>
          <CardTitle className="text-3xl">پرداخت موفق!</CardTitle>
          <CardDescription className="text-base">
            پرداخت شما با موفقیت انجام شد. اکنون می‌توانید به داشبورد خود دسترسی داشته باشید.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            className="w-full"
            size="lg"
            onClick={() => navigate(ROUTES.STUDENT_OVERVIEW)}
          >
            رفتن به داشبورد
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

