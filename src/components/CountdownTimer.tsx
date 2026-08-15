import { Timer } from "lucide-react";
import { useCountdownTimer } from "../hooks/useCountdownTimer";
import { NumberField } from "./NumberField";
import { ProgressRing } from "./ProgressRing";
import { TimeDisplay } from "./TimeDisplay";
import { TimerControls } from "./TimerControls";
import { TitleWithIcon } from "./TitleWithIcon";

const CountdownTimer = () => {
  const { remaining, targetTime, isRunning, start, stop, reset, setTime } =
    useCountdownTimer();

  const isComplete = remaining === 0 && !isRunning;
  const isPaused = !isRunning && remaining > 0 && remaining < targetTime;
  const statusText = isComplete
    ? "Finished!"
    : isRunning
      ? "Running"
      : isPaused
        ? "Paused"
        : "Ready";

  return (
    <>
      <div>
        <TitleWithIcon icon={Timer} iconColor="text-amber-400">
          Countdown Timer
        </TitleWithIcon>
        <NumberField
          id="countdown-time"
          label="Set time (seconds):"
          value={targetTime}
          onChange={setTime}
          disabled={isRunning}
          min={1}
          max={86400}
          focusColor="amber"
        />
        <ProgressRing
          progress={targetTime > 0 ? remaining / targetTime : 0}
          className="text-amber-400"
          label="Time remaining"
        >
          <TimeDisplay value={remaining} running={isRunning} />
        </ProgressRing>
        <div className="mb-6 mt-6 text-center text-sm" role="status">
          <span
            className={
              isComplete ? "font-medium text-emerald-400" : "text-slate-400"
            }
          >
            {statusText}
          </span>
        </div>
      </div>
      <TimerControls
        isRunning={isRunning}
        onStart={start}
        onPause={stop}
        onReset={reset}
      />
    </>
  );
};

export default CountdownTimer;
