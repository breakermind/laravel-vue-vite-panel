<template>
  <div class="checkbox-line">
    <input class="checkbox" type="checkbox" :checked="isChecked" :value="value" :name="name" @change="updateInput"/>
    <div class="checkmark">
      <i class="fas fa-check dot"></i>
    </div>
    <label>{{label}}</label>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: String },
    name: { type: String },
    modelValue: {type: [Array, Boolean]},
    label: { type: String, required: true},
  },
  computed: {
    isChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value)
      }
      return this.modelValue == true
    }
  },
  methods: {
    updateInput(event) {
      let isChecked = event.target.checked
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue]
        if (isChecked) {
          newValue.push(this.value)
        } else {
          newValue.splice(newValue.indexOf(this.value), 1)
        }
        this.$emit('update:modelValue', newValue)
      } else {
        this.$emit('update:modelValue', isChecked ? true : false)
      }
    }
  }
}
</script>

<style scoped>
/* Vue round checkbox style */
.checkbox-line {
  float: left;
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.checkbox-line .checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 30px;
  width: 30px;
  z-index: 9;
}
.checkbox-line .checkmark {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 15px;
  border: 2px solid var(--color);
  border-radius: 50%;
  z-index: 3;
}
.checkbox-line .checkmark .dot {
  box-sizing: border-box;
  opacity: 0;
  color: #fff;
  width: 30px;
  height: 30px;
  padding: 5px;
  background: var(--color-vue);
  border-radius: 50%;
  border: 2px solid var(--color-vue);
  text-align: center;
  z-index: 1;
}
.checkbox-line .checkbox:checked + .checkmark {
  border: transparent;
  box-shadow: 0px 0px 0px 5px var(--color-shadow);
}
.checkbox-line .checkbox:checked + .checkmark .dot {
  opacity: 1;
}
</style>