export const clamp = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, value));

import { SECONDS_PER_MINUTE } from "../config";

export const progressRatio = (value: number, total: number): number =>
  total > 0 ? value / total : 0;

/** Progress through the current minute (0-1), e.g. for a clock ring */
export const progressInMinute = (seconds: number): number =>
  (seconds % SECONDS_PER_MINUTE) / SECONDS_PER_MINUTE;
