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
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
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
      this.auth.registerUser(new FormData(e.target))
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
      <PageTitle :title="$t('message.register_title')" />
      <ChangeLocale />
    </div>

    <form @submit.prevent="onSubmit">
      <h1 class="w-full">
        {{ $t("register.Sign_Up") }}
        <router-link to="/"><img class="float-right" src="@/assets/logo.svg" width="50" height="50"></router-link>
      </h1>

      <div v-if="this.auth.message" :class="[this.auth.error ? 'alert-error' : 'alert-info', 'animate__animated animate__flipInX']">{{this.auth.message}}</div>

      <label>{{ $t('register.Name') }} <i class="far fa-user"></i></label>
      <input v-focus v-model="name" type="text" name="name" class="input" :placeholder="$t('register.Name_eg')">

      <label>{{ $t('register.Email_address') }} <i class="far fa-envelope"></i></label>
      <input v-model="email" type="text" name="email" class="input" :placeholder="$t('register.Email_address_eg')">

      <label>{{ $t('register.Password') }} <i class="far fa-key"></i></label>
      <input v-model="password"  @keyup="validatePass" type="password" name="password" class="input" :placeholder="$t('register.Password_eg')">

      <label>{{ $t('register.Confirm_password') }} <i class="far fa-key"></i></label>
      <input v-model="password_confirmation"  type="password" name="password_confirmation" class="input" :placeholder="$t('register.Confirm_password_eg')">

      <div class="full">
        <button class="button" :title="$t('register.Register')">{{ $t('register.Register') }}</button>
      </div>

      <div class="full">
        <router-link to="/login" class="left">{{ $t('register.Have_an_account') }}</router-link>
      <router-link to="/password" class="right">{{ $t('register.Forgot_password') }}</router-link>
      </div>
    </form>

  </div>
</template>