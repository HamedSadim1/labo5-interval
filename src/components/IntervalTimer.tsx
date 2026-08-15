import { Bell } from "lucide-react";
import { useIntervalTimer } from "../hooks/useIntervalTimer";
import { CardWidgetProps, MAX_INTERVAL_MINUTES } from "../config";
import { progressRatio } from "../utils/math";
import { NumberField } from "./NumberField";
import { ProgressRing } from "./ProgressRing";
import { TimeDisplay } from "./TimeDisplay";
import { TimerControls } from "./TimerControls";
import { TitleWithIcon } from "./TitleWithIcon";
import { StatusLine } from "./StatusLine";

const IntervalTimer = ({ label, accent }: CardWidgetProps) => {
  const {
    remaining,
    intervalTime,
    isRunning,
    cycles,
    start,
    stop,
    reset,
    setTime,
  } = useIntervalTimer();

  return (
    <>
      <div>
        <TitleWithIcon icon={Bell} iconColor={accent}>
          {label}
        </TitleWithIcon>
        <NumberField
          id="interval-time"
          label="Interval (minutes):"
          value={intervalTime / 60}
          onChange={setTime}
          disabled={isRunning}
          min={1}
          max={MAX_INTERVAL_MINUTES}
          focusColor="orange"
        />
        <ProgressRing
          progress={progressRatio(remaining, intervalTime)}
          className={accent}
          label="Time remaining"
        >
          <TimeDisplay value={remaining} running={isRunning} />
        </ProgressRing>
        <StatusLine>
          <span className="text-slate-400">Cycles completed: {cycles}</span>
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

export default IntervalTimer;
