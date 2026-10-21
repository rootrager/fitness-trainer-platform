import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock messages
const mockMessages = [
  {
    id: "1",
    senderId: "coach",
    senderType: "coach" as const,
    content: "سلام! برنامه تمرینی شما آماده شد. لطفا آن را بررسی کنید.",
    createdAt: "2024-01-15T10:00:00",
    read: true,
  },
  {
    id: "2",
    senderId: "student",
    senderType: "student" as const,
    content: "ممنون! برنامه را دریافت کردم. سوالی داشتم در مورد تمرینات روز اول.",
    createdAt: "2024-01-15T10:15:00",
    read: true,
  },
  {
    id: "3",
    senderId: "coach",
    senderType: "coach" as const,
    content: "حتما! هر سوالی داری بپرس. من اینجا هستم تا کمکت کنم.",
    createdAt: "2024-01-15T10:20:00",
    read: true,
  },
];

export function StudentChatPage() {
  const [messages, setMessages] = useState(mockMessages);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      senderId: "student",
      senderType: "student" as const,
      content: inputValue,
      createdAt: new Date().toISOString(),
      read: false,
    };

    setMessages([...messages, newMessage]);
    setInputValue("");
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("fa-IR", { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">پشتیبانی</h1>
          <p className="text-muted-foreground">در ارتباط با مربی خود باشید</p>
        </div>

        <Card className="h-[calc(100vh-12rem)] flex flex-col">
          <CardContent className="flex-1 flex flex-col p-0">
            <ScrollArea className="flex-1 p-6">
              <div className="space-y-4">
                {messages.map((message) => {
                  const isStudent = message.senderType === "student";
                  return (
                    <div
                      key={message.id}
                      className={`flex ${isStudent ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                          isStudent
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p
                          className={`text-xs mt-1 ${
                            isStudent ? "text-primary-foreground/70" : "text-muted-foreground"
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
                    handleSend();
                  }
                }}
                placeholder="پیام خود را بنویسید..."
                className="flex-1"
              />
              <Button onClick={handleSend} disabled={!inputValue.trim()}>
                <Send className="size-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

