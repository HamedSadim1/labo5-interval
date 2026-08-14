import { Play, Pause, RotateCcw, Brain } from "lucide-react";
import { usePomodoroTimer } from "../hooks/usePomodoroTimer";
import { formatTime } from "../utils/formatTime";
import { Button } from "./Button";
import { ProgressRing } from "./ProgressRing";
import { TitleWithIcon } from "./TitleWithIcon";

const PomodoroTimer = () => {
  const { timeLeft, isRunning, cycles, workTime, start, stop, reset } =
    usePomodoroTimer();

  return (
    <>
      <div>
        <TitleWithIcon icon={Brain} iconColor="text-violet-400">
          Focus Time
        </TitleWithIcon>
        <ProgressRing
          progress={workTime > 0 ? timeLeft / workTime : 0}
          className="text-violet-400"
        >
          <span
            className={`font-mono text-5xl font-semibold tabular-nums tracking-tight text-white${isRunning ? " animate-pulse motion-reduce:animate-none" : ""}`}
          >
            {formatTime(timeLeft)}
          </span>
        </ProgressRing>
        <div className="mb-6 mt-6 text-center text-sm text-slate-400">
          Sessions completed: {cycles}
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

export default PomodoroTimer;
