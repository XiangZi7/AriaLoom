import{c as u,R as a}from"./react-BcmoR6v_.js";import{a7 as f}from"./index-DS7n0a4g.js";const p=u()(f(t=>({Breadcrumbs:!0,BreadcrumbTtile:"Home",updateBreadcrumbs:e=>t({Breadcrumbs:e}),updateBreadcrumbTtile:e=>t({BreadcrumbTtile:e})}),{name:"MenuStore"}));function c(t,e){if(Object.is(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(const[r,s]of t)if(!Object.is(s,e.get(r)))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(const r of t)if(!e.has(r))return!1;return!0}const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!1;for(const r of n)if(!Object.prototype.hasOwnProperty.call(e,r)||!Object.is(t[r],e[r]))return!1;return!0}const{useRef:i}=a;function m(t){const e=i();return n=>{const r=t(n);return c(e.current,r)?e.current:e.current=r}}export{m as a,p as u};
