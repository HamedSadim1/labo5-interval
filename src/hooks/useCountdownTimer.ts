import { useCallback } from "react";
import { useCountdown } from "./useCountdown";

export const useCountdownTimer = (initialTime: number = 60) => {
  const { duration, remaining, isRunning, start, stop, reset, setDuration } =
    useCountdown(initialTime, {
      onComplete: () => {
        if ("Notification" in window && Notification.permission === "granted") {
          new Notification("Countdown Timer", {
            body: "Time's up!",
          });
        }
      },
    });

  const setTime = useCallback(
    (time: number) => {
      const seconds = Math.max(1, time);
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
