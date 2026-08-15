import { Watch } from "lucide-react";
import { useTimer } from "@/hooks/useTimer";
import { COPY } from "@/config";
import { progressInMinute } from "@/utils";
import { TEXT_MUTED } from "@/theme";
import { TimerCard } from "@/components/ui";

const Stopwatch = () => {
  const { time, isRunning, start, stop, reset } = useTimer();

  return (
    <TimerCard
      icon={Watch}
      ringLabel={COPY.rings.elapsedInMinute}
      progress={progressInMinute(time)}
      timeValue={time}
      running={isRunning}
      statusRole="status"
      status={
        <span className={TEXT_MUTED}>
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

export default Stopwatch;
