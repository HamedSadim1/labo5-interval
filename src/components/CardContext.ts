import { createContext, useContext } from "react";
import { AccentColor, AccentName } from "@/theme";

export interface CardContextValue {
  /** Card title, rendered as the h2 and used as the section's accessible name */
  label: string;
  /** Accent color class for icon and ring, e.g. "text-sky-400" */
  accent: AccentColor;
  /** Accent color name, e.g. "sky" (used by inputs to pick a focus ring) */
  accentName: AccentName;
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
