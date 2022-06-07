<script>
import { useAuthStore } from '@/stores/auth.js'
import ChangeLocale from "@/components/ChangeLocale.vue";
import TopMenu from "./TopMenu.vue";

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
        {{ $t('message.helloBig') }}
        <ChangeLocale />
      </h1>
    </div>
</template>