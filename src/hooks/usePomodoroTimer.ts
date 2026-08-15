import { useCallback, useEffect, useRef, useState } from "react";
import { useCountdown } from "./useCountdown";
import { useStartWithPermission } from "./useStartWithPermission";
import { notifyWithSound } from "@/utils";
import {
  CARD_LABELS,
  COPY,
  FOCUS_BREAK_SECONDS,
  FOCUS_WORK_SECONDS,
} from "@/config";

export type PomodoroMode = "work" | "break";

export const usePomodoroTimer = (
  workSeconds: number = FOCUS_WORK_SECONDS,
  breakSeconds: number = FOCUS_BREAK_SECONDS
) => {
  const [mode, setMode] = useState<PomodoroMode>("work");
  const [cycles, setCycles] = useState(0);

  const isRunningRef = useRef(false);
  const completeRef = useRef<() => void>(() => {});

  const {
    remaining,
    isRunning,
    start: startTimer,
    stop,
    reset,
    setDuration,
  } = useCountdown(workSeconds, {
    onComplete: () => completeRef.current(),
  });

  useEffect(() => {
    isRunningRef.current = isRunning;
  }, [isRunning]);

  const duration = mode === "work" ? workSeconds : breakSeconds;

  // Keep the countdown in sync with the active mode's duration
  useEffect(() => {
    setDuration(duration);
    if (!isRunningRef.current) reset();
  }, [duration, setDuration, reset]);

  const handleComplete = useCallback(() => {
    if (mode === "work") {
      setCycles((prev) => prev + 1);
      notifyWithSound(CARD_LABELS.focus, COPY.notifications.focusWorkDone);
      setMode("break");
      setDuration(breakSeconds);
      reset();
      startTimer();
    } else {
      notifyWithSound(CARD_LABELS.focus, COPY.notifications.focusBreakDone);
      setMode("work");
      setDuration(workSeconds);
      reset();
    }
  }, [mode, breakSeconds, workSeconds, setDuration, reset, startTimer]);

  useEffect(() => {
    completeRef.current = handleComplete;
  }, [handleComplete]);

  const start = useStartWithPermission(startTimer);

  const resetTimer = useCallback(() => {
    setMode("work");
    setDuration(workSeconds);
    reset();
  }, [setDuration, workSeconds, reset]);

  return {
    timeLeft: remaining,
    isRunning,
    mode,
    cycles,
    duration,
    start,
    stop,
    reset: resetTimer,
  };
};
