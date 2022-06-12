<script>
export default {
  props: {
    modelValue: {type: [Array, Boolean]},
    label: String,
    name: String,
    checked: {type: Boolean},
    value: {required: true}
  },
  emits: ['update:checked'],
  methods: {
    updateInput(event) {
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue]
        if (event.target.checked) {
          newValue.push(this.value)
        } else {
          newValue.splice(newValue.indexOf(this.value), 1)
        }
        this.$emit('update:modelValue', newValue)
      } else {
        this.$emit('update:modelValue', event.target.value)
      }
    }
  },
  mounted() {
    if(this.checked) {
      console.log("Mounted")
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue]
        if(this.checked) {
          newValue.push(this.value)
        } else {
          newValue.splice(newValue.indexOf(this.value), 1)
        }
        this.$emit('update:modelValue', newValue)
      } else {
        this.$emit('update:modelValue', this.value)
      }
    }
  }
}
</script>

<template>
  <label>{{ label }}</label>
  <input
    type="checkbox"
    :checked="checked"
    @input="$emit('update:checked', $event.target.checked)"
    @change="updateInput"
    :value="value"
  />
</template>

<!--

/* Single */
<Checkbox
  v-model:checked="remember_me"
  value="1"
  label="Remember me"
/>

/* Multiple */
<Checkbox
  v-model="list"
  v-model:checked="checked_1"
  value="123"
  label="Add 123"
/>

<Checkbox
  v-model="list"
  v-model:checked="checked_2"
  value="321"
  label="Add 321"
/>

<p> {{ list }} {{ remember_me ? 'Checked' : 'Not checked'}} </p>

-->