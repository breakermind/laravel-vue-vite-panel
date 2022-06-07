<script>
export default {
  props: {
    firstName: String,
    lastName: String
  },
  emits: ['update:firstName', 'update:lastName'],
  mounted() {
    this.$refs.input.focus()
  }
}
</script>

<template>
  <input
    ref="input"
    type="text"
    name="firstName"
    :value="firstName"
    @input="$emit('update:firstName', $event.target.value)"
  />
  <input
    type="text"
    name="lastName"
    :value="lastName"
    @input="$emit('update:lastName', $event.target.value)"
  />
</template>

<!--
  Use component:
  <NameInput
    v-model:first-name="firstName"
    v-model:last-name="lastName"
  />
-->