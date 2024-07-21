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
    <button class="filters__button" type="button" @click="openFilters">
      Фильтр
      <span class="icon-filters"></span>
    </button>
    <Transition
      enter-active-class="animate__animated animate__fadeInRight"
      leave-active-class="animate__animated animate__fadeOutRight"
    >
      <div v-if="openFilters"
        class="filters__panel"
        :class="{  'filters__panel--open': isPanelOpen,
                  'filters__panel--close': isPanelClose }"
        @click.self="closedFilters"
      >
        <div class="filters__panel-inner" v-if="openFilters">
          <button
            class="filters__close icon-close"
            type="button"
            @click="closedFilters" aria-label="Закрыть">
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
    </Transition>
  </form>
  `,
  emits: ["filter"],
  data() {
    return {
      isPanelOpen: false,
      isPanelClosed: true,
      filters: {
        search: "",
        oneWay: false,
        bestPrice: false,
      },
    };
  },
  methods: {
    toggleFilters() {
      this.$emit("filter", this.filters);
    },
    openFilters() {
      this.isPanelOpen = true;
      this.isPanelClosed = false;
    },
    closedFilters() {
      this.isPanelClosed = true;
      this.isPanelOpen = false;
    },
  },
};
