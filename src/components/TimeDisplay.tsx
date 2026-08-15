import { formatTime } from "../utils/formatTime";

interface TimeDisplayProps {
  value: number;
  running?: boolean;
  className?: string;
}

export const TimeDisplay = ({
  value,
  running = false,
  className = "",
}: TimeDisplayProps) => {
  const text = formatTime(value);
  const size = text.length > 5 ? "text-4xl" : "text-5xl";
  return (
    <span
      className={`font-mono ${size} font-semibold tabular-nums tracking-tight text-white${running ? " animate-pulse motion-reduce:animate-none" : ""} ${className}`}
    >
      {text}
    </span>
  );
};
