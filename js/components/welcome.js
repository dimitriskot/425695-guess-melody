import {getDom, selectTemplate} from "./util";
import {gameGenre} from "./game-genre";
// import {getRandomResults} from "../game-logic/random-results";
// import {results} from "../data/results";
// import {statistics} from "../data/statistics";
// import {getPlayerResults} from "../game-logic/player-results";
// import {getPlayerLives} from "../game-logic/player-lives";

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
startGameButton.addEventListener(`click`, () => selectTemplate(gameGenre));

export {welcome};

// console.log(getRandomResults());
// console.log(getPlayerResults(statistics[2], results[1]));
// console.log(getPlayerLives(results[6].leftNotes, results[6].answers[4].succsess));
// console.log(getPlayerLives(results[7].leftNotes, results[7].answers[4].succsess));
