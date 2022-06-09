import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import { useAuthStore } from '@/stores/auth.js'

const router = createRouter({
  linkActiveClass: "router-link-active",
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/params/:id/:code',
      name: 'params',
      component: () => import('../views/ParamsView.vue')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../views/MapView.vue')
    },
    {
      path: '/lang',
      name: 'lang',
      component: () => import('../views/LangView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/password',
      name: 'password',
      component: () => import('../views/PasswordView.vue')
    },
    {
      path: '/activate/:id/:code',
      name: 'activate',
      component: () => import('../views/ActivateView.vue')
    },
    {
      path: '/panel',
      name: 'panel',
      component: () => import('../views/Panel/ProfilView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/panel/password',
      name: 'panel.password',
      component: () => import('../views/Panel/ChangePasswordView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/panel/account',
      name: 'panel.account',
      component: () => import('../views/Panel/AccountView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('../views/LogoutView.vue')
    },
    {
     path: '/:catchAll(.*)',
     name: 'error.page',
     component: () => import('../views/NotFoundView.vue'),
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  // ✅ This will work make sure the correct store is used for the current running app
  const auth = useAuthStore()

  // ✅ Login with remember me token and check is user authenticated
  await auth.isAuthenticated()

  if(to.name == 'login' && auth.isLoggedIn) {
    // ✅ Redirect to panel if logged
    next({
      name: 'panel'
    })
  } else if (to.meta.requiresAuth && !auth.isLoggedIn){
    // ✅ Redirect to login if not logged
    next({
      name: 'login',
      query: { redirected_from: to.fullPath }
    })
  } else {
    // ✅ Continue
    next()
  }
})

export default router
