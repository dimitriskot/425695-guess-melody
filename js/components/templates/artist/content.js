import {getArtistAnswer} from "./artistAnswer";
import tracks from "../../../data/tracks";

const answerList = tracks.slice(0, 3).map((el, i) => getArtistAnswer(i + 1, el.artist)).join(``);

export const getArtistContent = (level) => `<section class="game__screen">
<h2 class="game__title">${level.title}</h2>
<div class="game__track">
  <button class="track__button track__button--play" type="button"></button>
  <audio></audio>
</div>

<form class="game__artist">
  ${answerList}
</form>
</section>`;
