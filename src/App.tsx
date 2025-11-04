import Title from "./components/Title";
import ControlRacer from "./components/ControlRacer";
import RecordsFromLocalStorage from "./components/RecordsFromLocalStorage";
import { getRecords } from "./utils/resultsStorage";
import { useEffect } from "react";

function App() {
  const localStorageKey = "racerRecords";
  const numShowRecords = 5;
  let records = getRecords(localStorageKey, numShowRecords);

  useEffect(() => {
    records = getRecords(localStorageKey, numShowRecords);
  }, []);

  return (
    <>
      <Title></Title>
      {records && (
        <RecordsFromLocalStorage records={records}></RecordsFromLocalStorage>
      )}
      <ControlRacer></ControlRacer>
    </>
  );
}

export default App;
