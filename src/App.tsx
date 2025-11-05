import Title from "./components/Title";
import ControlRacer from "./components/ControlRacer";
import RecordsFromLocalStorage from "./components/RecordsFromLocalStorage";
import { getRecords, saveResult } from "./utils/resultsStorage";
import { useState } from "react";
import type { Result } from "./interfaces/Result";

function App() {
  const localStorageKey = "racerRecords";
  const numShowRecords = 5;
  const [records, setRecords] = useState(
    getRecords(localStorageKey, numShowRecords)
  );

  const updateRecords = (newResult: Result) => {
    saveResult(localStorageKey, newResult);
    const updatedRecords = getRecords(localStorageKey, numShowRecords);
    setRecords(updatedRecords);
  };

  return (
    <>
      <Title></Title>
      <div id="racer-continer">
      {records && (
        <RecordsFromLocalStorage records={records}></RecordsFromLocalStorage>
      )}
      <ControlRacer
        updateResult={(result) => updateRecords(result)}
      ></ControlRacer>
      </div>
    </>
  );
}

export default App;
