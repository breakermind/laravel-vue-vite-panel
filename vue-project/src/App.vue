<script>
import { RouterLink, RouterView } from "vue-router";
import { inject } from 'vue'
import axios from 'axios'

export default {
  inject: ['globalStore'],
  data() {
    return {}
  },
  mounted() {
    this.loadLang()
    console.log(this.globalStore)
    this.globalStore.id = 'Store 123456'
  },
  methods: {
    async loadLang() {
      try {
        let res = await axios.get('/web/api/csrf')
        console.log("Loaded locale from server", res.data.locale)
        this.$i18n.locale = res.data.locale
        console.log("Current locale ", this.$i18n.locale)
      }catch(error) {
        console.log("loadLang", error)
      }
    }
  }
}
</script>

<template>
  <!-- <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav> -->

  <RouterView />
</template>

<style>
@import '@/assets/fonts.css';
@import '@/assets/base.css';
</style>
