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
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-center">
            <p className="text-sm text-white/80">1-100</p>
            <div className="text-3xl font-bold text-blue-300 animate-pulse">
              {value1}
            </div>
          </div>
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-center">
            <p className="text-sm text-white/80">1-200</p>
            <div className="text-3xl font-bold text-purple-300 animate-pulse">
              {value2}
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default RandomValue;
