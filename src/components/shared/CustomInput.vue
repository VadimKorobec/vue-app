<template>
  <input v-bind="$attrs" v-on="listeners" class="custom-input">
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CustomInput',
  setup(props, { emit }) {
    const listeners = {
      ...props.$attrs,
      input: (event) => emit('update:modelValue', event.target.value),
    };

    return {
      listeners,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.custom-input {
  height: 40px;
  max-width: 220px;
  width: 100%;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;

  &::placeholder {
    color: inherit;
  }
}
</style>
