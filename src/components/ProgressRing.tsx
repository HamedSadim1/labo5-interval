import { ReactNode } from "react";

interface ProgressRingProps {
  /** Progress between 0 and 1 */
  progress: number;
  size?: number;
  stroke?: number;
  /** Accent color class, e.g. "text-sky-400" */
  className?: string;
  children: ReactNode;
}

export const ProgressRing = ({
  progress,
  size = 200,
  stroke = 8,
  className = "text-sky-400",
  children,
}: ProgressRingProps) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.min(1, Math.max(0, progress));
  const offset = circumference * (1 - clamped);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={size}
        height={size}
        className={`-rotate-90 ${className}`}
        aria-hidden="true"
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
