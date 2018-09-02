import {getDom, selectTemplate} from "./util";
import {welcome} from "./welcome";
import {gameArtist} from "./game-artist";
import {levels} from "../data/levels";
import getHeader from "./common/header";
import {getGenreContent} from "./game/genre/genreContent";

const gameGenre = (state) => {
  const header = getDom(getHeader(state));
  const content = getDom(getGenreContent(levels[state.level]));

  const classNames = [`game`, `game--genre`];
  const genreLevel = getDom(null, classNames);

  genreLevel.appendChild(header);
  genreLevel.appendChild(content);

  const gameSubmitButton = genreLevel.querySelector(`.game__submit`);
  const gameBack = genreLevel.querySelector(`.game__back`);

  gameSubmitButton.disabled = true;

  const answers = Array.from(genreLevel.querySelectorAll(`.game__answer > .game__input`));

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

  const submitAnswer = (e) => {
    e.preventDefault();
    answers.forEach((answer) => console.log(answer.value, answer.checked));
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
  gameSubmitButton.addEventListener(`click`, submitAnswer);

  return genreLevel;
};

export default gameGenre;
