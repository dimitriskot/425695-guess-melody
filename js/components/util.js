export const getDom = (markUp, classNames) => {
  const domElement = document.createElement(`section`);
  domElement.innerHTML = markUp;
  classNames.forEach((className) => domElement.classList.add(className));
  return domElement;
};

export const selectTemplate = (template) => {
  const mainElement = document.querySelector(`.main`);
  mainElement.innerHTML = ``;
  mainElement.appendChild(template);
};
