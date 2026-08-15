import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
  variant: "primary" | "secondary" | "success" | "rose";
  icon?: LucideIcon;
  className?: string;
}

export const Button = ({
  onClick,
  disabled = false,
  children,
  variant,
  icon: Icon,
  className = "",
}: ButtonProps) => {
  const baseClasses =
    "flex h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 disabled:pointer-events-none disabled:opacity-40";

  const variantClasses = {
    primary: "bg-sky-500 shadow-sky-950/50 hover:bg-sky-400",
    secondary: "bg-slate-800 hover:bg-slate-700",
    rose: "bg-rose-500 shadow-rose-950/50 hover:bg-rose-400",
    success: "bg-emerald-500 shadow-emerald-950/50 hover:bg-emerald-400",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={twMerge(baseClasses, variantClasses[variant], className)}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </button>
  );
};
