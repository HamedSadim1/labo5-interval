import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface TitleWithIconProps {
  icon: LucideIcon;
  children: ReactNode;
  iconColor?: string;
  className?: string;
}

export const TitleWithIcon = ({
  icon: Icon,
  children,
  iconColor = "text-slate-300",
  className = "text-lg font-semibold tracking-tight text-slate-100",
}: TitleWithIconProps) => {
  return (
    <div className="mb-6 w-full">
      <div className="flex items-center justify-center gap-2.5">
        <Icon className={twMerge("h-5 w-5", iconColor)} />
        <h2 className={className}>{children}</h2>
      </div>
    </div>
  );
};
