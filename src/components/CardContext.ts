import { createContext, useContext } from "react";

/** Accent color classes used by the dashboard cards (icon + ring) */
export type AccentColor =
  | "text-sky-400"
  | "text-amber-400"
  | "text-orange-400"
  | "text-violet-400"
  | "text-teal-400"
  | "text-rose-400";

export interface CardContextValue {
  /** Card title, rendered as the h2 and used as the section's accessible name */
  label: string;
  /** Accent color class for icon and ring */
  accent: AccentColor;
}

const CardContext = createContext<CardContextValue | null>(null);

export const CardContextProvider = CardContext.Provider;

/** Read the current card's label and accent (provided by <Card>) */
export const useCard = (): CardContextValue => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCard must be used within a <Card>");
  }
  return context;
};
