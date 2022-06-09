<script>
import TopMenu from '@/views/TopMenu.vue'

export default {
  components: {
    TopMenu
  },
  data() {
    return {}
  }
}
</script>

<template>
  <main>
    <TopMenu />
    <div cass="content">
      <h1> {{ $t('page.About') }} </h1>
    </div>
  </main>
</template>