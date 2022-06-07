<script>
import { useAuthStore } from '@/stores/auth.js'
import { useNavbarStore } from '@/stores/navbar.js'
import Navbar from "./navbar/Navbar.vue"
import LoadPageComponent from './LoadPageComponent.vue'

export default {
  components: {
    Navbar, LoadPageComponent
  },
  data() {
    return {
      auth: useAuthStore(),
      navbar: useNavbarStore(),
      componentName: 'ProfilPage', // Change page component
    }
  }
}
</script>

<template>
  <div class="panel">
    <!-- Left navbar -->
    <Navbar />

    <!-- Page component from ./pages -->
    <LoadPageComponent :name="componentName" />
  </div>
</template>

<style scoped>
@import "@/assets/navbar.css";
</style>