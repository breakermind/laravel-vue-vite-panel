import{_ as d,u as r,r as l,o as c,c as i,q as v,h as a,i as $,b as e,a as s,F as k,f as x,p as S,d as H,t as I,e as n}from"../js/index.js";const L={name:"top-menu",data(){return{auth:r()}}},T=e("i",{class:"fas fa-bars"},null,-1),V=e("i",{class:"fas fa-sign-out-alt"},null,-1);function y(_,u,h,p,f,m){const t=l("RouterLink");return c(),i("nav",null,[T,this.auth.loggedIn?(c(),v(t,{key:0,to:"/logout"},{default:a(()=>[V]),_:1})):$("",!0)])}var B=d(L,[["render",y]]);const N={components:{TopMenu:B},data(){return{auth:r()}}},o=_=>(S("data-v-7452d857"),_=_(),H(),_),R={class:"panel"},b={class:"navbar"},w=o(()=>e("p",null,"DASHBOARD",-1)),A=o(()=>e("i",{class:"fas fa-home"},null,-1)),C=n(" Homepage "),D=o(()=>e("i",{class:"fas fa-home"},null,-1)),M=n(" Homepage "),P=o(()=>e("i",{class:"fas fa-home"},null,-1)),E=n(" Homepage "),F=o(()=>e("p",null,"SETTINGS",-1)),q=o(()=>e("i",{class:"fas fa-home"},null,-1)),G=n(" Homepage "),O=o(()=>e("i",{class:"fas fa-home"},null,-1)),j=n(" Homepage "),z=o(()=>e("i",{class:"fas fa-home"},null,-1)),J=n(" Homepage "),K={class:"rightbar"},Q={class:"text"},U=o(()=>e("h1",null,"Profil, only logged users!",-1)),W=o(()=>e("h3",null,"Logged user info",-1));function X(_,u,h,p,f,m){const t=l("RouterLink"),g=l("TopMenu");return c(),i("div",R,[e("div",b,[w,s(t,{to:"/home"},{default:a(()=>[A,C]),_:1}),s(t,{to:"/home"},{default:a(()=>[D,M]),_:1}),s(t,{to:"/home"},{default:a(()=>[P,E]),_:1}),F,s(t,{to:"/home"},{default:a(()=>[q,G]),_:1}),s(t,{to:"/home"},{default:a(()=>[O,j]),_:1}),s(t,{to:"/home"},{default:a(()=>[z,J]),_:1})]),e("div",K,[s(g),(c(),i(k,null,x(100,Y=>e("div",Q,[U,W,e("pre",null,I(this.auth.user),1)])),64))])])}var ee=d(N,[["render",X],["__scopeId","data-v-7452d857"]]);export{ee as default};
