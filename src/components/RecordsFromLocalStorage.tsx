import type { Result } from "../interfaces/Result";
import { numWordsByMinutes } from "../utils/time";

function RecordsFromLocalStorage({ records }: { records: Result[] }) {
  return (
    <div id="records">
      <h3>records</h3>
      {records.map((record, index) => {
        return (
          <p key={index}>
            time: {record.time} num words: {record.numWords} wordes by minutes: {record.wordsByMinutes}
          </p>
        );
      })}
    </div>
  );
}

export default RecordsFromLocalStorage;
