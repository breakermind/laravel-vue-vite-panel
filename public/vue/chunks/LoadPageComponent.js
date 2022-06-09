import{k as C,_,u as x,r as d,o,c as l,a as n,w as p,g as k,p as m,d as w,b as t,C as z,F as I,e as $,n as N,l as g,t as P,m as W,q as S,s as A,K as E,x as b}from"../js/index.js";import{_ as D}from"./logo.js";const h=C({id:"navbar",state:()=>({openNavbar:!0,innerWidth:window.innerWidth}),actions:{resizeNavbar(){this.innerWidth=window.innerWidth,this.isMobileWidth()?this.openNavbar=!1:this.openNavbar=!0},toggleNavbar(){this.openNavbar=!this.openNavbar},isMobileWidth(){return this.innerWidth<=1024},isClosed(){return!this.openNavbar},isFullWidth(){return!!(!this.openNavbar||this.isMobileWidth())},getDimensions(a){this.innerWidth=window.innerWidth,this.resizeNavbar(),console.log("Page width",this.innerWidth)}}});const M={name:"navbar-menu-logo",data(){return{auth:x(),navbar:h()}},mounted(){this.navbar.resizeNavbar(),window.addEventListener("resize",this.navbar.getDimensions)},beforUnmount(){window.removeEventListener("resize",this.navbar.getDimensions)}},y=a=>(m("data-v-1dad69e8"),a=a(),w(),a),R={class:"navbar-logo"},T=y(()=>t("img",{src:D,class:"navbar-logo-img"},null,-1)),V=y(()=>t("i",{class:"fas fa-times"},null,-1)),B=[V];function q(a,e,r,i,f,u){const s=d("RouterLink");return o(),l("div",R,[n(s,{to:"/"},{default:p(()=>[T]),_:1}),this.navbar.isMobileWidth()?(o(),l("span",{key:0,class:"close-btn",onClick:e[0]||(e[0]=v=>this.navbar.toggleNavbar())},B)):k("",!0)])}var F=_(M,[["render",q],["__scopeId","data-v-1dad69e8"]]);const c=a=>(m("data-v-547b9e5a"),a=a(),w(),a),O={class:"part"},U=c(()=>t("p",null,"DASHBOARD",-1)),G=c(()=>t("i",{class:"fas fa-home"},null,-1)),K=$(" Profil "),H={class:"part"},j=c(()=>t("p",null,"SETTINGS",-1)),J=c(()=>t("i",{class:"fas fa-user"},null,-1)),Q=$(" Password "),X=c(()=>t("i",{class:"fas fa-cogs"},null,-1)),Y=$(" Account "),Z={class:"part"},aa=c(()=>t("p",null,"LANGUAGE",-1)),ta={class:"locale"},ea={__name:"NavbarLinks",setup(a){return(e,r)=>{const i=d("RouterLink");return o(),l(I,null,[t("div",O,[U,n(i,{to:"/panel",class:"navbar-link"},{default:p(()=>[G,K]),_:1})]),t("div",H,[j,n(i,{to:"/panel/password",class:"navbar-link"},{default:p(()=>[J,Q]),_:1}),n(i,{to:"/panel/account",class:"navbar-link"},{default:p(()=>[X,Y]),_:1})]),t("div",Z,[aa,t("div",ta,[n(z)])])],64)}}};var oa=_(ea,[["__scopeId","data-v-547b9e5a"]]);const na={components:{NavbarLinks:oa,NavbarLogo:F},data(){return{navbar:h()}}},ia={class:"links"};function sa(a,e,r,i,f,u){const s=d("NavbarLogo"),v=d("NavbarLinks");return o(),l("div",{class:N({navbar:!0,hidenavbar:this.navbar.isClosed(),navbarfixed:this.navbar.isMobileWidth()})},[n(s),t("div",ia,[n(v)])],2)}var ya=_(na,[["render",sa],["__scopeId","data-v-395a48b3"]]);const ra={name:"top-menu",data(){return{auth:x(),navbar:h()}}},L=a=>(m("data-v-2fe4c2f7"),a=a(),w(),a),da={class:"panel-top-menu"},la=L(()=>t("i",{class:"fas fa-bars"},null,-1)),ca=[la],va=L(()=>t("i",{class:"fas fa-sign-out-alt"},null,-1)),pa={class:"user-icon"},_a=["src"],ua={class:"text"},ha=W('<div class="menu-icon notify menu-icon-active" data-v-2fe4c2f7><i class="fas fa-bell" data-v-2fe4c2f7></i> <div class="dot" data-v-2fe4c2f7></div></div><div class="menu-icon chat menu-icon-active" data-v-2fe4c2f7><i class="fas fa-comment-alt" data-v-2fe4c2f7></i> <div class="dot" data-v-2fe4c2f7></div></div>',2);function fa(a,e,r,i,f,u){var v;const s=d("RouterLink");return o(),l("div",da,[t("span",{class:"menu-icon bars",onClick:e[0]||(e[0]=$a=>this.navbar.toggleNavbar())},ca),this.auth.loggedIn?(o(),g(s,{key:0,to:"/logout",class:"menu-icon exit"},{default:p(()=>[va]),_:1})):k("",!0),t("div",pa,[t("img",{src:this.auth.user.image},null,8,_a),t("div",ua,P((v=this.auth.user.name.split(" ")[0])!=null?v:"Unknown"),1)]),ha])}var ba=_(ra,[["render",fa],["__scopeId","data-v-2fe4c2f7"]]);function ga(a){switch(a){case"./pages/AccountPage.vue":return b(()=>import("./AccountPage.js"),["vue/chunks/AccountPage.js","vue/js/index.js","vue/css/index.css"]);case"./pages/PasswordPage.vue":return b(()=>import("./PasswordPage.js"),["vue/chunks/PasswordPage.js","vue/css/PasswordPage.css","vue/js/index.js","vue/css/index.css"]);case"./pages/ProfilPage.vue":return b(()=>import("./ProfilPage.js"),["vue/chunks/ProfilPage.js","vue/css/ProfilPage.css","vue/js/index.js","vue/css/index.css"]);default:return new Promise(function(e,r){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+a)))})}}const xa={name:"LoadPageComponent",props:{name:{type:String,required:!0}},components:{TopMenu:ba},data(){return{auth:x(),navbar:h()}},computed:{loadComponent(){return S(()=>ga("./pages/"+this.name+".vue"))}}},ma={class:"box"};function wa(a,e,r,i,f,u){const s=d("TopMenu");return o(),l("div",{class:N({rightbar:!0,rightbarfull:this.navbar.isFullWidth()})},[n(s),t("div",ma,[(o(),g(E,null,[(o(),g(A(u.loadComponent)))],1024))])],2)}var La=_(xa,[["render",wa],["__scopeId","data-v-38101071"]]);export{La as L,ya as N,h as u};
