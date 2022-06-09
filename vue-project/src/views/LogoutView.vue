<script>
import { useAuthStore } from '@/stores/auth.js'

export default {
  data() {
    return {
      auth: useAuthStore(),
    }
  },
  mounted() {
    if(this.auth.loggedIn == true) {
      this.auth.logoutUser()
      this.auth.message = ''
      this.$i18n.locale = this.$i18n.fallbackLocale
      this.$router.push('/login')
    }
  }
}
</script>