import {getDom, selectTemplate} from "./util";
import {gameGenre} from "./game-genre";

const classNames = [`result`];
const markUp = `<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
<h2 class="result__title">Какая жалость!</h2>
<p class="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
<button class="result__replay" type="button">Попробовать ещё раз</button>`;

const failTries = getDom(markUp, classNames);
const replayButton = failTries.querySelector(`.result__replay`);
replayButton.addEventListener(`click`, () => selectTemplate(gameGenre));

export {failTries};
