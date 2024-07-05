import React, { useState, useEffect } from "react";

const CountDown = () => {
  // Initialize countdownDate state from localStorage or set a new one with random values
  const [countdownDate, setCountdownDate] = useState(() => {
    const now = new Date();
    const storedEndTime = localStorage.getItem("offerEndTime");
    if (storedEndTime && new Date(storedEndTime) > now) {
      return new Date(storedEndTime).getTime();
    } else {
      const randomHours = Math.floor(Math.random() * (19 - 3 + 1)) + 3; // Random hours between 3 and 19
      const randomMinutes = Math.floor(Math.random() * 60) + 1; // Random minutes between 1 and 60
      const randomSeconds = Math.floor(Math.random() * 60) + 1; // Random seconds between 1 and 60

      const endTime = new Date(
        now.getTime() +
          (randomHours * 60 * 60 + randomMinutes * 60 + randomSeconds) * 1000
      );
      localStorage.setItem("offerEndTime", endTime);
      return endTime.getTime();
    }
  });

  const [state, setState] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => setNewTime(), 1000);
    return () => clearInterval(timer); // Cleanup on unmount
  }, [countdownDate]);

  const setNewTime = () => {
    const currentTime = new Date().getTime();
    const distanceToDate = countdownDate - currentTime;

    if (distanceToDate <= 0) {
      // Reset the countdown with new random values
      const randomHours = Math.floor(Math.random() * (19 - 3 + 1)) + 3; // Random hours between 3 and 19
      const randomMinutes = Math.floor(Math.random() * 60) + 1; // Random minutes between 1 and 60
      const randomSeconds = Math.floor(Math.random() * 60) + 1; // Random seconds between 1 and 60

      const newEndTime = new Date(
        currentTime +
          (randomHours * 60 * 60 + randomMinutes * 60 + randomSeconds) * 1000
      );
      localStorage.setItem("offerEndTime", newEndTime);
      setCountdownDate(newEndTime.getTime());
    } else {
      let hours = Math.floor(distanceToDate / (1000 * 60 * 60));
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      setState({ hours, minutes, seconds });
    }
  };

  return (
    <ul className="lab-ul date">
      {/* <li>
        <h2 className="count-title days">{state.days || "0"}</h2>
        <p className="days_text">Day</p>
      </li> */}
      <li>
        <h2 className="count-title">
          <span className="hours">{state.hours || "00"}</span>
        </h2>
        <p className="hours_text">Hour</p>
      </li>
      <li>
        <h2 className="count-title">
          <span className="minutes">{state.minutes || "00"}</span>
        </h2>
        <p className="minu_text">Minute</p>
      </li>
      <li>
        <h2 className="count-title">
          <span className="seconds">{state.seconds || "00"}</span>
        </h2>
        <p className="seco_text">Second</p>
      </li>
    </ul>
  );
};

export default CountDown;
