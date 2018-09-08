import {
  getDom,
  selectTemplate
} from "./util";
import gameGenre from "./game-genre";

const failTime = () => {
  const classNames = [`result`];
  const markUp = `<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
	<h2 class="result__title">Увы и ах!</h2>
	<p class="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>
	<button class="result__replay" type="button">Попробовать ещё раз</button>`;

  const fail = getDom(markUp, classNames);
  const replayButton = fail.querySelector(`.result__replay`);
  const genreLevel = gameGenre();
  replayButton.addEventListener(`click`, () => selectTemplate(genreLevel));

  return fail;
};

export default failTime;
