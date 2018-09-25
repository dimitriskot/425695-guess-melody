export const getDom = (markUp, classNames = []) => {
  const domElement = document.createElement(`div`);
  domElement.innerHTML = markUp;
  classNames.forEach((className) => domElement.classList.add(className));
  return domElement;
};

const mainElement = document.querySelector(`.main`);

export const selectTemplate = (template) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(template);
};
