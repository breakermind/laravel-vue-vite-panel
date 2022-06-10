<script>
import { RouterLink } from "vue-router";
import PageTitle from '@/components/PageTitle.vue'

export default {
  components: {
    PageTitle
  },
  data() {
    return {
    }
  }
}
</script>

<template>
  <div class="page">
    <page-title :title="$t('error404.title')" />

    <div class="e404">404</div>

    <h1>{{ $t('error404.title') }}</h1>
    <p>{{ $t('error404.message') }}</p>

    <router-link to="/" class="home-btn"> <i class="fas fa-chevron-left"></i> {{ $t('error404.button') }} </router-link>
  </div>
</template>

<style scoped>
.page {
  float: left;
  width: 100%;
  min-height: 100vh;
  text-align: center;
}
h1, p {
  float: left;
  width: 100%;
  color: #003399;
  text-align: center;
}

.home-btn {
  margin: 10px auto;
  padding: 15px 32px;
  text-decoration: none;
  color: #fff;
  background: #204090;
  display: inline-block;
}
.home-btn i {
  margin-right: 20px;
}
.e404 {
  margin: 50px auto 10px auto;
  color: #00339933;
  font-size: 200px;
  font-weight: 900;
}
</style>