<script>
import { useNavbarStore } from '@/stores/navbar.js'
import NavbarLogo from "./NavbarLogo.vue";
import NavbarLinks from "./NavbarLinks.vue";

export default {
  components: {
    NavbarLinks, NavbarLogo,
  },
  data() {
    return {
      navbar: useNavbarStore(),
    }
  },
}
</script>

<template>
    <div :class="{navbar: true, hidenavbar: this.navbar.isClosed(), navbarfixed: this.navbar.isMobileWidth()}">
      <NavbarLogo />

      <div class="links">
        <NavbarLinks />
      </div>
    </div>
</template>

<style scoped>
@import "@/assets/navbar.css";
</style>