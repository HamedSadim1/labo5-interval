import { useState, useEffect, useCallback, useRef } from "react";
import { MS_PER_SECOND, TIMER_TICK_MS } from "@/config";

interface UseCountdownOptions {
  /** Keep running and restart from the full duration when it reaches zero */
  autoRestart?: boolean;
  /**
   * Called when the countdown reaches zero. Receives how many cycles
   * elapsed while the tab was throttled, so cycle counters stay accurate
   * in background tabs.
   */
  onComplete?: (completedCount?: number) => void;
}

/**
 * Wall-clock based countdown: remaining time is derived from an end
 * timestamp, so timers stay accurate even when the tab is backgrounded
 * and the browser throttles setInterval.
 */
export const useCountdown = (
  initialDuration: number,
  { autoRestart = false, onComplete }: UseCountdownOptions = {}
) => {
  const [duration, setDurationState] = useState(initialDuration);
  const [remaining, setRemaining] = useState(initialDuration);
  const [isRunning, setIsRunning] = useState(false);

  const durationRef = useRef(initialDuration);
  const remainingRef = useRef(initialDuration);
  const endRef = useRef<number | null>(null);
  const onCompleteRef = useRef(onComplete);
  const autoRestartRef = useRef(autoRestart);

  useEffect(() => {
    durationRef.current = duration;
  }, [duration]);

  useEffect(() => {
    remainingRef.current = remaining;
  }, [remaining]);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    autoRestartRef.current = autoRestart;
  }, [autoRestart]);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      const end = endRef.current;
      if (end === null) return;
      const now = Date.now();
      const left = Math.max(0, Math.ceil((end - now) / MS_PER_SECOND));
      if (left !== remainingRef.current) {
        setRemaining(left);
        remainingRef.current = left;
      }
      if (left <= 0) {
        // Credit every cycle that completed while the tab was throttled
        const durationMs = Math.max(MS_PER_SECOND, durationRef.current * MS_PER_SECOND);
        const missed = Math.max(1, Math.floor((now - end) / durationMs) + 1);
        endRef.current = null;
        if (autoRestartRef.current) {
          endRef.current = end + missed * durationMs;
          setRemaining(durationRef.current);
          remainingRef.current = durationRef.current;
        } else {
          setIsRunning(false);
        }
        onCompleteRef.current?.(missed);
      }
    }, TIMER_TICK_MS);
    return () => clearInterval(interval);
  }, [isRunning]);

  /** Start or resume; restarts from the full duration if it has finished */
  const start = useCallback(() => {
    if (remainingRef.current <= 0) {
      const next = durationRef.current;
      setRemaining(next);
      remainingRef.current = next;
      endRef.current = Date.now() + next * MS_PER_SECOND;
    } else {
      endRef.current = Date.now() + remainingRef.current * MS_PER_SECOND;
    }
    setIsRunning(true);
  }, []);

  /** Pause, keeping the remaining time */
  const stop = useCallback(() => {
    endRef.current = null;
    setIsRunning(false);
  }, []);

  /** Stop and restore the full duration */
  const reset = useCallback(() => {
    endRef.current = null;
    setIsRunning(false);
    setRemaining(durationRef.current);
    remainingRef.current = durationRef.current;
  }, []);

  /** Change the configured duration */
  const setDuration = useCallback((value: number) => {
    setDurationState(value);
    durationRef.current = value;
  }, []);

  return {
    duration,
    remaining,
    isRunning,
    start,
    stop,
    reset,
    setDuration,
  };
};
