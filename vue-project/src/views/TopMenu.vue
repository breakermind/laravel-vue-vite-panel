<script>
import ChangeLocale from '@/components/ChangeLocale.vue'
import { useAuthStore } from '@/stores/auth.js'
import { RouterLink } from "vue-router";

export default {
  components: {
    ChangeLocale
  },
  name: "TopMenu",
  data() {
    return {
      auth: useAuthStore()
    }
  }
}
</script>

<template>
  <nav>
    <RouterLink to="/">{{ $t('page.Home') }}</RouterLink>
    <RouterLink to="/about">{{ $t('page.About') }}</RouterLink>
    <RouterLink to="/params/123/HELLO">{{ $t('page.Params') }}</RouterLink>
    <RouterLink to="/map">{{ $t('page.Map') }}</RouterLink>
    <RouterLink to="/lang">{{ $t('page.Lang') }}</RouterLink>
    <RouterLink to="/login" v-if="!this.auth.loggedIn">{{ $t('page.Login') }}</RouterLink>
    <RouterLink to="/panel" v-if="this.auth.loggedIn">{{ $t('page.Panel') }}</RouterLink>
    <RouterLink to="/logout" v-if="this.auth.loggedIn">{{ $t('page.Logout') }}</RouterLink>

    <ChangeLocale />
  </nav>
</template>