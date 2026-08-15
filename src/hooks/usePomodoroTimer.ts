import { useCallback, useState } from "react";
import { useCountdown } from "./useCountdown";
import { showNotification, startWithPermission } from "@/utils";
import { CARD_LABELS, COPY, FOCUS_WORK_SECONDS } from "@/config";

export const usePomodoroTimer = (workTime: number = FOCUS_WORK_SECONDS) => {
  const [cycles, setCycles] = useState(0);

  const { duration, remaining, isRunning, start: startTimer, stop, reset } =
    useCountdown(workTime, {
      onComplete: () => {
        setCycles((prev) => prev + 1);
        showNotification(CARD_LABELS.focus, COPY.notifications.focusDone);
      },
    });

  const start = useCallback(() => startWithPermission(startTimer), [startTimer]);

  return {
    timeLeft: remaining,
    isRunning,
    cycles,
    workTime: duration,
    start,
    stop,
    reset,
  };
};
