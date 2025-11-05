import Title from "./components/Title";
import ControlRacer from "./components/ControlRacer";
import ShowRecords from "./components/ShowRecords";
import { getRecords, saveResult } from "./utils/resultsStorage";
import { useState } from "react";
import type { Result } from "./interfaces/Result";
import { CONFIG } from "./constants/Config";

function App() {
  const localStorageKey = CONFIG.LOCAL_STORAGE_KEY;
  const numShowRecords = CONFIG.NUM_SHOW_RECORDS;
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
      <Title />
      <div id="racer-continer">
        {records && <ShowRecords records={records}></ShowRecords>}
        <ControlRacer
          updateResult={(result) => updateRecords(result)}
        ></ControlRacer>
      </div>
    </>
  );
}

export default App;
