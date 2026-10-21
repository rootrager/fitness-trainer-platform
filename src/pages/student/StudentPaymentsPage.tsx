import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/ui/status-badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CreditCard } from "lucide-react";

// Mock payments
const mockPayments = [
  {
    id: "1",
    type: "initial",
    amount: 1500000,
    status: "paid" as const,
    date: "2024-01-10",
    transactionId: "TXN123456",
  },
  {
    id: "2",
    type: "final",
    amount: 500000,
    status: "pending" as const,
    date: null,
    transactionId: null,
  },
];

export function StudentPaymentsPage() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price);
  };

  const formatDate = (date: string | null) => {
    if (!date) return "-";
    return new Date(date).toLocaleDateString("fa-IR");
  };

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">پرداخت‌ها</h1>
          <p className="text-muted-foreground">تاریخچه پرداخت‌های شما</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="size-5" />
              لیست پرداخت‌ها
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>نوع پرداخت</TableHead>
                  <TableHead>مبلغ</TableHead>
                  <TableHead>وضعیت</TableHead>
                  <TableHead>تاریخ</TableHead>
                  <TableHead>شماره تراکنش</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockPayments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell>
                      {payment.type === "initial" ? "پرداخت اولیه" : "پرداخت نهایی"}
                    </TableCell>
                    <TableCell className="font-semibold">
                      {formatPrice(payment.amount)} تومان
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={payment.status} />
                    </TableCell>
                    <TableCell>{formatDate(payment.date)}</TableCell>
                    <TableCell className="font-mono text-sm">
                      {payment.transactionId || "-"}
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

