function DisplayText({
  wordsList,
  indexCurrentWord,
}: {
  wordsList: string[];
  indexCurrentWord: number;
}) {
  return (
    <p>
      {wordsList.map((word, index) => {
        if (index == indexCurrentWord) {
          return (
            <span key={index}>
              <strong>{word} </strong>
            </span>
          );
        }
        return <span key={index}>{word} </span>;
      })}
    </p>
  );
}

export default DisplayText;
