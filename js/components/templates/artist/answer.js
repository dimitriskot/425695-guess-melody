export const getArtistAnswer = (id, artist) => `<div class="artist">
<input class="artist__input visually-hidden" type="radio" name="answer" value="${artist}" id="answer-${id}">
<label class="artist__name" for="answer-${id}">
  <img class="artist__picture" src="http://placehold.it/134x134" alt="Пелагея">
  ${artist}
</label>
</div>`;
