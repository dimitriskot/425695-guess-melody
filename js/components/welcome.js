import {getDom, selectTemplate} from "./util";
import initialState from "../data/initial-state";
import gameGenre from "./game-genre";

const classNames = [`welcome`];
const markUp = `<div class="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
<button class="welcome__button"><span class="visually-hidden">Начать игру</span></button>
<h2 class="welcome__rules-title">Правила игры</h2>
<p class="welcome__text">Правила просты:</p>
<ul class="welcome__rules-list">
  <li>За 5 минут нужно ответить на все вопросы.</li>
  <li>Можно допустить 3 ошибки.</li>
</ul>
<p class="welcome__text">Удачи!</p>`;

const welcome = getDom(markUp, classNames);
const startGameButton = welcome.querySelector(`.welcome__button`);
const genreLevel = gameGenre(initialState);
startGameButton.addEventListener(`click`, () => selectTemplate(genreLevel));

export {welcome};
