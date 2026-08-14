import { Play, Pause, RotateCcw, Bell } from "lucide-react";
import { useIntervalTimer } from "../hooks/useIntervalTimer";
import { formatTime } from "../utils/formatTime";
import { Button } from "./Button";
import { TitleWithIcon } from "./TitleWithIcon";

const IntervalTimer = () => {
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

  const handleSetTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setTime(value);
  };

  return (
    <>
      <div>
        <TitleWithIcon icon={Bell}>Interval Timer</TitleWithIcon>
        <div className="mb-6">
          <label className="mb-2 block text-center text-sm text-slate-400">
            Interval (minutes):
          </label>
          <input
            type="number"
            value={intervalTime / 60}
            onChange={handleSetTime}
            className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-center text-base text-white transition-colors placeholder-slate-500 focus:border-orange-400/60 focus:outline-none focus:ring-2 focus:ring-orange-400/30"
            min="1"
          />
        </div>
        <div
          className={`mb-3 text-4xl font-semibold tabular-nums tracking-tight text-orange-400 sm:text-5xl${isRunning ? " animate-pulse motion-reduce:animate-none" : ""}`}
        >
          {formatTime(remaining)}
        </div>
        <div className="mb-6 text-center text-sm text-slate-400">
          Cycles completed: {cycles}
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

export default IntervalTimer;
