export const selectTemplate = (template) => {
  const mainElement = document.querySelector(`.main`);
  mainElement.appendChild(template);
};
