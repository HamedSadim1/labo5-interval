import { Bell } from "lucide-react";
import { useIntervalTimer } from "../hooks/useIntervalTimer";
import { NumberField } from "./NumberField";
import { ProgressRing } from "./ProgressRing";
import { TimeDisplay } from "./TimeDisplay";
import { TimerControls } from "./TimerControls";
import { TitleWithIcon } from "./TitleWithIcon";

const IntervalTimer = () => {
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
        <TitleWithIcon icon={Bell} iconColor="text-orange-400">
          Interval Timer
        </TitleWithIcon>
        <NumberField
          id="interval-time"
          label="Interval (minutes):"
          value={intervalTime / 60}
          onChange={setTime}
          disabled={isRunning}
          min={1}
          max={1440}
          focusColor="orange"
        />
        <ProgressRing
          progress={intervalTime > 0 ? remaining / intervalTime : 0}
          className="text-orange-400"
          label="Time remaining"
        >
          <TimeDisplay value={remaining} running={isRunning} />
        </ProgressRing>
        <div className="mb-6 mt-6 text-center text-sm text-slate-400">
          Cycles completed: {cycles}
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

export default IntervalTimer;
