/* tool-wells-tvp · Elucenia · https://github.com/Elucenia/tool-wells-tvp
   Copyright (c) 2026 Elucenia · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"wells-tvp","title":"Escore de Wells para TVP","fields":[["cancer","Câncer ativo (tratamento nos últimos 6 meses ou paliativo)","chk",{"pts":1}],["paralisia","Paralisia, paresia ou imobilização gessada recente do membro inferior","chk",{"pts":1}],["acamado","Acamado ≥ 3 dias ou cirurgia de grande porte nas últimas 12 semanas","chk",{"pts":1}],["dor_trajeto","Dor localizada no trajeto do sistema venoso profundo","chk",{"pts":1}],["edema_total","Edema de todo o membro inferior","chk",{"pts":1}],["panturrilha","Panturrilha &gt; 3 cm maior que a contralateral (10 cm abaixo da tuberosidade tibial)","chk",{"pts":1}],["cacifo","Edema com cacifo restrito à perna sintomática","chk",{"pts":1}],["colaterais","Veias superficiais colaterais (não varicosas)","chk",{"pts":1}],["tvp_prev","TVP prévia documentada","chk",{"pts":1}],["alternativo","Diagnóstico alternativo tão ou mais provável que TVP","chk",{"pts":-2}]],"config":{"unit":"","label":"Escore de Wells (TVP)","fields":[["cancer","chk",1],["paralisia","chk",1],["acamado","chk",1],["dor_trajeto","chk",1],["edema_total","chk",1],["panturrilha","chk",1],["cacifo","chk",1],["colaterais","chk",1],["tvp_prev","chk",1],["alternativo","chk",-2]],"bands":[[-2,"low","TVP improvável; probabilidade baixa (prevalência ~5%)","Dosar D-dímero: se negativo, TVP excluída; se positivo, ultrassom com Doppler."],[1,"mid","TVP improvável; probabilidade moderada no modelo de 3 níveis (~17%)","Dosar D-dímero: se negativo, TVP excluída; se positivo, ultrassom com Doppler."],[2,"mid","TVP provável (≥ 2); probabilidade moderada no modelo de 3 níveis (~17%)","Ultrassom com Doppler; se negativo, D-dímero ou repetir o ultrassom em 1 semana."],[3,"high","TVP provável; probabilidade alta (~53%)","Ultrassom com Doppler; se negativo, repetir o ultrassom ou fazer ultrassom de todo o membro."]]},"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* Elucenia arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);


function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
