import { defineStore } from 'pinia'

export const useNavbarStore = defineStore({
  id: 'navbar',
  state: () => ({
    openNavbar: true,
    innerWidth: window.innerWidth,
  }),
  actions: {
    resizeNavbar() {
      this.innerWidth = window.innerWidth

      if(this.isMobileWidth()) {
        this.openNavbar = false;
      } else {
        this.openNavbar = true;
      }
    },
    toggleNavbar() {
      this.openNavbar = !this.openNavbar
    },
    isMobileWidth() {
      return this.innerWidth <= 1024 ? true : false
    },
    isClosed() {
      if(!this.openNavbar) {
        return true
      }
      return false
    },
    isFullWidth() {
      if(!this.openNavbar || this.isMobileWidth()) {
        return true
      }
      return false
    },
    getDimensions(e) {
      this.innerWidth = window.innerWidth
      this.resizeNavbar()
      console.log("Page width", this.innerWidth)
    },
  }
})
