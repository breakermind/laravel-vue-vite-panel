import{o as r,c as o,t as s,d as a,a as n}from"../js/index.js";import{C as i}from"./ChangeLocale.ad720177.js";const l={name:"Title",props:{title:{type:String,default:"",required:!0}},setup(e){return(t,c)=>(r(),o("h1",null,s(e.title),1))}},u={class:"greetings"},_={name:"ActivateView",setup(e){return(t,c)=>(r(),o("div",u,[a(l,{title:"Activation Page"}),n("h1",null,"Sample module translation: "+s(t.$t("module.core.auth.activate")),1),a(i)]))}};export{_ as default};
