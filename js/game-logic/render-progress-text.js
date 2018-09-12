import {DICT} from "../data/dictionary";

const renderProgressText = (data) => {
  let minutes;
  DICT.time.minutes.forEach((value, key) => {
    if (value.has(data.time.minutes)) {
      minutes = key;
    }
  });
  let seconds;
  DICT.time.seconds.forEach((value, key) => {
    if (value.has(data.time.seconds)) {
      seconds = key;
    }
  });
  let fast;
  DICT.fast.forEach((value, key) => {
    if (value.has(data.score.fast)) {
      fast = key;
    }
  });
  let mistakes;
  DICT.mistakes.forEach((value, key) => {
    if (value.has(data.mistakes)) {
      mistakes = key;
    }
  });
  return `За ${data.time.minutes} ${minutes} и ${data.time.seconds} ${seconds} вы набрали ${data.score.total} баллов (${data.score.fast} ${fast}), совершив ${data.mistakes} ${mistakes}`;
};

export default renderProgressText;
