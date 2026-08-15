import { useState, useEffect } from "react";
import timeStamp from "time-stamp";
import { Clock } from "lucide-react";
import {
  CardWidgetProps,
  COPY,
  MS_PER_SECOND,
  TIME_FORMAT_HHMMSS,
} from "../config";
import { progressInMinute } from "../utils";
import { ProgressRing } from "./ProgressRing";
import { TitleWithIcon } from "./TitleWithIcon";
import { TimeDisplay } from "./TimeDisplay";

const CurrentTime = ({ label, accent }: CardWidgetProps) => {
  const [time, setTime] = useState(timeStamp(TIME_FORMAT_HHMMSS));
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(timeStamp(TIME_FORMAT_HHMMSS));
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
          label={COPY.rings.secondsInMinute}
        >
          <TimeDisplay text={time} />
        </ProgressRing>
        <p className="mt-6 text-center text-sm text-slate-400">
          {COPY.fields.localTime}
        </p>
      </div>
    </>
  );
};

export default CurrentTime;
