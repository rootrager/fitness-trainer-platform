import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/ui/status-badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { ROUTES } from "@/constants/routes";

// Mock students
const mockStudents = [
  {
    id: "1",
    name: "علی احمدی",
    phone: "09123456789",
    package: "پکیج 3 ماهه + تغذیه",
    initialPayment: "paid" as const,
    finalPayment: "pending" as const,
    programStatus: "ready" as const,
  },
  {
    id: "2",
    name: "سارا محمدی",
    phone: "09123456790",
    package: "پکیج 2 ماهه",
    initialPayment: "paid" as const,
    finalPayment: "paid" as const,
    programStatus: "sent" as const,
  },
  {
    id: "3",
    name: "محمد رضایی",
    phone: "09123456791",
    package: "پکیج VIP",
    initialPayment: "paid" as const,
    finalPayment: "pending" as const,
    programStatus: "preparing" as const,
  },
];

export function CoachStudentsPage() {
  const navigate = useNavigate();

  return (
    <DashboardLayout role="coach">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">دانش‌آموزان</h1>
          <p className="text-muted-foreground">لیست تمام دانش‌آموزان شما</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>لیست دانش‌آموزان</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>نام</TableHead>
                  <TableHead>شماره تماس</TableHead>
                  <TableHead>پکیج</TableHead>
                  <TableHead>پرداخت اولیه</TableHead>
                  <TableHead>پرداخت نهایی</TableHead>
                  <TableHead>وضعیت برنامه</TableHead>
                  <TableHead>عملیات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell className="font-mono text-sm">{student.phone}</TableCell>
                    <TableCell>{student.package}</TableCell>
                    <TableCell>
                      <StatusBadge status={student.initialPayment} />
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={student.finalPayment} />
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={student.programStatus} />
                    </TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          navigate(ROUTES.COACH_STUDENT_PROFILE.replace(":id", student.id))
                        }
                      >
                        <Eye className="size-4 ml-2" />
                        مشاهده پروفایل
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

