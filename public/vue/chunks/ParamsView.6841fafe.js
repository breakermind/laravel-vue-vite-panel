import{_ as r,T as c,u as p,r as i,o as u,c as m,a as _,b as s,t}from"../js/index.js";const d={name:"param-view",components:{TopMenu:c},data(){var e,o;return{id:(e=this.$route.params.id)!=null?e:0,code:(o=this.$route.params.code)!=null?o:"empty",auth:p()}}},l={class:"content"},h=s("h1",null," This is params page ",-1);function f(e,o,T,v,a,$){const n=i("TopMenu");return u(),m("main",null,[_(n),s("div",l,[h,s("span",null,t(a.id)+" "+t(a.code),1)])])}var B=r(d,[["render",f]]);export{B as default};