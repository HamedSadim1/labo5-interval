import { Timer } from "lucide-react";
import { useCountdownTimer } from "@/hooks/useCountdownTimer";
import { COPY, MAX_COUNTDOWN_SECONDS, MIN_DURATION } from "@/config";
import { progressRatio } from "@/utils";
import { TEXT_MUTED } from "@/theme";
import { useCard } from "./CardContext";
import { NumberField } from "./NumberField";
import { PresetButtons } from "./PresetButtons";
import { TimerCard } from "./TimerCard";

const CountdownTimer = () => {
  const { accentName } = useCard();
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
      icon={Timer}
      ringLabel={COPY.rings.timeRemaining}
      progress={progressRatio(remaining, targetTime)}
      timeValue={remaining}
      running={isRunning}
      statusRole="status"
      status={
        <span
          className={
            isComplete ? "font-medium text-emerald-400" : TEXT_MUTED
          }
        >
          {statusText}
        </span>
      }
      input={
        <>
          <NumberField
            id="countdown-time"
            label={COPY.fields.countdownSeconds}
            value={targetTime}
            onChange={setTime}
            disabled={isRunning}
            min={MIN_DURATION}
            max={MAX_COUNTDOWN_SECONDS}
            focusColor={accentName}
          />
          <PresetButtons onSelect={setTime} disabled={isRunning} />
        </>
      }
      onStart={start}
      onPause={stop}
      onReset={reset}
    />
  );
};

export default CountdownTimer;
