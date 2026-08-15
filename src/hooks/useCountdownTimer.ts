import { useCallback } from "react";
import { useCountdown } from "./useCountdown";
import { clamp, showNotification, startWithPermission } from "../utils";
import {
  CARD_LABELS,
  COPY,
  DEFAULT_COUNTDOWN_SECONDS,
  MAX_COUNTDOWN_SECONDS,
  MIN_DURATION,
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
      showNotification(CARD_LABELS.countdown, COPY.notifications.countdownDone);
    },
  });

  const start = useCallback(() => startWithPermission(startTimer), [startTimer]);

  const setTime = useCallback(
    (time: number) => {
      const seconds = clamp(time, MIN_DURATION, MAX_COUNTDOWN_SECONDS);
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
