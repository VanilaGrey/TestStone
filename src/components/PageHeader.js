import { vueTemplate } from './utils.js';

export default {
  template: vueTemplate`
    <header class="page-header">
      <h1 class="page-header__path">Туда</h1>
      <div class="page-header__direction direction">
        <span class="direction__from">Москва</span>
        <span class="direction__to">Норильск</span>
      </div>
      <div class="page-header__date date">
        <span class="date__icon">📅</span>
        <input class="date__input" type="date" />
        <span class="date__selected">5 февраля, пт</span>
      </div>
    </header>
  `,
};
