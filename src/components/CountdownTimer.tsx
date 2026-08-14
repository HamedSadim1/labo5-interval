import { Play, Pause, RotateCcw, Timer } from "lucide-react";
import { useCountdownTimer } from "../hooks/useCountdownTimer";
import { formatTime } from "../utils/formatTime";
import { Button } from "./Button";
import { ProgressRing } from "./ProgressRing";
import { TitleWithIcon } from "./TitleWithIcon";

const CountdownTimer = () => {
  const { remaining, targetTime, isRunning, start, stop, reset, setTime } =
    useCountdownTimer();

  const handleSetTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setTime(value);
  };

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
        <div className="mb-6">
          <label
            htmlFor="countdown-time"
            className="mb-2 block text-center text-sm text-slate-400"
          >
            Set time (seconds):
          </label>
          <input
            id="countdown-time"
            type="number"
            value={targetTime}
            onChange={handleSetTime}
            disabled={isRunning}
            className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-center text-base text-white transition-colors placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30 disabled:cursor-not-allowed disabled:opacity-50"
            min="1"
          />
        </div>
        <ProgressRing
          progress={targetTime > 0 ? remaining / targetTime : 0}
          className="text-amber-400"
          label="Time remaining"
        >
          <span
            className={`font-mono text-5xl font-semibold tabular-nums tracking-tight text-white${isRunning ? " animate-pulse motion-reduce:animate-none" : ""}`}
          >
            {formatTime(remaining)}
          </span>
        </ProgressRing>
        <div className="mb-6 mt-6 text-center text-sm" role="status">
          <span
            className={isComplete ? "font-medium text-emerald-400" : "text-slate-400"}
          >
            {statusText}
          </span>
        </div>
      </div>
      <div className="grid w-full grid-cols-3 gap-2 md:flex md:justify-center md:gap-3">
        <Button
          onClick={start}
          disabled={isRunning}
          variant="success"
          icon={Play}
          className="w-full md:w-auto"
        >
          Start
        </Button>
        <Button
          onClick={stop}
          disabled={!isRunning}
          variant="secondary"
          icon={Pause}
          className="w-full md:w-auto"
        >
          Pause
        </Button>
        <Button
          onClick={reset}
          variant="secondary"
          icon={RotateCcw}
          className="w-full md:w-auto"
        >
          Reset
        </Button>
      </div>
    </>
  );
};

export default CountdownTimer;
