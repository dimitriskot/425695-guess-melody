const resultSuccess = (data) => `
  <section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Вы настоящий меломан!</h2>
    <p class="result__total">За 3 минуты и 25 секунд вы набрали 12 баллов (8 быстрых), совершив 3 ошибки</p>
    <p class="result__text">${data}</p>
    <button class="result__replay" type="button">Сыграть ещё раз</button>
  </section>
`;

export default resultSuccess;

// import {getDom, selectTemplate} from "./util";
// import gameGenre from "./game-genre";
// import currentGame from "../data/initial-game";
// import getScoreCount from "../game-logic/score-count";

// const resultSuccess = (game) => {
//   console.log(getScoreCount(game.answers, game.lives));
//   const classNames = [`result`];
//   const markUp = `<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
// 	<h2 class="result__title">Вы настоящий меломан!</h2>
// 	<p class="result__total">За 3 минуты и 25 секунд вы набрали 12 баллов (8 быстрых), совершив 3 ошибки</p>
// 	<p class="result__text">Вы заняли 2 место из 10. Это лучше чем у 80% игроков</p>
// 	<button class="result__replay" type="button">Сыграть ещё раз</button>`;

//   const resultLevel = getDom(markUp, classNames);
//   const replayButton = resultLevel.querySelector(`.result__replay`);
//   const genreLevel = gameGenre(currentGame);
//   replayButton.addEventListener(`click`, () => selectTemplate(genreLevel));
//   return resultLevel;
// };


// export default resultSuccess;
