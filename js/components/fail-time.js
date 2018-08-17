import {getDom, selectTemplate} from "./util";
import {gameGenre} from "./game-genre";

const classNames = [`result`];
const markUp = `<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
<h2 class="result__title">Увы и ах!</h2>
<p class="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>
<button class="result__replay" type="button">Попробовать ещё раз</button>`;

const failTime = getDom(markUp, classNames);
const replayButton = failTime.querySelector(`.result__replay`);
replayButton.addEventListener(`click`, () => selectTemplate(gameGenre));

export {failTime};
