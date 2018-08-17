import {getDom, selectTemplate} from "./util";
import {gameGenre} from "./game-genre";

const classNames = [`result`];
const markUp = `<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
<h2 class="result__title">Вы настоящий меломан!</h2>
<p class="result__total">За 3 минуты и 25 секунд вы набрали 12 баллов (8 быстрых), совершив 3 ошибки</p>
<p class="result__text">Вы заняли 2 место из 10. Это лучше чем у 80% игроков</p>
<button class="result__replay" type="button">Сыграть ещё раз</button>`;

const resultSuccess = getDom(markUp, classNames);
const replayButton = resultSuccess.querySelector(`.result__replay`);
replayButton.addEventListener(`click`, () => selectTemplate(gameGenre));

export {resultSuccess};
