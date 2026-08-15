import { useState, useEffect, useCallback, useRef } from "react";
import { MS_PER_SECOND, TIMER_TICK_MS } from "../config";

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
  const startRef = useRef<number | null>(null);
  const elapsedRef = useRef<number>(initialTime * MS_PER_SECOND);

  useEffect(() => {
    if (!isRunning) return;
    const interval = window.setInterval(() => {
      const elapsed =
        elapsedRef.current + (Date.now() - (startRef.current ?? Date.now()));
      setTime((prev) => {
        const next = Math.floor(elapsed / MS_PER_SECOND);
        return next === prev ? prev : next;
      });
    }, TIMER_TICK_MS);
    return () => clearInterval(interval);
  }, [isRunning]);

  const start = useCallback(() => {
    if (startRef.current !== null) return;
    startRef.current = Date.now();
    setIsRunning(true);
  }, []);

  const stop = useCallback(() => {
    if (startRef.current !== null) {
      elapsedRef.current += Date.now() - startRef.current;
      startRef.current = null;
    }
    setIsRunning(false);
  }, []);

  const reset = useCallback(
    (initialTimeValue: number = 0) => {
      stop();
      elapsedRef.current = initialTimeValue * MS_PER_SECOND;
      setTime(initialTimeValue);
    },
    [stop]
  );

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
