import { vueTemplate } from "./utils.js";

export default {
  template: vueTemplate`
  <form class="filters">
    <h2 class="visually-hidden">Фильтры.</h2>

    <the-search
      class="filters__search"
      v-model="filters.search"
      @update:model-value="toggleFilters"
    ></the-search>
    <div class="filters__checkbox">
      <ui-checkbox
        v-model="filters.oneWay"
        @update:model-value="toggleFilters"
      >
        Прямые
      </ui-checkbox>
    </div>
    <button class="filters__button " type="button" @click="openFilters">
      Фильтр
      <span class="icon-filters"></span>
    </button>
    <div
      class="filters__panel" 
      :class="{
      'animate__animated animate__bounceInRight': isPanelOpen && !isPanelClosing,
      'animate__animated animate__bounceOutRight': !isPanelOpen
    }"
      @click.self="closeFilters"
    >
      <div class="filters__panel-inner" >
        <button
          class="filters__close"
          type="button"
          @click="closeFilters" aria-label="Закрыть"> 
           <span class="icon-close">
           </span>
        </button>
        <p class="filters__panel-title">Фильтр</p>
        <ui-checkbox
          v-model="filters.bestPrice"
          @update:model-value="toggleFilters"
        >
          Лучшая цена
        </ui-checkbox>
      </div>
    </div>
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
