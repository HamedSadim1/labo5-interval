import { ReactNode, useRef } from "react";
import { LucideIcon } from "lucide-react";
import { useCardShortcuts } from "@/hooks/useCardShortcuts";
import { useCard } from "./CardContext";
import { ProgressRing } from "./ProgressRing";
import { TimeDisplay } from "./TimeDisplay";
import { TimerControls } from "./TimerControls";
import { TitleWithIcon } from "./TitleWithIcon";
import { StatusLine } from "./StatusLine";

interface TimerCardProps {
  /** Title icon */
  icon: LucideIcon;
  /** Accessible name describing what the ring measures */
  ringLabel: string;
  /** Ring progress between 0 and 1 */
  progress: number;
  /** Seconds to display as mm:ss */
  timeValue?: number;
  /** Pre-formatted time string — takes precedence over timeValue */
  timeText?: string;
  /** Whether the timer is running — pulses the digits and drives the controls */
  running?: boolean;
  /** Content for the status line below the ring */
  status?: ReactNode;
  /** ARIA live region role for the status line wrapper */
  statusRole?: string;
  /** Extra content between title and ring, e.g. an input field */
  input?: ReactNode;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

export const TimerCard = ({
  icon,
  ringLabel,
  progress,
  timeValue,
  timeText,
  running = false,
  status,
  statusRole,
  input,
  onStart,
  onPause,
  onReset,
}: TimerCardProps) => {
  const { label, accent } = useCard();
  const cardRef = useRef<HTMLDivElement>(null);

  useCardShortcuts(cardRef, {
    toggle: running ? onPause : onStart,
    reset: onReset,
  });

  return (
    <div
      ref={cardRef}
      tabIndex={0}
      className="flex w-full flex-1 flex-col justify-between rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-slate-300/70"
    >
      <div>
        <TitleWithIcon icon={icon} iconColor={accent}>
          {label}
        </TitleWithIcon>
        {input}
        <ProgressRing progress={progress} className={accent} label={ringLabel}>
          <TimeDisplay value={timeValue} text={timeText} running={running} />
        </ProgressRing>
        {status && <StatusLine role={statusRole}>{status}</StatusLine>}
      </div>
      <TimerControls
        isRunning={running}
        onStart={onStart}
        onPause={onPause}
        onReset={onReset}
      />
    </div>
  );
};
