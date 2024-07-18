import { vueTemplate } from './utils.js';

export default {
  template: vueTemplate`
    <form class="filters" @submit.prevent="toggleFilters">
      <h2 class="visually-hidden">Фильтры.</h2>

      <the-search class="filters__search" v-model="filters.search"></the-search>

      <label class="filters__checkbox">
        <input type="checkbox" v-model="filters.oneWay"> Прямые
      </label>
      <button class="filters__button" type="submit">
        Фильтры
      </button>

      <div id="filters-panel" class="filters__panel" :class="{ isPanelOpen: isPanelOpen }">
        <button type="button" class="filters__close" @click="closeFilters">✖</button>
        <label>
          Фильтр <span>x</span>
          <input type="checkbox" v-model="filters.bestPrice"> Лучшая цена
        </label>
      </div>
    </form>
  `,
  data() {
    return {
      filters: {
        search: '',
        oneWay: false,
        bestPrice: false,
      },
      isPanelOpen: false
    };
  },
  methods: {
    toggleFilters() {
      this.isPanelOpen = !this.isPanelOpen;
    },
    closeFilters() {
      this.isPanelOpen = false;
    },
  },
};