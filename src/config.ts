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

/** Minutes per hour */
export const MINUTES_PER_HOUR = 60;

/** Hours per day */
export const HOURS_PER_DAY = 24;

/* ── Timer defaults & limits ────────────────────────────────────────── */

/** Smallest allowed duration input, in seconds or minutes */
export const MIN_DURATION = 1;

/** Countdown timer defaults (seconds) */
export const DEFAULT_COUNTDOWN_SECONDS = 60;
export const MAX_COUNTDOWN_SECONDS =
  HOURS_PER_DAY * MINUTES_PER_HOUR * SECONDS_PER_MINUTE; // 24 hours

/** Interval timer defaults (minutes) */
export const DEFAULT_INTERVAL_MINUTES = 5;
export const MAX_INTERVAL_MINUTES = HOURS_PER_DAY * MINUTES_PER_HOUR; // 24 hours

/** Focus Time defaults & limits (minutes) */
export const FOCUS_DEFAULT_WORK_MINUTES = 25;
export const FOCUS_DEFAULT_BREAK_MINUTES = 5;
export const FOCUS_MIN_MINUTES = 1;
export const FOCUS_MAX_MINUTES = 3 * MINUTES_PER_HOUR; // 3 hours

/** Focus Time session lengths (seconds) */
export const FOCUS_WORK_SECONDS = FOCUS_DEFAULT_WORK_MINUTES * SECONDS_PER_MINUTE;
export const FOCUS_BREAK_SECONDS = FOCUS_DEFAULT_BREAK_MINUTES * SECONDS_PER_MINUTE;

/* ── Timing & refresh rates ─────────────────────────────────────────── */

/** How often the countdown/stopwatch recalculate remaining time (ms) */
export const TIMER_TICK_MS = 250;

/** Header clock refresh rate (ms) — HH:mm only needs a 30s tick */
export const HEADER_CLOCK_TICK_MS = 30 * MS_PER_SECOND;

/* ── Countdown presets ─────────────────────────────────────────────── */

/** Quick-set durations (minutes) shown as preset buttons */
export const COUNTDOWN_PRESETS_MINUTES = [1, 5, 10, 15, 30] as const;

/* ── Persistence ───────────────────────────────────────────────────── */

/** localStorage keys for remembering user settings */
export const STORAGE_KEYS = {
  countdownSeconds: "countdown-seconds",
  intervalMinutes: "interval-minutes",
  pomodoroWorkMinutes: "pomodoro-work-minutes",
  pomodoroBreakMinutes: "pomodoro-break-minutes",
} as const;

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
    workSession: "Work",
    breakSession: "Break",
  },
  fields: {
    countdownSeconds: "Set time (seconds):",
    intervalMinutes: "Interval (minutes):",
    pomodoroWorkMinutes: "Work (minutes):",
    pomodoroBreakMinutes: "Break (minutes):",
    localTime: "Local time",
    presets: "Quick set:",
  },
  rings: {
    elapsedInMinute: "Elapsed time in current minute",
    timeRemaining: "Time remaining",
    secondsInMinute: "Seconds in current minute",
  },
  notifications: {
    countdownDone: "Time's up!",
    intervalDone: "Time's up! Take a break.",
    focusWorkDone: "Work complete! Take a break.",
    focusBreakDone: "Break over! Time to focus.",
  },
  header: {
    title: "Interval Dashboard",
    subtitle: "Stopwatch, countdown, interval & focus timers",
  },
  footer: {
    builtWith: "Built with React, Vite & Tailwind CSS",
    shortcuts: "Space: start/pauze · R: reset — binnen een gefocuste timer",
  },
} as const;
