import{_ as i,u as l,r as c,o as d,c as u,q as x,h as _,i as S,p as r,d as h,b as e,a,t as k,e as n}from"../js/index.js";const I={name:"top-menu",data(){return{auth:l()}}},p=t=>(r("data-v-1b4a9476"),t=t(),h(),t),y={class:"panel-top-menu"},H=p(()=>e("span",{class:"icon-btn"},[e("i",{class:"fas fa-bars"})],-1)),T=p(()=>e("i",{class:"fas fa-sign-out-alt"},null,-1));function V(t,f,m,v,g,$){const s=c("RouterLink");return d(),u("div",y,[H,this.auth.loggedIn?(d(),x(s,{key:0,to:"/logout",class:"icon-btn exit-btn"},{default:_(()=>[T]),_:1})):S("",!0)])}var w=i(I,[["render",V],["__scopeId","data-v-1b4a9476"]]);const B={components:{TopMenu:w},data(){return{auth:l()}}},o=t=>(r("data-v-c027d040"),t=t(),h(),t),L={class:"panel"},N={class:"navbar"},R=o(()=>e("p",null,"DASHBOARD",-1)),M=o(()=>e("i",{class:"fas fa-home"},null,-1)),A=n(" Homepage "),C=o(()=>e("i",{class:"fas fa-home"},null,-1)),D=n(" Homepage "),P=o(()=>e("i",{class:"fas fa-home"},null,-1)),E=n(" Homepage "),q=o(()=>e("p",null,"SETTINGS",-1)),G=o(()=>e("i",{class:"fas fa-home"},null,-1)),O=n(" Homepage "),j=o(()=>e("i",{class:"fas fa-home"},null,-1)),z=n(" Homepage "),F=o(()=>e("i",{class:"fas fa-home"},null,-1)),J=n(" Homepage "),K={class:"rightbar"},Q={class:"box"},U=o(()=>e("h1",null,"Profil, only logged users!",-1)),W=o(()=>e("h3",null,"Logged user info",-1));function X(t,f,m,v,g,$){const s=c("RouterLink"),b=c("TopMenu");return d(),u("div",L,[e("div",N,[R,a(s,{to:"/home"},{default:_(()=>[M,A]),_:1}),a(s,{to:"/home"},{default:_(()=>[C,D]),_:1}),a(s,{to:"/home"},{default:_(()=>[P,E]),_:1}),q,a(s,{to:"/home"},{default:_(()=>[G,O]),_:1}),a(s,{to:"/home"},{default:_(()=>[j,z]),_:1}),a(s,{to:"/home"},{default:_(()=>[F,J]),_:1})]),e("div",K,[a(b),e("div",Q,[U,W,e("pre",null,k(this.auth.user),1)])])])}var Z=i(B,[["render",X],["__scopeId","data-v-c027d040"]]);export{Z as default};
