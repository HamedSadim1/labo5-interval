import { Watch } from "lucide-react";
import { useTimer } from "../hooks/useTimer";
import { ProgressRing } from "./ProgressRing";
import { TimeDisplay } from "./TimeDisplay";
import { TimerControls } from "./TimerControls";
import { TitleWithIcon } from "./TitleWithIcon";

const Timer = () => {
  const { time, isRunning, start, stop, reset } = useTimer();

  return (
    <>
      <div>
        <TitleWithIcon icon={Watch} iconColor="text-sky-400">
          Stopwatch
        </TitleWithIcon>
        <ProgressRing
          progress={(time % 60) / 60}
          className="text-sky-400"
          label="Elapsed time in current minute"
        >
          <TimeDisplay value={time} running={isRunning} />
        </ProgressRing>
        <div
          className="mb-6 mt-6 text-center text-sm text-slate-400"
          role="status"
        >
          {isRunning ? "Running" : time > 0 ? "Paused" : "Ready"}
        </div>
      </div>
      <TimerControls
        isRunning={isRunning}
        onStart={start}
        onPause={stop}
        onReset={reset}
      />
    </>
  );
};

export default Timer;
