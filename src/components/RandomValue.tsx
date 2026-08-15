import { useState } from "react";
import { Shuffle } from "lucide-react";
import {
  CardWidgetProps,
  COPY,
  RANDOM_MAX_PRIMARY,
  RANDOM_MAX_SECONDARY,
} from "../config";
import { Button } from "./Button";
import { TitleWithIcon } from "./TitleWithIcon";

const random = (max: number) => Math.floor(Math.random() * max) + 1;

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
    <p className="text-sm text-slate-400">{label}</p>
    <div className={`mt-1 font-mono text-4xl font-semibold tabular-nums ${accent}`}>
      {value}
    </div>
  </div>
);

const RandomValue = ({ label, accent }: CardWidgetProps) => {
  const [value1, setValue1] = useState(() => random(RANDOM_MAX_PRIMARY));
  const [value2, setValue2] = useState(() => random(RANDOM_MAX_SECONDARY));

  const roll = () => {
    setValue1(random(RANDOM_MAX_PRIMARY));
    setValue2(random(RANDOM_MAX_SECONDARY));
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
