import { defineStore } from 'pinia'
import router from '../router'
import lang from '../lang'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {id: 0, name: 'Unknown', image: 'https://www.w3schools.com/howto/img_avatar.png'},
    loggedIn: false,
    error: false,
    message: '',
  }),
  getters: {
    isLoggedIn: (state) => state.loggedIn
  },
  actions: {
    async changeLocale(locale) {
      try {
        let res = await axios.get('/web/api/locale/' + locale)
        console.log("Change locale", res.data);
      } catch (error) {
        console.log("Error locale", error.toJSON());
      }
    },
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
        this.loggedIn = true
        this.user = res.data.user
      } catch (error) {
        console.log("isAuthenticated ERROR")
        this.loggedIn = false
        this.user = null
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
    async logoutUser() {
      let res = await axios.get('/web/api/logout')
      console.log("Logout OK")
      this.auth.message = ''
      this.auth.loggedIn = false
      this.auth.user = null
    },
    async changeUserPassword(data) {
      try {
        let res = await axios.post('/web/api/change-password', data)
        console.log("Password OK")
        this.message = res.data.message
        this.error = false
      } catch (error) {
        console.log("Password ERROR")
        this.message = error.response.data.message
        this.error = true
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
