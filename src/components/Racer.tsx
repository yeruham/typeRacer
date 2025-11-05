import { useState, useEffect, useRef } from "react";
import DisplayText from "./DisplayText";
import InputWord from "./InputWord";
import Timer from "./Timer";
import WrongInput from "./WrongInput";
import ResultsRacer from "./ResultsRacer";

interface Iracer {
  wordsList: string[];
  onFinishRacer: (time: number) => void;
}

function Racer({ wordsList, onFinishRacer }: Iracer) {
  const [wordsIndex, setWordsIndex] = useState(0);
  const [active, setActive] = useState(true);
  const [currentInput, setCurrentInput] = useState(wordsList[wordsIndex]);

  useEffect(() => {
    if (wordsIndex == wordsList.length) {
      setActive(false);
    }
  }, [wordsIndex]);

  const onInputWord = (inputWord: string): boolean => {
    if (inputWord.trim() == wordsList[wordsIndex]) {
      setWordsIndex((i) => i + 1);
      setCurrentInput(wordsList[wordsIndex + 1]);
      return true;
    } else {
      setCurrentInput(inputWord);
      return false;
    }
  };

  const finishRacer = (time: number) => {
    onFinishRacer(time);
  };

  return (
    <>
      <DisplayText
        wordsList={wordsList}
        indexCurrentWord={wordsIndex}
      ></DisplayText>
      <InputWord isCorrectWord={(word) => onInputWord(word)}></InputWord>
      <Timer
        active={active}
        onFinishTimer={(time) => finishRacer(time)}
      ></Timer>
      {currentInput != wordsList[wordsIndex] && (
        <WrongInput
          wordInput={currentInput}
          correctWord={wordsList[wordsIndex]}
        ></WrongInput>
      )}
    </>
  );
}

export default Racer;
