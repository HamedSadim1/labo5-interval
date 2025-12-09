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
        <div className="text-6xl font-mono font-bold text-white mb-6 drop-shadow-lg">
          {formatTime(time)}
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
          variant="danger"
          icon={Pause}
        >
          Stop
        </Button>
        <Button onClick={reset} variant="secondary" icon={RotateCcw}>
          Reset
        </Button>
      </div>
    </>
  );
};

export default Timer;
