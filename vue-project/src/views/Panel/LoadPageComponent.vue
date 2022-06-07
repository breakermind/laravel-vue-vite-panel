<script>
import { defineAsyncComponent } from "vue";
import { useAuthStore } from '@/stores/auth.js'
import { useNavbarStore } from '@/stores/navbar.js'
import TopMenu from "./TopMenu.vue";

export default {
  name: "LoadPageComponent",
  props: {
    name: { type: String, required: true }
  },
  components: {
    TopMenu,
  },
  data () {
    return {
      auth: useAuthStore(),
      navbar: useNavbarStore(),
    }
  },
  computed: {
    loadComponent() {
      return defineAsyncComponent(() =>import('./pages/' + this.name + '.vue'))
    }
  }
}
</script>

<template>
  <div :class="{rightbar: true, rightbarfull: this.navbar.isFullWidth()}">
      <TopMenu />

      <div class="box">
        <keep-alive>
          <component :is="loadComponent"></component>
        </keep-alive>
      </div>
    </div>
</template>

<style scoped>
@import "@/assets/navbar.css";
</style>