import {getDom, selectTemplate} from "./util";
import welcome from "./welcome";
import getHeader from "./templates/header";
import {getArtistContent} from "../components/templates/artist/content";
import getPlayerAnswer from "../game-logic/player-answer";
import subPlayerLives from "../game-logic/player-lives";
import subTime from "../game-logic/timer";
import subLevelsCount from "../game-logic/levels-count";
import levelChange from "../game-logic/level-change";
import failTries from "./fail-tries";
import {playGame} from '../game-logic/game';
// import resultSuccess from "./result-success";
// import failTime from "./fail-time";
// import failTries from "./fail-tries";

const gameArtist = (game, level) => {
  const header = getDom(getHeader(game));
  const content = getDom(getArtistContent(level));
  const classNames = [`game`, `game--artist`];
  const artistLevel = getDom(null, classNames);

  artistLevel.appendChild(header);
  artistLevel.appendChild(content);

  const gameBack = artistLevel.querySelector(`.game__back`);
  const answers = artistLevel.querySelectorAll(`.artist__input`);

  const submitAnswer = (e) => {
    e.preventDefault();
    const answer = e.target;
    const isSuccess = level.artists[answer.id].isCorrect;
    let newGame = Object.assign({}, game);
    newGame = getPlayerAnswer(newGame, isSuccess, 30000);
    if (isSuccess) {
      newGame = subLevelsCount(newGame);
    } else {
      newGame = subPlayerLives(newGame);
      if (newGame.lives === 0) {
        selectTemplate(failTries());
        return;
      }
    }
    newGame = subTime(newGame, 30000);
    newGame = levelChange(newGame, ++newGame.level);
    playGame(newGame);
  };

  gameBack.addEventListener(`click`, () => selectTemplate(welcome()));
  [...answers].forEach((input) => input.addEventListener(`click`, (e) => submitAnswer(e)));

  return artistLevel;
};

export default gameArtist;
