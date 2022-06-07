import{q as S,_ as c,u as p,r as s,o,c as _,b as a,s as I,h,i as $,t as g,p as b,d as m,x as P,a as n,F as N,e as x,n as k}from"../js/index.js";import{_ as M}from"./logo.500c74b0.js";const f=S({id:"navbar",state:()=>({openNavbar:!0,innerWidth:window.innerWidth}),actions:{resizeNavbar(){this.innerWidth=window.innerWidth,this.isMobileWidth()?this.openNavbar=!1:this.openNavbar=!0},toggleNavbar(){this.openNavbar=!this.openNavbar},isMobileWidth(){return this.innerWidth<=1024},isClosed(){return!this.openNavbar},isFullWidth(){return!!(!this.openNavbar||this.isMobileWidth())},getDimensions(e){this.innerWidth=window.innerWidth,this.resizeNavbar(),console.log("Page width",this.innerWidth)}}});const C={name:"top-menu",data(){return{auth:p(),navbar:f()}}},w=e=>(b("data-v-111a2f8a"),e=e(),m(),e),R={class:"panel-top-menu"},T=w(()=>a("i",{class:"fas fa-bars"},null,-1)),V=[T],z=w(()=>a("i",{class:"fas fa-sign-out-alt"},null,-1)),D={class:"user-icon"},B=["src"],A={class:"text"},E=P('<div class="menu-icon notify menu-icon-active" data-v-111a2f8a><i class="fas fa-bell" data-v-111a2f8a></i> <div class="dot" data-v-111a2f8a></div></div><div class="menu-icon chat menu-icon-active" data-v-111a2f8a><i class="fas fa-comment-alt" data-v-111a2f8a></i> <div class="dot" data-v-111a2f8a></div></div>',2);function F(e,t,i,l,u,v){const r=s("RouterLink");return o(),_("div",R,[a("span",{class:"menu-icon bars",onClick:t[0]||(t[0]=d=>this.navbar.toggleNavbar())},V),this.auth.loggedIn?(o(),I(r,{key:0,to:"/logout",class:"menu-icon exit"},{default:h(()=>[z]),_:1})):$("",!0),a("div",D,[a("img",{src:this.auth.user.image},null,8,B),a("div",A,g(this.auth.user.name),1)]),E])}var H=c(C,[["render",F],["__scopeId","data-v-111a2f8a"]]);const q={name:"navbar-menu-logo",data(){return{auth:p(),navbar:f()}},mounted(){this.navbar.resizeNavbar(),window.addEventListener("resize",this.navbar.getDimensions)},beforUnmount(){window.removeEventListener("resize",this.navbar.getDimensions)}},L=e=>(b("data-v-1dad69e8"),e=e(),m(),e),G={class:"navbar-logo"},O=L(()=>a("img",{src:M,class:"navbar-logo-img"},null,-1)),U=L(()=>a("i",{class:"fas fa-times"},null,-1)),j=[U];function J(e,t,i,l,u,v){const r=s("RouterLink");return o(),_("div",G,[n(r,{to:"/"},{default:h(()=>[O]),_:1}),this.navbar.isMobileWidth()?(o(),_("span",{key:0,class:"close-btn",onClick:t[0]||(t[0]=d=>this.navbar.toggleNavbar())},j)):$("",!0)])}var K=c(q,[["render",J],["__scopeId","data-v-1dad69e8"]]);const Q={},X=a("p",null,"DASHBOARD",-1),Y=a("i",{class:"fas fa-home"},null,-1),Z=x(" Homepage "),ee=a("p",null,"SETTINGS",-1),ae=a("i",{class:"fas fa-lemon"},null,-1),te=x(" About ");function se(e,t){const i=s("RouterLink");return o(),_(N,null,[X,n(i,{to:"/"},{default:h(()=>[Y,Z]),_:1}),ee,n(i,{to:"/about"},{default:h(()=>[ae,te]),_:1})],64)}var ne=c(Q,[["render",se]]);const oe={components:{NavbarLinks:ne,NavbarLogo:K},data(){return{navbar:f()}}},ie={class:"links"};function re(e,t,i,l,u,v){const r=s("NavbarLogo"),d=s("NavbarLinks");return o(),_("div",{class:k({navbar:!0,hidenavbar:this.navbar.isClosed(),navbarfixed:this.navbar.isMobileWidth()})},[n(r),a("div",ie,[n(d)])],2)}var _e=c(oe,[["render",re],["__scopeId","data-v-395a48b3"]]);const ce={data(){return{auth:p()}}},y=e=>(b("data-v-308915f6"),e=e(),m(),e),de=y(()=>a("h1",null,"Profil, only logged users!",-1)),le=y(()=>a("h3",null,"Logged user info",-1));function ue(e,t,i,l,u,v){return o(),_(N,null,[de,le,a("pre",null,g(this.auth.user),1)],64)}var ve=c(ce,[["render",ue],["__scopeId","data-v-308915f6"]]);const he={components:{TopMenu:H,Navbar:_e,ProfilPage:ve},data(){return{auth:p(),navbar:f()}}},pe={class:"panel"},fe={class:"box"};function be(e,t,i,l,u,v){const r=s("Navbar"),d=s("TopMenu"),W=s("ProfilPage");return o(),_("div",pe,[n(r),a("div",{class:k({rightbar:!0,rightbarfull:this.navbar.isFullWidth()})},[n(d),a("div",fe,[n(W)])],2)])}var ge=c(he,[["render",be],["__scopeId","data-v-dc34528e"]]);export{ge as default};
