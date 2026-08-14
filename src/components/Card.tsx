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
      className={`flex min-h-96 flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/40 p-6 text-center shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/60 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
};
