import{_ as l,o as p,c as u,a as e,w as n,e as r,f as a}from"../js/index.js";const m={data(){return{email:"",password:""}},methods:{onSumbit(){console.log("Login",this.email,this.password)}}},d={class:"greetings"},f=e("h1",null," Login ",-1);function w(t,o,b,g,i,v){return p(),u("div",d,[f,e("form",{onSubmit:o[3]||(o[3]=a((...s)=>t.onSubmit&&t.onSubmit(...s),["prevent"]))},[n(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=s=>i.email=s)},null,512),[[r,i.email]]),n(e("input",{type:"password","onUpdate:modelValue":o[1]||(o[1]=s=>i.password=s)},null,512),[[r,i.password]]),e("button",{onClick:o[2]||(o[2]=(...s)=>t.submit&&t.submit(...s))},"Login")],32)])}var S=l(m,[["render",w]]);export{S as default};
