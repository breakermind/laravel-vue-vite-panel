import{_ as c,u as f,r as a,o as _,c as i,b as t,q as L,h as r,i as x,p,d as h,a as s,F as w,e as g,n as v,t as I}from"../js/index.js";import{_ as S}from"./logo.500c74b0.js";const y={name:"top-menu",data(){return{auth:f()}},mounted(){this.auth.resizeNavbar()},methods:{toggleNavbar(){this.auth.openNavbar=!this.auth.openNavbar}}},m=e=>(p("data-v-1ca2909f"),e=e(),h(),e),R={class:"panel-top-menu"},T=m(()=>t("i",{class:"fas fa-bars"},null,-1)),V=[T],B=m(()=>t("i",{class:"fas fa-sign-out-alt"},null,-1));function C(e,n,o,$,N,d){const l=a("RouterLink");return _(),i("div",R,[t("span",{class:"icon-btn",onClick:n[0]||(n[0]=(...u)=>d.toggleNavbar&&d.toggleNavbar(...u))},V),this.auth.loggedIn?(_(),L(l,{key:0,to:"/logout",class:"icon-btn exit-btn"},{default:r(()=>[B]),_:1})):x("",!0)])}var A=c(y,[["render",C],["__scopeId","data-v-1ca2909f"]]);const M={},D=e=>(p("data-v-ee68a842"),e=e(),h(),e),P={class:"navbar-logo"},z=D(()=>t("img",{src:S,class:"navbar-logo-img"},null,-1));function E(e,n){const o=a("RouterLink");return _(),i("div",P,[s(o,{to:"/"},{default:r(()=>[z]),_:1})])}var F=c(M,[["render",E],["__scopeId","data-v-ee68a842"]]);const H={},W=t("p",null,"DASHBOARD",-1),q=t("i",{class:"fas fa-home"},null,-1),G=g(" Homepage "),O=t("p",null,"SETTINGS",-1),j=t("i",{class:"fas fa-lemon"},null,-1),J=g(" About ");function K(e,n){const o=a("RouterLink");return _(),i(w,null,[W,s(o,{to:"/"},{default:r(()=>[q,G]),_:1}),O,s(o,{to:"/about"},{default:r(()=>[j,J]),_:1})],64)}var Q=c(H,[["render",K]]);const U={components:{TopMenu:A,NavbarLinks:Q,NavbarLogo:F},data(){return{auth:f()}}},b=e=>(p("data-v-f549d6f2"),e=e(),h(),e),X={class:"panel"},Y={class:"links"},Z={class:"box"},ee=b(()=>t("h1",null,"Profil, only logged users!",-1)),te=b(()=>t("h3",null,"Logged user info",-1));function oe(e,n,o,$,N,d){const l=a("NavbarLogo"),u=a("NavbarLinks"),k=a("TopMenu");return _(),i("div",X,[t("div",{class:v({navbar:!0,hidenavbar:!this.auth.openNavbar,rightbarfixed:e.windows.innerWidth<=1024})},[s(l),t("div",Y,[s(u)])],2),t("div",{class:v({rightbar:!0,rightbarfull:!this.auth.openNavbar,rightbarfixedfull:e.windows.innerWidth<=1024})},[s(k),t("div",Z,[ee,te,t("pre",null,I(this.auth.user),1)])],2)])}var ne=c(U,[["render",oe],["__scopeId","data-v-f549d6f2"]]);export{ne as default};
