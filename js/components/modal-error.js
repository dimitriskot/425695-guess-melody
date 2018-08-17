import {getDom} from "./util";

const classNames = [`modal`];
const markUp = `<h2 class="modal__title">Произошла ошибка!</h2>
<p class="modal__text">Статус: 404. Пожалуйста, перезагрузите страницу.</p>`;

export const modalError = getDom(markUp, classNames);
