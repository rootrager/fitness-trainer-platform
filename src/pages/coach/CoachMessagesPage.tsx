import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Search } from "lucide-react";

// Mock conversations
const mockConversations = [
  {
    id: "1",
    studentId: "1",
    studentName: "علی احمدی",
    lastMessage: "برنامه را دریافت کردم. ممنون!",
    unreadCount: 2,
    updatedAt: "2024-01-15T10:20:00",
  },
  {
    id: "2",
    studentId: "2",
    studentName: "سارا محمدی",
    lastMessage: "سوالی در مورد برنامه تغذیه‌ای داشتم",
    unreadCount: 0,
    updatedAt: "2024-01-15T09:15:00",
  },
  {
    id: "3",
    studentId: "3",
    studentName: "محمد رضایی",
    lastMessage: "برنامه جدید را آپلود کردید؟",
    unreadCount: 1,
    updatedAt: "2024-01-15T08:30:00",
  },
];

const mockMessages: Record<string, Array<{
  id: string;
  senderId: string;
  senderType: "student" | "coach";
  content: string;
  createdAt: string;
}>> = {
  "1": [
    {
      id: "1",
      senderId: "student",
      senderType: "student",
      content: "سلام! برنامه را دریافت کردم.",
      createdAt: "2024-01-15T10:00:00",
    },
    {
      id: "2",
      senderId: "coach",
      senderType: "coach",
      content: "عالی! اگر سوالی داشتی بپرس.",
      createdAt: "2024-01-15T10:05:00",
    },
    {
      id: "3",
      senderId: "student",
      senderType: "student",
      content: "ممنون! برنامه را دریافت کردم. ممنون!",
      createdAt: "2024-01-15T10:20:00",
    },
  ],
};

export function CoachMessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>("1");
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConversations = mockConversations.filter((conv) =>
    conv.studentName.includes(searchQuery)
  );

  const currentMessages = selectedConversation
    ? mockMessages[selectedConversation] || []
    : [];

  const handleSend = () => {
    if (!inputValue.trim() || !selectedConversation) return;
    // Handle send message logic
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
        <div>
          <h1 className="text-3xl font-bold mb-2">پیام‌ها</h1>
          <p className="text-muted-foreground">مدیریت پیام‌های دانش‌آموزان</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-12rem)]">
          {/* Conversations List */}
          <Card className="flex flex-col">
            <CardContent className="p-0 flex flex-col h-full">
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input
                    placeholder="جستجو..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pr-9"
                  />
                </div>
              </div>
              <ScrollArea className="flex-1">
                <div className="p-2">
                  {filteredConversations.map((conversation) => (
                    <button
                      key={conversation.id}
                      onClick={() => setSelectedConversation(conversation.id)}
                      className={`w-full text-right p-3 rounded-lg transition-colors mb-2 ${
                        selectedConversation === conversation.id
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold">{conversation.studentName}</span>
                        {conversation.unreadCount > 0 && (
                          <Badge variant="destructive" className="text-xs">
                            {conversation.unreadCount}
                          </Badge>
                        )}
                      </div>
                      <p
                        className={`text-sm truncate ${
                          selectedConversation === conversation.id
                            ? "text-primary-foreground/80"
                            : "text-muted-foreground"
                        }`}
                      >
                        {conversation.lastMessage}
                      </p>
                    </button>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Chat Thread */}
          <Card className="lg:col-span-2 flex flex-col">
            <CardContent className="flex-1 flex flex-col p-0">
              {selectedConversation ? (
                <>
                  <div className="p-4 border-b">
                    <h3 className="font-semibold">
                      {
                        mockConversations.find((c) => c.id === selectedConversation)
                          ?.studentName
                      }
                    </h3>
                  </div>
                  <ScrollArea className="flex-1 p-6">
                    <div className="space-y-4">
                      {currentMessages.map((message) => {
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
                                  isCoach
                                    ? "text-primary-foreground/70"
                                    : "text-muted-foreground"
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
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-muted-foreground">
                  یک گفتگو را انتخاب کنید
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

