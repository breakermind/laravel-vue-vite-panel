<script>
import { useAuthStore } from '@/stores/auth.js'
import ChangeLocale from "@/components/ChangeLocale.vue";
import PageTitle from '@/components/PageTitle.vue'
import Checkbox from "./Form/Checkbox.vue"
import Input from "./Form/Input.vue"

export default {
  components: {
    ChangeLocale, PageTitle, Checkbox, Input
  },
  data() {
    return {
      email: '',
      password: '',
      remember_me: false,
      message: null,
      error: false,
      auth: useAuthStore()
    }
  },
  mounted() {
    this.auth.clearError()
  },
  methods: {
    onSubmit(e) {
      this.auth.scrollTop()
      this.auth.loginUser(new FormData(e.target))
    },
    validatePass(e) {
      console.log("Key", e.target.value)
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
      <PageTitle :title="$t('message.login_title')" />
      <ChangeLocale />
    </div>

    <form @submit.prevent="onSubmit" class="form">
      <h1 class="w-full">
        {{ $t("login.Sign_In") }}
        <router-link to="/"><img class="float-right" src="@/assets/logo.svg" width="50" height="50"></router-link>
      </h1>

      <div v-if="this.auth.message" :class="[this.auth.error ? 'alert-error' : 'alert-info', 'animate__animated animate__flipInX']">{{this.auth.message}}</div>

      <label>{{ $t("login.Email_address") }} <i class="fas fa-envelope"></i></label>
      <input v-focus v-model="email" type="text" name="email" class="input" :placeholder="$t('login.Email_address_eg')">

      <label>{{ $t('login.Password') }} <i class="fas fa-key"></i></label>
      <input v-model="password"  @keyup="validatePass" type="password" name="password" class="input" :placeholder="$t('login.Password_eg')">

      <Checkbox :label="$t('login.Remember_me')" value="1" v-model="remember_me" name="remember_me" />

      <div class="full">
        <button class="button" :title="$t('login.Login')" ref="button">{{ $t('login.Login') }}</button>
      </div>

      <div class="full">
        <router-link to="/register" class="left">{{ $t('login.Dont_have_an_account') }}</router-link>
        <router-link to="/password" class="right">{{ $t('login.Forgot_password') }}</router-link>
      </div>
    </form>

  </div>
</template>