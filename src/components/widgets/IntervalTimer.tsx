import { Bell } from "lucide-react";
import { useIntervalTimer } from "@/hooks/useIntervalTimer";
import {
  COPY,
  MAX_INTERVAL_MINUTES,
  MIN_DURATION,
  SECONDS_PER_MINUTE,
} from "@/config";
import { progressRatio } from "@/utils";
import { TEXT_MUTED } from "@/theme";
import { useCard, NumberField, TimerCard } from "@/components/ui";

const IntervalTimer = () => {
  const { accentName } = useCard();
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
      icon={Bell}
      ringLabel={COPY.rings.timeRemaining}
      progress={progressRatio(remaining, intervalTime)}
      timeValue={remaining}
      running={isRunning}
      status={
        <span className={TEXT_MUTED}>
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
          focusColor={accentName}
        />
      }
      onStart={start}
      onPause={stop}
      onReset={reset}
    />
  );
};

export default IntervalTimer;
