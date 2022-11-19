/* eslint-disable no-constant-condition */
import React, { useEffect, useState } from "react";
// import NewGameBtn from "../../elements/NewGameBtn";
import { useStore } from "../../store/store";
// import { useReset } from "../../store/store";

export const Timer = () => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const state = useStore();

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) return setSeconds(seconds - 1);
      if (seconds === 0 && minutes === 0) {
        clearInterval(countdown);
      } else {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <div className="font-medium text-l ml-6">
      <p>
        남은 시간: {minutes}: {seconds < 10 ? `0${seconds}` : seconds}
      </p>
    </div>
  );
};
