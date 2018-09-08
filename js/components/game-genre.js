import {getDom, selectTemplate} from "./util";
import {HALF_MINUTE_MS} from "../data/constants";
import welcome from "./welcome";
import getHeader from "./templates/header";
import {getGenreContent} from "./templates/genre/content";
import getPlayerAnswer from "../game-logic/player-answer";
import subPlayerLives from "../game-logic/player-lives";
import subTime from "../game-logic/timer";
import subLevelsCount from "../game-logic/levels-count";
import levelChange from "../game-logic/level-change";
import failTries from "./fail-tries";
import {playGame} from '../game-logic/game';

const gameGenre = (game, level) => {
  const header = getDom(getHeader(game));
  const content = getDom(getGenreContent(level));
  const classNames = [`game`, `game--genre`];
  const genreLevel = getDom(null, classNames);

  genreLevel.appendChild(header);
  genreLevel.appendChild(content);

  const gameSubmitButton = genreLevel.querySelector(`.game__submit`);
  const gameBack = genreLevel.querySelector(`.game__back`);
  const answers = genreLevel.querySelectorAll(`.game__answer > .game__input`);

  gameSubmitButton.disabled = true;

  const toggleSubmitButtonDisabled = (answer, answersCollection) => {
    if (answer.checked) {
      gameSubmitButton.disabled = false;
    } else if (!answersCollection.some((el) => el.checked)) {
      gameSubmitButton.disabled = true;
    }
  };

  [...answers].forEach((answer, i, answersCollection) => {
    answer.addEventListener(`change`, () => toggleSubmitButtonDisabled(answer, answersCollection));
  });

  const checkAnswers = () => {
    const userAnswers = [...answers].filter((answer) => answer.checked === true);
    const isSuccess = userAnswers.every((answer) => level.tracks[answer.id].isCorrect);
    return isSuccess;
  };

  const submitAnswer = (e) => {
    e.preventDefault();
    const isSuccess = checkAnswers();
    let newGame = Object.assign({}, game);
    newGame = getPlayerAnswer(newGame, isSuccess, HALF_MINUTE_MS);
    if (isSuccess) {
      newGame = subLevelsCount(newGame);
    } else {
      newGame = subPlayerLives(newGame);
      if (newGame.lives === 0) {
        selectTemplate(failTries());
        return;
      }
    }
    newGame = subTime(newGame, HALF_MINUTE_MS);
    newGame = levelChange(newGame, ++newGame.level);
    playGame(newGame);
  };

  const onPlayButtonClick = (e, buttons) => {
    const currentButton = e.target;
    const currentAudio = currentButton.nextElementSibling.querySelector(`audio`);
    buttons.forEach((button) => {
      if (button !== currentButton) {
        button.classList.remove(`track__button--pause`);
        const audio = button.nextElementSibling.querySelector(`audio`);
        audio.classList.remove(`active`);
        audio.pause();
      }
    });
    toggleAudio(currentAudio);
    togglePlayButton(currentButton);
  };

  const playButtons = genreLevel.querySelectorAll(`.track__button`);
  [...playButtons].forEach((button, i, buttons) => {
    button.addEventListener(`click`, (e) => onPlayButtonClick(e, buttons));
  });

  const toggleAudio = (audio) => {
    if (audio.classList.contains(`active`)) {
      audio.classList.remove(`active`);
      audio.pause();
    } else {
      audio.classList.add(`active`);
      audio.play();
    }
  };

  const togglePlayButton = (button) => {
    button.classList.toggle(`track__button--pause`);
  };

  gameBack.addEventListener(`click`, () => selectTemplate(welcome()));
  gameSubmitButton.addEventListener(`click`, (e) => submitAnswer(e));

  return genreLevel;
};

export default gameGenre;
