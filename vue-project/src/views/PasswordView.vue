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
      email: '',
      password: '',
      remember_me: 0,
      message: null,
      error: false,
      auth: useAuthStore()
    }
  },
  mounted() {
    this.auth.message = ''
    this.auth.error = false
  },
  methods: {
    onSubmit(e) {
      this.auth.resetUserPassword(new FormData(e.target))
    },
    validatePass(e) {
      // console.log("Key", e.target.value)
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  },
  directives: {
    focus: {
      // Use with <input v-focus>
      mounted(el) {
        el.focus()
      }
    }
  },
}
</script>

<template>
  <div class="content">

    <div class="full">
      <PageTitle :title="$t('message.password_title')" />
      <ChangeLocale />
    </div>

    <form @submit.prevent="onSubmit">
      <h1 class="w-full">
        {{ $t("password.Reset_password") }}
        <router-link to="/"><img class="float-right" src="@/assets/logo.svg" width="50" height="50"></router-link>
      </h1>

      <div v-if="this.auth.message" :class="[this.auth.error ? 'alert-error' : 'alert-info', 'animate__animated animate__flipInX']">{{this.auth.message}}</div>

      <label>{{ $t('password.Email_address') }} <i class="far fa-envelope"></i></label>
      <input v-focus v-model="email" type="text" name="email" class="input" :placeholder="$t('password.Email_address_eg')">

      <div class="full">
        <button class="button" :title="$t('password.Send_password')">{{ $t('password.Send_password') }}</button>
      </div>

      <div class="full">
        <router-link to="/login" class="left">{{ $t('password.Have_an_account') }}</router-link>
        <router-link to="/register" class="right">{{ $t('password.Dont_have_an_account') }}</router-link>
      </div>
    </form>

  </div>
</template>