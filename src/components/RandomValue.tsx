import { useState } from "react";
import { Shuffle } from "lucide-react";
import { Button } from "./Button";
import { TitleWithIcon } from "./TitleWithIcon";

const random = (max: number) => Math.floor(Math.random() * max) + 1;

const RandomValue = () => {
  const [value1, setValue1] = useState(() => random(100));
  const [value2, setValue2] = useState(() => random(200));

  const roll = () => {
    setValue1(random(100));
    setValue2(random(200));
  };

  return (
    <>
      <div>
        <TitleWithIcon icon={Shuffle} iconColor="text-rose-400">
          Random Values
        </TitleWithIcon>
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-center">
            <p className="text-sm text-slate-400">1-100</p>
            <div className="mt-1 font-mono text-4xl font-semibold tabular-nums text-rose-300">
              {value1}
            </div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-center">
            <p className="text-sm text-slate-400">1-200</p>
            <div className="mt-1 font-mono text-4xl font-semibold tabular-nums text-rose-300">
              {value2}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button onClick={roll} variant="rose" icon={Shuffle}>
          Roll again
        </Button>
      </div>
    </>
  );
};

export default RandomValue;
