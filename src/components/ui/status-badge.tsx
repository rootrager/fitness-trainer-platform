import * as React from "react";
import { Badge } from "./badge";
import { cn } from "./utils";
import { CheckCircle2, Clock, XCircle, AlertCircle } from "lucide-react";

export type StatusType = 'paid' | 'pending' | 'ready' | 'preparing' | 'sent' | 'failed';

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const statusConfig: Record<StatusType, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline'; icon: React.ReactNode }> = {
  paid: {
    label: 'پرداخت شده',
    variant: 'default',
    icon: <CheckCircle2 className="size-3" />,
  },
  pending: {
    label: 'در انتظار',
    variant: 'secondary',
    icon: <Clock className="size-3" />,
  },
  ready: {
    label: 'آماده',
    variant: 'default',
    icon: <CheckCircle2 className="size-3" />,
  },
  preparing: {
    label: 'در حال آماده‌سازی',
    variant: 'secondary',
    icon: <Clock className="size-3" />,
  },
  sent: {
    label: 'ارسال شده',
    variant: 'default',
    icon: <CheckCircle2 className="size-3" />,
  },
  failed: {
    label: 'ناموفق',
    variant: 'destructive',
    icon: <XCircle className="size-3" />,
  },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <Badge variant={config.variant} className={cn("gap-1.5", className)}>
      {config.icon}
      {config.label}
    </Badge>
  );
}

