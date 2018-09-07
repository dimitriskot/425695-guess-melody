// const resultSuccess = (data) => `
//   <section class="result">
//     <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
//     <h2 class="result__title">Вы настоящий меломан!</h2>
//     <p class="result__total">За 3 минуты и 25 секунд вы набрали 12 баллов (8 быстрых), совершив 3 ошибки</p>
//     <p class="result__text">${data}</p>
//     <button class="result__replay" type="button">Сыграть ещё раз</button>
//   </section>
// `;

// export default resultSuccess;

import {getDom} from "./util";
import {currentGame} from "../data/initial-game";
import {playGame} from '../game-logic/game';
import getPlayerResults from "../game-logic/player-results";

const resultSuccess = (game) => {
  const results = getPlayerResults([6, 7, 8, 9], game);
  const classNames = [`result`];
  const markUp = `<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
	<h2 class="result__title">Вы настоящий меломан!</h2>
	<p class="result__total">За 3 минуты и 25 секунд вы набрали 12 баллов (8 быстрых), совершив 3 ошибки</p>
	<p class="result__text">${results}</p>
	<button class="result__replay" type="button">Сыграть ещё раз</button>`;

  const resultLevel = getDom(markUp, classNames);
  const replayButton = resultLevel.querySelector(`.result__replay`);
  replayButton.addEventListener(`click`, () => playGame(currentGame));
  return resultLevel;
};


export default resultSuccess;
