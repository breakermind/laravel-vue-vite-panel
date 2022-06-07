<script>
import { RouterLink, RouterView } from "vue-router";
import { inject } from 'vue'
import HelloWorld from "@/components/HelloWorld.vue";
import { useAuthStore } from '@/stores/auth.js'

export default {
  inject: ['globalStore'],
  setup() {
    const auth = useAuthStore()
    const store = inject('globalStore')
    return { auth, store }
  },
  mounted() {
    console.log('Lang', this.auth.locale, 'Global Store', this.globalStore, this.store)
    this.globalStore.id = 'Store 123456'
  }
}
</script>

<template>
  <RouterView />
</template>

<style>
@import "@/assets/tailwind.css";
@import "@/assets/fonts.css";
@import "@/assets/base.css";
</style>
