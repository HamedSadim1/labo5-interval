import React, { useState, useEffect } from "react";
import CurrentTime from "./CurrentTime";
import RandomValue from "./RandomValue";
import "bootstrap/dist/css/bootstrap.min.css";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setIsRunning(true);
    const interval = setInterval(() => {
      if (isRunning) {
        setTime((time) => time + 1);
      }
      setIsRunning(false);
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <>
      <div className="card text-center" style={{ margin: 100, width: 500 }}>
        <div className="card-header">Timer Box</div>
        <div className="card-body" style={{ boxShadow: "red" }}>
          <p>
            Timer: <span className="fw-bold badge bg-secondary">{time}</span>
          </p>
          <CurrentTime />
          <RandomValue />
        </div>
      </div>
    </>
  );
};

export default Timer;
