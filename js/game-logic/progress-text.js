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
  let fastAnswer;
  DICT.fastAnswers.forEach((value, key) => {
    if (value.has(data.score.fast)) {
      fastAnswer = key;
    }
  });
  let mistakes;
  DICT.mistakes.forEach((value, key) => {
    if (value.has(data.mistakes)) {
      mistakes = key;
    }
  });
  return `За ${data.time.minutes ? `${data.time.minutes} ${minutes} и` : ``} ${data.time.seconds} ${seconds} вы набрали ${data.score.total} баллов (${data.score.fast} ${fastAnswer}), ${data.mistakes ? `совершив ${data.mistakes}` : `не совершив`} ${mistakes}`;
};

export default renderProgressText;
