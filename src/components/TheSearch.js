import { vueTemplate } from './utils.js';

export default {
  template: vueTemplate`
    <div
      class="search"
      :class="{ 'search--open': isOpened }"
    >
      <input type="search" name="search" class="search__input" placeholder="Авиакомпании" v-model="search" readonly
     >
      <button class="search__button" type="button" @click="isOpened = !isOpened">
      <span class="icon-arrow"></span>
      </button>
      <ul class="search__content">
        <li
          class="search__item"
          v-for="option in options"
          :key="option"
          @click="onChange(option)"
        >{{ option }}</li>
      </ul>
    </div>
  `,
  props: {
    modelValue: String,
  },
  emits: ['update:model-value'],
  data() {
    return {
      isOpened: false,
      options: [
        'Аэрофлот',
        'NordStar',
        'S7 Airlines',
        'Уральские авиалинии',
        'Pobeda',
        'Россия',
      ]
    };
  },
  computed: {
    search: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:model-value', value);
      },
    },
  },
  methods: {
    onChange(option) {
      this.search = option;
      this.isOpened = false;
    },
  },
};
