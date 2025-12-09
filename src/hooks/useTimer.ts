import { useState, useEffect, useCallback } from "react";

interface UseTimerReturn {
  time: number;
  isRunning: boolean;
  start: () => void;
  stop: () => void;
  reset: (initialTime?: number) => void;
  setTime: (time: number) => void;
}

export const useTimer = (initialTime: number = 0): UseTimerReturn => {
  const [time, setTime] = useState<number>(initialTime);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: number | null = null;

    if (isRunning) {
      interval = window.setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, time]);

  const start = useCallback(() => {
    setIsRunning(true);
  }, []);

  const stop = useCallback(() => {
    setIsRunning(false);
  }, []);

  const reset = useCallback((initialTimeValue: number = 0) => {
    setIsRunning(false);
    setTime(initialTimeValue);
  }, []);

  const setTimerTime = useCallback((newTime: number) => {
    setTime(newTime);
  }, []);

  return {
    time,
    isRunning,
    start,
    stop,
    reset,
    setTime: setTimerTime,
  };
};
