import { Watch } from "lucide-react";
import { useTimer } from "../hooks/useTimer";
import { CardWidgetProps } from "../config";
import { progressInMinute } from "../utils/math";
import { ProgressRing } from "./ProgressRing";
import { TimeDisplay } from "./TimeDisplay";
import { TimerControls } from "./TimerControls";
import { TitleWithIcon } from "./TitleWithIcon";
import { StatusLine } from "./StatusLine";

const Timer = ({ label, accent }: CardWidgetProps) => {
  const { time, isRunning, start, stop, reset } = useTimer();

  return (
    <>
      <div>
        <TitleWithIcon icon={Watch} iconColor={accent}>
          {label}
        </TitleWithIcon>
        <ProgressRing
          progress={progressInMinute(time)}
          className={accent}
          label="Elapsed time in current minute"
        >
          <TimeDisplay value={time} running={isRunning} />
        </ProgressRing>
        <StatusLine role="status">
          <span className="text-slate-400">
            {isRunning ? "Running" : time > 0 ? "Paused" : "Ready"}
          </span>
        </StatusLine>
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
