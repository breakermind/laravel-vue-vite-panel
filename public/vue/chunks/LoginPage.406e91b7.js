import{_ as g,u as k,e as f,f as $,o as m,c as _,a as s,g as r,t as a,d,h as u,n as S,i as y,w as p,j as h,k as V,l as L,p as I,b as P,q as C,s as D}from"../js/index.js";const B={data(){return{email:"",password:"",remember_me:0,message:null,error:!1,auth:k()}},methods:{onSubmit(e){this.auth.loginUser(new FormData(e.target))},validatePass(e){this.password.length<11?this.active=1:this.password.length>=11&&this.password.length<15?this.active=2:this.password.length>=15&&this.password.length<20?this.active=3:this.password.length>=20&&(this.active=4)},scrollTop(){window.scrollTo({top:0,behavior:"smooth"})}},directives:{focus:{mounted(e){e.focus()}}}},c=e=>(I("data-v-25e02425"),e=e(),P(),e),N={class:"content"},T=c(()=>s("img",{class:"logo-form",src:C,width:"125",height:"125"},null,-1)),U=c(()=>s("i",{class:"fas fa-envelope"},null,-1)),E=["placeholder"],M=c(()=>s("i",{class:"fas fa-key"},null,-1)),F=["placeholder"],j={class:"long"},q=["title"];function z(e,t,v,w,l,n){const i=f("router-link"),b=$("focus");return m(),_("div",N,[s("form",{onSubmit:t[4]||(t[4]=L((...o)=>n.onSubmit&&n.onSubmit(...o),["prevent"]))},[s("h1",null,[r(a(e.$t("login.Sign_In"))+" ",1),d(i,{to:"/"},{default:u(()=>[T]),_:1})]),this.auth.message?(m(),_("div",{key:0,class:S([this.auth.error?"alert":"info","animate__animated animate__flipInX"])},a(this.auth.message),3)):y("",!0),s("label",null,[r(a(e.$t("login.Email_address"))+" ",1),U]),p(s("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>l.email=o),type:"text",name:"email",class:"input",placeholder:e.$t("login.Email_address_eg")},null,8,E),[[b],[h,l.email]]),s("label",null,[r(a(e.$t("login.Password"))+" ",1),M]),p(s("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>l.password=o),onKeyup:t[2]||(t[2]=(...o)=>n.validatePass&&n.validatePass(...o)),type:"password",name:"password",class:"input",placeholder:e.$t("login.Password_eg")},null,40,F),[[h,l.password]]),s("label",null,a(e.$t("login.Remember_me")),1),s("div",j,[p(s("input",{"onUpdate:modelValue":t[3]||(t[3]=o=>e.remember=o),type:"checkbox",name:"remember_me",value:"1"},null,512),[[V,e.remember]]),s("button",{class:"button",title:e.$t("login.Login")},a(e.$t("login.Login")),9,q)]),d(i,{to:"/register",class:"left-link"},{default:u(()=>[r(a(e.$t("login.Dont_have_an_account")),1)]),_:1}),d(i,{to:"/password",class:"right-link"},{default:u(()=>[r(a(e.$t("login.Forgot_password")),1)]),_:1})],32)])}var A=g(B,[["render",z],["__scopeId","data-v-25e02425"]]);const K={components:[A],data(){return{}}};function R(e,t,v,w,l,n){const i=f("Login");return m(),D(i)}var G=g(K,[["render",R]]);export{G as default};
