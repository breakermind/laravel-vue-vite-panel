var i=Object.defineProperty;var n=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var c=(a,e,o)=>e in a?i(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o,r=(a,e)=>{for(var o in e||(e={}))_.call(e,o)&&c(a,o,e[o]);if(n)for(var o of n(e))d.call(e,o)&&c(a,o,e[o]);return a};import{m as u,_ as p,u as h,o as t,c as l,w as v,v as g,a as $,F as m,r as f,t as L}from"../js/index.js";const y={data(){return{}},methods:r({},u(h,["changeLocale"])),watch:{"$i18n.locale":function(a,e){console.log("New locale",e,a,this.$i18n.locale),this.changeLocale(a)}}},k={class:"locale-changer"},w=["value"];function B(a,e,o,C,S,A){return t(),l("div",k,[v($("select",{"onUpdate:modelValue":e[0]||(e[0]=s=>a.$i18n.locale=s),class:"locale-changer-select"},[(t(!0),l(m,null,f(a.$i18n.availableLocales,s=>(t(),l("option",{key:`locale-${s}`,value:s},L(s),9,w))),128))],512),[[g,a.$i18n.locale]])])}var N=p(y,[["render",B],["__scopeId","data-v-73043485"]]);export{N as C};
