import {initialState} from '../data/initial-game';

const gameArtist = (data = initialState) => `
  <section class="game game--artist">
    <section class="game__screen">
      <h2 class="game__title">Кто исполняет эту песню?</h2>
      <div class="game__track">
        <button class="track__button track__button--play" type="button"></button>
        <audio src="${data[data.type].find((item) => item.correct).src}"></audio>
      </div>
      <form class="game__artist">
        ${data.setDestination && data.setDestination((artist, index) => `
          <div class="artist">
            <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-${index}" id="answer-${index}">
            <label class="artist__name" for="answer-${index}">
              <img class="artist__picture" src="${artist.image}" alt="${artist.artist}">
              ${artist.artist}
            </label>
          </div>
        `)}
      </form>
    </section>
  </section>
`;

export default gameArtist;

// import {getDom, selectTemplate} from "./util";
// import {welcome} from "./welcome";
// import gameGenre from "./game-genre";
// import resultSuccess from "./result-success";
// // import failTime from "./fail-time";
// import failTries from "./fail-tries";
// import getHeader from "./templates/header";
// import {getArtistContent} from "./game/artist/artistContent";
// import {levels} from "../data/levels";
// import getPlayerLives from "../game-logic/player-lives";

// const gameArtist = (state) => {
//   const header = getDom(getHeader(state));
//   const content = getDom(getArtistContent(levels[state.level]));

//   const classNames = [`game`, `game--artist`];
//   const artistLevel = getDom(null, classNames);

//   artistLevel.appendChild(header);
//   artistLevel.appendChild(content);

//   const gameBack = artistLevel.querySelector(`.game__back`);
//   const answers = Array.from(artistLevel.querySelectorAll(`.artist__input`));

//   const submitAnswer = (e, game, levelAnswer) => {
//     e.preventDefault();
//     const isSuccess = e.target.value === levelAnswer;
//     const answerData = Object.assign({}, game.answerTemplate);
//     answerData.success = isSuccess;
//     answerData.time = 30000;
//     const newGame = Object.assign({}, game);
//     newGame.answers.push(answerData);
//     newGame.lives = getPlayerLives(game.lives, isSuccess);
//     if (newGame.lives === 0) {
//       selectTemplate(failTries());
//       return;
//     }
//     newGame.levelsCount = isSuccess ? newGame.levelsCount - 1 : newGame.levelsCount;
//     if (newGame.levelsCount === 0) {
//       selectTemplate(resultSuccess(newGame));
//       return;
//     }
//     newGame.level = `genre`;
//     // console.log(newGame);
//     selectTemplate(gameGenre(newGame));
//   };

//   gameBack.addEventListener(`click`, () => selectTemplate(welcome));
//   answers.forEach((input) => input.addEventListener(`click`, (e) => submitAnswer(e, state, levels[state.level].answer)));

//   return artistLevel;
// };

// export default gameArtist;
