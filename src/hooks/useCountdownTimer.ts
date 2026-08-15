import { useCallback } from "react";
import { useCountdown } from "./useCountdown";
import { showNotification, startWithPermission } from "../utils/notifications";
import { clamp } from "../utils/math";
import {
  CARD_LABELS,
  DEFAULT_COUNTDOWN_SECONDS,
  MAX_COUNTDOWN_SECONDS,
} from "../config";

export const useCountdownTimer = (initialTime: number = DEFAULT_COUNTDOWN_SECONDS) => {
  const {
    duration,
    remaining,
    isRunning,
    start: startTimer,
    stop,
    reset,
    setDuration,
  } = useCountdown(initialTime, {
    onComplete: () => {
      showNotification(CARD_LABELS.countdown, "Time's up!");
    },
  });

  const start = useCallback(() => startWithPermission(startTimer), [startTimer]);

  const setTime = useCallback(
    (time: number) => {
      const seconds = clamp(time, 1, MAX_COUNTDOWN_SECONDS);
      setDuration(seconds);
      if (!isRunning) reset();
    },
    [isRunning, setDuration, reset]
  );

  return {
    remaining,
    targetTime: duration,
    isRunning,
    start,
    stop,
    reset,
    setTime,
  };
};
