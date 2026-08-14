import { Play, Pause, RotateCcw, Timer } from "lucide-react";
import { useCountdownTimer } from "../hooks/useCountdownTimer";
import { formatTime } from "../utils/formatTime";
import { Button } from "./Button";
import { TitleWithIcon } from "./TitleWithIcon";

const CountdownTimer = () => {
  const { remaining, targetTime, isRunning, start, stop, reset, setTime } =
    useCountdownTimer();

  const handleSetTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setTime(value);
  };

  return (
    <>
      <div>
        <TitleWithIcon icon={Timer}>Countdown Timer</TitleWithIcon>
        <div className="mb-6">
          <label className="mb-2 block text-center text-sm text-slate-400">
            Set time (seconds):
          </label>
          <input
            type="number"
            value={targetTime}
            onChange={handleSetTime}
            className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-center text-sm text-white transition-colors placeholder-slate-500 focus:border-rose-400/60 focus:outline-none focus:ring-2 focus:ring-rose-400/30"
            min="1"
          />
        </div>
        <div className="mb-6 text-6xl font-semibold tabular-nums tracking-tight text-white">
          {formatTime(remaining)}
        </div>
      </div>
      <div className="grid w-full grid-cols-3 gap-2 sm:flex sm:justify-center sm:gap-3">
        <Button
          onClick={start}
          disabled={isRunning}
          variant="success"
          icon={Play}
          className="w-full sm:w-auto"
        >
          Start
        </Button>
        <Button
          onClick={stop}
          disabled={!isRunning}
          variant="secondary"
          icon={Pause}
          className="w-full sm:w-auto"
        >
          Pause
        </Button>
        <Button
          onClick={reset}
          variant="secondary"
          icon={RotateCcw}
          className="w-full sm:w-auto"
        >
          Reset
        </Button>
      </div>
    </>
  );
};

export default CountdownTimer;
