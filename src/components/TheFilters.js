import { vueTemplate } from "./utils.js";

export default {
  template: vueTemplate`
    <form class="filters" @submit.prevent="toggleFilters">
      <h2 class="visually-hidden">Фильтры.</h2>

      <the-search class="filters__search" v-model="filters.search"></the-search>
      <div>
      <label class="filters__checkbox">
      <span class="icon-check"><span class="path1"></span><span class="path2"></span></span>
        <input type="checkbox" v-model="filters.oneWay"> Прямые
      </label>
      </div>
      <button class="filters__button" type="submit">
        Фильтр
        <span class="icon-filters"></span>
      </button>
      <div id="filters-panel" class="filters__panel" :class="{ isPanelOpen: isPanelOpen }">
        <button type="button" class="filters__close" @click="closeFilters">✖</button>
        <label class="filters__panel-label" 
                for="filter">Фильтр
        </label>
        <input class="filters__panel-checkbox"
               type="checkbox"
               v-model="filters.bestPrice"
               id="filter">
               Лучшая цена
      </div>
    </form>
  `,
  data() {
    return {
      filters: {
        search: "",
        oneWay: false,
        bestPrice: false,
      },
      isPanelOpen: false,
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
