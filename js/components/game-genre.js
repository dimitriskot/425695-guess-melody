// import {initialState} from '../data/initial-game';

// const gameGenre = (data = initialState) => `
//   <section class="game game--genre">
//     <section class="game__screen">
//       <h2 class="game__title">${data.title}</h2>
//       <form class="game__tracks">
//         ${data.setDestination && data.setDestination((track, index) => `
//           <div class="track">
//             <button class="track__button track__button--play" type="button"></button>
//             <div class="track__status">
//               <audio src="${track.src}"></audio>
//             </div>
//             <div class="game__answer">
//               <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-${index}" id="answer-${index}">
//               <label class="game__check" for="answer-${index}">Отметить</label>
//             </div>
//           </div>
//         `)}
//         <button class="game__submit button" type="submit">Ответить</button>
//       </form>
//     </section>
//   </section>
// `;

// export default gameGenre;

import {getDom} from "./util";
// import {welcome} from "./welcome";
// import gameArtist from "./game-artist";
// import {levels} from "../data/levels";
// import getHeader from "./templates/header";
import {getGenreContent} from "./templates/genre/content";
// import getPlayerLives from "../game-logic/player-lives";
// import failTries from "./fail-tries";
// import resultSuccess from "./result-success";

const gameGenre = (level) => {
  // const header = getDom(getHeader(game));
  const content = getDom(getGenreContent(level));
  const classNames = [`game`, `game--genre`];
  const genreLevel = getDom(null, classNames);

  // // genreLevel.appendChild(header);
  genreLevel.appendChild(content);

  // const gameSubmitButton = genreLevel.querySelector(`.game__submit`);
  // const gameBack = genreLevel.querySelector(`.game__back`);
  // const answers = Array.from(genreLevel.querySelectorAll(`.game__answer > .game__input`));

  // gameSubmitButton.disabled = true;

  // const toggleSubmitButtonDisabled = (answer, answersCollection) => {
  //   if (answer.checked) {
  //     gameSubmitButton.disabled = false;
  //   } else if (!answersCollection.some((el) => el.checked)) {
  //     gameSubmitButton.disabled = true;
  //   }
  // };

  // answers.forEach((answer, i, answersCollection) => {
  //   answer.addEventListener(`change`, () => toggleSubmitButtonDisabled(answer, answersCollection));
  // });

  // const submitAnswer = (e, game, levelAnswer) => {
  //   e.preventDefault();
  //   const rightAnswers = answers.filter((answer) => answer.value === levelAnswer);
  //   const userAnswers = answers.filter((answer) => answer.checked === true);
  //   const isSuccess = userAnswers.every((answer, i, usAnswers) => answer.value === levelAnswer && usAnswers.length === rightAnswers.length);
  //   const answerData = Object.assign({}, game.answerTemplate);
  //   answerData.success = isSuccess;
  //   answerData.time = 30000;
  //   const newGame = Object.assign({}, game);
  //   newGame.answers.push(answerData);
  //   newGame.lives = getPlayerLives(game.lives, isSuccess);
  //   if (newGame.lives === 0) {
  //     selectTemplate(failTries());
  //     return;
  //   }
  //   newGame.levelsCount = isSuccess ? newGame.levelsCount - 1 : newGame.levelsCount;
  //   if (newGame.levelsCount === 0) {
  //     selectTemplate(resultSuccess(newGame));
  //     return;
  //   }
  //   newGame.level = `artist`;
  //   // console.log(newGame);
  //   selectTemplate(gameArtist(newGame));
  // };

  // const leavePage = (e) => {
  //   answers.forEach((answer) => {
  //     answer.checked = false;
  //   });
  //   if (e.currentTarget === gameSubmitButton) {
  //     selectTemplate(gameArtist);
  //   }
  //   if (e.currentTarget === gameBack) {
  //     selectTemplate(welcome);
  //   }
  //   gameSubmitButton.disabled = true;
  // };

  // gameBack.addEventListener(`click`, leavePage);
  // gameSubmitButton.addEventListener(`click`, (e) => submitAnswer(e, game, levels[game.level].answer));

  return genreLevel;
};

export default gameGenre;
