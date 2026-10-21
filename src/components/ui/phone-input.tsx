import * as React from "react";
import { Input } from "./input";
import { cn } from "./utils";

interface PhoneInputProps extends Omit<React.ComponentProps<"input">, "type"> {
  value?: string;
  onChange?: (value: string) => void;
}

export function PhoneInput({ className, value, onChange, ...props }: PhoneInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, ''); // Remove non-digits
    if (onChange) {
      onChange(inputValue);
    }
  };

  const formatPhone = (phone: string) => {
    if (!phone) return '';
    if (phone.length <= 4) return phone;
    if (phone.length <= 7) return `${phone.slice(0, 4)} ${phone.slice(4)}`;
    if (phone.length <= 10) return `${phone.slice(0, 4)} ${phone.slice(4, 7)} ${phone.slice(7)}`;
    return `${phone.slice(0, 4)} ${phone.slice(4, 7)} ${phone.slice(7, 10)} ${phone.slice(10, 11)}`;
  };

  return (
    <div className="relative">
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
        +98
      </span>
      <Input
        type="tel"
        className={cn("pr-16", className)}
        value={value ? formatPhone(value) : ''}
        onChange={handleChange}
        placeholder="912 345 6789"
        maxLength={13}
        dir="ltr"
        {...props}
      />
    </div>
  );
}

