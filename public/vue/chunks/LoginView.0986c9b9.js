import{_ as p,u,o as n,c as i,a,t as _,e as c,w as l,f as m,g,p as f,b as w}from"../js/index.js";const v={data(){return{email:"",password:"",message:null,error:!1,main:u()}},methods:{onSubmit(o){console.log(o),console.log("Login",this.email,this.password);const e=new FormData(o.target);console.log("Form data",e.get("email"),e.get("password")),main.loginUser(e),this.message=main.message,this.error=main.error}}},d=o=>(f("data-v-f5ef003c"),o=o(),w(),o),h={class:"greetings"},S=d(()=>a("h1",null," Login ",-1)),y={key:0},b=d(()=>a("button",null,"Login",-1));function x(o,e,V,L,s,r){return n(),i("div",h,[a("form",{onSubmit:e[2]||(e[2]=g((...t)=>r.onSubmit&&r.onSubmit(...t),["prevent"])),method:"POST",enctype:"multipart/form-data"},[S,s.error?(n(),i("div",y,_(s.message),1)):c("",!0),l(a("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>s.email=t),name:"email"},null,512),[[m,s.email]]),l(a("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=t=>s.password=t),name:"password"},null,512),[[m,s.password]]),b],32)])}var k=p(v,[["render",x],["__scopeId","data-v-f5ef003c"]]);export{k as default};
