export const getDom = (markUp) => {
  const domElement = document.createElement(`div`);
  domElement.innerHTML = markUp;
  return domElement;
};
