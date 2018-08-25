const LIVES = 3;
const SECOND_MS = 1000;
const FAST_RIGHT_ANSWER_TIME = SECOND_MS * 30;
const GRADE = 1;
const BONUS_GRADE = 2;
const FAIL_GRADE = 2;

export const countScore = (playerAnswers, leftNotes) => {
  const gradesForAnswers = playerAnswers
  .map((answer) => {
    let gradesForAnswer = 0;
    if (answer.succsess && answer.time >= FAST_RIGHT_ANSWER_TIME) {
      gradesForAnswer = GRADE;
    }
    if (answer.succsess && answer.time < FAST_RIGHT_ANSWER_TIME) {
      gradesForAnswer = BONUS_GRADE;
    }
    return gradesForAnswer;
  })
  .reduce((a, b) => a + b);
  const fails = LIVES - leftNotes;
  const gradesForFails = fails * FAIL_GRADE;
  const score = gradesForFails ? -1 : gradesForAnswers;
  return score;
};
