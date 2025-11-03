import { useEffect, useRef, useState } from "react";
import InputWord from "./components/InputText";
import Timer from "./components/Timer";
import DisplayText from "./components/DisplayText";
import Title from "./components/Title";
import EndRacer from "./components/endRacer";
import ControlButton from "./components/ControlRacer";

function App() {
  const text = `a day in the park was a`;
  const wordsList = text.split(" ");
  const [wordsIndex, setWordsIndex] = useState(0);
  const [typingTime, setTypingTime] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (wordsIndex == wordsList.length) {
      setActive(false);
    }
  }, [wordsIndex]);

  const onInputWord = (inputWord: string): boolean => {
    if (inputWord == wordsList[wordsIndex]) {
      setWordsIndex((i) => i + 1);
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      <Title></Title>
      <ControlButton
        active={active}
        setActive={(bool) => setActive(bool)}
      ></ControlButton>
      <DisplayText
        wordsList={wordsList}
        indexCurrentWord={wordsIndex}
      ></DisplayText>
      <InputWord isCorrectWord={onInputWord}></InputWord>
      <Timer
        setTypingTime={(newTime) => setTypingTime(newTime)}
        active={active}
      ></Timer>
      {!active && typingTime > 0 ? (
        <EndRacer time={typingTime} numWords={wordsList.length}></EndRacer>
      ) : null}
    </>
  );
}

export default App;
