function WrongInput({
  wordInput,
  correctWord,
}: {
  wordInput: string;
  correctWord: string;
}) {
  return (
    <p>
      wrong the correct word is <strong>{correctWord}</strong> not <strong>{wordInput}</strong>
    </p>
  );
}

export default WrongInput;
