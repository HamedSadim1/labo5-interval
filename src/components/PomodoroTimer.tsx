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
          className="mb-6 text-4xl font-semibold tabular-nums tracking-tight transition-colors duration-500 sm:text-5xl"
          style={{ color: isBreak ? "#fb923c" : "#60a5fa" }}
        >
          {formatTime(timeLeft)}
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

export default PomodoroTimer;
