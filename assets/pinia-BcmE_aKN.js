import{ao as r,r as l,ap as p}from"./index-CMQ4A1AY.js";var u=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const f=Symbol();var c;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(c||(c={}));function h(){const t=r(!0),o=t.run(()=>l({}));let s=[],n=[];const a=p({install(e){a._a=e,e.provide(f,a),e.config.globalProperties.$pinia=a,n.forEach(i=>s.push(i)),n=[]},use(e){return!this._a&&!u?n.push(e):s.push(e),this},_p:s,_a:null,_e:t,_s:new Map,state:o});return a}const b=t=>{t.use(h())};export{b as install};
