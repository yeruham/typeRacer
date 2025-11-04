import { showTime, numWordsByMinutes } from "../utils/time";

function ResultsRacer({ time, numWords }: { time: number; numWords: number }) {
  return (
    <>
      <p>
        num words by minutes: {time > 0 ? numWordsByMinutes(time, numWords) : 0}
      </p>
      <button>{showTime(time)}</button>
    </>
  );
}

export default ResultsRacer;
