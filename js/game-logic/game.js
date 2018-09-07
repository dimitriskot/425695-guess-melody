import welcome from '../components/welcome';
import gameGenre from '../components/game-genre';
import gameArtist from '../components/game-artist';
import {getDom, selectTemplate} from '../components/util';
import {initialState, currentGame} from '../data/initial-game';
import {levels, getLevelData} from "../data/levels";
// import {levelChange} from "./level-change";
import getHeader from "../components/templates/header";
import resultSuccess from '../components/result-success';
import getPlayerResults from './player-results';
// import timer from './timer';
// import getPoints from './score-count';
// import calculateLives from './player-lives';

const container = document.querySelector(`.app`);

export const renderGame = (game) => {

  // const startTime = new Date().valueOf();
  const levelData = getLevelData(game.level);
  const renderLevel = levelData.type === `tracks` ? gameGenre : gameArtist;

  // const setDestination = (template) => {
  //   const listTemplates = levelData[levelData.type].map((item, index) => {
  //     return template(item, index);
  //   }).join(``);

  //   return listTemplates;
  // };

  container.innerHTML = ``;
  if (game.level < levels.length - 1) {
    // const templateData = Object.assign({}, levelData);
    container.appendChild(getDom(getHeader(currentGame)));
    container.appendChild(renderLevel(levelData));
  } else {
    container.appendChild(getDom(resultSuccess(getPlayerResults([], currentGame))));
    currentGame.level = initialState.level;
  }

  // const checkAnswer = () => {
  //   const inputs = form.querySelectorAll(`.game__input`);
  //   const checkedInputs = [...inputs].filter((input) => input.checked);
  //   const answerIndexes = checkedInputs.map((input) => +input.defaultValue.split(`-`)[1]);
  //   const correctAnswers = levelData[levelData.type].filter((item) => item.correct);
  //   const isAllCorrect = answerIndexes.every((item) => levelData[levelData.type][item].correct);
  //   const spendTime = new Date().valueOf() - startTime;

  //   let newState = timer(currentGame, spendTime);
  //   if (checkedInputs.length === correctAnswers.length && isAllCorrect) {
  //     newState = getPoints(newState, spendTime, true);
  //   } else {
  //     newState = calculateLives(newState, 1);
  //     newState = getPoints(newState, spendTime, false);
  //   }

  //   renderGame(levelChange(newState, ++currentGame.level));
  // };

  // const gameInput = container.querySelectorAll(`.game__input`);
  // const form = container.querySelector(`form`);
  // const artistInput = container.querySelector(`.game__artist`);
  // if (artistInput) {
  //   artistInput.addEventListener(`change`, (evt) => {
  //     if (evt.target.tagName === `INPUT`) {
  //       checkAnswer();
  //     }
  //   });
  // }

  // if (form) {
  //   form.addEventListener(`submit`, (evt) => {
  //     evt.preventDefault();
  //     checkAnswer();
  //   });
  // }

  // const buttonBack = container.querySelector(`.game__back`);
  // if (buttonBack) {
  //   buttonBack.addEventListener(`click`, () => {
  //     selectTemplate(welcome);
  //   });
  // }

  // const buttonSubmit = container.querySelector(`.game__submit`);
  // const handleDisable = () => {
  //   let isDisabled = true;
  //   gameInput.forEach((input) => {
  //     if (input.checked) {
  //       isDisabled = !input.checked;
  //     }
  //   });

  //   buttonSubmit.disabled = isDisabled;
  // };

  // const gameTracks = container.querySelector(`.game__tracks`);
  // if (gameTracks) {
  //   gameTracks.addEventListener(`click`, (evt) => {
  //     if (evt.target.tagName === `INPUT`) {
  //       handleDisable();
  //     }
  //   });
  //   handleDisable();
  // }

  // const togglePlay = (audio) => {
  //   if (audio.classList.contains(`active`)) {
  //     audio.classList.remove(`active`);
  //     audio.pause();
  //   } else {
  //     audio.classList.add(`active`);
  //     audio.play();
  //   }
  // };

  // const toggleButtonPlay = (currentBtnNode) => {
  //   if (currentBtnNode.classList.contains(`track__button--play`)) {
  //     currentBtnNode.classList.remove(`track__button--play`);
  //     currentBtnNode.classList.add(`track__button--pause`);
  //   } else {
  //     currentBtnNode.classList.add(`track__button--play`);
  //     currentBtnNode.classList.remove(`track__button--pause`);
  //   }
  // };

  // if (gameTracks) {
  //   gameTracks.addEventListener(`click`, (evt) => {
  //     if (evt.target.tagName === `BUTTON`) {
  //       const audio = evt.target.closest(`.track`).querySelector(`audio`);
  //       togglePlay(audio);
  //       toggleButtonPlay(evt.target);
  //     }
  //   });
  // }

  const restartButton = document.querySelector(`.result__replay`);
  if (restartButton) {
    restartButton.addEventListener(`click`, () => {
      selectTemplate(welcome);
    });
  }
};
