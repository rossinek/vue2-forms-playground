<template>
  <label class="base-input">
    <span v-if="label" class="base-input__label">{{ label }}</span>
    <input
      class="base-input__input"
      :value="value"
      type="text"
      @input="$emit('input', $event.target.value)"
    >
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.base-input {
  display: inline-block;
  position: relative;
  padding: 10px 0;
  min-width: 200px;
}
.base-input__label {
  position: absolute;
  top: 2px;
  left: 10px;
  background-color: #fff;
  color: #b3a0a2;
  text-transform: uppercase;
  font-size: 12px;
  padding: 0 4px;
}
.base-input__input {
  border: 1px solid #b3a0a2;
  padding: 10px;
  border-radius: 3px;
  font-size: 18px;
  box-shadow: 0px 8px 16px -8px rgba(75,0,0,0.3);

  &:focus {
    outline: 3px solid #f3e0d2
  }
}
</style>
