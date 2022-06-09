<script>
import { useAuthStore } from '@/stores/auth.js'
import TopMenu from "./TopMenu.vue";
import ChangeLocale from "@/components/ChangeLocale.vue";

export default {
  name: "lang-view",
  components: {
    TopMenu, ChangeLocale,
  },
  data() {
    return {
      auth: useAuthStore()
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
    </div>
</template>