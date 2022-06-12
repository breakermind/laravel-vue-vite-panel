<script>
export default {
  props: ['modelValue', 'title', 'class'],
}
</script>

<template>
  <button :title="title" :class="class">{{ title }}</button>
</template>