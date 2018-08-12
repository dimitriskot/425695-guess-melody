'use strict';

const arrow = {
  RIGHT: 39,
  LEFT: 37
};

const appElement = document.querySelector(`.app`);
const mainElement = document.querySelector(`.main`);
const gameScreens = Array.from(document.querySelectorAll(`template`)).map((it) => it.content);

const selectTemplate = (templateCollection) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(templateCollection.cloneNode(true));
};

let current = 0;
const renderTemplate = (index) => {
  index = index < 0 ? gameScreens.length - 1 : index;
  index = index >= gameScreens.length ? 0 : index;
  current = index;
  selectTemplate(gameScreens[current]);
};

const onArrowKeyDown = (e) => {
  switch (e.keyCode) {
    case arrow.RIGHT:
      renderTemplate(current + 1);
      break;
    case arrow.LEFT:
      renderTemplate(current - 1);
      break;
  }
};

const onArrowButtonClick = (e) => {
  switch (e.currentTarget.id) {
    case `right`:
      renderTemplate(current + 1);
      break;
    case `left`:
      renderTemplate(current - 1);
      break;
  }
};

document.addEventListener(`keydown`, onArrowKeyDown);

renderTemplate(0);

const arrowsContainer = document.createElement(`div`);
arrowsContainer.classList.add(`arrows__wrap`);

const styleContainer = document.createElement(`style`);
const arrowsWrapStyle = `.arrows__wrap {
 position: absolute; 
 top: 135px; 
 left: 50%; 
 margin-left: -56px;
}`;
const arrowsStyleBtn = `.arrows__btn { 
 background: none; 
 color: #fff; 
 border: 2px solid black; 
 padding: 5px 20px;
}`;
styleContainer.innerText = `${arrowsWrapStyle}\n${arrowsStyleBtn}`;

const arrowButton = document.createElement(`button`);
arrowButton.classList.add(`arrows__btn`);
const arrowLeftButton = arrowButton.cloneNode(true);
arrowLeftButton.id = `left`;
arrowLeftButton.innerText = `<-`;
const arrowRightButton = arrowButton.cloneNode(true);
arrowRightButton.id = `right`;
arrowRightButton.innerText = `->`;

arrowsContainer.appendChild(styleContainer);
arrowsContainer.appendChild(arrowLeftButton);
arrowsContainer.appendChild(arrowRightButton);

arrowLeftButton.addEventListener(`click`, onArrowButtonClick);
arrowRightButton.addEventListener(`click`, onArrowButtonClick);

appElement.appendChild(arrowsContainer);
