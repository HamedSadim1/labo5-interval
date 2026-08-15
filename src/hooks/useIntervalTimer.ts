import { useState } from "react";
import { useCountdown } from "./useCountdown";
import { useDurationSetter } from "./useDurationSetter";
import { useStartWithPermission } from "./useStartWithPermission";
import { usePersist, usePersistentState } from "./usePersistentState";
import { notifyWithSound } from "@/utils";
import {
  CARD_LABELS,
  COPY,
  DEFAULT_INTERVAL_MINUTES,
  MAX_INTERVAL_MINUTES,
  MIN_DURATION,
  SECONDS_PER_MINUTE,
  STORAGE_KEYS,
} from "@/config";

export const useIntervalTimer = () => {
  const [cycles, setCycles] = useState(0);
  const [initialMinutes] = usePersistentState(
    STORAGE_KEYS.intervalMinutes,
    DEFAULT_INTERVAL_MINUTES
  );

  const {
    duration,
    remaining,
    isRunning,
    start: startTimer,
    stop,
    reset,
    setDuration,
  } = useCountdown(initialMinutes * SECONDS_PER_MINUTE, {
    autoRestart: true,
    onComplete: (completedCount = 1) => {
      setCycles((prev) => prev + completedCount);
      notifyWithSound(CARD_LABELS.interval, COPY.notifications.intervalDone);
    },
  });

  const start = useStartWithPermission(startTimer);
  const setTime = useDurationSetter(
    { setDuration, reset, isRunning },
    MIN_DURATION,
    MAX_INTERVAL_MINUTES,
    SECONDS_PER_MINUTE
  );

  // Keep the configured interval (minutes) in sync with localStorage
  usePersist(STORAGE_KEYS.intervalMinutes, duration / SECONDS_PER_MINUTE);

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
