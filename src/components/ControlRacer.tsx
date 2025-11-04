import { useRef, useState } from "react";
import Racer from "./Racer";
import ResultsRacer from "./ResultsRacer";
import StartRacer from "./StartRacer";
import type { Result } from "../interfaces/Result";
import { saveResult } from "../utils/resultsStorage";
import { numWordsByMinutes } from "../utils/time";

function ControlRacer() {
  const textList = [
    "a day in the park was",
    "my name is yeruham",
    "i am 21 years old",
  ];
  const textIndex = useRef(0);
  const wordsList = textList[textIndex.current].split(" ");
  const [activeRecer, setActiveRecer] = useState(false);
  const typingTime = useRef(0);

  const startRacer = () => {
    setActiveRecer(true);
  };

  const finishRacer = (time: number) => {
    textIndex.current += 1;
    typingTime.current = time;
    saveResult("racerRecords",  time, wordsList.length);
    setActiveRecer(false);
  };

  return (
    <>
      <StartRacer onClick={startRacer}></StartRacer>
      {activeRecer ? (
        <Racer
          wordsList={wordsList}
          onFinishRacer={(time) => finishRacer(time)}
        ></Racer>
      ) : null}
      {!activeRecer && typingTime.current > 0 ? (
        <ResultsRacer
          time={typingTime.current}
          numWords={wordsList.length}
        ></ResultsRacer>
      ) : null}
    </>
  );
}

export default ControlRacer;
