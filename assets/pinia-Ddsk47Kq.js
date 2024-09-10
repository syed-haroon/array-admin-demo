import{as as r,a as l,at as u}from"./index-ZVblBrNF.js";var p=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const f=Symbol();var c;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(c||(c={}));function h(){const t=r(!0),i=t.run(()=>l({}));let s=[],n=[];const a=u({install(e){a._a=e,e.provide(f,a),e.config.globalProperties.$pinia=a,n.forEach(o=>s.push(o)),n=[]},use(e){return!this._a&&!p?n.push(e):s.push(e),this},_p:s,_a:null,_e:t,_s:new Map,state:i});return a}const b=t=>{t.use(h())};export{b as install};
