import{e as a,l as o,f as t,g as r}from"../js/index.js";const i=a({id:"main",state:()=>{var e;return{user:null,loggedIn:!1,error:!1,message:"",locale:(e=o.locale)!=null?e:"en"}},getters:{isLoggedIn:e=>e.loggedIn},actions:{async isAuthenticated(){var e;try{let s=await t.get("/web/api/logged");console.log("isAuthenticated OK"),this.loggedIn=!0,this.user=s.data.user,this.message=error.response.data.message,this.error=!1}catch(s){console.log("isAuthenticated ERROR"),this.loggedIn=!1,this.user=null,this.message=(e=s.response.data.message)!=null?e:"Only authenticated users",this.error=!0}},async loginUser(e){try{let s=await t.post("/web/api/login",e);console.log("Login OK"),this.error=!1,this.message=s.data.message,this.user=s.data.user,this.loggedIn=!0,r.push("/panel")}catch(s){console.log("Login ERROR"),this.error=!0,this.message=s.response.data.message,this.user=null,this.loggedIn=!1}},async changeLocale(e){try{let s=await t.get("/web/api/locale/"+e);this.locale=e}catch(s){console.log("Error locale",s)}},scrollTop(){window.scrollTo({top:0,behavior:"smooth"})}}});export{i as u};
