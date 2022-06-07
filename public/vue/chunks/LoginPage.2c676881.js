import{_ as v,u as w,e as b,f as k,o as m,c as _,a as s,g as l,t as a,d,h as u,n as S,i as y,w as p,j as c,k as V,l as $,p as I,b as P,q as C,s as D}from"../js/index.js";const L={data(){return{email:"",password:"",remember_me:0,message:null,error:!1,auth:w()}},methods:{onSubmit(e){this.auth.loginUser(new FormData(e.target))},validatePass(e){this.password.length<11?this.active=1:this.password.length>=11&&this.password.length<15?this.active=2:this.password.length>=15&&this.password.length<20?this.active=3:this.password.length>=20&&(this.active=4)},scrollTop(){window.scrollTo({top:0,behavior:"smooth"})}},directives:{focus:{mounted(e){e.focus()}}}},h=e=>(I("data-v-0e127842"),e=e(),P(),e),B={class:"content"},N=h(()=>s("img",{class:"logo-form",src:C,width:"125",height:"125"},null,-1)),T=h(()=>s("i",{class:"fas fa-envelope"},null,-1)),U=["placeholder"],E=h(()=>s("i",{class:"fas fa-key"},null,-1)),M=["placeholder"],F={class:"long"},j=["title"];function q(e,t,g,A,i,n){const r=b("router-link"),f=k("focus");return m(),_("div",B,[s("form",{onSubmit:t[4]||(t[4]=$((...o)=>n.onSubmit&&n.onSubmit(...o),["prevent"]))},[s("h1",null,[l(a(e.$t("login.Sign_In"))+" ",1),d(r,{to:"/"},{default:u(()=>[N]),_:1})]),this.auth.message?(m(),_("div",{key:0,class:S([this.auth.error?"alert":"info","animate__animated animate__flipInX"])},a(this.auth.message),3)):y("",!0),s("label",null,[l(a(e.$t("login.Email_address"))+" ",1),T]),p(s("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>i.email=o),type:"text",name:"email",class:"input",placeholder:e.$t("login.Email_address_eg")},null,8,U),[[f],[c,i.email]]),s("label",null,[l(a(e.$t("login.Password"))+" ",1),E]),p(s("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>i.password=o),onKeyup:t[2]||(t[2]=(...o)=>n.validatePass&&n.validatePass(...o)),type:"password",name:"password",class:"input",placeholder:e.$t("login.Password_eg")},null,40,M),[[c,i.password]]),s("label",null,a(e.$t("login.Remember_me")),1),s("div",F,[p(s("input",{"onUpdate:modelValue":t[3]||(t[3]=o=>e.remember=o),type:"checkbox",name:"remember_me",value:"1"},null,512),[[V,e.remember]]),s("button",{class:"button",title:e.$t("login.Login")},a(e.$t("login.Login")),9,j)]),d(r,{to:"/register",class:"left-link"},{default:u(()=>[l(a(e.$t("login.Dont_have_an_account")),1)]),_:1}),d(r,{to:"/password",class:"right-link"},{default:u(()=>[l(a(e.$t("login.Forgot_password")),1)]),_:1})],32)])}var z=v(L,[["render",q],["__scopeId","data-v-0e127842"]]);const R={name:"LoginPage",setup(e){return(t,g)=>(m(),D(z))}};export{R as default};
