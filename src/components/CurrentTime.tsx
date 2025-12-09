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
        <div className="text-4xl font-mono font-bold text-green-600">
          {time}
        </div>
      </div>
      <div></div>
    </>
  );
};

export default CurrentTime;
