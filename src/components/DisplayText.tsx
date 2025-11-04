function DisplayText({
  wordsList,
  indexCurrentWord,
}: {
  wordsList: string[];
  indexCurrentWord: number;
}) {
  return (
    <div id="display-text">
      <h3>Type the following text:</h3>
      <p id="text-to-type">
        {wordsList.map((word, index) => {
          if (index == indexCurrentWord) {
            return (
              <span key={index} id="current-word">
                <strong>{word} </strong>
              </span>
            );
          }
          return <span key={index}>{word} </span>;
        })}
      </p>
    </div>
  );
}

export default DisplayText;
