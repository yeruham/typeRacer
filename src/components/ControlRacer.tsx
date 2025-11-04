import { useRef, useState } from "react";
import Racer from "./Racer";
import ResultsRacer from "./ResultsRacer";
import StartRacer from "./StartRacer";
import type { Result } from "./RecordsFromLocalStorage";

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
    const result: Result = {time: time, numWords: textIndex.current};
    saveInLocalStorage("racerRecords", result);
    setActiveRecer(false);
  };

  const saveInLocalStorage = (key: string, result : Result) => {
    const results = localStorage.getItem(key);
    let recordsList: {time: number, numWords: number}[] = [];
    if (results != null){
        recordsList = JSON.parse(results);
    }
      recordsList.push(result);
      localStorage.setItem(key, JSON.stringify(recordsList));
  }

  return (
    <>
      <StartRacer onClick={startRacer}></StartRacer>
      {activeRecer ? (
        <Racer
          wordsList={wordsList}
          onFinishRacer={(time) => finishRacer(time)}
        ></Racer>
      ) : null}
      {!activeRecer  && typingTime.current > 0 ? (
        <ResultsRacer
          time={typingTime.current}
          numWords={wordsList.length}
        ></ResultsRacer>
      ): null}
    </>
  );
}

export default ControlRacer;
