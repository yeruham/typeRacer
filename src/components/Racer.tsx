import { useState, useEffect, useRef } from "react";
import DisplayText from "./DisplayText";
import InputWord from "./InputWord";
import Timer from "./Timer";
import WrongWord from "./WrongWord";

interface Iracer {
  wordsList: string[];
  onFinishRacer: (time: number) => void;
}

function Racer({ wordsList, onFinishRacer }: Iracer) {
  const [wordsIndex, setWordsIndex] = useState(0);
  const [active, setActive] = useState(true);
  const [correctWord, setCorrectWord] = useState(true);

  useEffect(() => {
    if (wordsIndex == wordsList.length) {
      setActive(false);
    }
  }, [wordsIndex]);

  const onInputWord = (inputWord: string): boolean => {
    if (inputWord.trim() == wordsList[wordsIndex]) {
      setWordsIndex((i) => i + 1);
      setCorrectWord(true);
      return true;
    } else {
      setCorrectWord(false);
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
      {!correctWord ? (
        <WrongWord word="" correctWord={wordsList[wordsIndex]}></WrongWord>
      ) : null}
    </>
  );
}

export default Racer;
