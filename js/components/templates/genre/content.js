import {getGenreAnswer} from "./answer";

export const getGenreContent = (level) => {
  const answerList = level.tracks.map((track, i) => getGenreAnswer(track, i)).join(``);
  return `<section class="game__screen">
    <h2 class="game__title">${level.title}</h2>
    <form class="game__tracks">
      ${answerList}
      <button class="game__submit button" type="submit">Ответить</button>
    </form>
    </section>`;
};
