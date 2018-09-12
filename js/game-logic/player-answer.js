const getPlayerAnswer = (game, isSuccess) => {
  if (typeof isSuccess !== `boolean`) {
    throw new Error(`ERROR! "isSuccess" must be a boolean value`);
  }
  const time = game.time.level;
  const answer = Object.assign({}, game.answerTemplate, {
    isSuccess,
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
