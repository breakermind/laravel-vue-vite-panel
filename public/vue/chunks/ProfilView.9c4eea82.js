import{_ as i,u as d,r as c,o as l,c as u,q as v,h as a,i as $,b as e,a as s,t as k,p as x,d as S,e as n}from"../js/index.js";const H={name:"top-menu",data(){return{auth:d()}}},I=e("i",{class:"fas fa-bars"},null,-1),T=e("i",{class:"fas fa-sign-out-alt"},null,-1);function V(_,r,h,p,f,m){const t=c("RouterLink");return l(),u("nav",null,[I,this.auth.loggedIn?(l(),v(t,{key:0,to:"/logout"},{default:a(()=>[T]),_:1})):$("",!0)])}var b=i(H,[["render",V]]);const y={components:{TopMenu:b},data(){return{auth:d()}}},o=_=>(x("data-v-71289904"),_=_(),S(),_),B={class:"panel"},L={class:"navbar"},N=o(()=>e("p",null,"DASHBOARD",-1)),R=o(()=>e("i",{class:"fas fa-home"},null,-1)),w=n(" Homepage "),A=o(()=>e("i",{class:"fas fa-home"},null,-1)),C=n(" Homepage "),D=o(()=>e("i",{class:"fas fa-home"},null,-1)),M=n(" Homepage "),P=o(()=>e("p",null,"SETTINGS",-1)),E=o(()=>e("i",{class:"fas fa-home"},null,-1)),q=n(" Homepage "),G=o(()=>e("i",{class:"fas fa-home"},null,-1)),O=n(" Homepage "),j=o(()=>e("i",{class:"fas fa-home"},null,-1)),z=n(" Homepage "),F={class:"rightbar"},J={class:"box"},K=o(()=>e("h1",null,"Profil, only logged users!",-1)),Q=o(()=>e("h3",null,"Logged user info",-1));function U(_,r,h,p,f,m){const t=c("RouterLink"),g=c("TopMenu");return l(),u("div",B,[e("div",L,[N,s(t,{to:"/home"},{default:a(()=>[R,w]),_:1}),s(t,{to:"/home"},{default:a(()=>[A,C]),_:1}),s(t,{to:"/home"},{default:a(()=>[D,M]),_:1}),P,s(t,{to:"/home"},{default:a(()=>[E,q]),_:1}),s(t,{to:"/home"},{default:a(()=>[G,O]),_:1}),s(t,{to:"/home"},{default:a(()=>[j,z]),_:1})]),e("div",F,[s(g),e("div",J,[K,Q,e("pre",null,k(this.auth.user),1)])])])}var X=i(y,[["render",U],["__scopeId","data-v-71289904"]]);export{X as default};
