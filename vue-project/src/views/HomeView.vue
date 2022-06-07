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
  },
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  },
}
</script>

<template>
  <main>
    <TopMenu />

    <div class="content">
      <h1>{{ $t('message.helloBig') }}</h1>
    </div>
  </main>
</template>