import { ReactNode } from "react";
import { RING_SIZE, RING_STROKE } from "../config";
import { clamp } from "../utils/math";

interface ProgressRingProps {
  /** Progress between 0 and 1 */
  progress: number;
  size?: number;
  stroke?: number;
  /** Accent color class, e.g. "text-sky-400" */
  className?: string;
  /** Accessible name describing what the ring measures */
  label?: string;
  children: ReactNode;
}

export const ProgressRing = ({
  progress,
  size = RING_SIZE,
  stroke = RING_STROKE,
  className = "text-sky-400",
  label = "Progress",
  children,
}: ProgressRingProps) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = clamp(progress, 0, 1);
  const offset = circumference * (1 - clamped);
  const percent = Math.round(clamped * 100);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={size}
        height={size}
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        className={`-rotate-90 ${className}`}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          className="stroke-current opacity-20"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="stroke-current transition-all duration-500 ease-linear"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};
