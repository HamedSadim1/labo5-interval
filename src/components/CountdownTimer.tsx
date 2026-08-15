import { Timer } from "lucide-react";
import { useCountdownTimer } from "../hooks/useCountdownTimer";
import {
  CardWidgetProps,
  COPY,
  MAX_COUNTDOWN_SECONDS,
  MIN_DURATION,
} from "../config";
import { progressRatio } from "../utils";
import { NumberField } from "./NumberField";
import { TimerCard } from "./TimerCard";

const CountdownTimer = ({ label, accent }: CardWidgetProps) => {
  const { remaining, targetTime, isRunning, start, stop, reset, setTime } =
    useCountdownTimer();

  const isComplete = remaining === 0 && !isRunning;
  const isPaused = !isRunning && remaining > 0 && remaining < targetTime;
  const statusText = isComplete
    ? COPY.status.finished
    : isRunning
      ? COPY.status.running
      : isPaused
        ? COPY.status.paused
        : COPY.status.ready;

  return (
    <TimerCard
      label={label}
      accent={accent}
      icon={Timer}
      ringLabel={COPY.rings.timeRemaining}
      progress={progressRatio(remaining, targetTime)}
      timeValue={remaining}
      running={isRunning}
      statusRole="status"
      status={
        <span
          className={
            isComplete ? "font-medium text-emerald-400" : "text-slate-400"
          }
        >
          {statusText}
        </span>
      }
      input={
        <NumberField
          id="countdown-time"
          label={COPY.fields.countdownSeconds}
          value={targetTime}
          onChange={setTime}
          disabled={isRunning}
          min={MIN_DURATION}
          max={MAX_COUNTDOWN_SECONDS}
          focusColor="amber"
        />
      }
      onStart={start}
      onPause={stop}
      onReset={reset}
    />
  );
};

export default CountdownTimer;
