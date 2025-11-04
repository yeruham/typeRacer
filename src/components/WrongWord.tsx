function WrongWord({
  word,
  correctWord,
}: {
  word: string;
  correctWord: string;
}) {
  return (
    <p>
      wrong the correct word is <strong>{correctWord}</strong> not{" "}
      <strong>{word}</strong>
    </p>
  );
}

export default WrongWord;
