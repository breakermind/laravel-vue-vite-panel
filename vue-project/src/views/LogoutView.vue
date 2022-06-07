<script>
import { useAuthStore } from '@/stores/auth.js'
import router from '@/router'

export default {
  data() {
    return {
      auth: useAuthStore(),
    }
  },
  mounted() {
    this.auth.message = ''
    this.auth.loggedIn = false
    this.auth.user = null
    router.push({name: 'panel'})
  }
}
</script>