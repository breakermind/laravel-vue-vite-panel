import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'

import App from './App.vue'
import router from './router'

import { createI18n } from 'vue-i18n'
import lang from './lang'

const i18n = createI18n(lang)
const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(router)

// Get with this.app_locale in component
// app.config.globalProperties.app_locale = i18n.locale

// Global variable. Use with inject:['globalStore'] in component
app.provide('globalStore', {
	id: '123456',
	async getUsers() {
		let res = await axios.get('https://jsonplaceholder.typicode.com/users')
		console.log("Async, await", res.data)
	}

})

app.mount('#app')