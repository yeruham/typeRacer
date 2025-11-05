import type { Result } from "../interfaces/Result";

function ShowRecords({ records }: { records: Result[] }) {
  return (
    <div id="records">
      <h3 id="records-title">top {records.length} records</h3>
      {records.map((record, index) => {
        return (
          <p key={index} className="record">
            time: {record.time} num words: {record.numWords} words by minutes: {record.wordsByMinutes}
          </p>
        );
      })}
    </div>
  );
}

export default ShowRecords;
