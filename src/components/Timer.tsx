import { useEffect, useState } from "react";
import { showTime }from "../utils/time";

interface ITimer {
  active: boolean;
  onFinishTimer: (time: number) => void;
}

function Timer({ active, onFinishTimer }: ITimer) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (active) {
      const interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      onFinishTimer(time);
    }
  }, [active]);

  return <div id="timer">{showTime(time)}</div>;
}

export default Timer;
