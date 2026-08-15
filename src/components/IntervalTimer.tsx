import { Bell } from "lucide-react";
import { useIntervalTimer } from "@/hooks/useIntervalTimer";
import {
  CardWidgetProps,
  COPY,
  MAX_INTERVAL_MINUTES,
  MIN_DURATION,
  SECONDS_PER_MINUTE,
} from "@/config";
import { progressRatio } from "@/utils";
import { NumberField } from "./NumberField";
import { TimerCard } from "./TimerCard";

const IntervalTimer = ({ label, accent }: CardWidgetProps) => {
  const {
    remaining,
    intervalTime,
    isRunning,
    cycles,
    start,
    stop,
    reset,
    setTime,
  } = useIntervalTimer();

  return (
    <TimerCard
      label={label}
      accent={accent}
      icon={Bell}
      ringLabel={COPY.rings.timeRemaining}
      progress={progressRatio(remaining, intervalTime)}
      timeValue={remaining}
      running={isRunning}
      status={
        <span className="text-slate-400">
          {COPY.status.cyclesCompleted(cycles)}
        </span>
      }
      input={
        <NumberField
          id="interval-time"
          label={COPY.fields.intervalMinutes}
          value={intervalTime / SECONDS_PER_MINUTE}
          onChange={setTime}
          disabled={isRunning}
          min={MIN_DURATION}
          max={MAX_INTERVAL_MINUTES}
          focusColor="orange"
        />
      }
      onStart={start}
      onPause={stop}
      onReset={reset}
    />
  );
};

export default IntervalTimer;
