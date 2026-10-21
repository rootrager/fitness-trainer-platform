import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PhoneInput } from "@/components/ui/phone-input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function LoginPage() {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 10) {
      // Store phone in session/localStorage for OTP page
      sessionStorage.setItem("phone", phone);
      navigate("/otp");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md border-0 shadow-xl">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl">ورود</CardTitle>
          <CardDescription className="text-base">
            شماره موبایل خود را وارد کنید
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="phone">شماره موبایل</Label>
              <PhoneInput
                id="phone"
                value={phone}
                onChange={setPhone}
                required
                autoFocus
              />
            </div>
            <Button type="submit" className="w-full" size="lg" disabled={phone.length < 10}>
              ارسال کد تایید
              <ArrowRight className="size-4 mr-2" />
            </Button>
          </form>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            حساب کاربری ندارید؟{" "}
            <Link to="/register" className="text-primary hover:underline font-medium">
              ثبت‌نام کنید
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

