/**
 * Design tokens — single source of truth for the shared color classes and
 * their types. Components import from here instead of hardcoding classes.
 */

/** Card accent colors (icon + ring), keyed by color name */
export const ACCENT_COLORS = {
  sky: "text-sky-400",
  amber: "text-amber-400",
  orange: "text-orange-400",
  violet: "text-violet-400",
  teal: "text-teal-400",
  rose: "text-rose-400",
} as const;

export type AccentName = keyof typeof ACCENT_COLORS;
export type AccentColor = (typeof ACCENT_COLORS)[AccentName];

/** Muted secondary text color */
export const TEXT_MUTED = "text-slate-400";
