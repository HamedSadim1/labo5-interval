import { useState } from "react";
import { useCountdown } from "./useCountdown";

export const usePomodoroTimer = (workTime: number = 25 * 60) => {
  const [cycles, setCycles] = useState(0);

  const { duration, remaining, isRunning, start, stop, reset } = useCountdown(
    workTime,
    {
      onComplete: () => {
        setCycles((prev) => prev + 1);
        if ("Notification" in window && Notification.permission === "granted") {
          new Notification("Focus Time", {
            body: "Session complete!",
          });
        }
      },
    }
  );

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
