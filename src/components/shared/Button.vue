<template>
  <button
    v-on="listeners"
    v-bind:type="type"
    :class="{ btn: true, 'btn--outlined': outlined }"
  >
    <slot></slot>
  </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$attrs, // Используем $attrs для передачи атрибутов
        click: (event) => this.$emit('click', event),
      };
    },
  },
});
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  font-size: 18px;
  background: #ff662d;
  color: #fff;
  cursor: pointer;
  min-width: 220px;
  border: 1px solid transparent;
  padding: 8px 15px;

  &--outlined {
    background: none;
    border: 1px solid #ff662d;
    color: #ff662d;
  }
}
</style>
