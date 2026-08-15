import { useCallback, useState } from "react";
import { useCountdown } from "./useCountdown";
import { showNotification, startWithPermission } from "../utils/notifications";
import { clamp } from "../utils/math";
import {
  CARD_LABELS,
  DEFAULT_INTERVAL_MINUTES,
  MAX_INTERVAL_MINUTES,
} from "../config";

export const useIntervalTimer = (
  initialInterval: number = DEFAULT_INTERVAL_MINUTES * 60
) => {
  const [cycles, setCycles] = useState(0);

  const {
    duration,
    remaining,
    isRunning,
    start: startTimer,
    stop,
    reset,
    setDuration,
  } = useCountdown(initialInterval, {
    autoRestart: true,
    onComplete: (completedCount = 1) => {
      setCycles((prev) => prev + completedCount);
      showNotification(CARD_LABELS.interval, "Time's up! Take a break.");
    },
  });

  const start = useCallback(() => startWithPermission(startTimer), [startTimer]);

  const setTime = useCallback(
    (minutes: number) => {
      const seconds = clamp(minutes, 1, MAX_INTERVAL_MINUTES) * 60;
      setDuration(seconds);
      if (!isRunning) reset();
    },
    [isRunning, setDuration, reset]
  );

  return {
    remaining,
    intervalTime: duration,
    isRunning,
    cycles,
    start,
    stop,
    reset,
    setTime,
  };
};
