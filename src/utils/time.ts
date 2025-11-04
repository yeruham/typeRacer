export function showTime(secondsTime: number): string {
  const hours = Math.floor(secondsTime / 3600);
  const minutes = Math.floor((secondsTime % 3600) / 60);
  const seconds = Math.floor(secondsTime % 60);
  const time = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  return time;
}

export function numWordsByMinutes(time: number, numWords: number): number {
  const minutes = time / 60;
  return +(numWords / minutes).toFixed();
}
