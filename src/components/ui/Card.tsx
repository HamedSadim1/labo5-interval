import { CSSProperties, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { ACCENT_COLORS, AccentName } from "@/theme";
import { CardContextProvider } from "./CardContext";

interface CardProps {
  children: ReactNode;
  /** Accessible name for the section, e.g. "Stopwatch" */
  label: string;
  /** Accent color token shared with the card's widget via context */
  color: AccentName;
  className?: string;
  style?: CSSProperties;
}

export const Card = ({ children, label, color, className = "", style }: CardProps) => {
  return (
    <CardContextProvider value={{ label, accent: ACCENT_COLORS[color], accentName: color }}>
      <section
        aria-label={label}
        style={style}
        className={twMerge(
          "flex min-h-96 flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/40 p-6 text-center shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/60 sm:p-8",
          className
        )}
      >
        {children}
      </section>
    </CardContextProvider>
  );
};
