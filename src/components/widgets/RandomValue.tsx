import { useState } from "react";
import { Shuffle } from "lucide-react";
import { COPY, RANDOM_MAX_PRIMARY, RANDOM_MAX_SECONDARY } from "@/config";
import { twMerge } from "tailwind-merge";
import { randomInt } from "@/utils";
import { TEXT_MUTED } from "@/theme";
import { useCard, Button, TitleWithIcon } from "@/components/ui";

const ValueTile = ({
  label,
  value,
  accent,
}: {
  label: string;
  value: number;
  accent: string;
}) => (
  <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-center">
    <p className={`text-sm ${TEXT_MUTED}`}>{label}</p>
    <div
      className={twMerge(
        "mt-1 font-mono text-4xl font-semibold tabular-nums",
        accent
      )}
    >
      {value}
    </div>
  </div>
);

const RandomValue = () => {
  const { label, accent } = useCard();
  const [value1, setValue1] = useState(() => randomInt(RANDOM_MAX_PRIMARY));
  const [value2, setValue2] = useState(() => randomInt(RANDOM_MAX_SECONDARY));

  const roll = () => {
    setValue1(randomInt(RANDOM_MAX_PRIMARY));
    setValue2(randomInt(RANDOM_MAX_SECONDARY));
  };

  return (
    <>
      <div>
        <TitleWithIcon icon={Shuffle} iconColor={accent}>
          {label}
        </TitleWithIcon>
        <div className="space-y-4">
          <ValueTile
            label={`1-${RANDOM_MAX_PRIMARY}`}
            value={value1}
            accent={accent}
          />
          <ValueTile
            label={`1-${RANDOM_MAX_SECONDARY}`}
            value={value2}
            accent={accent}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Button onClick={roll} variant="rose" icon={Shuffle}>
          {COPY.buttons.rollAgain}
        </Button>
      </div>
    </>
  );
};

export default RandomValue;
