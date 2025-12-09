import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-3xl text-center flex flex-col justify-between min-h-[380px] min-w-[300px] ${className}`}
    >
      {children}
    </div>
  );
};
