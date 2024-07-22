import { vueTemplate } from "./utils.js";

export default {
  template: vueTemplate`
  <form class="filters">
    <h2 class="visually-hidden">Фильтры.</h2>

    <the-search
      class="filters__search"
      v-model="filters.search"
      @update:model-value="applyFilters"
    ></the-search>
    <div class="filters__checkbox">
      <ui-checkbox
        v-model="filters.oneWay"
        @update:model-value="applyFilters"
      >
        Прямые
      </ui-checkbox>
    </div>
    <button class="filters__button" type="button" @click="toggleFilters">
      Фильтр
      <span class="icon-filters"></span>
    </button>
    <Transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <div v-show="isPanelOpened"
        class="filters__panel"
        @click.self="toggleFilters"
      >
        <Transition
          enter-active-class="animate__animated animate__fadeInRight"
          leave-active-class="animate__animated animate__fadeOutRight"
        >
          <div class="filters__panel-inner" v-show="isPanelOpened">
            <button
              class="filters__close icon-close"
              type="button"
              @click="toggleFilters" aria-label="Закрыть">
            </button>
            <p class="filters__panel-title">Фильтр</p>
            <ui-checkbox
              v-model="filters.bestPrice"
              @update:model-value="applyFilters"
            >
              Лучшая цена
            </ui-checkbox>
          </div>
        </Transition>
      </div>
    </Transition>
  </form>
  `,
  emits: ["filter"],
  data() {
    return {
      isPanelOpened: false,
      isPanelClosed: true,
      filters: {
        search: "",
        oneWay: false,
        bestPrice: false,
      },
    };
  },
  methods: {
    applyFilters() {
      this.$emit("filter", this.filters);
    },
    toggleFilters() {
      this.isPanelOpened = !this.isPanelOpened;
    },
  },
};