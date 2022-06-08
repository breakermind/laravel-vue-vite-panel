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
    this.auth.logoutUser()
    router.push('/panel')
  }
}
</script>