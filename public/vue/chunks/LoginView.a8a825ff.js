import{_ as p,u,o as i,c as r,a as t,n as c,t as _,e as g,w as l,f as m,g as f,p as w,b as h}from"../js/index.js";const v={data(){return{email:"",password:"",message:null,error:!1,main:u()}},methods:{onSubmit(s){console.log(s),console.log("Login",this.email,this.password);const e=new FormData(s.target);console.log("Form data",e.get("email"),e.get("password")),this.main.loginUser(e)}}},d=s=>(w("data-v-7a5b9fc4"),s=s(),h(),s),S={class:"greetings"},b=d(()=>t("h1",null," Login ",-1)),y=d(()=>t("button",null,"Login",-1));function x(s,e,V,L,a,n){return i(),r("div",S,[t("form",{onSubmit:e[2]||(e[2]=f((...o)=>n.onSubmit&&n.onSubmit(...o),["prevent"])),method:"POST",enctype:"multipart/form-data"},[b,this.main.message?(i(),r("div",{key:0,class:c([this.main.error?"alert":"info"])},_(this.main.message),3)):g("",!0),l(t("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>a.email=o),name:"email"},null,512),[[m,a.email]]),l(t("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=o=>a.password=o),name:"password"},null,512),[[m,a.password]]),y],32)])}var k=p(v,[["render",x],["__scopeId","data-v-7a5b9fc4"]]);export{k as default};
