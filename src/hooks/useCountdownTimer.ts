import { useCountdown } from "./useCountdown";
import { useDurationSetter } from "./useDurationSetter";
import { useStartWithPermission } from "./useStartWithPermission";
import { usePersist, usePersistentState } from "./usePersistentState";
import { notifyWithSound } from "@/utils";
import {
  CARD_LABELS,
  COPY,
  DEFAULT_COUNTDOWN_SECONDS,
  MAX_COUNTDOWN_SECONDS,
  MIN_DURATION,
  STORAGE_KEYS,
} from "@/config";

export const useCountdownTimer = () => {
  const [initialSeconds] = usePersistentState(
    STORAGE_KEYS.countdownSeconds,
    DEFAULT_COUNTDOWN_SECONDS
  );

  const {
    duration,
    remaining,
    isRunning,
    start: startTimer,
    stop,
    reset,
    setDuration,
  } = useCountdown(initialSeconds, {
    onComplete: () =>
      notifyWithSound(CARD_LABELS.countdown, COPY.notifications.countdownDone),
  });

  const start = useStartWithPermission(startTimer);
  const setTime = useDurationSetter(
    { setDuration, reset, isRunning },
    MIN_DURATION,
    MAX_COUNTDOWN_SECONDS
  );

  // Keep the configured duration in sync with localStorage
  usePersist(STORAGE_KEYS.countdownSeconds, duration);

  return {
    remaining,
    targetTime: duration,
    isRunning,
    start,
    stop,
    reset,
    setTime,
  };
};
