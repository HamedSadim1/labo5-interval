import { Play, Pause, RotateCcw } from "lucide-react";
import { useTimer } from "../hooks/useTimer";
import { formatTime } from "../utils/formatTime";
import { Button } from "./Button";
import { TitleWithIcon } from "./TitleWithIcon";

const Timer = () => {
  const { time, isRunning, start, stop, reset } = useTimer();

  return (
    <>
      <div>
        <TitleWithIcon icon={Play}>Stopwatch</TitleWithIcon>
        <div className="mb-8 bg-linear-to-b from-white to-slate-400 bg-clip-text text-5xl font-semibold tabular-nums tracking-tight text-transparent sm:text-6xl">
          {formatTime(time)}
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
          variant="danger"
          icon={Pause}
          className="w-full sm:w-auto"
        >
          Stop
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

export default Timer;
