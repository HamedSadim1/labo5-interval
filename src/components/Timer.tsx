import { Watch } from "lucide-react";
import { useTimer } from "../hooks/useTimer";
import { CardWidgetProps, COPY } from "../config";
import { progressInMinute } from "../utils/math";
import { TimerCard } from "./TimerCard";

const Timer = ({ label, accent }: CardWidgetProps) => {
  const { time, isRunning, start, stop, reset } = useTimer();

  return (
    <TimerCard
      label={label}
      accent={accent}
      icon={Watch}
      ringLabel={COPY.rings.elapsedInMinute}
      progress={progressInMinute(time)}
      timeValue={time}
      running={isRunning}
      statusRole="status"
      status={
        <span className="text-slate-400">
          {isRunning
            ? COPY.status.running
            : time > 0
              ? COPY.status.paused
              : COPY.status.ready}
        </span>
      }
      onStart={start}
      onPause={stop}
      onReset={reset}
    />
  );
};

export default Timer;
