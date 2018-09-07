import {getDom} from "./util";
import {currentGame} from "../data/initial-game";
import {playGame} from '../game-logic/game';

const failTries = () => {
  const classNames = [`result`];
  const markUp = `<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
	<h2 class="result__title">Какая жалость!</h2>
	<p class="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
	<button class="result__replay" type="button">Попробовать ещё раз</button>`;

  const fail = getDom(markUp, classNames);
  const replayButton = fail.querySelector(`.result__replay`);
  replayButton.addEventListener(`click`, () => playGame(currentGame));

  return fail;
};

export default failTries;
