import { formatTime } from "../utils/formatTime";

interface TimeDisplayProps {
  /** Seconds to format as mm:ss */
  value?: number;
  /** Pre-formatted string (e.g. "HH:mm:ss") — takes precedence over value */
  text?: string;
  running?: boolean;
  className?: string;
}

export const TimeDisplay = ({
  value,
  text,
  running = false,
  className = "",
}: TimeDisplayProps) => {
  const display = text ?? formatTime(value ?? 0);
  const size = display.length > 5 ? "text-4xl" : "text-5xl";
  return (
    <span
      className={`font-mono ${size} font-semibold tabular-nums tracking-tight text-white${running ? " animate-pulse motion-reduce:animate-none" : ""} ${className}`}
    >
      {display}
    </span>
  );
};
