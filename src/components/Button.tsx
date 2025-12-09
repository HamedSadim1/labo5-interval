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
    "flex items-center justify-center px-4 py-2 h-12 min-w-[100px] backdrop-blur-sm text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105";

  const variantClasses = {
    primary: "bg-blue-500/80 hover:bg-blue-500",
    secondary: "bg-gray-500/80 hover:bg-gray-500",
    danger: "bg-red-500/80 hover:bg-red-500",
    success: "bg-green-500/80 hover:bg-green-500",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {Icon && <Icon className="w-4 h-4 mr-1" />}
      {children}
    </button>
  );
};
