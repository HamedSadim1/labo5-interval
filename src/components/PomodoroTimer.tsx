import { Play, Pause, RotateCcw, Coffee, Brain } from "lucide-react";
import { usePomodoroTimer } from "../hooks/usePomodoroTimer";
import { formatTime } from "../utils/formatTime";
import { Button } from "./Button";
import { TitleWithIcon } from "./TitleWithIcon";

const PomodoroTimer = () => {
  const { timeLeft, isRunning, isBreak, cycles, start, stop, reset } =
    usePomodoroTimer();

  return (
    <>
      <div>
        <TitleWithIcon icon={isBreak ? Coffee : Brain}>
          {isBreak ? "Break Time" : "Focus Time"}
        </TitleWithIcon>
        <div
          className="text-5xl font-mono font-bold mb-4"
          style={{ color: isBreak ? "#f97316" : "#3b82f6" }}
        >
          {formatTime(timeLeft)}
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

export default PomodoroTimer;
