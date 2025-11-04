import { useEffect, useState } from "react";
import ShowTime from "./showTime";

interface ITimer {
  active: boolean;
  onFinishTimer: (time: number) => void
}

function Timer({ active, onFinishTimer }: ITimer) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (active) {
      const interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
    else{
        onFinishTimer(time);
    }
  }, [active]);

  return <ShowTime secondsTime={time}></ShowTime>;
}

export default Timer;
