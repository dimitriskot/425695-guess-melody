const getPlayerAnswer = (game, isSuccess, time) => {
  if (typeof isSuccess !== `boolean`) {
    throw new Error(`ERROR! "isSuccess" must be a boolean value`);
  }
  if (typeof time !== `number`) {
    throw new Error(`ERROR! "time" must be a number value`);
  }
  const answer = Object.assign({}, game.answerTemplate, {
    success: isSuccess,
    time
  });
  const answers = game.answers.slice();
  answers.push(answer);
  const newGame = Object.assign({}, game, {
    answers
  });
  return newGame;
};

export default getPlayerAnswer;
