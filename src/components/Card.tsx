import { CSSProperties, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Card = ({ children, className = "", style }: CardProps) => {
  return (
    <div
      style={style}
      className={`flex min-h-[380px] flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 text-center shadow-lg shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-white/[0.05] hover:shadow-xl hover:shadow-indigo-500/10 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
};
