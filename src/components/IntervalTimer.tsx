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
        <div className="mb-4">
          <label className="block text-sm text-white/80 mb-2 text-center">
            Interval (minutes):
          </label>
          <input
            type="number"
            value={intervalTime / 60}
            onChange={handleSetTime}
            className="w-full px-3 py-2 border border-white/30 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-300"
            min="1"
          />
        </div>
        <div className="text-4xl font-mono font-bold text-orange-600 mb-4">
          {formatTime(remaining)}
        </div>
        <div className="text-sm text-white/80 mb-4 text-center">
          Cycles completed: {cycles}
        </div>
      </div>
      <div className="flex justify-center space-x-3">
        <Button
          onClick={start}
          disabled={isRunning}
          variant="success"
          icon={Play}
        >
          Start
        </Button>
        <Button
          onClick={stop}
          disabled={!isRunning}
          variant="secondary"
          icon={Pause}
        >
          Pause
        </Button>
        <Button onClick={reset} variant="secondary" icon={RotateCcw}>
          Reset
        </Button>
      </div>
    </>
  );
};

export default IntervalTimer;
