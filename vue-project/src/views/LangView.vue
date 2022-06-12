<script>
import { useAuthStore } from '@/stores/auth.js'
import TopMenu from "./TopMenu.vue"
import ChangeLocale from "@/components/ChangeLocale.vue"
import Input from "./Form/Input.vue"
import Text from "./Form/Text.vue"
import Btn from "./Form/Btn.vue"
import Select from "./Form/Select.vue"
import Checkbox from "./Form/Checkbox.vue"

export default {
  name: "lang-view",
  components: {
    TopMenu, ChangeLocale, Input, Text, Btn, Select, Checkbox,
  },
  data() {
    return {
      auth: useAuthStore(),
      text: '',
      textarea: '',
      options: [
        { id: 1, text: 'Option 1', value: 1 },
        { id: 2, text: 'Option 2', value: 2 },
        { id: 3, text: 'Option 3', value: 3, disabled: true },
        { id: 4, text: 'Option 4', value: 4}
      ],
      option_selected: 4,
      remember_me: true,
      remember_me_value: 1,
      checked_1: true,
      checked_2: false,
      list: [],
      list: ['baz2'],
    }
  }
}
</script>

<template>
    <TopMenu />

    <div class="content">
      <h1>
        {{ $t('page.Lang') }}

        <ChangeLocale />
      </h1>

      <p>{{ option_selected }} {{ text }} {{ textarea }}</p>
      <p>{{ remember_me == true ? 'Checked' : 'Not checked' }}</p>
      <p>{{ list }}</p>

      <form @submit.prevent="">
        <Input
          v-model="text"
          :placeholder="$t('login.Email_address')"
          :label="$t('login.Email_address')"
          name="email"
          type="text"
          class="input"
        />

        <Text
          v-model="textarea"
          :placeholder="$t('login.Password')"
          :label="$t('login.Password')"
          name="email"
          type="text"
          class="input"
        />

        <Select
          v-model="option_selected"
          :options="options"
          :label="$t('register.Name')"
        />

        <Checkbox label="Ok" :value="remember_me_value" v-model="remember_me" name="remember_me" />

        <Checkbox label="Baz1" value="baz1" v-model="list" />
        <Checkbox label="Baz2" value="baz2" v-model="list" />
        <Checkbox label="Baz3" value="baz3" v-model="list" />

        <Btn :title="$t('login.Login')"/>

      </form>
    </div>
</template>

<style scoped>
form {
  margin: 20px auto;
  max-width: 500px;
}
button {
  margin-top: 20px;
}
</style>