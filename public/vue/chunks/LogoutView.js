import{u as t}from"../js/index.js";const s={data(){return{auth:t()}},mounted(){this.auth.loggedIn==!0&&(this.auth.logoutUser(),this.auth.message="",this.$i18n.locale=this.$i18n.fallbackLocale,this.$router.push("/login"))}};export{s as default};
