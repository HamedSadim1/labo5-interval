import { COPY, COUNTDOWN_PRESETS_MINUTES, SECONDS_PER_MINUTE } from "@/config";

interface PresetButtonsProps {
  /** Receives the selected duration in seconds */
  onSelect: (seconds: number) => void;
  disabled?: boolean;
}

/** Quick-set buttons that fill the countdown with a common duration */
export const PresetButtons = ({ onSelect, disabled = false }: PresetButtonsProps) => {
  return (
    <div className="mb-6">
      <p className="mb-2 text-center text-xs uppercase tracking-wide text-slate-500">
        {COPY.fields.presets}
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {COUNTDOWN_PRESETS_MINUTES.map((minutes) => (
          <button
            key={minutes}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(minutes * SECONDS_PER_MINUTE)}
            className="rounded-md border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-xs font-medium text-amber-300 transition-colors hover:bg-amber-400/20 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {minutes}m
          </button>
        ))}
      </div>
    </div>
  );
};
