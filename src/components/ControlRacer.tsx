import { useRef, useState } from "react";
import Racer from "./Racer";
import ResultsRacer from "./ResultsRacer";
import StartRacer from "./StartRacer";
import { buildResult } from "../utils/resultsStorage";
import { texts } from "../utils/texst";
import type { Result } from "../interfaces/Result";

function ControlRacer({
  updateResult,
}: {
  updateResult: (result: Result) => void;
}) {
  const textList: string[] = texts;
  const textIndex = useRef(0);
  const wordsList = textList[textIndex.current].split(" ");
  const [activeRecer, setActiveRecer] = useState(false);
  const typingTime = useRef(0);
  const currentResult: React.RefObject<null | Result> = useRef(null);

  const startRacer = () => {
    currentResult.current = null;
    setActiveRecer(true);
  };

  const finishRacer = (time: number) => {
    textIndex.current += 1;
    typingTime.current = time;
    setActiveRecer(false);
    const result = buildResult(time, wordsList.length);
    currentResult.current = result;
    updateResult(result);
  };

  return (
    <div id="controle-racer">
      <StartRacer onClick={startRacer}></StartRacer>
      {activeRecer ? (
        <Racer
          wordsList={wordsList}
          onFinishRacer={(time) => finishRacer(time)}
        ></Racer>
      ) : null}
      {currentResult.current && (
        <ResultsRacer
          result={currentResult.current}
        ></ResultsRacer>
      )}
    </div>
  );
}

export default ControlRacer;
