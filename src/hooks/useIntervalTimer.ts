import { useCallback, useState } from "react";
import { useCountdown } from "./useCountdown";
import {
  requestNotificationPermission,
  showNotification,
} from "../utils/notifications";

export const useIntervalTimer = (initialInterval: number = 300) => {
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
      showNotification("Interval Timer", "Time's up! Take a break.");
    },
  });

  const start = useCallback(() => {
    requestNotificationPermission();
    startTimer();
  }, [startTimer]);

  const setTime = useCallback(
    (minutes: number) => {
      const seconds = Math.min(1440, Math.max(1, minutes)) * 60;
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
