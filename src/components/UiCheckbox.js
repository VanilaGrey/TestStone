import { vueTemplate } from "./utils.js";

export default {
  template: vueTemplate`
    <label class="checkbox">
      <input
        class="checkbox__input"
        type="checkbox"
        v-model="value"
      >
      <span class="checkbox__check icon-check" aria-hidden="true"></span>
      <slot />
    </label>
  `,
  props: {
    modelValue: Boolean,
  },
  emits: ['update:model-value'],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:model-value', value);
      },
    },
  },
};
