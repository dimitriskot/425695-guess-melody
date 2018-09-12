import {LIVES, FAST_RIGHT_ANSWER_TIME, GRADE} from "../data/constants";

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
        gradesForAnswer = GRADE.usual;
      }
      return gradesForAnswer;
    })
    .reduce((a, b) => a + b);
    const gradesForFastAnswers = game.answers
    .map((answer) => {
      let gradesForAnswer = 0;
      if (answer.isSuccess && answer.time < FAST_RIGHT_ANSWER_TIME) {
        gradesForAnswer = GRADE.bonus;
      }
      return gradesForAnswer;
    })
    .reduce((a, b) => a + b);
    const fails = LIVES - game.lives;
    const gradesForFails = fails * GRADE.fail;
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
