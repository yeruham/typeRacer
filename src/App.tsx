import Title from "./components/Title";
import ControlRacer from "./components/ControlRacer";
import RecordsFromLocalStorage from "./components/RecordsFromLocalStorage";

function App() {
  const localStorageKey = "racerRecords";
  const numShowRecords = 5;

  return (
    <>
      <Title></Title>
      <RecordsFromLocalStorage
        localStorageKey={localStorageKey}
        numRecords={numShowRecords}
      ></RecordsFromLocalStorage>
      <ControlRacer></ControlRacer>
    </>
  );
}

export default App;
