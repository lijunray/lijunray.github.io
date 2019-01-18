// date1 - date2
export const substract = (date1, date2) => {
  let seconds = (Date.parse(date1) - Date.parse(date2)) / 1000;
  const days = Math.floor(seconds / (3600 * 24));
  seconds %= 3600 * 24;
  let hours = Math.floor(seconds / 3600);
  if (hours < 10) {
    hours = `0${hours}`;
  }
  seconds %= 3600;
  let minutes = Math.floor(seconds / 60);
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  seconds %= 60;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return {
    days,
    hours,
    minutes,
    seconds
  };
};
