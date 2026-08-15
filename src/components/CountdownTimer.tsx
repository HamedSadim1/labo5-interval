import { Timer } from "lucide-react";
import { useCountdownTimer } from "../hooks/useCountdownTimer";
import { CardWidgetProps, MAX_COUNTDOWN_SECONDS } from "../config";
import { progressRatio } from "../utils/math";
import { NumberField } from "./NumberField";
import { ProgressRing } from "./ProgressRing";
import { TimeDisplay } from "./TimeDisplay";
import { TimerControls } from "./TimerControls";
import { TitleWithIcon } from "./TitleWithIcon";
import { StatusLine } from "./StatusLine";

const CountdownTimer = ({ label, accent }: CardWidgetProps) => {
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
        <TitleWithIcon icon={Timer} iconColor={accent}>
          {label}
        </TitleWithIcon>
        <NumberField
          id="countdown-time"
          label="Set time (seconds):"
          value={targetTime}
          onChange={setTime}
          disabled={isRunning}
          min={1}
          max={MAX_COUNTDOWN_SECONDS}
          focusColor="amber"
        />
        <ProgressRing
          progress={progressRatio(remaining, targetTime)}
          className={accent}
          label="Time remaining"
        >
          <TimeDisplay value={remaining} running={isRunning} />
        </ProgressRing>
        <StatusLine role="status">
          <span
            className={
              isComplete ? "font-medium text-emerald-400" : "text-slate-400"
            }
          >
            {statusText}
          </span>
        </StatusLine>
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
