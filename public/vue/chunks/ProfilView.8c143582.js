import{q as x,_ as c,u as h,r as i,o as n,c as _,a as r,h as m,i as $,p as N,d as L,b as t,F as C,e as g,n as w,s as b,t as I,x as P,y as W,z as S,K as A,A as f}from"../js/index.js";import{_ as D}from"./logo.500c74b0.js";const v=x({id:"navbar",state:()=>({openNavbar:!0,innerWidth:window.innerWidth}),actions:{resizeNavbar(){this.innerWidth=window.innerWidth,this.isMobileWidth()?this.openNavbar=!1:this.openNavbar=!0},toggleNavbar(){this.openNavbar=!this.openNavbar},isMobileWidth(){return this.innerWidth<=1024},isClosed(){return!this.openNavbar},isFullWidth(){return!!(!this.openNavbar||this.isMobileWidth())},getDimensions(e){this.innerWidth=window.innerWidth,this.resizeNavbar(),console.log("Page width",this.innerWidth)}}});const E={name:"navbar-menu-logo",data(){return{auth:h(),navbar:v()}},mounted(){this.navbar.resizeNavbar(),window.addEventListener("resize",this.navbar.getDimensions)},beforUnmount(){window.removeEventListener("resize",this.navbar.getDimensions)}},y=e=>(N("data-v-1dad69e8"),e=e(),L(),e),M={class:"navbar-logo"},R=y(()=>t("img",{src:D,class:"navbar-logo-img"},null,-1)),T=y(()=>t("i",{class:"fas fa-times"},null,-1)),V=[T];function z(e,a,o,p,d,u){const s=i("RouterLink");return n(),_("div",M,[r(s,{to:"/"},{default:m(()=>[R]),_:1}),this.navbar.isMobileWidth()?(n(),_("span",{key:0,class:"close-btn",onClick:a[0]||(a[0]=l=>this.navbar.toggleNavbar())},V)):$("",!0)])}var B=c(E,[["render",z],["__scopeId","data-v-1dad69e8"]]);const q={},F=t("p",null,"DASHBOARD",-1),O=t("i",{class:"fas fa-home"},null,-1),H=g(" Homepage "),K=t("p",null,"SETTINGS",-1),U=t("i",{class:"fas fa-lemon"},null,-1),G=g(" About ");function j(e,a){const o=i("RouterLink");return n(),_(C,null,[F,r(o,{to:"/"},{default:m(()=>[O,H]),_:1}),K,r(o,{to:"/about"},{default:m(()=>[U,G]),_:1})],64)}var J=c(q,[["render",j]]);const Q={components:{NavbarLinks:J,NavbarLogo:B},data(){return{navbar:v()}}},X={class:"links"};function Y(e,a,o,p,d,u){const s=i("NavbarLogo"),l=i("NavbarLinks");return n(),_("div",{class:w({navbar:!0,hidenavbar:this.navbar.isClosed(),navbarfixed:this.navbar.isMobileWidth()})},[r(s),t("div",X,[r(l)])],2)}var Z=c(Q,[["render",Y],["__scopeId","data-v-395a48b3"]]);const ee={name:"top-menu",data(){return{auth:h(),navbar:v()}}},k=e=>(N("data-v-111a2f8a"),e=e(),L(),e),te={class:"panel-top-menu"},ae=k(()=>t("i",{class:"fas fa-bars"},null,-1)),ne=[ae],oe=k(()=>t("i",{class:"fas fa-sign-out-alt"},null,-1)),se={class:"user-icon"},ie=["src"],re={class:"text"},_e=P('<div class="menu-icon notify menu-icon-active" data-v-111a2f8a><i class="fas fa-bell" data-v-111a2f8a></i> <div class="dot" data-v-111a2f8a></div></div><div class="menu-icon chat menu-icon-active" data-v-111a2f8a><i class="fas fa-comment-alt" data-v-111a2f8a></i> <div class="dot" data-v-111a2f8a></div></div>',2);function ce(e,a,o,p,d,u){const s=i("RouterLink");return n(),_("div",te,[t("span",{class:"menu-icon bars",onClick:a[0]||(a[0]=l=>this.navbar.toggleNavbar())},ne),this.auth.loggedIn?(n(),b(s,{key:0,to:"/logout",class:"menu-icon exit"},{default:m(()=>[oe]),_:1})):$("",!0),t("div",se,[t("img",{src:this.auth.user.image},null,8,ie),t("div",re,I(this.auth.user.name),1)]),_e])}var de=c(ee,[["render",ce],["__scopeId","data-v-111a2f8a"]]);function ue(e){switch(e){case"./pages/AccountPage.vue":return f(()=>import("./AccountPage.62e97115.js"),["vue/chunks/AccountPage.62e97115.js","vue/js/index.js","vue/css/index.css"]);case"./pages/PasswordPage.vue":return f(()=>import("./PasswordPage.8bac4c36.js"),["vue/chunks/PasswordPage.8bac4c36.js","vue/js/index.js","vue/css/index.css"]);case"./pages/ProfilPage.vue":return f(()=>import("./ProfilPage.faee839b.js"),["vue/chunks/ProfilPage.faee839b.js","vue/css/ProfilPage.css","vue/js/index.js","vue/css/index.css"]);default:return new Promise(function(a,o){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}const le={name:"LoadComponent",props:{componentName:{type:String,required:!0}},components:{TopMenu:de},data(){return{auth:h(),navbar:v()}},mounted(){console.log("Loading component",this.componentName)},computed:{loadComp(){return W(()=>ue("./pages/"+this.componentName+".vue"))}}},ve={class:"box"},pe=g(" hello ");function me(e,a,o,p,d,u){const s=i("TopMenu");return n(),_("div",{class:w({rightbar:!0,rightbarfull:this.navbar.isFullWidth()})},[r(s),t("div",ve,[(n(),b(A,null,[(n(),b(S(u.loadComp)))],1024)),pe])],2)}var he=c(le,[["render",me],["__scopeId","data-v-44644e14"]]);const fe={components:{Navbar:Z,LoadComponent:he},data(){return{componentName:"ProfilPage",auth:h(),navbar:v()}},mounted(){console.log("Load",this.componentName)}},be={class:"panel"};function ge(e,a,o,p,d,u){const s=i("Navbar"),l=i("LoadComponent");return n(),_("div",be,[r(s),r(l,{componentName:d.componentName},null,8,["componentName"])])}var Le=c(fe,[["render",ge],["__scopeId","data-v-b89c9762"]]);export{Le as default};
