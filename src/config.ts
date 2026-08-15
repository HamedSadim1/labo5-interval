/**
 * Central configuration — the single source of truth for constants and
 * magic values used across the app. Keeps durations, limits, timing
 * rates, formats and UI dimensions out of components and hooks.
 */

/* ── Time units ─────────────────────────────────────────────────────── */

/** Milliseconds per second */
export const MS_PER_SECOND = 1000;

/** Seconds per minute */
export const SECONDS_PER_MINUTE = 60;

/* ── Timer defaults & limits ────────────────────────────────────────── */

/** Smallest allowed duration input, in seconds or minutes */
export const MIN_DURATION = 1;

/** Countdown timer defaults (seconds) */
export const DEFAULT_COUNTDOWN_SECONDS = 60;
export const MAX_COUNTDOWN_SECONDS = 24 * 60 * 60; // 24 hours

/** Interval timer defaults (minutes) */
export const DEFAULT_INTERVAL_MINUTES = 5;
export const MAX_INTERVAL_MINUTES = 24 * 60; // 24 hours

/** Focus Time session length (seconds) — fixed 25:00 pomodoro */
export const FOCUS_WORK_SECONDS = 25 * 60;

/* ── Timing & refresh rates ─────────────────────────────────────────── */

/** How often the countdown/stopwatch recalculate remaining time (ms) */
export const TIMER_TICK_MS = 250;

/** Header clock refresh rate (ms) — HH:mm only needs a 30s tick */
export const HEADER_CLOCK_TICK_MS = 30 * MS_PER_SECOND;

/* ── Random Values ranges ───────────────────────────────────────────── */

export const RANDOM_MAX_PRIMARY = 100;
export const RANDOM_MAX_SECONDARY = 200;

/* ── Progress ring geometry ─────────────────────────────────────────── */

export const RING_SIZE = 200;
export const RING_STROKE = 8;

/* ── Animation ──────────────────────────────────────────────────────── */

/** Card entrance animation stagger between cards (ms) */
export const ANIMATION_DELAY_STEP_MS = 70;

/* ── Time display formats (time-stamp) ──────────────────────────────── */

/** Header clock format (hours:minutes) */
export const TIME_FORMAT_HHMM = "HH:mm";

/** Current Time format (hours:minutes:seconds) */
export const TIME_FORMAT_HHMMSS = "HH:mm:ss";

/** Digits longer than this shrink one size step to fit inside the ring */
export const TIME_DISPLAY_LONG_THRESHOLD = 5;

/* ── Card labels ────────────────────────────────────────────────────── */

/** Card names — single source for titles, aria-labels and notification titles */
export const CARD_LABELS = {
  stopwatch: "Stopwatch",
  countdown: "Countdown Timer",
  interval: "Interval Timer",
  focus: "Focus Time",
  currentTime: "Current Time",
  random: "Random Values",
} as const;

/* ── User-facing copy ───────────────────────────────────────────────── */

/** All visible text — single source for buttons, statuses, labels and notifications */
export const COPY = {
  buttons: {
    start: "Start",
    pause: "Pause",
    reset: "Reset",
    rollAgain: "Roll again",
  },
  status: {
    running: "Running",
    paused: "Paused",
    ready: "Ready",
    finished: "Finished!",
    sessionComplete: "Session complete!",
    cyclesCompleted: (count: number) => `Cycles completed: ${count}`,
  },
  fields: {
    countdownSeconds: "Set time (seconds):",
    intervalMinutes: "Interval (minutes):",
    localTime: "Local time",
  },
  rings: {
    elapsedInMinute: "Elapsed time in current minute",
    timeRemaining: "Time remaining",
    secondsInMinute: "Seconds in current minute",
  },
  notifications: {
    countdownDone: "Time's up!",
    intervalDone: "Time's up! Take a break.",
    focusDone: "Session complete!",
  },
  header: {
    title: "Interval Dashboard",
    subtitle: "Stopwatch, countdown, interval & focus timers",
  },
  footer: {
    builtWith: "Built with React, Vite & Tailwind CSS",
  },
} as const;

/* ── Shared types ───────────────────────────────────────────────────── */

/** Shared props for the six dashboard widget cards */
export interface CardWidgetProps {
  /** Card title, rendered as the h2 and used as the section's accessible name */
  label: string;
  /** Accent color class for icon and ring, e.g. "text-sky-400" */
  accent: string;
}
