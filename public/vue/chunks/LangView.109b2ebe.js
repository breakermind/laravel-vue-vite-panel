var u=Object.defineProperty;var l=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var r=(a,e,s)=>e in a?u(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,_=(a,e)=>{for(var s in e||(e={}))p.call(e,s)&&r(a,s,e[s]);if(l)for(var s of l(e))g.call(e,s)&&r(a,s,e[s]);return a};import{m as v,u as h,_ as i,o,c as n,w as $,v as m,a as c,F as L,r as f,t as d,d as w}from"../js/index.js";const y={data(){return{}},methods:_({},v(h,["changeLocale"])),watch:{"$i18n.locale":function(a,e){console.log("New locale",e,a,this.$i18n.locale),this.changeLocale(a)}}},V={class:"locale-changer"},B=["value"];function k(a,e,s,D,F,I){return o(),n("div",V,[$(c("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>a.$i18n.locale=t),class:"locale-changer-select"},[(o(!0),n(L,null,f(a.$i18n.availableLocales,t=>(o(),n("option",{key:`locale-${t}`,value:t},d(t),9,B))),128))],512),[[m,a.$i18n.locale]])])}var x=i(y,[["render",k],["__scopeId","data-v-7d7e1c18"]]);const N={class:"greetings"},S={class:"text"},C={name:"LangView",setup(a){return(e,s)=>(o(),n("div",N,[c("p",S,[c("span",null,d(e.$t("message.helloBig")),1),w(x)])]))}};var A=i(C,[["__scopeId","data-v-43a861a3"]]);export{A as default};
