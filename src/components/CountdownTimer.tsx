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
        <div className="mb-4">
          <label className="block text-sm text-white/80 mb-2 text-center">
            Set time (seconds):
          </label>
          <input
            type="number"
            value={targetTime}
            onChange={handleSetTime}
            className="w-full px-3 py-2 border border-white/30 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-300"
            min="1"
          />
        </div>
        <div className="text-6xl font-mono font-bold text-white mb-6 drop-shadow-lg">
          {formatTime(remaining)}
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

export default CountdownTimer;
