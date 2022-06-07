<script>
import { useAuthStore } from '@/stores/auth.js'
import TopMenu from "./TopMenu.vue";

export default {
  components: {
    TopMenu,
  },
  data() {
    return {
      auth: useAuthStore()
    }
  }
}
</script>

<template>
  <main>
    <TopMenu />

    <div class="content">
      <h1> About page content </h1>
    </div>
  </main>
</template>