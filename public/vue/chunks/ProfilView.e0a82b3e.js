import{q as S,_ as d,u,r as a,o,c as _,b as t,s as W,h as c,i as $,p as h,d as v,a as n,F as y,e as N,n as g,t as I}from"../js/index.js";import{_ as M}from"./logo.500c74b0.js";const p=S({id:"navbar",state:()=>({openNavbar:!0,innerWidth:window.innerWidth}),actions:{resizeNavbar(){this.innerWidth=window.innerWidth,this.isMobileWidth()?this.openNavbar=!1:this.openNavbar=!0},toggleNavbar(){this.openNavbar=!this.openNavbar},isMobileWidth(){return this.innerWidth<=1024},getDimensions(e){this.innerWidth=window.innerWidth,this.resizeNavbar(),console.log("Page width",this.innerWidth)}}});const C={name:"top-menu",data(){return{auth:u(),navbar:p()}}},w=e=>(h("data-v-5b649662"),e=e(),v(),e),R={class:"panel-top-menu"},T=w(()=>t("i",{class:"fas fa-bars"},null,-1)),z=[T],B=w(()=>t("i",{class:"fas fa-sign-out-alt"},null,-1));function D(e,s,i,b,f,m){const r=a("RouterLink");return o(),_("div",R,[t("span",{class:"icon-btn",onClick:s[0]||(s[0]=l=>this.navbar.toggleNavbar())},z),this.auth.loggedIn?(o(),W(r,{key:0,to:"/logout",class:"icon-btn exit-btn"},{default:c(()=>[B]),_:1})):$("",!0)])}var V=d(C,[["render",D],["__scopeId","data-v-5b649662"]]);const A={name:"navbar-menu-logo",data(){return{auth:u(),navbar:p()}},mounted(){this.navbar.resizeNavbar(),window.addEventListener("resize",this.navbar.getDimensions)},beforUnmount(){window.removeEventListener("resize",this.navbar.getDimensions)}},k=e=>(h("data-v-54e32500"),e=e(),v(),e),E={class:"navbar-logo"},P=k(()=>t("img",{src:M,class:"navbar-logo-img"},null,-1)),F=k(()=>t("i",{class:"fas fa-times"},null,-1)),H=[F];function q(e,s,i,b,f,m){const r=a("RouterLink");return o(),_("div",E,[n(r,{to:"/"},{default:c(()=>[P]),_:1}),this.navbar.showCloseBtn()?(o(),_("span",{key:0,class:"close-btn",onClick:s[0]||(s[0]=l=>this.navbar.toggleNavbar())},H)):$("",!0)])}var G=d(A,[["render",q],["__scopeId","data-v-54e32500"]]);const O={},U=t("p",null,"DASHBOARD",-1),j=t("i",{class:"fas fa-home"},null,-1),J=N(" Homepage "),K=t("p",null,"SETTINGS",-1),Q=t("i",{class:"fas fa-lemon"},null,-1),X=N(" About ");function Y(e,s){const i=a("RouterLink");return o(),_(y,null,[U,n(i,{to:"/"},{default:c(()=>[j,J]),_:1}),K,n(i,{to:"/about"},{default:c(()=>[Q,X]),_:1})],64)}var Z=d(O,[["render",Y]]);const ee={components:{TopMenu:V,NavbarLinks:Z,NavbarLogo:G},data(){return{auth:u(),navbar:p()}}},L=e=>(h("data-v-16843f5f"),e=e(),v(),e),te={class:"panel"},se={class:"links"},ae={class:"box"},ne=L(()=>t("h1",null,"Profil, only logged users!",-1)),oe=L(()=>t("h3",null,"Logged user info",-1));function ie(e,s,i,b,f,m){const r=a("NavbarLogo"),l=a("NavbarLinks"),x=a("TopMenu");return o(),_("div",te,[t("div",{class:g({navbar:!0,hidenavbar:!this.navbar.openNavbar,rightbarfixedfull:this.navbar.isMobileWidth()})},[n(r),t("div",se,[n(l)])],2),t("div",{class:g({rightbar:!0,rightbarfull:!this.navbar.openNavbar,rightbarfixedfull:this.navbar.isMobileWidth()})},[n(x),t("div",ae,[ne,oe,t("pre",null,I(this.auth.user),1)])],2)])}var ce=d(ee,[["render",ie],["__scopeId","data-v-16843f5f"]]);export{ce as default};
