import{_ as v,u as w,e as b,f as k,o as m,c as h,a as s,g as l,t as a,d,h as u,n as S,i as y,w as p,j as c,k as V,l as $,p as I,b as P,q as C,s as D}from"../js/index.js";const L={data(){return{email:"",password:"",remember_me:0,message:null,error:!1,auth:w()}},methods:{onSubmit(e){this.auth.loginUser(new FormData(e.target))},validatePass(e){this.password.length<11?this.active=1:this.password.length>=11&&this.password.length<15?this.active=2:this.password.length>=15&&this.password.length<20?this.active=3:this.password.length>=20&&(this.active=4)},scrollTop(){window.scrollTo({top:0,behavior:"smooth"})}},directives:{focus:{mounted(e){e.focus()}}}},_=e=>(I("data-v-43350d89"),e=e(),P(),e),B={class:"content"},N={class:"w-full"},T=_(()=>s("img",{class:"float-right",src:C,width:"50",height:"50"},null,-1)),U=_(()=>s("i",{class:"fas fa-envelope"},null,-1)),E=["placeholder"],M=_(()=>s("i",{class:"fas fa-key"},null,-1)),F=["placeholder"],j={class:"w-full"},q=["title"],z={class:"w-full"};function A(e,t,g,R,i,n){const r=b("router-link"),f=k("focus");return m(),h("div",B,[s("form",{onSubmit:t[4]||(t[4]=$((...o)=>n.onSubmit&&n.onSubmit(...o),["prevent"]))},[s("h1",N,[l(a(e.$t("login.Sign_In"))+" ",1),d(r,{to:"/"},{default:u(()=>[T]),_:1})]),this.auth.message?(m(),h("div",{key:0,class:S([this.auth.error?"alert":"info","animate__animated animate__flipInX"])},a(this.auth.message),3)):y("",!0),s("label",null,[l(a(e.$t("login.Email_address"))+" ",1),U]),p(s("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>i.email=o),type:"text",name:"email",class:"input",placeholder:e.$t("login.Email_address_eg")},null,8,E),[[f],[c,i.email]]),s("label",null,[l(a(e.$t("login.Password"))+" ",1),M]),p(s("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>i.password=o),onKeyup:t[2]||(t[2]=(...o)=>n.validatePass&&n.validatePass(...o)),type:"password",name:"password",class:"input",placeholder:e.$t("login.Password_eg")},null,40,F),[[c,i.password]]),s("label",null,a(e.$t("login.Remember_me")),1),s("div",j,[p(s("input",{"onUpdate:modelValue":t[3]||(t[3]=o=>e.remember=o),type:"checkbox",name:"remember_me",value:"1"},null,512),[[V,e.remember]]),s("button",{class:"button",title:e.$t("login.Login")},a(e.$t("login.Login")),9,q)]),s("div",z,[d(r,{to:"/register",class:"float-left"},{default:u(()=>[l(a(e.$t("login.Dont_have_an_account")),1)]),_:1}),d(r,{to:"/password",class:"float-right"},{default:u(()=>[l(a(e.$t("login.Forgot_password")),1)]),_:1})])],32)])}var K=v(L,[["render",A],["__scopeId","data-v-43350d89"]]);const G={name:"LoginPage",setup(e){return(t,g)=>(m(),D(K))}};export{G as default};
