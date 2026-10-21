import { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/ui/status-badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Upload, Send, ArrowRight } from "lucide-react";
import { ROUTES } from "@/constants/routes";

// Mock student data
const mockStudent = {
  id: "1",
  name: "علی احمدی",
  phone: "09123456789",
  age: 28,
  weight: 75,
  height: 175,
  gender: "male" as const,
  trainingExperience: "intermediate" as const,
  goal: "کاهش وزن و عضله‌سازی",
  package: { name: "پکیج 3 ماهه + تغذیه", price: 1500000 },
  initialPayment: { status: "paid" as const },
  finalPayment: { status: "pending" as const },
  programStatus: "ready" as const,
};

const mockMessages = [
  {
    id: "1",
    senderId: "coach",
    senderType: "coach" as const,
    content: "سلام! برنامه تمرینی شما آماده شد. لطفا آن را بررسی کنید.",
    createdAt: "2024-01-15T10:00:00",
  },
  {
    id: "2",
    senderId: "student",
    senderType: "student" as const,
    content: "ممنون! برنامه را دریافت کردم.",
    createdAt: "2024-01-15T10:15:00",
  },
];

export function CoachStudentProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [programStatus, setProgramStatus] = useState(mockStudent.programStatus);
  const [messages, setMessages] = useState(mockMessages);
  const [inputValue, setInputValue] = useState("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      // Handle file upload logic here
      setProgramStatus("sent");
      alert("برنامه با موفقیت آپلود شد!");
    } else {
      alert("لطفا فقط فایل تصویری (JPG) آپلود کنید");
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    const newMessage = {
      id: Date.now().toString(),
      senderId: "coach",
      senderType: "coach" as const,
      content: inputValue,
      createdAt: new Date().toISOString(),
    };
    setMessages([...messages, newMessage]);
    setInputValue("");
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <DashboardLayout role="coach">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">پروفایل دانش‌آموز</h1>
            <p className="text-muted-foreground">{mockStudent.name}</p>
          </div>
          <Button variant="outline" onClick={() => navigate(ROUTES.COACH_STUDENTS)}>
            <ArrowRight className="size-4 ml-2" />
            بازگشت
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Personal Info */}
          <Card>
            <CardHeader>
              <CardTitle>اطلاعات شخصی</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground">نام</Label>
                  <p className="font-semibold">{mockStudent.name}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">شماره تماس</Label>
                  <p className="font-semibold font-mono">{mockStudent.phone}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">سن</Label>
                  <p className="font-semibold">{mockStudent.age} سال</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">وزن</Label>
                  <p className="font-semibold">{mockStudent.weight} کیلوگرم</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">قد</Label>
                  <p className="font-semibold">{mockStudent.height} سانتی‌متر</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">جنسیت</Label>
                  <p className="font-semibold">
                    {mockStudent.gender === "male" ? "مرد" : "زن"}
                  </p>
                </div>
              </div>
              <div>
                <Label className="text-muted-foreground">هدف</Label>
                <p className="font-semibold">{mockStudent.goal}</p>
              </div>
            </CardContent>
          </Card>

          {/* Package & Payment */}
          <Card>
            <CardHeader>
              <CardTitle>پکیج و پرداخت</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-muted-foreground">پکیج</Label>
                <p className="font-semibold">{mockStudent.package.name}</p>
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-muted-foreground">پرداخت اولیه</Label>
                <StatusBadge status={mockStudent.initialPayment.status} />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-muted-foreground">پرداخت نهایی</Label>
                <StatusBadge status={mockStudent.finalPayment.status} />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-muted-foreground">وضعیت برنامه</Label>
                <StatusBadge status={programStatus} />
              </div>
            </CardContent>
          </Card>

          {/* Upload Program */}
          <Card>
            <CardHeader>
              <CardTitle>آپلود برنامه</CardTitle>
              <CardDescription>برنامه تمرینی یا تغذیه‌ای را آپلود کنید (فقط JPG)</CardDescription>
            </CardHeader>
            <CardContent>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/jpg"
                onChange={handleFileUpload}
                className="hidden"
              />
              <Button
                className="w-full"
                onClick={() => fileInputRef.current?.click()}
                disabled={programStatus === "sent"}
              >
                <Upload className="size-4 ml-2" />
                آپلود برنامه
              </Button>
            </CardContent>
          </Card>

          {/* Chat */}
          <Card className="lg:col-span-2 h-[500px] flex flex-col">
            <CardHeader>
              <CardTitle>چت با دانش‌آموز</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-0">
              <ScrollArea className="flex-1 p-6">
                <div className="space-y-4">
                  {messages.map((message) => {
                    const isCoach = message.senderType === "coach";
                    return (
                      <div
                        key={message.id}
                        className={`flex ${isCoach ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                            isCoach
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-foreground"
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p
                            className={`text-xs mt-1 ${
                              isCoach ? "text-primary-foreground/70" : "text-muted-foreground"
                            }`}
                          >
                            {formatTime(message.createdAt)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ScrollArea>
              <div className="border-t p-4 flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  placeholder="پیام خود را بنویسید..."
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} disabled={!inputValue.trim()}>
                  <Send className="size-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

