import {getDom} from "./util";
import {currentGame} from "../data/initial-game";
import {playGame} from '../game-logic/game';

const welcome = () => {
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

  const welcomeLevel = getDom(markUp, classNames);
  const startGameButton = welcomeLevel.querySelector(`.welcome__button`);
  startGameButton.addEventListener(`click`, () => playGame(currentGame));

  return welcomeLevel;
};


export default welcome;
