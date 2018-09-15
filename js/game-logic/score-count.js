import {LIVES, FAST_RIGHT_ANSWER_TIME} from "../data/constants";
import {grade} from "../data/enums";

const getScoreCount = (game) => {
  let score = {
    total: 0,
    fast: 0
  };
  if (game.answers.length !== 0) {
    const gradesForAnswers = game.answers
    .map((answer) => {
      let gradesForAnswer = 0;
      if (answer.isSuccess && answer.time >= FAST_RIGHT_ANSWER_TIME) {
        gradesForAnswer = grade.USUAL;
      }
      return gradesForAnswer;
    })
    .reduce((a, b) => a + b);
    const gradesForFastAnswers = game.answers
    .map((answer) => {
      let gradesForAnswer = 0;
      if (answer.isSuccess && answer.time < FAST_RIGHT_ANSWER_TIME) {
        gradesForAnswer = grade.BONUS;
      }
      return gradesForAnswer;
    })
    .reduce((a, b) => a + b);
    const fails = LIVES - game.lives;
    const gradesForFails = fails * grade.FAIL;
    const total = gradesForAnswers + gradesForFastAnswers - gradesForFails;
    const fast = gradesForFastAnswers - gradesForFails;
    score = {
      total,
      fast
    };
  } else {
    score = -1;
  }
  return score;
};

export default getScoreCount;
