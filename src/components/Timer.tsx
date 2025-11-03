import { useEffect, useState } from "react";

interface ITimer {
  active: boolean;
  setTypingTime: (newTime: number) => void;
}

function Timer({ active, setTypingTime }: ITimer) {
  const [time, setTime] = useState(0);
  useEffect(() => {
    if (active) {
      const interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
    else{
        setTypingTime(time);
    }
  }, [active]);

  const timeFormat = (secondsTime: number): string => {
    const hours = Math.floor(secondsTime / 3600);
    secondsTime = secondsTime % 3600;
    const minutes = Math.floor(secondsTime / 60);
    secondsTime = secondsTime % 60;
    const seconds = Math.floor(secondsTime);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return <button>{timeFormat(time)}</button>;
}

export default Timer;
