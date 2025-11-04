export interface Result{
  time: number,
  numWords: number
}


function RecordsFromLocalStorage({localStorageKey, numRecords}: {localStorageKey: string, numRecords: number}) {
  const records = localStorage.getItem(localStorageKey);
  if (records == null) {
    return;
  }
  const recordsList: Result[] = JSON.parse(records);
  recordsList.sort((a, b) => a.time - b.time);
  return (
    <div id="records">
      <h3>records</h3>
      <p>num words by minutes:</p>
      {recordsList.slice(0, numRecords).map((record, index) => {
        return <p key={index}>time: {record.time} numWords: {record.numWords}</p>;
      })}
    </div>
  );
}

export default RecordsFromLocalStorage;
