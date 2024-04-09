var j=Object.defineProperty,D=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var E=(t,a,r)=>a in t?j(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,f=(t,a)=>{for(var r in a||(a={}))R.call(a,r)&&E(t,r,a[r]);if(b)for(var r of b(a))x.call(a,r)&&E(t,r,a[r]);return t},S=(t,a)=>D(t,L(a));var C=(t,a)=>{var r={};for(var o in t)R.call(t,o)&&a.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&b)for(var o of b(t))a.indexOf(o)<0&&x.call(t,o)&&(r[o]=t[o]);return r};import{t as N,m as P,u as V,f as A,j as H}from"./index-Cx19wesS.js";import{c as M}from"./index-C7BFt0tH.js";import{r as z}from"./react-ClPpOBC1.js";var T=["data-[top-scroll=true]:[mask-image:linear-gradient(0deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]","data-[bottom-scroll=true]:[mask-image:linear-gradient(180deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]","data-[top-bottom-scroll=true]:[mask-image:linear-gradient(#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]"],W=["data-[left-scroll=true]:[mask-image:linear-gradient(270deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]","data-[right-scroll=true]:[mask-image:linear-gradient(90deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]","data-[left-right-scroll=true]:[mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]"],B=N({base:[],variants:{orientation:{vertical:["overflow-y-auto",...T],horizontal:["overflow-x-auto",...W]},hideScrollBar:{true:"scrollbar-hide",false:""}},defaultVariants:{orientation:"vertical",hideScrollBar:!1}});function I(t={}){const{domRef:a,isEnabled:r=!0,overflowCheck:o="vertical",visibility:i="auto",offset:u=0,onVisibilityChange:h,updateDeps:p=[]}=t,g=z.useRef(i);z.useEffect(()=>{const e=a==null?void 0:a.current;if(!e||!r)return;const w=(n,l,d,s,c)=>{if(i==="auto"){const v=`${s}${M(c)}Scroll`;l&&d?(e.dataset[v]="true",e.removeAttribute(`data-${s}-scroll`),e.removeAttribute(`data-${c}-scroll`)):(e.dataset[`${s}Scroll`]=l.toString(),e.dataset[`${c}Scroll`]=d.toString(),e.removeAttribute(`data-${s}-${c}-scroll`))}else{const v=l&&d?"both":l?s:d?c:"none";v!==g.current&&(h==null||h(v),g.current=v)}},m=()=>{const n=[{type:"vertical",prefix:"top",suffix:"bottom"},{type:"horizontal",prefix:"left",suffix:"right"}];for(const{type:l,prefix:d,suffix:s}of n)if(o===l||o==="both"){const c=l==="vertical"?e.scrollTop>u:e.scrollLeft>u,v=l==="vertical"?e.scrollTop+e.clientHeight+u<e.scrollHeight:e.scrollLeft+e.clientWidth+u<e.scrollWidth;w(l,c,v,d,s)}},_=()=>{["top","bottom","top-bottom","left","right","left-right"].forEach(n=>{e.removeAttribute(`data-${n}-scroll`)})};return m(),e.addEventListener("scroll",m),i!=="auto"&&(_(),i==="both"?(e.dataset.topBottomScroll=String(o==="vertical"),e.dataset.leftRightScroll=String(o==="horizontal")):(e.dataset.topBottomScroll="false",e.dataset.leftRightScroll="false",["top","bottom","left","right"].forEach(n=>{e.dataset[`${n}Scroll`]=String(i===n)}))),()=>{e.removeEventListener("scroll",m),_()}},[...p,r,i,o,h,a])}function K(t){var a;const[r,o]=P(t,B.variantKeys),y=r,{ref:i,as:u,children:h,className:p,style:g,size:e=40,offset:w=0,visibility:m="auto",isEnabled:_=!0,onVisibilityChange:n}=y,l=C(y,["ref","as","children","className","style","size","offset","visibility","isEnabled","onVisibilityChange"]),d=u||"div",s=V(i);I({domRef:s,offset:w,visibility:m,isEnabled:_,onVisibilityChange:n,updateDeps:[h],overflowCheck:(a=t.orientation)!=null?a:"vertical"});const c=z.useMemo(()=>B(S(f({},o),{className:p})),[...Object.values(o),p]);return{Component:d,styles:c,domRef:s,children:h,getBaseProps:($={})=>{var k;return f(f({ref:s,className:c,"data-orientation":(k=t.orientation)!=null?k:"vertical",style:f(f({"--scroll-shadow-size":`${e}px`},g),$.style)},l),$)}}}var O=A((t,a)=>{const{Component:r,children:o,getBaseProps:i}=K(S(f({},t),{ref:a}));return H.jsx(r,S(f({},i()),{children:o}))});O.displayName="NextUI.ScrollShadow";var J=O;export{J as s};
