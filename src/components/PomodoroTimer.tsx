import { Brain } from "lucide-react";
import { usePomodoroTimer } from "../hooks/usePomodoroTimer";
import { ProgressRing } from "./ProgressRing";
import { TimeDisplay } from "./TimeDisplay";
import { TimerControls } from "./TimerControls";
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
          label="Time remaining"
        >
          <TimeDisplay value={timeLeft} running={isRunning} />
        </ProgressRing>
        <div className="mb-6 mt-6 text-center text-sm">
          {timeLeft === 0 && !isRunning ? (
            <span className="font-medium text-emerald-400" role="status">
              Session complete!
            </span>
          ) : (
            <span className="text-slate-400">Cycles completed: {cycles}</span>
          )}
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

export default PomodoroTimer;
