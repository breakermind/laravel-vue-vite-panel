import{_ as p,u,o as i,c as n,a,t as c,e as _,w as l,f as m,g,p as w,b as h}from"../js/index.js";const f={data(){return{email:"",password:"",message:null,error:!1,main:u()}},methods:{onSubmit(s){console.log(s),console.log("Login",this.email,this.password);const e=new FormData(s.target);console.log("Form data",e.get("email"),e.get("password")),main.loginUser(e),this.message=this.main.message,this.error=this.main.error}}},d=s=>(w("data-v-958c7cb0"),s=s(),h(),s),v={class:"greetings"},S=d(()=>a("h1",null," Login ",-1)),b={key:0},y=d(()=>a("button",null,"Login",-1));function x(s,e,V,L,o,r){return i(),n("div",v,[a("form",{onSubmit:e[2]||(e[2]=g((...t)=>r.onSubmit&&r.onSubmit(...t),["prevent"])),method:"POST",enctype:"multipart/form-data"},[S,o.error?(i(),n("div",b,c(o.message),1)):_("",!0),l(a("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>o.email=t),name:"email"},null,512),[[m,o.email]]),l(a("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=t=>o.password=t),name:"password"},null,512),[[m,o.password]]),y],32)])}var k=p(f,[["render",x],["__scopeId","data-v-958c7cb0"]]);export{k as default};
