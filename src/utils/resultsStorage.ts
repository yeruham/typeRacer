import type { Result } from "../interfaces/Result";
import { numWordsByMinutes } from "./time";

export function getRecords(key: string, numRecords: number): Result[] | null {
  const records = localStorage.getItem(key);
  if (records == null) {
    return null;
  }
  const recordsList: Result[] = JSON.parse(records);
  // recordsList.forEach((element) => {
  //   if (!element.wordsByMinutes) {
  //   }
  // });
  recordsList.sort((a, b) => b.wordsByMinutes - a.wordsByMinutes);
  return recordsList.slice(0, numRecords);
}

export function saveResult(key: string, currentResult: Result): void {
  const results = localStorage.getItem(key);
  let recordsList: { time: number; numWords: number }[] = [];
  if (results != null) {
    recordsList = JSON.parse(results);
  }
  recordsList.push(currentResult);
  localStorage.setItem(key, JSON.stringify(recordsList));
}

export function buildResult(time: number, numWords: number): Result {
  const wordsByMinutes = numWordsByMinutes(time, numWords);
  const result = {
    time: time,
    numWords: numWords,
    wordsByMinutes: wordsByMinutes,
  };
  return result;
}
