import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FileText, Download, Eye } from "lucide-react";

// Mock programs
const mockPrograms = [
  {
    id: "1",
    name: "برنامه تمرینی هفته اول",
    type: "تمرین",
    uploadedAt: "2024-01-15",
    fileUrl: "/programs/week1.jpg",
  },
  {
    id: "2",
    name: "برنامه تغذیه‌ای هفته اول",
    type: "تغذیه",
    uploadedAt: "2024-01-15",
    fileUrl: "/programs/nutrition1.jpg",
  },
];

export function StudentProgramsPage() {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const handleView = (programId: string) => {
    setSelectedProgram(programId);
    setIsViewerOpen(true);
  };

  const selectedProgramData = mockPrograms.find((p) => p.id === selectedProgram);

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">برنامه‌های تمرینی</h1>
          <p className="text-muted-foreground">برنامه‌های ارسال شده توسط مربی</p>
        </div>

        {mockPrograms.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <FileText className="size-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">هنوز برنامه‌ای برای شما ارسال نشده است</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockPrograms.map((program) => (
              <Card key={program.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{program.name}</CardTitle>
                  <CardDescription>{program.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {new Date(program.uploadedAt).toLocaleDateString("fa-IR")}
                    </span>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleView(program.id)}
                      >
                        <Eye className="size-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          // Download logic
                          window.open(program.fileUrl, "_blank");
                        }}
                      >
                        <Download className="size-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Image Viewer Dialog */}
        <Dialog open={isViewerOpen} onOpenChange={setIsViewerOpen}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{selectedProgramData?.name}</DialogTitle>
              <DialogDescription>{selectedProgramData?.type}</DialogDescription>
            </DialogHeader>
            {selectedProgramData && (
              <div className="mt-4">
                <img
                  src={selectedProgramData.fileUrl}
                  alt={selectedProgramData.name}
                  className="w-full h-auto rounded-lg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/800x1000?text=Program+Image";
                  }}
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}

