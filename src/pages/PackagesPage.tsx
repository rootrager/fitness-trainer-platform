import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { ROUTES } from "@/constants/routes";

const packages = [
  {
    id: "1",
    name: "پکیج 3 ماهه + تغذیه",
    description: "برنامه تمرینی و تغذیه‌ای کامل برای 3 ماه",
    price: 1500000,
    duration: 3,
    includesNutrition: true,
    features: [
      "برنامه تمرینی هفتگی",
      "برنامه تغذیه‌ای کامل",
      "پشتیبانی 24/7",
      "بررسی هفتگی پیشرفت",
      "تغییر برنامه در صورت نیاز",
    ],
    popular: true,
  },
  {
    id: "2",
    name: "پکیج 2 ماهه",
    description: "برنامه تمرینی برای 2 ماه (بدون تغذیه)",
    price: 800000,
    duration: 2,
    includesNutrition: false,
    features: [
      "برنامه تمرینی هفتگی",
      "پشتیبانی 24/7",
      "بررسی هفتگی پیشرفت",
    ],
    popular: false,
  },
  {
    id: "3",
    name: "پکیج VIP",
    description: "برنامه کامل با پشتیبانی ویژه",
    price: 3000000,
    duration: 6,
    includesNutrition: true,
    features: [
      "برنامه تمرینی و تغذیه‌ای کامل",
      "پشتیبانی ویژه و اولویت‌دار",
      "بررسی روزانه پیشرفت",
      "تغییر برنامه در صورت نیاز",
      "مشاوره تلفنی هفتگی",
      "دسترسی به محتوای آموزشی اختصاصی",
    ],
    popular: false,
  },
];

export function PackagesPage() {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const handleSelect = (packageId: string) => {
    setSelectedPackage(packageId);
    sessionStorage.setItem("selectedPackage", packageId);
    navigate(ROUTES.PAYMENT);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price);
  };

  return (
    <div className="min-h-screen bg-muted/30 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">انتخاب پکیج</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            پکیج مناسب خود را انتخاب کنید و شروع کنید
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`relative border-2 transition-all ${
                pkg.popular
                  ? "border-primary shadow-xl scale-105"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 right-1/2 translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    محبوب‌ترین
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {pkg.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <span className="text-4xl font-bold">{formatPrice(pkg.price)}</span>
                  <span className="text-muted-foreground mr-2">تومان</span>
                </div>
                <ul className="space-y-2">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="size-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  size="lg"
                  onClick={() => handleSelect(pkg.id)}
                  variant={pkg.popular ? "default" : "outline"}
                >
                  انتخاب این پکیج
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

