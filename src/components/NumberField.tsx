import { ChangeEvent } from "react";
import { MIN_DURATION } from "@/config";

interface NumberFieldProps {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
  min?: number;
  max?: number;
  /** Which focus color to use: "amber" (countdown) or "orange" (interval) */
  focusColor?: "amber" | "orange";
}

const focusClasses: Record<NonNullable<NumberFieldProps["focusColor"]>, string> = {
  amber: "focus:border-amber-400 focus:ring-amber-400/30",
  orange: "focus:border-orange-400 focus:ring-orange-400/30",
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
        className="mb-2 block text-center text-sm text-slate-400"
      >
        {label}
      </label>
      <input
        id={id}
        type="number"
        value={value}
        onChange={handleChange}
        disabled={disabled}
        className={`w-full rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2.5 text-center text-base text-white transition-colors placeholder-slate-400 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 ${focusClasses[focusColor]}`}
        min={min}
        max={max}
      />
    </div>
  );
};
