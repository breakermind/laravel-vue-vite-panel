import{q as W,_ as c,u,r as a,o,c as _,b as e,s as S,h as d,i as $,p as h,d as v,a as n,F as y,e as N,n as g,t as I}from"../js/index.js";import{_ as M}from"./logo.500c74b0.js";const p=W({id:"navbar",state:()=>({openNavbar:!0,innerWidth:window.innerWidth}),actions:{resizeNavbar(){this.innerWidth=window.innerWidth,this.isMobileWidth()?this.openNavbar=!1:this.openNavbar=!0},toggleNavbar(){this.openNavbar=!this.openNavbar},isMobileWidth(){return this.innerWidth<=1024}}});const R={name:"top-menu",data(){return{auth:u(),navbar:p()}},mounted(){this.navbar.resizeNavbar(),window.addEventListener("resize",this.getDimensions())},unmounted(){window.removeEventListener("resize",this.getDimensions())},methods:{getDimensions(){this.innerWidth=window.innerWidth,this.navbar.resizeNavbar(),console.log("Page width",this.navbar.innerWidth)}}},k=t=>(h("data-v-1f0229d8"),t=t(),v(),t),T={class:"panel-top-menu"},z=k(()=>e("i",{class:"fas fa-bars"},null,-1)),C=[z],D=k(()=>e("i",{class:"fas fa-sign-out-alt"},null,-1));function V(t,s,i,b,f,m){const r=a("RouterLink");return o(),_("div",T,[e("span",{class:"icon-btn",onClick:s[0]||(s[0]=l=>this.navbar.toggleNavbar())},C),this.auth.loggedIn?(o(),S(r,{key:0,to:"/logout",class:"icon-btn exit-btn"},{default:d(()=>[D]),_:1})):$("",!0)])}var B=c(R,[["render",V],["__scopeId","data-v-1f0229d8"]]);const A={name:"navbar-menu-logo",data(){return{auth:u(),navbar:p()}}},w=t=>(h("data-v-9e53b20a"),t=t(),v(),t),E={class:"navbar-logo"},P=w(()=>e("img",{src:M,class:"navbar-logo-img"},null,-1)),F=w(()=>e("i",{class:"fas fa-times"},null,-1)),H=[F];function q(t,s,i,b,f,m){const r=a("RouterLink");return o(),_("div",E,[n(r,{to:"/"},{default:d(()=>[P]),_:1}),this.navbar.isMobileWidth()?(o(),_("span",{key:0,class:"close-btn",onClick:s[0]||(s[0]=l=>this.navbar.toggleNavbar())},H)):$("",!0)])}var G=c(A,[["render",q],["__scopeId","data-v-9e53b20a"]]);const O={},j=e("p",null,"DASHBOARD",-1),J=e("i",{class:"fas fa-home"},null,-1),K=N(" Homepage "),Q=e("p",null,"SETTINGS",-1),U=e("i",{class:"fas fa-lemon"},null,-1),X=N(" About ");function Y(t,s){const i=a("RouterLink");return o(),_(y,null,[j,n(i,{to:"/"},{default:d(()=>[J,K]),_:1}),Q,n(i,{to:"/about"},{default:d(()=>[U,X]),_:1})],64)}var Z=c(O,[["render",Y]]);const ee={components:{TopMenu:B,NavbarLinks:Z,NavbarLogo:G},data(){return{auth:u(),navbar:p()}}},L=t=>(h("data-v-16843f5f"),t=t(),v(),t),te={class:"panel"},se={class:"links"},ae={class:"box"},ne=L(()=>e("h1",null,"Profil, only logged users!",-1)),oe=L(()=>e("h3",null,"Logged user info",-1));function ie(t,s,i,b,f,m){const r=a("NavbarLogo"),l=a("NavbarLinks"),x=a("TopMenu");return o(),_("div",te,[e("div",{class:g({navbar:!0,hidenavbar:!this.navbar.openNavbar,rightbarfixedfull:this.navbar.isMobileWidth()})},[n(r),e("div",se,[n(l)])],2),e("div",{class:g({rightbar:!0,rightbarfull:!this.navbar.openNavbar,rightbarfixedfull:this.navbar.isMobileWidth()})},[n(x),e("div",ae,[ne,oe,e("pre",null,I(this.auth.user),1)])],2)])}var de=c(ee,[["render",ie],["__scopeId","data-v-16843f5f"]]);export{de as default};
