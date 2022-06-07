import{q as S,_ as d,u,r as s,o,c as _,b as e,s as W,h as c,i as $,p as h,d as v,a,F as y,e as N,n as g,t as I}from"../js/index.js";import{_ as R}from"./logo.500c74b0.js";const p=S({id:"navbar",state:()=>({openNavbar:!0,innerWidth:window.innerWidth}),actions:{resizeNavbar(){this.innerWidth=window.innerWidth,this.innerWidth<=1024&&(this.openNavbar=!1)},toggleNavbar(){this.openNavbar=!this.openNavbar}}});const T={name:"top-menu",data(){return{auth:u(),navbar:p()}}},w=t=>(h("data-v-5b649662"),t=t(),v(),t),C={class:"panel-top-menu"},D=w(()=>e("i",{class:"fas fa-bars"},null,-1)),V=[D],z=w(()=>e("i",{class:"fas fa-sign-out-alt"},null,-1));function B(t,n,i,b,f,m){const r=s("RouterLink");return o(),_("div",C,[e("span",{class:"icon-btn",onClick:n[0]||(n[0]=l=>this.navbar.toggleNavbar())},V),this.auth.loggedIn?(o(),W(r,{key:0,to:"/logout",class:"icon-btn exit-btn"},{default:c(()=>[z]),_:1})):$("",!0)])}var A=d(T,[["render",B],["__scopeId","data-v-5b649662"]]);const E={name:"navbar-menu-logo",data(){return{auth:u(),navbar:p()}},mounted(){window.addEventListener("resize",this.getDimensions)},unmounted(){window.removeEventListener("resize",this.getDimensions)},methods:{getDimensions(){this.navbar.innerWidth=window.innerWidth,console.log("Resize event",this.width,this.height,window.innerWidth)}}},k=t=>(h("data-v-6363979e"),t=t(),v(),t),M={class:"navbar-logo"},P=k(()=>e("img",{src:R,class:"navbar-logo-img"},null,-1)),F=k(()=>e("i",{class:"fas fa-times"},null,-1)),H=[F];function q(t,n,i,b,f,m){const r=s("RouterLink");return o(),_("div",M,[a(r,{to:"/"},{default:c(()=>[P]),_:1}),this.navbar.innerWidth<=1024?(o(),_("span",{key:0,class:"close-btn",onClick:n[0]||(n[0]=l=>this.navbar.toggleNavbar())},H)):$("",!0)])}var G=d(E,[["render",q],["__scopeId","data-v-6363979e"]]);const O={},j=e("p",null,"DASHBOARD",-1),J=e("i",{class:"fas fa-home"},null,-1),K=N(" Homepage "),Q=e("p",null,"SETTINGS",-1),U=e("i",{class:"fas fa-lemon"},null,-1),X=N(" About ");function Y(t,n){const i=s("RouterLink");return o(),_(y,null,[j,a(i,{to:"/"},{default:c(()=>[J,K]),_:1}),Q,a(i,{to:"/about"},{default:c(()=>[U,X]),_:1})],64)}var Z=d(O,[["render",Y]]);const ee={components:{TopMenu:A,NavbarLinks:Z,NavbarLogo:G},data(){return{auth:u(),navbar:p()}}},L=t=>(h("data-v-63e09bfa"),t=t(),v(),t),te={class:"panel"},ne={class:"links"},se={class:"box"},ae=L(()=>e("h1",null,"Profil, only logged users!",-1)),oe=L(()=>e("h3",null,"Logged user info",-1));function ie(t,n,i,b,f,m){const r=s("NavbarLogo"),l=s("NavbarLinks"),x=s("TopMenu");return o(),_("div",te,[e("div",{class:g({navbar:!0,hidenavbar:!this.navbar.openNavbar,rightbarfixedfull:!this.navbar.innerWidth<=1024})},[a(r),e("div",ne,[a(l)])],2),e("div",{class:g({rightbar:!0,rightbarfull:!this.navbar.openNavbar,rightbarfixedfull:!this.navbar.innerWidth<=1024})},[a(x),e("div",se,[ae,oe,e("pre",null,I(this.auth.user),1)])],2)])}var ce=d(ee,[["render",ie],["__scopeId","data-v-63e09bfa"]]);export{ce as default};
