import ShowTime from "./showTime";

function ResultsRacer({ time, numWords }: { time: number; numWords: number }) {
  const numWordsByMinutes = () => {
    console.log(numWords);
    const minutes = time / 60;
    return (numWords / minutes).toFixed();
  };

  return (
    <>
      <p>num words by minutes: {time > 0 ? numWordsByMinutes() : 0}</p>
      <ShowTime secondsTime={time}></ShowTime>
    </>
  );
}

export default ResultsRacer;
