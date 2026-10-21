import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { OTPInput } from "@/components/ui/otp-input";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function OTPPage() {
  const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(120); // 2 minutes
  const [isResending, setIsResending] = useState(false);
  const navigate = useNavigate();
  const phone = sessionStorage.getItem("phone") || "";

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
      // Verify OTP logic here
      // For now, check if user exists (mock)
      const isNewUser = Math.random() > 0.5; // Mock check
      if (isNewUser) {
        navigate("/register");
      } else {
        navigate("/student/overview");
      }
    }
  };

  const handleResend = () => {
    setIsResending(true);
    setCountdown(120);
    // Resend OTP logic here
    setTimeout(() => setIsResending(false), 1000);
  };

  if (!phone) {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md border-0 shadow-xl">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl">تایید شماره موبایل</CardTitle>
          <CardDescription className="text-base">
            کد ارسال شده به {phone} را وارد کنید
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <OTPInput length={6} value={otp} onChange={setOtp} />
              <div className="flex items-center justify-between text-sm">
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={countdown > 0 || isResending}
                  className="text-primary hover:underline disabled:text-muted-foreground disabled:cursor-not-allowed"
                >
                  {isResending ? "در حال ارسال..." : "ارسال مجدد کد"}
                </button>
                {countdown > 0 && (
                  <span className="text-muted-foreground">
                    {Math.floor(countdown / 60)}:{(countdown % 60).toString().padStart(2, "0")}
                  </span>
                )}
              </div>
            </div>
            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={otp.length !== 6}
            >
              تایید
              <ArrowRight className="size-4 mr-2" />
            </Button>
          </form>
          <div className="mt-6">
            <Button
              variant="ghost"
              className="w-full"
              onClick={() => navigate("/login")}
            >
              <ArrowLeft className="size-4 ml-2" />
              بازگشت
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

