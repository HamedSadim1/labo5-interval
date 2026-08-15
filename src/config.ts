/**
 * Central configuration for timer durations, limits and UI dimensions.
 * Keeps magic numbers out of components and hooks.
 */

/** Milliseconds per second */
export const MS_PER_SECOND = 1000;

/** Countdown timer defaults (seconds) */
export const DEFAULT_COUNTDOWN_SECONDS = 60;
export const MAX_COUNTDOWN_SECONDS = 24 * 60 * 60; // 24 hours

/** Interval timer defaults (minutes) */
export const DEFAULT_INTERVAL_MINUTES = 5;
export const MAX_INTERVAL_MINUTES = 24 * 60; // 24 hours

/** Focus Time session length (seconds) — fixed 25:00 pomodoro */
export const FOCUS_WORK_SECONDS = 25 * 60;

/** How often the countdown/stopwatch recalculate remaining time (ms) */
export const TIMER_TICK_MS = 250;

/** Header clock refresh rate (ms) — HH:mm only needs a 30s tick */
export const HEADER_CLOCK_TICK_MS = 30 * MS_PER_SECOND;

/** Random Values ranges */
export const RANDOM_MAX_PRIMARY = 100;
export const RANDOM_MAX_SECONDARY = 200;

/** Progress ring geometry */
export const RING_SIZE = 200;
export const RING_STROKE = 8;

/** Card entrance animation stagger between cards (ms) */
export const ANIMATION_DELAY_STEP_MS = 70;

/** Card names — single source for titles, aria-labels and notification titles */
export const CARD_LABELS = {
  stopwatch: "Stopwatch",
  countdown: "Countdown Timer",
  interval: "Interval Timer",
  focus: "Focus Time",
  currentTime: "Current Time",
  random: "Random Values",
} as const;

/** Shared props for the six dashboard widget cards */
export interface CardWidgetProps {
  /** Card title, rendered as the h2 and used as the section's accessible name */
  label: string;
  /** Accent color class for icon and ring, e.g. "text-sky-400" */
  accent: string;
}
