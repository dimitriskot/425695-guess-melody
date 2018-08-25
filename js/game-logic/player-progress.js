import {
  getScoreCount
} from "./score-count";

export const getPlayerProgress = (results) => {
  const score = getScoreCount(results.answers, results.leftNotes);
  const leftNotes = results.leftNotes;
  const leftTime = results.leftTime;
  return {
    score,
    leftNotes,
    leftTime
  };
};
