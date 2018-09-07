// const getPoints = (game, spendTime, isCorrect) => {
//   if (spendTime < 0) {
//     throw new Error(`Time should not be negative value`);
//   }

//   if (!game.lives) {
//     return -1;
//   }

//   let points = 1;
//   if (spendTime < 3e4 && isCorrect) {
//     points = 2;
//   } else if (!isCorrect) {
//     points = -2;
//   }
//   const newPoints = game.points + points;
//   const newGame = Object.assign({}, game, {
//     points: newPoints
//   });
//   return newGame;
// };

// export default getPoints;

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
