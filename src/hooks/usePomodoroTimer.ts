import { useCallback, useState } from "react";
import { useCountdown } from "./useCountdown";
import {
  requestNotificationPermission,
  showNotification,
} from "../utils/notifications";

export const usePomodoroTimer = (workTime: number = 25 * 60) => {
  const [cycles, setCycles] = useState(0);

  const { duration, remaining, isRunning, start: startTimer, stop, reset } =
    useCountdown(workTime, {
      onComplete: () => {
        setCycles((prev) => prev + 1);
        showNotification("Focus Time", "Session complete!");
      },
    });

  const start = useCallback(() => {
    requestNotificationPermission();
    startTimer();
  }, [startTimer]);

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
