import {getDom, selectTemplate} from "./util";
import {welcome} from "./welcome";
import gameGenre from "./game-genre";
import resultSuccess from "./result-success";
// import failTime from "./fail-time";
import failTries from "./fail-tries";
import getHeader from "./common/header";
import {getArtistContent} from "./game/artist/artistContent";
import {levels} from "../data/levels";
import getPlayerLives from "../game-logic/player-lives";

const gameArtist = (state) => {
  const header = getDom(getHeader(state));
  const content = getDom(getArtistContent(levels[state.level]));

  const classNames = [`game`, `game--artist`];
  const artistLevel = getDom(null, classNames);

  artistLevel.appendChild(header);
  artistLevel.appendChild(content);

  const gameBack = artistLevel.querySelector(`.game__back`);
  const answers = Array.from(artistLevel.querySelectorAll(`.artist__input`));

  const submitAnswer = (e, game, levelAnswer) => {
    e.preventDefault();
    const isSuccess = e.target.value === levelAnswer;
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
    newGame.level = `genre`;
    // console.log(newGame);
    selectTemplate(gameGenre(newGame));
  };

  gameBack.addEventListener(`click`, () => selectTemplate(welcome));
  answers.forEach((input) => input.addEventListener(`click`, (e) => submitAnswer(e, state, levels[state.level].answer)));

  return artistLevel;
};

export default gameArtist;
