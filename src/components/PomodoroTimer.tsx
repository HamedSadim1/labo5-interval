import { Brain } from "lucide-react";
import { usePomodoroTimer } from "../hooks/usePomodoroTimer";
import { CardWidgetProps } from "../config";
import { progressRatio } from "../utils/math";
import { ProgressRing } from "./ProgressRing";
import { TimeDisplay } from "./TimeDisplay";
import { TimerControls } from "./TimerControls";
import { TitleWithIcon } from "./TitleWithIcon";
import { StatusLine } from "./StatusLine";

const PomodoroTimer = ({ label, accent }: CardWidgetProps) => {
  const { timeLeft, isRunning, cycles, workTime, start, stop, reset } =
    usePomodoroTimer();

  return (
    <>
      <div>
        <TitleWithIcon icon={Brain} iconColor={accent}>
          {label}
        </TitleWithIcon>
        <ProgressRing
          progress={progressRatio(timeLeft, workTime)}
          className={accent}
          label="Time remaining"
        >
          <TimeDisplay value={timeLeft} running={isRunning} />
        </ProgressRing>
        <StatusLine>
          {timeLeft === 0 && !isRunning ? (
            <span className="font-medium text-emerald-400" role="status">
              Session complete!
            </span>
          ) : (
            <span className="text-slate-400">Cycles completed: {cycles}</span>
          )}
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

export default PomodoroTimer;
