import { Play, Pause, RotateCcw, Bell } from "lucide-react";
import { useIntervalTimer } from "../hooks/useIntervalTimer";
import { formatTime } from "../utils/formatTime";
import { Button } from "./Button";
import { ProgressRing } from "./ProgressRing";
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
        <TitleWithIcon icon={Bell} iconColor="text-orange-400">
          Interval Timer
        </TitleWithIcon>
        <div className="mb-6">
          <label className="mb-2 block text-center text-sm text-slate-400">
            Interval (minutes):
          </label>
          <input
            type="number"
            value={intervalTime / 60}
            onChange={handleSetTime}
            disabled={isRunning}
            className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-center text-base text-white transition-colors placeholder-slate-500 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/30 disabled:cursor-not-allowed disabled:opacity-50"
            min="1"
          />
        </div>
        <ProgressRing
          progress={intervalTime > 0 ? remaining / intervalTime : 0}
          className="text-orange-400"
        >
          <span
            className={`font-mono text-5xl font-semibold tabular-nums tracking-tight text-white${isRunning ? " animate-pulse motion-reduce:animate-none" : ""}`}
          >
            {formatTime(remaining)}
          </span>
        </ProgressRing>
        <div className="mb-6 mt-6 text-center text-sm text-slate-400">
          Cycles completed: {cycles}
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

export default IntervalTimer;
