import{_ as d,u,o as n,c as r,a as o,n as _,t as c,e as g,w as l,f as m,g as w,p as f,b as v}from"../js/index.js";const h={data(){return{email:"",password:"",message:null,error:!1,main:u()}},methods:{onSubmit(s){console.log(s),console.log("Login",this.email,this.password);const e=new FormData(s.target);console.log("Form data",e.get("email"),e.get("password")),this.main.loginUser(e)}}},p=s=>(f("data-v-0285031a"),s=s(),v(),s),S={class:"greetings"},y=p(()=>o("h1",null," Login ",-1)),b=p(()=>o("input",{type:"submit",value:"Login",class:"button"},null,-1));function x(s,e,V,L,a,i){return n(),r("div",S,[o("form",{onSubmit:e[2]||(e[2]=w((...t)=>i.onSubmit&&i.onSubmit(...t),["prevent"])),method:"POST",enctype:"multipart/form-data"},[y,this.main.message?(n(),r("div",{key:0,class:_([this.main.error?"alert":"info"])},c(this.main.message),3)):g("",!0),l(o("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>a.email=t),name:"email"},null,512),[[m,a.email]]),l(o("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=t=>a.password=t),name:"password"},null,512),[[m,a.password]]),b],32)])}var k=d(h,[["render",x],["__scopeId","data-v-0285031a"]]);export{k as default};
