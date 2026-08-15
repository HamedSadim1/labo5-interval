import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";
import { MIN_DURATION } from "@/config";
import { AccentName, TEXT_MUTED } from "@/theme";

interface NumberFieldProps {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
  min?: number;
  max?: number;
  /** Which accent color to use for the focus ring */
  focusColor?: AccentName;
}

const focusClasses: Record<AccentName, string> = {
  sky: "focus:border-sky-400 focus:ring-sky-400/30",
  amber: "focus:border-amber-400 focus:ring-amber-400/30",
  orange: "focus:border-orange-400 focus:ring-orange-400/30",
  violet: "focus:border-violet-400 focus:ring-violet-400/30",
  teal: "focus:border-teal-400 focus:ring-teal-400/30",
  rose: "focus:border-rose-400 focus:ring-rose-400/30",
};

export const NumberField = ({
  id,
  label,
  value,
  onChange,
  disabled = false,
  min = MIN_DURATION,
  max,
  focusColor = "amber",
}: NumberFieldProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(e.target.value) || 0);
  };

  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className={`mb-2 block text-center text-sm ${TEXT_MUTED}`}
      >
        {label}
      </label>
      <input
        id={id}
        type="number"
        value={value}
        onChange={handleChange}
        disabled={disabled}
        className={twMerge(
          "w-full rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2.5 text-center text-base text-white transition-colors placeholder-slate-400 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
          focusClasses[focusColor]
        )}
        min={min}
        max={max}
      />
    </div>
  );
};
