import{_ as i,u as d,r as c,o as l,c as u,q as v,h as a,i as $,b as e,a as s,t as x,p as k,d as S,e as n}from"../js/index.js";const H={name:"top-menu",data(){return{auth:d()}}},I=e("i",{class:"fas fa-exit"},null,-1);function T(_,r,h,p,f,m){const t=c("RouterLink");return l(),u("nav",null,[this.auth.loggedIn?(l(),v(t,{key:0,to:"/logout"},{default:a(()=>[I]),_:1})):$("",!0)])}var V=i(H,[["render",T]]);const y={components:{TopMenu:V},data(){return{auth:d()}}},o=_=>(k("data-v-65faef46"),_=_(),S(),_),B={class:"panel"},L={class:"navbar"},N=o(()=>e("p",null,"DASHBOARD",-1)),R=o(()=>e("i",{class:"fas fa-home"},null,-1)),w=n(" Homepage "),b=o(()=>e("i",{class:"fas fa-home"},null,-1)),A=n(" Homepage "),C=o(()=>e("i",{class:"fas fa-home"},null,-1)),D=n(" Homepage "),M=o(()=>e("p",null,"SETTINGS",-1)),P=o(()=>e("i",{class:"fas fa-home"},null,-1)),E=n(" Homepage "),q=o(()=>e("i",{class:"fas fa-home"},null,-1)),G=n(" Homepage "),O=o(()=>e("i",{class:"fas fa-home"},null,-1)),j=n(" Homepage "),z={class:"rightbar"},F={class:"text"},J=o(()=>e("h1",null,"Profil, only logged users!",-1)),K=o(()=>e("h3",null,"Logged user info",-1));function Q(_,r,h,p,f,m){const t=c("RouterLink"),g=c("TopMenu");return l(),u("div",B,[e("div",L,[N,s(t,{to:"/home"},{default:a(()=>[R,w]),_:1}),s(t,{to:"/home"},{default:a(()=>[b,A]),_:1}),s(t,{to:"/home"},{default:a(()=>[C,D]),_:1}),M,s(t,{to:"/home"},{default:a(()=>[P,E]),_:1}),s(t,{to:"/home"},{default:a(()=>[q,G]),_:1}),s(t,{to:"/home"},{default:a(()=>[O,j]),_:1})]),e("div",z,[s(g),e("div",F,[J,K,e("pre",null,x(this.auth.user),1)])])])}var W=i(y,[["render",Q],["__scopeId","data-v-65faef46"]]);export{W as default};
