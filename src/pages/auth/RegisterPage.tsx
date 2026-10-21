import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight } from "lucide-react";

export function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    weight: "",
    height: "",
    gender: "",
    trainingExperience: "",
    goal: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save registration data
    sessionStorage.setItem("userData", JSON.stringify(formData));
    navigate("/packages");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4 py-12">
      <Card className="w-full max-w-2xl border-0 shadow-xl">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl">تکمیل اطلاعات</CardTitle>
          <CardDescription className="text-base">
            لطفا اطلاعات خود را تکمیل کنید تا برنامه مناسب شما طراحی شود
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">نام و نام خانوادگی *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  placeholder="علی احمدی"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">سن *</Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleChange("age", e.target.value)}
                  required
                  placeholder="25"
                  min="10"
                  max="100"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">وزن (کیلوگرم) *</Label>
                <Input
                  id="weight"
                  type="number"
                  value={formData.weight}
                  onChange={(e) => handleChange("weight", e.target.value)}
                  required
                  placeholder="75"
                  min="30"
                  max="200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="height">قد (سانتی‌متر) *</Label>
                <Input
                  id="height"
                  type="number"
                  value={formData.height}
                  onChange={(e) => handleChange("height", e.target.value)}
                  required
                  placeholder="175"
                  min="100"
                  max="250"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">جنسیت *</Label>
                <Select
                  value={formData.gender}
                  onValueChange={(value) => handleChange("gender", value)}
                  required
                >
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="انتخاب کنید" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">مرد</SelectItem>
                    <SelectItem value="female">زن</SelectItem>
                    <SelectItem value="other">سایر</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">سطح تجربه تمرین *</Label>
                <Select
                  value={formData.trainingExperience}
                  onValueChange={(value) => handleChange("trainingExperience", value)}
                  required
                >
                  <SelectTrigger id="experience">
                    <SelectValue placeholder="انتخاب کنید" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">مبتدی</SelectItem>
                    <SelectItem value="intermediate">متوسط</SelectItem>
                    <SelectItem value="advanced">پیشرفته</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="goal">هدف شما از تمرین *</Label>
              <Input
                id="goal"
                value={formData.goal}
                onChange={(e) => handleChange("goal", e.target.value)}
                required
                placeholder="مثال: کاهش وزن، عضله‌سازی، افزایش قدرت"
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              ادامه
              <ArrowRight className="size-4 mr-2" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

