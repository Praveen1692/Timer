import React, { useEffect } from "react";
import { useState } from "react";
import "./comonent.css";

const Timer = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);

  let timerId;

  useEffect(() => {
    timerId = setInterval(() => {
      setSecond((sec) => sec + 1);

      if (second === 59) {
        setMinute((min) => min + 1);
        setSecond(0);
      }
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  });
  const stopTimer = () => {
    clearInterval(timerId);
  };

  const restart = () => {
    setMinute(0);
    setSecond(0);
  };

  return (
    <div className="timer">
      <h1>Timer</h1>

      <div className="timer-card">
        <h1>
          {minute}:{second}
        </h1>
        <div className="btn-grp">
          <button className="btn" onClick={stopTimer}>
            Stop
          </button>

          <button className="btn" onClick={restart}>
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
