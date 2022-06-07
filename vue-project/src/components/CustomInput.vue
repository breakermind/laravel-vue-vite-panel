<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<!--
  Use component:
  <CustomInput v-model="searchText" name="searchText" type="text"/>

  Multiple
  <CustomInput
    v-for="inp in inputs"
    :key="inp.id"
    :title="inp.title"
    name="inp.name"
 />
-->