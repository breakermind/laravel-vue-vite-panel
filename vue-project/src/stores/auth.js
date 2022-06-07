import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router'
import lang from '../lang'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: {id: 0, name: 'Unknown', image: 'https://www.w3schools.com/howto/img_avatar.png'},
    loggedIn: false,
    error: false,
    message: '',
    locale: lang.locale ?? 'en',
  }),
  getters: {
    isLoggedIn: (state) => state.loggedIn
  },
  actions: {
    setAuth(res) {
      this.loggedIn = true
      this.user = res.data.user
      this.message = res.data.message
      this.error = false
    },
    delAuth(error) {
      this.loggedIn = false
      this.user = null
      this.message = error.response.data.message ?? 'Only authenticated users'
      this.error = true
    },
    async isAuthenticated() {
      try {
        let res = await axios.get('/web/api/logged')
        console.log("isAuthenticated OK")
        this.setAuth(res)
      } catch (error) {
        console.log("isAuthenticated ERROR")
        this.delAuth(error)
      }
    },
    async loginUser(data) {
      try {
        let res = await axios.post('/web/api/login', data)
        console.log("Login OK")
        this.setAuth(res)
        router.push('/panel')
      } catch (error) {
        console.log("Login ERROR")
        this.delAuth(error)
      }
    },
    async changeLocale(locale) {
      try {
        let res = await axios.get('/web/api/locale/' + locale)
        this.locale = locale
      } catch (error) {
        console.log("Error locale", error.toJSON());
      }
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
  }
})
