import{q as S,_ as d,u,r as a,o as n,c as _,b as t,s as W,h as c,i as $,p as h,d as v,a as o,F as y,e as N,n as g,t as I}from"../js/index.js";import{_ as M}from"./logo.500c74b0.js";const p=S({id:"navbar",state:()=>({openNavbar:!0,innerWidth:window.innerWidth}),actions:{resizeNavbar(){this.innerWidth=window.innerWidth,this.isMobileWidth()?this.openNavbar=!1:this.openNavbar=!0},toggleNavbar(){this.openNavbar=!this.openNavbar},isMobileWidth(){return this.innerWidth<=1024}}});const T={name:"top-menu",data(){return{auth:u(),navbar:p()}}},k=e=>(h("data-v-5b649662"),e=e(),v(),e),R={class:"panel-top-menu"},C=k(()=>t("i",{class:"fas fa-bars"},null,-1)),D=[C],V=k(()=>t("i",{class:"fas fa-sign-out-alt"},null,-1));function z(e,s,i,b,f,m){const r=a("RouterLink");return n(),_("div",R,[t("span",{class:"icon-btn",onClick:s[0]||(s[0]=l=>this.navbar.toggleNavbar())},D),this.auth.loggedIn?(n(),W(r,{key:0,to:"/logout",class:"icon-btn exit-btn"},{default:c(()=>[V]),_:1})):$("",!0)])}var B=d(T,[["render",z],["__scopeId","data-v-5b649662"]]);const A={name:"navbar-menu-logo",data(){return{auth:u(),navbar:p()}}},L=e=>(h("data-v-9e53b20a"),e=e(),v(),e),E={class:"navbar-logo"},P=L(()=>t("img",{src:M,class:"navbar-logo-img"},null,-1)),F=L(()=>t("i",{class:"fas fa-times"},null,-1)),H=[F];function q(e,s,i,b,f,m){const r=a("RouterLink");return n(),_("div",E,[o(r,{to:"/"},{default:c(()=>[P]),_:1}),this.navbar.isMobileWidth()?(n(),_("span",{key:0,class:"close-btn",onClick:s[0]||(s[0]=l=>this.navbar.toggleNavbar())},H)):$("",!0)])}var G=d(A,[["render",q],["__scopeId","data-v-9e53b20a"]]);const O={},U=t("p",null,"DASHBOARD",-1),j=t("i",{class:"fas fa-home"},null,-1),J=N(" Homepage "),K=t("p",null,"SETTINGS",-1),Q=t("i",{class:"fas fa-lemon"},null,-1),X=N(" About ");function Y(e,s){const i=a("RouterLink");return n(),_(y,null,[U,o(i,{to:"/"},{default:c(()=>[j,J]),_:1}),K,o(i,{to:"/about"},{default:c(()=>[Q,X]),_:1})],64)}var Z=d(O,[["render",Y]]);const ee={components:{TopMenu:B,NavbarLinks:Z,NavbarLogo:G},data(){return{auth:u(),navbar:p()}},mounted(){this.navbar.resizeNavbar(),window.addEventListener("resize",this.getDimensions)},beforUnmount(){window.removeEventListener("resize",this.getDimensions)},methods:{getDimensions(e){console.log(e.currentTarget.innerWidth)}}},x=e=>(h("data-v-28a2c1ce"),e=e(),v(),e),te={class:"panel"},se={class:"links"},ae={class:"box"},oe=x(()=>t("h1",null,"Profil, only logged users!",-1)),ne=x(()=>t("h3",null,"Logged user info",-1));function ie(e,s,i,b,f,m){const r=a("NavbarLogo"),l=a("NavbarLinks"),w=a("TopMenu");return n(),_("div",te,[t("div",{class:g({navbar:!0,hidenavbar:!this.navbar.openNavbar,rightbarfixedfull:this.navbar.isMobileWidth()})},[o(r),t("div",se,[o(l)])],2),t("div",{class:g({rightbar:!0,rightbarfull:!this.navbar.openNavbar,rightbarfixedfull:this.navbar.isMobileWidth()})},[o(w),t("div",ae,[oe,ne,t("pre",null,I(this.auth.user),1)])],2)])}var ce=d(ee,[["render",ie],["__scopeId","data-v-28a2c1ce"]]);export{ce as default};
