import{_ as l,o as p,c as m,a as s,w as i,e as r,f as u,p as _,b as c}from"../js/index.js";const g={data(){return{email:"",password:""}},methods:{onSubmit(o){console.log(o),console.log("Login",this.email,this.password);const e=new FormData(o.target);console.log("Form data",e.get("email"))}}},d=o=>(_("data-v-6edcaf41"),o=o(),c(),o),w={class:"greetings"},f=d(()=>s("h1",null," Login ",-1)),v=d(()=>s("button",null,"Login",-1));function S(o,e,h,b,a,n){return p(),m("div",w,[s("form",{onSubmit:e[2]||(e[2]=u((...t)=>n.onSubmit&&n.onSubmit(...t),["prevent"])),method:"POST",enctype:"multipart/form-data"},[f,i(s("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>a.email=t),name:"email"},null,512),[[r,a.email]]),i(s("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=t=>a.password=t),name:"password"},null,512),[[r,a.password]]),v],32)])}var y=l(g,[["render",S],["__scopeId","data-v-6edcaf41"]]);export{y as default};
