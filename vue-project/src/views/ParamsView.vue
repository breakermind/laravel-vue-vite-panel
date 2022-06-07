<script>
import { useAuthStore } from '@/stores/auth.js'
import TopMenu from "./TopMenu.vue";

export default {
  name: "param-view",
  components: {
    TopMenu,
  },
  data() {
    return {
      id: this.$route.params.id ?? 0,
      code: this.$route.params.code ?? 'empty',
      auth: useAuthStore()
    }
  }
}
</script>

<template>
  <main>
    <TopMenu />

    <div class="content">
      <h1> This is params page </h1>
      <span> {{ id }} {{ code }} </span>
    </div>
  </main>
</template>