<script>
import { RouterLink } from "vue-router";
import { useAuthStore } from '@/stores/auth.js'

export default {
  name: "top-menu",
  data() {
    return {
      auth: useAuthStore()
    }
  }
}
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/params/123/HELLO">Params</RouterLink>
    <RouterLink to="/map">Map</RouterLink>
    <RouterLink to="/lang">Lang</RouterLink>
    <RouterLink to="/login" v-if="!this.auth.loggedIn">Login</RouterLink>
    <RouterLink to="/panel" v-if="this.auth.loggedIn">Panel</RouterLink>
    <RouterLink to="/logout" v-if="this.auth.loggedIn">Logout</RouterLink>
  </nav>
</template>