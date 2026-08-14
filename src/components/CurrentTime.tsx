import { useState, useEffect } from "react";
import timeStamp from "time-stamp";
import { Clock } from "lucide-react";
import { ProgressRing } from "./ProgressRing";
import { TitleWithIcon } from "./TitleWithIcon";

const CurrentTime = () => {
  const [time, setTime] = useState(timeStamp("HH:mm:ss"));
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(timeStamp("HH:mm:ss"));
      setSeconds(new Date().getSeconds());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <TitleWithIcon icon={Clock} iconColor="text-teal-400">
          Current Time
        </TitleWithIcon>
        <ProgressRing progress={seconds / 60} className="text-teal-400">
          <span className="font-mono text-4xl font-semibold tabular-nums tracking-tight text-white">
            {time}
          </span>
        </ProgressRing>
        <p className="mt-6 text-center text-sm text-slate-400">Local time</p>
      </div>
    </>
  );
};

export default CurrentTime;
