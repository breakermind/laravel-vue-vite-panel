import{_ as n,o as i,c as d,b as l,f as h,t as s,n as p,F as b,p as m,d as k}from"../js/index.js";const x={props:["modelValue","label","placeholder","name","type","class","keyup","icon"],emits:["update:modelValue"]},v=["innerHTML"],_=["value","placeholder","name","type"];function f(t,a,e,r,u,o){return i(),d(b,null,[l("label",null,[h(s(e.label)+" ",1),l("span",{innerHTML:e.icon},null,8,v)]),l("input",{value:e.modelValue,onInput:a[0]||(a[0]=c=>t.$emit("update:modelValue",c.target.value)),placeholder:e.placeholder,name:e.name,type:e.type,class:p(e.class),onKeyup:a[1]||(a[1]=(...c)=>e.keyup&&e.keyup(...c))},null,42,_)],64)}var z=n(x,[["render",f]]);const y={props:{value:{type:String},name:{type:String},modelValue:{type:[Array,Boolean]},label:{type:String,required:!0}},computed:{isChecked(){return this.modelValue instanceof Array?this.modelValue.includes(this.value):this.modelValue==!0}},methods:{updateInput(t){let a=t.target.checked;if(this.modelValue instanceof Array){let e=[...this.modelValue];a?e.push(this.value):e.splice(e.indexOf(this.value),1),this.$emit("update:modelValue",e)}else this.$emit("update:modelValue",!!a)}}},g=t=>(m("data-v-8b881e3c"),t=t(),k(),t),V={class:"checkbox-line"},I=["checked","value","name"],w=g(()=>l("div",{class:"checkmark"},[l("i",{class:"fas fa-check dot"})],-1));function C(t,a,e,r,u,o){return i(),d("div",V,[l("input",{class:"checkbox",type:"checkbox",checked:o.isChecked,value:e.value,name:e.name,onChange:a[0]||(a[0]=(...c)=>o.updateInput&&o.updateInput(...c))},null,40,I),w,l("label",null,s(e.label),1)])}var B=n(y,[["render",C],["__scopeId","data-v-8b881e3c"]]);export{B as C,z as I};
