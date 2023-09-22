import React, { useState, useEffect, FC } from "react";
import timeStamp from "time-stamp";

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
      <p>
        Current time
        <span className="badge bg-secondary m-2">{time}</span>
      </p>
    </>
  );
};

export default CurrentTime;
