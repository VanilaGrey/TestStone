import { vueTemplate } from "./utils.js";

export default {
  template: vueTemplate`
  <form class="filters">
    <h2 class="visually-hidden">Фильтры.</h2>

    <the-search class="filters__search" v-model="filters.search"></the-search>
    <div>
      <label class="filters__checkbox">
        <input class="filter__input" type="checkbox" v-model="filters.oneWay">
        <span class="icon-check">
          <span class="path1"></span>
          <span class="path2"></span>
        </span>
        Прямые
      </label>
    </div>
    <button class="filters__button" type="button" @click="openFilters">
      Фильтр
      <span class="icon-filters"></span>
    </button>
    <div id="filters-panel" class="filters__panel" :class="{ isPanelOpen: isPanelOpen }" @click="toggleFilters">
      <button type="button" class="filters__close" @click="closeFilters">✖</button>
      <label class="filters__panel-label" for="filter">Фильтр</label>
      <input class="filters__panel-checkbox"
             type="checkbox"
             v-model="filters.bestPrice"
             id="filter"
            >
      Лучшая цена
    </div>
    <div class="filters__overlay" :class="{ isPanelOpen: isPanelOpen }" @click="closeFilters"></div>
  </form>
  `,
  emits: ['filter'],
  data() {
    return {
      isPanelOpen: false,
      filters: {
        search: '',
        oneWay: false,
        bestPrice: false
      },
    };
  },
  methods: {
    toggleFilters() {
      this.$emit('filter', this.filters);
    },
    openFilters() {
      this.isPanelOpen = true;
    },
    closeFilters() {
      this.isPanelOpen = false;
    }
  },
};
