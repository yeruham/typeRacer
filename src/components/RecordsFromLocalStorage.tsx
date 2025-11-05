import type { Result } from "../interfaces/Result";

function RecordsFromLocalStorage({ records }: { records: Result[] }) {
  return (
    <div id="records">
      <h3 id="records-title">top {records.length} records</h3>
      {records.map((record, index) => {
        return (
          <p key={index} className="record">
            time: {record.time} num words: {record.numWords} wordes by minutes: {record.wordsByMinutes}
          </p>
        );
      })}
    </div>
  );
}

export default RecordsFromLocalStorage;
