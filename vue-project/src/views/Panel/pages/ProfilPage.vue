<script>
import { useAuthStore } from '@/stores/auth.js'

export default {
  name: 'profil-page',
  data() {
    return {
      auth: useAuthStore(),
    }
  },
  mounted() {
    console.log('ProfilPage loaded !!!')
  }
}
</script>

<template>
	<h1>Profil, only logged users!</h1>
	<h3>Logged user info</h3>
	<pre>{{this.auth.user}}</pre>
</template>

<style scoped>
pre {
  margin: 20px 0px;
}
</style>