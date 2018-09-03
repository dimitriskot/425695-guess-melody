import {getDom, selectTemplate} from "./util";
import {welcome} from "./welcome";
import gameArtist from "./game-artist";
import {levels} from "../data/levels";
import getHeader from "./common/header";
import {getGenreContent} from "./game/genre/genreContent";
import getPlayerLives from "../game-logic/player-lives";
import failTries from "./fail-tries";
import resultSuccess from "./result-success";

const gameGenre = (state) => {
  const header = getDom(getHeader(state));
  const content = getDom(getGenreContent(levels[state.level]));

  const classNames = [`game`, `game--genre`];
  const genreLevel = getDom(null, classNames);

  genreLevel.appendChild(header);
  genreLevel.appendChild(content);

  const gameSubmitButton = genreLevel.querySelector(`.game__submit`);
  const gameBack = genreLevel.querySelector(`.game__back`);
  const answers = Array.from(genreLevel.querySelectorAll(`.game__answer > .game__input`));

  gameSubmitButton.disabled = true;

  const toggleSubmitButtonDisabled = (answer, answersCollection) => {
    if (answer.checked) {
      gameSubmitButton.disabled = false;
    } else if (!answersCollection.some((el) => el.checked)) {
      gameSubmitButton.disabled = true;
    }
  };

  answers.forEach((answer, i, answersCollection) => {
    answer.addEventListener(`change`, () => toggleSubmitButtonDisabled(answer, answersCollection));
  });

  const submitAnswer = (e, game, levelAnswer) => {
    e.preventDefault();
    const rightAnswers = answers.filter((answer) => answer.value === levelAnswer);
    const userAnswers = answers.filter((answer) => answer.checked === true);
    const isSuccess = userAnswers.every((answer, i, usAnswers) => answer.value === levelAnswer && usAnswers.length === rightAnswers.length);
    const answerData = Object.assign({}, game.answerTemplate);
    answerData.success = isSuccess;
    answerData.time = 30000;
    const newGame = Object.assign({}, game);
    newGame.answers.push(answerData);
    newGame.lives = getPlayerLives(game.lives, isSuccess);
    if (newGame.lives === 0) {
      selectTemplate(failTries());
      return;
    }
    newGame.levelsCount = isSuccess ? newGame.levelsCount - 1 : newGame.levelsCount;
    if (newGame.levelsCount === 0) {
      selectTemplate(resultSuccess(newGame));
      return;
    }
    newGame.level = `artist`;
    // console.log(newGame);
    selectTemplate(gameArtist(newGame));
  };

  const leavePage = (e) => {
    answers.forEach((answer) => {
      answer.checked = false;
    });
    if (e.currentTarget === gameSubmitButton) {
      selectTemplate(gameArtist);
    }
    if (e.currentTarget === gameBack) {
      selectTemplate(welcome);
    }
    gameSubmitButton.disabled = true;
  };

  gameBack.addEventListener(`click`, leavePage);
  gameSubmitButton.addEventListener(`click`, (e) => submitAnswer(e, state, levels[state.level].answer));

  return genreLevel;
};

export default gameGenre;
