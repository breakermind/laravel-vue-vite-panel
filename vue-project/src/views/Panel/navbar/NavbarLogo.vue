<script>
import { RouterLink } from "vue-router";
import { useAuthStore } from '@/stores/auth.js'
import { useNavbarStore } from '@/stores/navbar.js'

export default {
  name: "navbar-menu-logo",
  data() {
    return {
      auth: useAuthStore(),
      navbar: useNavbarStore(),
    }
  },
  mounted() {
    this.navbar.resizeNavbar()
    window.addEventListener('resize', this.navbar.getDimensions)
  },
  beforUnmount() {
    window.removeEventListener('resize', this.navbar.getDimensions)
  },
}
</script>

<template>
<div class="navbar-logo">
      <RouterLink to="/">
        <img src="@/assets/logo.svg" class="navbar-logo-img">
      </RouterLink>

      <span class="close-btn" @click="this.navbar.toggleNavbar()" v-if="this.navbar.isMobileWidth()"> <i class="fas fa-times"></i> </span>
</div>
</template>

<style scoped>
.close-btn {
  float: right;
  cursor: pointer;
}

.navbar-logo {
  float: left;
  width: 100%;
  padding: 18px;
  border-bottom: 1px solid var(--color-border);
}

.navbar-logo-img {
  float: left;
  height: 30px;
  width: auto;
}
</style>