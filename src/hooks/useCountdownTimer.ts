import { useCallback } from "react";
import { useCountdown } from "./useCountdown";
import {
  requestNotificationPermission,
  showNotification,
} from "../utils/notifications";

export const useCountdownTimer = (initialTime: number = 60) => {
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
      showNotification("Countdown Timer", "Time's up!");
    },
  });

  const start = useCallback(() => {
    requestNotificationPermission();
    startTimer();
  }, [startTimer]);

  const setTime = useCallback(
    (time: number) => {
      const seconds = Math.min(86400, Math.max(1, time));
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
