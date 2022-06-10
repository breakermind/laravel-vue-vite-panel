import{_ as w,C as b,u as C,r as m,f as P,o as p,c as _,b as s,a,e as n,t as l,w as u,n as k,g as T,h as c,v as h,i as V,j as y}from"../js/index.js";import{P as S}from"./PageTitle.js";import{_ as $}from"./logo.js";const L={components:{ChangeLocale:b,PageTitle:S},data(){return{email:"",password:"",remember_me:0,message:null,error:!1,auth:C()}},mounted(){this.auth.clearError()},methods:{onSubmit(e){this.auth.scrollTop(),this.auth.loginUser(new FormData(e.target))},validatePass(e){},scrollTop(){window.scrollTo({top:0,behavior:"smooth"})}},directives:{focus:{mounted(e){e.focus()}}}},D={class:"content"},E={class:"full"},N={class:"w-full"},U=s("img",{class:"float-right",src:$,width:"50",height:"50"},null,-1),B=s("i",{class:"fas fa-envelope"},null,-1),M=["placeholder"],F=s("i",{class:"fas fa-key"},null,-1),I=["placeholder"],j={class:"full"},z=["title"],A={class:"full"};function K(e,t,R,X,i,r){const g=m("PageTitle"),f=m("ChangeLocale"),d=m("router-link"),v=P("focus");return p(),_("div",D,[s("div",E,[a(g,{title:e.$t("message.login_title")},null,8,["title"]),a(f)]),s("form",{onSubmit:t[4]||(t[4]=y((...o)=>r.onSubmit&&r.onSubmit(...o),["prevent"]))},[s("h1",N,[n(l(e.$t("login.Sign_In"))+" ",1),a(d,{to:"/"},{default:u(()=>[U]),_:1})]),this.auth.message?(p(),_("div",{key:0,class:k([this.auth.error?"alert-error":"alert-info","animate__animated animate__flipInX"])},l(this.auth.message),3)):T("",!0),s("label",null,[n(l(e.$t("login.Email_address"))+" ",1),B]),c(s("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>i.email=o),type:"text",name:"email",class:"input",placeholder:e.$t("login.Email_address_eg")},null,8,M),[[v],[h,i.email]]),s("label",null,[n(l(e.$t("login.Password"))+" ",1),F]),c(s("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>i.password=o),onKeyup:t[2]||(t[2]=(...o)=>r.validatePass&&r.validatePass(...o)),type:"password",name:"password",class:"input",placeholder:e.$t("login.Password_eg")},null,40,I),[[h,i.password]]),s("label",null,l(e.$t("login.Remember_me")),1),s("div",j,[c(s("input",{"onUpdate:modelValue":t[3]||(t[3]=o=>e.remember=o),type:"checkbox",name:"remember_me",value:"1"},null,512),[[V,e.remember]]),s("button",{class:"button",title:e.$t("login.Login")},l(e.$t("login.Login")),9,z)]),s("div",A,[a(d,{to:"/register",class:"left"},{default:u(()=>[n(l(e.$t("login.Dont_have_an_account")),1)]),_:1}),a(d,{to:"/password",class:"right"},{default:u(()=>[n(l(e.$t("login.Forgot_password")),1)]),_:1})])],32)])}var J=w(L,[["render",K]]);export{J as default};
