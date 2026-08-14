import { useState, useEffect } from "react";
import timeStamp from "time-stamp";
import { Clock } from "lucide-react";
import { TitleWithIcon } from "./TitleWithIcon";

const CurrentTime = () => {
  const [time, setTime] = useState(timeStamp("HH:mm:ss"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(timeStamp("HH:mm:ss"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <TitleWithIcon icon={Clock}>Current Time</TitleWithIcon>
        <div className="text-4xl font-semibold tabular-nums tracking-tight text-emerald-400 sm:text-5xl">
          {time}
        </div>
        <p className="mt-4 text-center text-sm text-slate-500">Local time</p>
      </div>
    </>
  );
};

export default CurrentTime;
