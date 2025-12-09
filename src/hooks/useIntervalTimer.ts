import { useState, useEffect, useCallback } from "react";

export const useIntervalTimer = (initialInterval: number = 300) => {
  const [intervalTime, setIntervalTime] = useState(initialInterval);
  const [remaining, setRemaining] = useState(initialInterval);
  const [isRunning, setIsRunning] = useState(false);
  const [cycles, setCycles] = useState(0);

  useEffect(() => {
    let interval: number | null = null;
    if (isRunning && remaining > 0) {
      interval = setInterval(() => {
        setRemaining((prev) => prev - 1);
      }, 1000);
    } else if (remaining === 0) {
      // Play notification sound (browser API)
      if ("Notification" in window && Notification.permission === "granted") {
        new Notification("Interval Timer", {
          body: "Time's up! Take a break.",
        });
      }
      setCycles((prev) => prev + 1);
      setRemaining(intervalTime); // Reset for next cycle
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, remaining, intervalTime]);

  const start = useCallback(() => {
    setIsRunning(true);
    // Request notification permission
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);

  const stop = useCallback(() => {
    setIsRunning(false);
  }, []);

  const reset = useCallback(() => {
    setIsRunning(false);
    setRemaining(intervalTime);
    setCycles(0);
  }, [intervalTime]);

  const setTime = useCallback(
    (minutes: number) => {
      const seconds = minutes * 60;
      setIntervalTime(seconds);
      if (!isRunning) setRemaining(seconds);
    },
    [isRunning]
  );

  return {
    remaining,
    intervalTime,
    isRunning,
    cycles,
    start,
    stop,
    reset,
    setTime,
  };
};
