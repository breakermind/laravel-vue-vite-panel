import{_ as i,u as r,r as l,o as c,c as d,q as v,h as a,i as $,b as e,a as s,F as x,f as k,p as S,d as H,t as I,e as n}from"../js/index.js";const L={name:"top-menu",data(){return{auth:r()}}},T=e("i",{class:"fas fa-exit"},null,-1);function V(_,u,h,p,f,m){const t=l("RouterLink");return c(),d("nav",null,[this.auth.loggedIn?(c(),v(t,{key:0,to:"/logout"},{default:a(()=>[T]),_:1})):$("",!0)])}var y=i(L,[["render",V]]);const B={components:{TopMenu:y},data(){return{auth:r()}}},o=_=>(S("data-v-24fd5ad4"),_=_(),H(),_),N={class:"panel"},R={class:"navbar"},w=o(()=>e("p",null,"DASHBOARD",-1)),b=o(()=>e("i",{class:"fas fa-home"},null,-1)),A=n(" Homepage "),C=o(()=>e("i",{class:"fas fa-home"},null,-1)),D=n(" Homepage "),M=o(()=>e("i",{class:"fas fa-home"},null,-1)),P=n(" Homepage "),E=o(()=>e("p",null,"SETTINGS",-1)),F=o(()=>e("i",{class:"fas fa-home"},null,-1)),q=n(" Homepage "),G=o(()=>e("i",{class:"fas fa-home"},null,-1)),O=n(" Homepage "),j=o(()=>e("i",{class:"fas fa-home"},null,-1)),z=n(" Homepage "),J={class:"rightbar"},K={class:"text"},Q=o(()=>e("h1",null,"Profil, only logged users!",-1)),U=o(()=>e("h3",null,"Logged user info",-1));function W(_,u,h,p,f,m){const t=l("RouterLink"),g=l("TopMenu");return c(),d("div",N,[e("div",R,[w,s(t,{to:"/home"},{default:a(()=>[b,A]),_:1}),s(t,{to:"/home"},{default:a(()=>[C,D]),_:1}),s(t,{to:"/home"},{default:a(()=>[M,P]),_:1}),E,s(t,{to:"/home"},{default:a(()=>[F,q]),_:1}),s(t,{to:"/home"},{default:a(()=>[G,O]),_:1}),s(t,{to:"/home"},{default:a(()=>[j,z]),_:1})]),e("div",J,[s(g),(c(),d(x,null,k(100,X=>e("div",K,[Q,U,e("pre",null,I(this.auth.user),1)])),64))])])}var Z=i(B,[["render",W],["__scopeId","data-v-24fd5ad4"]]);export{Z as default};
