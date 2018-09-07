export const getArtistAnswer = (track, id) => `<div class="artist">
<input class="artist__input visually-hidden" type="radio" name="answer" value="${track.artist}" id="${id}">
<label class="artist__name" for="${id}">
  <img class="artist__picture" src="${track.image}" alt="${track.artist}">
  ${track.artist}
</label>
</div>`;
