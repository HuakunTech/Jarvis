import{u}from"./index.atYzCDLJ.js";import{u as d,$ as l,a as c}from"./index.DxXz0Gs3.js";import{_ as p}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{d as i,r as _,o as f,w as n}from"./runtime-core.esm-bundler.CT1DoMlh.js";import"./index.BUfwsyyR.js";import"./core.CpkkdSmU.js";const $=i({__name:"default",setup(r,{expose:a}){a();const e=d(l),o=u();f(()=>{document.documentElement.style.setProperty("--radius",`${e.value.radius}rem`),document.documentElement.classList.add(`theme-${e.value.theme}`),o.value=e.value.lightMode??"system"}),n(()=>e.value.theme,t=>{document.documentElement.classList.remove(...c.map(m=>`theme-${m}`)),document.documentElement.classList.add(`theme-${t}`)}),n(()=>e.value.radius,t=>{document.documentElement.style.setProperty("--radius",`${t}rem`)});const s={appConfig:e,colorMode:o};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}});function h(r,a,e,o,s,t){return _(r.$slots,"default")}const g=p($,[["render",h]]);export{g as default};