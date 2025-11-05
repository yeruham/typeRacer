import { showTime } from "../utils/time";
import type { Result } from "../interfaces/Result";

function ResultsRacer({ result }: { result: Result }) {
  return (
    <div id="result">
      <h3>result racer:</h3>
      <p>num words by minutes: {result.wordsByMinutes}</p>
      <button>{showTime(result.time)}</button>
    </div>
  );
}

export default ResultsRacer;
