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

  return <button>{showTime(time)}</button>;
}

export default Timer;
