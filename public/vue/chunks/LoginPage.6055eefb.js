import{_ as w,u as b,e as c,f as k,o as m,c as _,d as i,a as s,g as l,t as a,h as d,n as C,i as $,w as u,j as g,k as V,l as y,q as L}from"../js/index.js";import{C as S}from"./ChangeLocale.2ed22618.js";var D="/vue/svg/logo.svg";const P={components:[S],data(){return{email:"",password:"",remember_me:0,message:null,error:!1,auth:b()}},methods:{onSubmit(e){this.auth.loginUser(new FormData(e.target))},scrollTop(){window.scrollTo({top:0,behavior:"smooth"})}},directives:{focus:{mounted(e){e.focus()}}}},B={class:"content"},N={class:"w-full"},T=s("img",{class:"float-right",src:D,width:"50",height:"50"},null,-1),U=s("i",{class:"fas fa-envelope"},null,-1),E=["placeholder"],M=s("i",{class:"fas fa-key"},null,-1),F=["placeholder"],I={class:"full"},j=["title"],q={class:"full"};function z(e,o,h,K,n,p){const f=c("ChangeLocale"),r=c("router-link"),v=k("focus");return m(),_("div",B,[i(f),s("form",{onSubmit:o[4]||(o[4]=y((...t)=>p.onSubmit&&p.onSubmit(...t),["prevent"]))},[s("h1",N,[l(a(e.$t("login.Sign_In"))+" ",1),i(r,{to:"/"},{default:d(()=>[T]),_:1})]),this.auth.message?(m(),_("div",{key:0,class:C([this.auth.error?"alert-error":"alert-info","animate__animated animate__flipInX"])},a(this.auth.message),3)):$("",!0),s("label",null,[l(a(e.$t("login.Email_address"))+" ",1),U]),u(s("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>n.email=t),type:"text",name:"email",class:"input",placeholder:e.$t("login.Email_address_eg")},null,8,E),[[v],[g,n.email]]),s("label",null,[l(a(e.$t("login.Password"))+" ",1),M]),u(s("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>n.password=t),onKeyup:o[2]||(o[2]=(...t)=>e.validatePass&&e.validatePass(...t)),type:"password",name:"password",class:"input",placeholder:e.$t("login.Password_eg")},null,40,F),[[g,n.password]]),s("label",null,a(e.$t("login.Remember_me")),1),s("div",I,[u(s("input",{"onUpdate:modelValue":o[3]||(o[3]=t=>e.remember=t),type:"checkbox",name:"remember_me",value:"1"},null,512),[[V,e.remember]]),s("button",{class:"button",title:e.$t("login.Login")},a(e.$t("login.Login")),9,j)]),s("div",q,[i(r,{to:"/register",class:"left"},{default:d(()=>[l(a(e.$t("login.Dont_have_an_account")),1)]),_:1}),i(r,{to:"/password",class:"right"},{default:d(()=>[l(a(e.$t("login.Forgot_password")),1)]),_:1})])],32)])}var A=w(P,[["render",z]]);const G={name:"LoginPage",setup(e){return(o,h)=>(m(),L(A))}};export{G as default};
