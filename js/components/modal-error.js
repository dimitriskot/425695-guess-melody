import {getDom} from "./util/get-dom";

export const modalError = getDom(`<section class="modal">
<h2 class="modal__title">Произошла ошибка!</h2>
<p class="modal__text">Статус: 404. Пожалуйста, перезагрузите страницу.</p>
</section>`);
