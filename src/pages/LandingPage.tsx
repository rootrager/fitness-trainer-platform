import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle2,
  Users,
  Target,
  MessageSquare,
  ArrowRight,
  Star,
} from "lucide-react";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Fitness Coach</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link to="/login">ورود</Link>
            </Button>
            <Button asChild>
              <Link to="/register">شروع کنید</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            بهترین بدن خود را با
            <span className="text-primary"> مربیگری شخصی</span> بسازید
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            برنامه‌های تمرینی و تغذیه‌ای اختصاصی که متناسب با اهداف و سبک زندگی شما طراحی شده‌اند
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/register">شروع کنید</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <Link to="/about">بیشتر بدانید</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">چرا ما را انتخاب کنید؟</h2>
            <p className="text-lg text-muted-foreground">
              تمام ابزارهای مورد نیاز برای رسیدن به اهداف تناسب اندام خود را در یک مکان دریافت کنید
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Target className="size-8 text-primary" />,
                title: "برنامه‌های شخصی‌سازی شده",
                description: "هر برنامه بر اساس اهداف، سطح آمادگی و محدودیت‌های شما طراحی می‌شود",
              },
              {
                icon: <Users className="size-8 text-primary" />,
                title: "مربیگری اختصاصی",
                description: "دسترسی مستقیم به مربی خود برای راهنمایی و پشتیبانی در تمام مراحل",
              },
              {
                icon: <MessageSquare className="size-8 text-primary" />,
                title: "پشتیبانی 24/7",
                description: "در هر زمان و هر مکان با مربی خود در ارتباط باشید و سوالات خود را بپرسید",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">چگونه کار می‌کند؟</h2>
            <p className="text-lg text-muted-foreground">
              در 4 مرحله ساده شروع کنید
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "ثبت‌نام کنید",
                description: "با شماره موبایل خود ثبت‌نام کنید و اطلاعات اولیه را تکمیل کنید",
              },
              {
                step: "2",
                title: "پکیج را انتخاب کنید",
                description: "پکیج مناسب خود را از بین گزینه‌های موجود انتخاب کنید",
              },
              {
                step: "3",
                title: "برنامه خود را دریافت کنید",
                description: "مربی شما برنامه تمرینی و تغذیه‌ای اختصاصی شما را آماده می‌کند",
              },
              {
                step: "4",
                title: "با مربی خود در ارتباط باشید",
                description: "در تمام مراحل با مربی خود در ارتباط باشید و پیشرفت خود را دنبال کنید",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <Card className="border-0 shadow-md h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                      {item.step}
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardContent>
                </Card>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -left-3 -translate-y-1/2">
                    <ArrowRight className="size-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">نظرات کاربران</h2>
            <p className="text-lg text-muted-foreground">
              تجربه واقعی کاربران ما
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "علی احمدی",
                role: "دانش‌آموز",
                rating: 5,
                comment: "برنامه‌های تمرینی بسیار عالی و متناسب با شرایط من بود. در عرض 3 ماه به نتایج فوق‌العاده‌ای رسیدم.",
              },
              {
                name: "سارا محمدی",
                role: "دانش‌آموز",
                rating: 5,
                comment: "پشتیبانی مربی عالی بود. همیشه پاسخگوی سوالات من بودند و راهنمایی‌های مفیدی ارائه می‌دادند.",
              },
              {
                name: "محمد رضایی",
                role: "دانش‌آموز",
                rating: 5,
                comment: "برنامه تغذیه‌ای که دریافت کردم بسیار دقیق و قابل اجرا بود. تغییرات زیادی در بدنم ایجاد شد.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base">{testimonial.comment}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-primary text-primary-foreground">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl lg:text-4xl mb-4">
                آماده شروع هستید؟
              </CardTitle>
              <CardDescription className="text-primary-foreground/80 text-lg">
                همین حالا ثبت‌نام کنید و اولین قدم را به سمت بدن ایده‌آل خود بردارید
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                <Link to="/register">شروع کنید</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Fitness Coach</h3>
              <p className="text-muted-foreground">
                پلتفرم مربیگری تناسب اندام برای رسیدن به بهترین نسخه خود
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">لینک‌های مفید</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground">درباره ما</Link></li>
                <li><Link to="/contact" className="hover:text-foreground">تماس با ما</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">پشتیبانی</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/student/chat" className="hover:text-foreground">پشتیبانی</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            <p>© 2024 Fitness Coach. تمام حقوق محفوظ است.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

