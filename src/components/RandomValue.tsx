import { useState, useEffect } from "react";
import { Shuffle } from "lucide-react";
import { TitleWithIcon } from "./TitleWithIcon";

const RandomValue = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setValue1(Math.floor(Math.random() * 100) + 1);
    }, 1000);
    return () => clearInterval(interval1);
  }, []);

  useEffect(() => {
    const interval2 = setInterval(() => {
      setValue2(Math.floor(Math.random() * 200) + 1);
    }, 1000);
    return () => clearInterval(interval2);
  }, []);

  return (
    <>
      <div>
        <TitleWithIcon icon={Shuffle}>Random Values</TitleWithIcon>
        <div className="space-y-4">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center">
            <p className="text-sm text-slate-400">1-100</p>
            <div className="mt-1 animate-pulse text-3xl font-semibold tabular-nums text-sky-300">
              {value1}
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center">
            <p className="text-sm text-slate-400">1-200</p>
            <div className="mt-1 animate-pulse text-3xl font-semibold tabular-nums text-violet-300">
              {value2}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomValue;
