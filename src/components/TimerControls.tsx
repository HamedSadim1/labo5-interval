import { Pause, Play, RotateCcw } from "lucide-react";
import { Button } from "./Button";

interface TimerControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

export const TimerControls = ({
  isRunning,
  onStart,
  onPause,
  onReset,
}: TimerControlsProps) => {
  return (
    <div className="grid w-full grid-cols-3 gap-2 md:flex md:justify-center md:gap-3">
      <Button
        onClick={onStart}
        disabled={isRunning}
        variant="success"
        icon={Play}
        className="w-full md:w-auto"
      >
        Start
      </Button>
      <Button
        onClick={onPause}
        disabled={!isRunning}
        variant="secondary"
        icon={Pause}
        className="w-full md:w-auto"
      >
        Pause
      </Button>
      <Button
        onClick={onReset}
        variant="secondary"
        icon={RotateCcw}
        className="w-full md:w-auto"
      >
        Reset
      </Button>
    </div>
  );
};
