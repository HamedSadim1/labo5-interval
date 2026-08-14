import { useState, useEffect, useCallback } from "react";

export const usePomodoroTimer = (workTime: number = 25 * 60) => {
  const [timeLeft, setTimeLeft] = useState(workTime);
  const [isRunning, setIsRunning] = useState(false);
  const [cycles, setCycles] = useState(0);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;
    const interval = setInterval(() => {
      if (timeLeft <= 1) {
        setCycles((prev) => prev + 1);
        setTimeLeft(workTime);
        setIsRunning(false);
        if ("Notification" in window && Notification.permission === "granted") {
          new Notification("Focus Time", {
            body: "Session complete!",
          });
        }
      } else {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, workTime]);

  const start = useCallback(() => {
    setIsRunning(true);
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);

  const stop = useCallback(() => {
    setIsRunning(false);
  }, []);

  const reset = useCallback(() => {
    setIsRunning(false);
    setTimeLeft(workTime);
    setCycles(0);
  }, [workTime]);

  return {
    timeLeft,
    isRunning,
    cycles,
    workTime,
    start,
    stop,
    reset,
  };
};
