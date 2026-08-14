import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
  variant: "primary" | "secondary" | "danger" | "success";
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
    "flex h-12 items-center justify-center gap-2 rounded-xl px-5 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 disabled:pointer-events-none disabled:opacity-40";

  const variantClasses = {
    primary:
      "bg-linear-to-b from-indigo-500 to-indigo-600 shadow-indigo-950/50 hover:from-indigo-400 hover:to-indigo-500",
    secondary:
      "border border-white/10 bg-white/[0.06] hover:bg-white/[0.12]",
    danger:
      "bg-linear-to-b from-rose-500 to-rose-600 shadow-rose-950/50 hover:from-rose-400 hover:to-rose-500",
    success:
      "bg-linear-to-b from-emerald-500 to-emerald-600 shadow-emerald-950/50 hover:from-emerald-400 hover:to-emerald-500",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </button>
  );
};
