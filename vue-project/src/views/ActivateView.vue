<script>
import { useAuthStore } from '@/stores/auth.js'
import ChangeLocale from "@/components/ChangeLocale.vue";
import PageTitle from '@/components/PageTitle.vue'

export default {
  components: {
    ChangeLocale, PageTitle
  },
  data() {
    return {
      message: null,
      error: false,
      auth: useAuthStore()
    }
  },
  mounted() {
    this.auth.clearError()
    this.activate()
  },
  methods: {
    async activate() {
      if(this.$route.query.locale) {
        this.$i18n.locale = this.$route.query.locale
        await this.auth.changeLocale(this.$route.query.locale)
      }

      this.auth.activateUser(this.$route.params.id, this.$route.params.code)
    },
  },
}
</script>

<template>
  <div class="content">

    <div class="full">
      <PageTtitle :title="$t('message.activate_title')" />
      <ChangeLocale />
    </div>

    <form>
      <h1 class="w-full">
        {{ $t("activate.Activation") }}
        <router-link to="/"><img class="float-right" src="@/assets/logo.svg" width="50" height="50"></router-link>
      </h1>

      <div v-if="this.auth.message" :class="[this.auth.error ? 'alert-error' : 'alert-info', 'animate__animated animate__flipInX']">{{this.auth.message}}</div>

      <div class="full">
        <p> {{ $t('activate.Description') }} </p>
      </div>

      <div class="full">
        <router-link to="/login" class="left">{{ $t('activate.Have_an_account') }}</router-link>
        <router-link to="/password" class="right">{{ $t('activate.Forgot_password') }}</router-link>
      </div>
    </form>

  </div>
</template>