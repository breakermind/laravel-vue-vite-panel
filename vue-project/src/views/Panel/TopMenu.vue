<script>
import { RouterLink } from "vue-router";
import { useAuthStore } from '@/stores/auth.js'
import { useNavbarStore } from '@/stores/navbar.js'

export default {
  name: "top-menu",
  data() {
    return {
      auth: useAuthStore(),
      navbar: useNavbarStore(),
      // name: auth.user.name ?? 'Unknown',
      // image: auth.user.image ?? 'https://www.w3schools.com/howto/img_avatar.png',
    }
  },
}
</script>

<template>
  <div class="panel-top-menu">

    <span class="menu-icon bars" @click="this.navbar.toggleNavbar()"> <i class="fas fa-bars"></i> </span>

    <RouterLink to="/logout" v-if="this.auth.loggedIn" class="menu-icon exit"> <i class="fas fa-sign-out-alt"></i> </RouterLink>

    <div class="user-icon">
      <img :src="this.auth.user.image">
      <div class="text"> {{ this.auth.user.name }} </div>
    </div>

    <div class="menu-icon notify menu-icon-active"> <i class="fas fa-bell"></i> <div class="dot"></div> </div>
    <div class="menu-icon chat menu-icon-active"> <i class="fas fa-comment-alt"></i> <div class="dot"></div> </div>
  </div>
</template>

<style scoped>
.panel-top-menu {
  float: left;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid var(--color-border);
}

.user-icon {
  float: right;
  width: auto;
  cursor: pointer;
}

.user-icon .text {
  float: left;
  padding: 10px;
}

.user-icon img {
  float: right;
  width: 40px;
  height: 40px;
  padding: 5px;
  border-radius: 50%;
}

.menu-icon {
  position: relative;
  color: var(--color);
  float: left;
  width: 50px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
}

.menu-icon:hover {
  color: var(--color-info);
}

.menu-icon .dot {
  display: none;
}

.menu-icon-active .dot {
  display: inherit;
  position: absolute;
  top: 10px;
  right: 15px;
  width: 10px;
  height: 10px;
  background: var(--color-alert);
  box-shadow: 0px 1px 3px var(--color-alert);
  border-radius: 50%;
}

.exit, .notify, .chat {
  float: right;
}
</style>