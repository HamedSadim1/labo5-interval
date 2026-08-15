import { useCallback } from "react";
import { clamp } from "@/utils";

interface DurationSetterDeps {
  setDuration: (seconds: number) => void;
  reset: () => void;
  isRunning: boolean;
}

/**
 * Returns a setter that clamps the incoming value to [min, max], scales it by
 * `multiplier` (e.g. minutes → seconds) and resets the countdown when idle.
 */
export const useDurationSetter = (
  { setDuration, reset, isRunning }: DurationSetterDeps,
  min: number,
  max: number,
  multiplier = 1
) =>
  useCallback(
    (value: number) => {
      setDuration(clamp(value, min, max) * multiplier);
      if (!isRunning) reset();
    },
    [setDuration, reset, isRunning, min, max, multiplier]
  );
