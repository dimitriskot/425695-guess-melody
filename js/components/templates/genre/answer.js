export const getGenreAnswer = (track, id) => `<div class="track">
  <button class="track__button track__button--play" type="button"></button>
  <div class="track__status">
	<audio src="${track.src}"></audio>
  </div>
  <div class="game__answer">
	<input class="game__input visually-hidden" type="checkbox" name="answer" value="${track.genre}" id="answer-${id}">
	<label class="game__check" for="answer-${id}">Отметить</label>
  </div>
</div>`;
