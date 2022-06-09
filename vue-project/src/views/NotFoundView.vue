<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="content">
      <h1>{{ $t('page.Error404') }}</h1>
      <p> <RouterLink to="/"> <i class="fas fa-chevron-left"></i> {{ $t('message.back') ?? 'Homepage' }} </RouterLink> </p>
  </div>
</template>

<style scoped>
  .content {padding-top: 200px;}
  h1 {float: left; width: 100%; font-weight: 900; font-size: 35px; text-align: center;}
  p {text-align: center;}
  a {font-weight: 900; font-size: 2rem; transition: all .6s;}
  a:hover {color: #f23;}
  a:hover i, a:hover svg {
    padding-right: 20px;
  }
</style>