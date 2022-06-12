<script>
export default {
  props: ['modelValue', 'label', 'placeholder', 'name', 'type', 'class', 'keyup', 'icon'],
  emits: ['update:modelValue']
}
</script>

<template>
  <label>{{ label }}  <span v-html="icon"></span> </label>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="placeholder"
    :name="name"
    :type="type"
    :class="class"
    @keyup="keyup"
  />
</template>

<!--

<Input
  v-model="email"
  :placeholder="$t('login.Email_address')"
  :label="$t('login.Email_address')"
  name="email"
  type="text"
  class="input"
  :keyup="validatePass"
  icon='<i class="fas fa-envelope"></i>'
/>

<Input
  v-model="password"
  :placeholder="$t('login.Password_eg')"
  :label="$t('login.Password')"
  name="password"
  type="text"
  class="input"
  :keyup="validatePass"
  icon='<i class="fas fa-key"></i>'
/>

-->