import { useCallback, useState } from "react";
import { useCountdown } from "./useCountdown";
import { showNotification, startWithPermission } from "../utils/notifications";
import { clamp } from "../utils/math";
import {
  CARD_LABELS,
  COPY,
  DEFAULT_INTERVAL_MINUTES,
  MAX_INTERVAL_MINUTES,
  MIN_DURATION,
  SECONDS_PER_MINUTE,
} from "../config";

export const useIntervalTimer = (
  initialInterval: number = DEFAULT_INTERVAL_MINUTES * SECONDS_PER_MINUTE
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
      showNotification(CARD_LABELS.interval, COPY.notifications.intervalDone);
    },
  });

  const start = useCallback(() => startWithPermission(startTimer), [startTimer]);

  const setTime = useCallback(
    (minutes: number) => {
      const seconds =
        clamp(minutes, MIN_DURATION, MAX_INTERVAL_MINUTES) * SECONDS_PER_MINUTE;
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
