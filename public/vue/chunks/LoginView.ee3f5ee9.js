import{_ as p,o as d,c as u,a as s,w as a,e as r,f as c,p as _,b as m}from"../js/index.js";const g={data(){return{email:"",password:""}},methods:{onSubmit(o){console.log(o.target),console.log("Login",this.email,this.password);let e=new FormData(o.target);console.log(e.get("email"))}}},l=o=>(_("data-v-3c9c28bc"),o=o(),m(),o),w={class:"greetings"},v=l(()=>s("h1",null," Login ",-1)),b=l(()=>s("button",{type:"submit"},"Login",-1));function f(o,e,S,h,i,n){return d(),u("div",w,[v,s("form",{onSubmit:e[2]||(e[2]=c((...t)=>n.onSubmit&&n.onSubmit(...t),["prevent"]))},[a(s("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>i.email=t)},null,512),[[r,i.email]]),a(s("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=t=>i.password=t)},null,512),[[r,i.password]]),b],32)])}var y=p(g,[["render",f],["__scopeId","data-v-3c9c28bc"]]);export{y as default};
