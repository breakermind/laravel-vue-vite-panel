<script>
import { useAuthStore } from '@/stores/auth.js'

export default {
  name: 'password-page',
  data() {
    return {
      password: '',
      password_confirmation: '',
      password_current: '',
      auth: useAuthStore(),
    }
  },
  mounted() {
    this.clearError()
  },
  methods: {
    onSubmit(e) {
      this.auth.changeUserPassword(new FormData(e.target))
      this.scrollTop()
    },
    validatePass(e) {
      console.log("Key", e.target.value)
    },
    scrollTop() {
      window.scrollTo({top: 0, behavior: 'smooth'})
    },
    clearError() {
      this.auth.message = ''
      this.auth.error = false
    }
  },
  directives: {
    focus: {
      // Use with <input v-focus>
      mounted(el) {
        el.focus()
      }
    }
  }
}
</script>

<template>
  <div class="content">
    <h1> {{ $t('page.Settings') }} </h1>

    <form @submit.prevent="onSubmit">
      <h2> {{ $t('change_password.Change_password') }} </h2>

      <div v-if="this.auth.message" :class="[this.auth.error ? 'alert-error' : 'alert-info', 'animate__animated animate__flipInX']">{{this.auth.message}}</div>

      <label>{{ $t('change_password.Current_password') }} <i class="far fa-key"></i></label>
      <input v-focus v-model="password_current" type="password" name="password_current" class="input" :placeholder="$t('change_password.Current_password')">

      <label>{{ $t('change_password.New_password') }} <i class="far fa-key"></i></label>
      <input v-model="password" @keyup="validatePass" type="password" name="password" class="input" :placeholder="$t('change_password.New_password')">

      <label>{{ $t('change_password.Confirm_password') }} <i class="far fa-key"></i></label>
      <input v-model="password_confirmation"  type="password" name="password_confirmation" class="input" :placeholder="$t('change_password.Confirm_password')">

      <div class="full">
        <button class="button" :title="$t('change_password.Change')">{{ $t('change_password.Change') }}</button>
      </div>

      <!-- <div class="full">
        <router-link to="/login" class="left">{{ $t('change_password.Have_an_account') }}</router-link>
        <router-link to="/password" class="right">{{ $t('change_password.Forgot_password') }}</router-link>
      </div> -->
    </form>

  </div>
</template>

<style scoped>
form {width: 100%; max-width: 100%; margin: 20px 0px; padding: 20px 30px; border: 1px solid var(--color-border) }
</style>