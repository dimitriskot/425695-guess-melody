import {getArtistAnswer} from "./answer";

export const getArtistContent = (level) => {
  const answerList = level.artists.map((track, i) => getArtistAnswer(track, i)).join(``);
  return `<section class="game__screen">
  <h2 class="game__title">${level.title}</h2>
  <div class="game__track">
    <button class="track__button track__button--play" type="button"></button>
    <audio src="${level[level.type].find((item) => item.isCorrect).src}"></audio>
    </div>

  <form class="game__artist">
    ${answerList}
  </form>
  </section>`;
};
