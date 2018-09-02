import {getGenreAnswer} from "./genreAnswer";
import tracks from "../../../data/audio-list";

const answerList = tracks.slice(0, 4).map((el, i) => getGenreAnswer(i + 1, el.genre)).join(``);

export const getGenreContent = (level) => `<section class="game__screen">
<h2 class="game__title">${level.title}</h2>
<form class="game__tracks">
  ${answerList}
  <button class="game__submit button" type="submit">Ответить</button>
</form>
</section>`;
