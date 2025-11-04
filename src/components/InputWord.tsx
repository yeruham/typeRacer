interface IWord {
  isCorrectWord: (word: string) => boolean;
}

function InputWord({ isCorrectWord }: IWord) {
  const resetInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const word = e.target.value;
    if (word[word.length - 1] != " ") {
      return;
    }
    const reset = isCorrectWord(word);
    if (reset) {
      e.target.value = "";
    }
  };
  return (
    <>
      <input onChange={(e) => resetInput(e)}></input>
    </>
  );
}

export default InputWord;
