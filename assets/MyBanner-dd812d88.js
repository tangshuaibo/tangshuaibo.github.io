import{f as F,u as T,g as t,w as i,h as _,i as U,o as s,c as a,a as n,n as j,j as w,t as r,k as u,l as D,_ as $}from"./app-ad1cedb7.js";const B="https://v1.hitokoto.cn/";async function L(c){const v=c==null?void 0:c.toString(),o=v?`${B}?${v}`:B;return(await fetch(o)).json()}const N={class:"banner"},R={class:"banner__hero-wrapper"},V={class:"banner__hero"},z={class:"banner__hero__img"},E=["src","alt"],W={class:"text"},q={class:"author"},A={key:1,class:"banner__hero__content"},G={key:0,class:"title"},J={key:1,class:"desc"},K=F({__name:"MyBanner",setup(c){const o=T().value.myBanner,h=t(()=>o.heroImg?i(o.heroImg):i("/hero.jpg")),I=t(()=>o.bgImg?i(o.bgImg):i("/bg.svg")),d=t(()=>o.title),k=t(()=>o.desc),x=t(()=>!!(d.value??k.value)),C=t(()=>!!d.value),M=t(()=>!!k.value),l=_(),m=_(""),f=_(""),g=_(""),p=t(()=>o.hitokoto!==!1);typeof o.hitokoto=="boolean"||o.hitokoto===void 0?l.value=void 0:l.value=new URLSearchParams(o.hitokoto);function y(H){L(H).then(e=>{m.value=e.hitokoto,f.value=e.from||"",g.value=e.from_who||""}).catch(e=>console.log(e))}const b=D(()=>{y(l.value)},4e3);return U(()=>{p&&y(l.value)}),(H,e)=>(s(),a("div",N,[n("div",{class:"banner__bg",style:j({backgroundImage:`url(${I.value})`})},null,4),n("div",R,[n("div",V,[n("div",z,[n("img",{src:h.value,alt:h.value},null,8,E)]),p.value?(s(),a("div",{key:0,class:"banner__hero__hitokoto",onClick:e[0]||(e[0]=(...S)=>w(b)&&w(b)(...S))},[n("div",W,r(m.value),1),n("div",q,"——"+r(g.value)+"「"+r(f.value)+" 」",1)])):u("v-if",!0),x.value?(s(),a("div",A,[C.value?(s(),a("div",G,r(d.value),1)):u("v-if",!0),M.value?(s(),a("div",J,r(k.value),1)):u("v-if",!0)])):u("v-if",!0)])])]))}});const Q=$(K,[["__scopeId","data-v-87f1984a"],["__file","MyBanner.vue"]]);export{Q as default};