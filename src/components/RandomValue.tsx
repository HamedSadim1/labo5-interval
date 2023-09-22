import React, { useState, useEffect, FC } from "react";

const RandomValue = () => {
  const [value, setValue] = useState(0);
  const [randomValue, setRandomValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(Math.floor(Math.random() * 100));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomValue(Math.floor(Math.random() * 200));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>
        Random value: between 1 and 100
        <span className="badge bg-secondary m-2">{value}</span>
      </p>
      <p>
        Random value: between 1 and 200
        <span className="badge bg-secondary m-2 fw-bold">{randomValue}</span>
      </p>
    </>
  );
};

export default RandomValue;
