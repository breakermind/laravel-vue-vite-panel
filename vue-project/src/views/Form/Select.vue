<script>
export default {
  props: ['modelValue', 'label', 'name', 'class', 'options'],
  emits: ['update:modelValue'],
}
</script>

<template>
  <label>{{ label }}</label>
  <select
    :name="name"
    :class="class"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
    <option v-for="o in options" :key="o.value" :value="o.value" :disabled="o.disabled">
      {{ o.text }}
    </option>
  </select>
</template>

<style scoped>
select {
  -moz-appearance: none;
  -webkit-appearance: none;
}
select::-ms-expand {
  display: none;
}
</style>