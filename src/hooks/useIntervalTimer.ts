import { useCallback, useState } from "react";
import { useCountdown } from "./useCountdown";

export const useIntervalTimer = (initialInterval: number = 300) => {
  const [cycles, setCycles] = useState(0);

  const { duration, remaining, isRunning, start, stop, reset, setDuration } =
    useCountdown(initialInterval, {
      autoRestart: true,
      onComplete: () => {
        setCycles((prev) => prev + 1);
        if ("Notification" in window && Notification.permission === "granted") {
          new Notification("Interval Timer", {
            body: "Time's up! Take a break.",
          });
        }
      },
    });

  const setTime = useCallback(
    (minutes: number) => {
      const seconds = Math.max(1, minutes) * 60;
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
