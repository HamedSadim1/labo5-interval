import { useState, useEffect } from "react";
import timeStamp from "time-stamp";
import { Clock } from "lucide-react";
import { CardWidgetProps, MS_PER_SECOND } from "../config";
import { progressInMinute } from "../utils/math";
import { ProgressRing } from "./ProgressRing";
import { TitleWithIcon } from "./TitleWithIcon";
import { TimeDisplay } from "./TimeDisplay";

const CurrentTime = ({ label, accent }: CardWidgetProps) => {
  const [time, setTime] = useState(timeStamp("HH:mm:ss"));
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(timeStamp("HH:mm:ss"));
      setSeconds(new Date().getSeconds());
    }, MS_PER_SECOND);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <TitleWithIcon icon={Clock} iconColor={accent}>
          {label}
        </TitleWithIcon>
        <ProgressRing
          progress={progressInMinute(seconds)}
          className={accent}
          label="Seconds in current minute"
        >
          <TimeDisplay text={time} />
        </ProgressRing>
        <p className="mt-6 text-center text-sm text-slate-400">Local time</p>
      </div>
    </>
  );
};

export default CurrentTime;
