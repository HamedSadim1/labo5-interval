import { Play, Pause, RotateCcw, Watch } from "lucide-react";
import { useTimer } from "../hooks/useTimer";
import { formatTime } from "../utils/formatTime";
import { Button } from "./Button";
import { ProgressRing } from "./ProgressRing";
import { TitleWithIcon } from "./TitleWithIcon";

const Timer = () => {
  const { time, isRunning, start, stop, reset } = useTimer();

  return (
    <>
      <div>
        <TitleWithIcon icon={Watch} iconColor="text-sky-400">
          Stopwatch
        </TitleWithIcon>
        <ProgressRing progress={(time % 60) / 60} className="text-sky-400">
          <span
            className={`font-mono text-5xl font-semibold tabular-nums tracking-tight text-white${isRunning ? " animate-pulse motion-reduce:animate-none" : ""}`}
          >
            {formatTime(time)}
          </span>
        </ProgressRing>
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
          variant="danger"
          icon={Pause}
          className="w-full md:w-auto"
        >
          Stop
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

export default Timer;
