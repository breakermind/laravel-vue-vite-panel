<script>
export default {
  props: ['modelValue', 'label', 'placeholder', 'name', 'type', 'class', 'keyup'],
  emits: ['update:modelValue']
}
</script>

<template>
  <label>{{ label }}</label>
  <textarea
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="placeholder"
    :name="name"
    :type="type"
    :class="class"
    @keyup="keyup"
  ></textarea>
</template>