const LIVES = 3;
const SECOND_MS = 1000;
const FAST_RIGHT_ANSWER_TIME = SECOND_MS * 30;
const GRADE = 1;
const BONUS_GRADE = 2;
const FAIL_GRADE = 2;

const getScoreCount = (game) => {
  const gradesForAnswers = game.answers
  .map((answer) => {
    let gradesForAnswer = 0;
    if (answer.success && answer.time >= FAST_RIGHT_ANSWER_TIME) {
      gradesForAnswer = GRADE;
    }
    return gradesForAnswer;
  })
  .reduce((a, b) => a + b);
  const gradesForFastAnswers = game.answers
  .map((answer) => {
    let gradesForAnswer = 0;
    if (answer.success && answer.time < FAST_RIGHT_ANSWER_TIME) {
      gradesForAnswer = BONUS_GRADE;
    }
    return gradesForAnswer;
  })
  .reduce((a, b) => a + b);
  const fails = LIVES - game.lives;
  const gradesForFails = fails * FAIL_GRADE;
  const grades = gradesForAnswers + gradesForFastAnswers;
  const score = gradesForFails ? -1 : grades;
  return score;
};

export default getScoreCount;
