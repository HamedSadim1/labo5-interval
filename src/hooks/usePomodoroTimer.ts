import { useState, useEffect, useCallback } from "react";

export const usePomodoroTimer = (
  workTime: number = 25 * 60,
  breakTime: number = 5 * 60
) => {
  const [timeLeft, setTimeLeft] = useState(workTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [cycles, setCycles] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      if (isBreak) {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- deliberate: switch back to work when the break ends
        setIsBreak(false);
        setTimeLeft(workTime); // Back to work
      } else {
        setIsBreak(true);
        setTimeLeft(breakTime); // 5 minute break
        setCycles((prev) => prev + 1);
      }
      setIsRunning(false);
      // Notification
      if ("Notification" in window && Notification.permission === "granted") {
        new Notification(isBreak ? "Break Time!" : "Work Time!", {
          body: isBreak ? "Take a 5-minute break." : "Time to focus!",
        });
      }
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft, isBreak, workTime, breakTime]);

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
    setIsBreak(false);
    setTimeLeft(workTime);
    setCycles(0);
  }, [workTime]);

  return {
    timeLeft,
    isRunning,
    isBreak,
    cycles,
    start,
    stop,
    reset,
  };
};
