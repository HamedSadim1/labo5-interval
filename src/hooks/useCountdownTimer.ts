import { useState, useEffect, useCallback } from "react";

export const useCountdownTimer = (initialTime: number = 60) => {
  const [targetTime, setTargetTime] = useState(initialTime);
  const [remaining, setRemaining] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || remaining <= 0) return;
    const interval = setInterval(() => {
      if (remaining <= 1) {
        setIsRunning(false);
        alert("Countdown finished!");
        setRemaining(0);
      } else {
        setRemaining(remaining - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, remaining]);

  const start = useCallback(() => {
    setRemaining(targetTime);
    setIsRunning(true);
  }, [targetTime]);

  const stop = useCallback(() => {
    setIsRunning(false);
  }, []);

  const reset = useCallback(() => {
    setIsRunning(false);
    setRemaining(targetTime);
  }, [targetTime]);

  const setTime = useCallback(
    (time: number) => {
      setTargetTime(time);
      if (!isRunning) setRemaining(time);
    },
    [isRunning]
  );

  return {
    remaining,
    targetTime,
    isRunning,
    start,
    stop,
    reset,
    setTime,
  };
};
