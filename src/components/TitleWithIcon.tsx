import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface TitleWithIconProps {
  icon: LucideIcon;
  children: ReactNode;
  iconColor?: string;
  className?: string;
}

export const TitleWithIcon = ({
  icon: Icon,
  children,
  iconColor = "text-white",
  className = "text-xl font-semibold text-white",
}: TitleWithIconProps) => {
  return (
    <div className="mb-4 w-full">
      <div className="flex items-center justify-center">
        <Icon className={`w-6 h-6 mr-2 ${iconColor}`} />
        <h2 className={className}>{children}</h2>
      </div>
    </div>
  );
};
