function DisplayText({ text, indexCurrentWord }: { text: string[], indexCurrentWord: number}) {
  return (
    <p>
      {text.map((word, index) => {
        if (index == indexCurrentWord){
            return <strong>{word} </strong> 
        }
        return word + " ";
      })}
    </p>
  );
}

export default DisplayText;
