<script>
import { useAuthStore } from '@/stores/auth.js'

export default {
  name: 'password-page',
  data() {
    return {
      auth: useAuthStore(),
    }
  },
}
</script>

<template>
	<h1>Change Password</h1>
</template>

<style scoped>
</style>