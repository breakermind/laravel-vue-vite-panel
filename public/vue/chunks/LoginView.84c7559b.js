import{_ as v,u as w,r as p,g as b,o as c,c as _,b as s,a as i,e as a,t as l,h as d,n as k,i as C,w as m,j as h,k as V,l as $}from"../js/index.js";import{C as y}from"./ChangeLocale.6e4c9e1c.js";import{_ as S}from"./logo.500c74b0.js";const L={components:{ChangeLocale:y},data(){return{email:"",password:"",remember_me:0,message:null,error:!1,auth:w()}},methods:{onSubmit(e){this.auth.loginUser(new FormData(e.target))},scrollTop(){window.scrollTo({top:0,behavior:"smooth"})}},directives:{focus:{mounted(e){e.focus()}}}},D={class:"content"},N={class:"full"},P={class:"w-full"},T=s("img",{class:"float-right",src:S,width:"50",height:"50"},null,-1),U=s("i",{class:"fas fa-envelope"},null,-1),B=["placeholder"],E=s("i",{class:"fas fa-key"},null,-1),M=["placeholder"],F={class:"full"},I=["title"],j={class:"full"};function z(e,o,A,K,n,u){const g=p("ChangeLocale"),r=p("router-link"),f=b("focus");return c(),_("div",D,[s("div",N,[i(g)]),s("form",{onSubmit:o[4]||(o[4]=$((...t)=>u.onSubmit&&u.onSubmit(...t),["prevent"]))},[s("h1",P,[a(l(e.$t("login.Sign_In"))+" ",1),i(r,{to:"/"},{default:d(()=>[T]),_:1})]),this.auth.message?(c(),_("div",{key:0,class:k([this.auth.error?"alert-error":"alert-info","animate__animated animate__flipInX"])},l(this.auth.message),3)):C("",!0),s("label",null,[a(l(e.$t("login.Email_address"))+" ",1),U]),m(s("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>n.email=t),type:"text",name:"email",class:"input",placeholder:e.$t("login.Email_address_eg")},null,8,B),[[f],[h,n.email]]),s("label",null,[a(l(e.$t("login.Password"))+" ",1),E]),m(s("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>n.password=t),onKeyup:o[2]||(o[2]=(...t)=>e.validatePass&&e.validatePass(...t)),type:"password",name:"password",class:"input",placeholder:e.$t("login.Password_eg")},null,40,M),[[h,n.password]]),s("label",null,l(e.$t("login.Remember_me")),1),s("div",F,[m(s("input",{"onUpdate:modelValue":o[3]||(o[3]=t=>e.remember=t),type:"checkbox",name:"remember_me",value:"1"},null,512),[[V,e.remember]]),s("button",{class:"button",title:e.$t("login.Login")},l(e.$t("login.Login")),9,I)]),s("div",j,[i(r,{to:"/register",class:"left"},{default:d(()=>[a(l(e.$t("login.Dont_have_an_account")),1)]),_:1}),i(r,{to:"/password",class:"right"},{default:d(()=>[a(l(e.$t("login.Forgot_password")),1)]),_:1})])],32)])}var G=v(L,[["render",z]]);export{G as default};
