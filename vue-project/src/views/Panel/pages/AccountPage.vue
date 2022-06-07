<script>
import { useAuthStore } from '@/stores/auth.js'

export default {
  name: 'account-page',
  data() {
    return {
      auth: useAuthStore(),
    }
  },
}
</script>

<template>
	<h1>Account Settings</h1>
</template>

<style scoped>
</style>