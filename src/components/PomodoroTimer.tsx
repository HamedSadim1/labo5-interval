import { Brain } from "lucide-react";
import { usePomodoroTimer } from "@/hooks/usePomodoroTimer";
import { CardWidgetProps, COPY } from "@/config";
import { progressRatio } from "@/utils";
import { TimerCard } from "./TimerCard";

const PomodoroTimer = ({ label, accent }: CardWidgetProps) => {
  const { timeLeft, isRunning, cycles, workTime, start, stop, reset } =
    usePomodoroTimer();

  return (
    <TimerCard
      label={label}
      accent={accent}
      icon={Brain}
      ringLabel={COPY.rings.timeRemaining}
      progress={progressRatio(timeLeft, workTime)}
      timeValue={timeLeft}
      running={isRunning}
      status={
        timeLeft === 0 && !isRunning ? (
          <span className="font-medium text-emerald-400" role="status">
            {COPY.status.sessionComplete}
          </span>
        ) : (
          <span className="text-slate-400">
            {COPY.status.cyclesCompleted(cycles)}
          </span>
        )
      }
      onStart={start}
      onPause={stop}
      onReset={reset}
    />
  );
};

export default PomodoroTimer;
