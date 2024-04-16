var ge=Object.defineProperty,xe=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var X=(e,t,o)=>t in e?ge(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,d=(e,t)=>{for(var o in t||(t={}))Z.call(t,o)&&X(e,o,t[o]);if(V)for(var o of V(t))ee.call(t,o)&&X(e,o,t[o]);return e},T=(e,t)=>xe(e,ye(t));var U=(e,t)=>{var o={};for(var r in e)Z.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&V)for(var r of V(e))t.indexOf(r)<0&&ee.call(e,r)&&(o[r]=e[r]);return o};import{r as i}from"./react-D4tTB2PF.js";import{$ as Oe,p as te,b as oe,t as Pe,T as we,g as Ce}from"./import-Cdb5ny5J.js";import{aD as De,l as Ee,s as se,p as C,ad as Re,i as Ie,aE as je,an as Ae,m as Ne,aF as _e,ar as Se,K as He,x as I,a as ke,f as Fe,j as b,F as Le,aG as re,I as Ke}from"./index-EZ9xYJxZ.js";import{u as Ve}from"./index-Ce1Zu64m.js";var Me={},ne={};function Ue(e,t,...o){var r;const u=`[Next UI]${t?` [${t}]`:" "}: ${e}`;if(typeof console!="undefined"&&!ne[u]&&(ne[u]=!0,((r=process==null?void 0:Me)==null?void 0:r.NODE_ENV)!=="production"))return console.warn(u,o)}function ze(e,t){if(e!=null){if(De(e)){e(t);return}try{e.current=t}catch(o){throw new Error(`Cannot assign value '${t}' to ref '${e}'`)}}}function Be(...e){return t=>{e.forEach(o=>ze(o,t))}}const We=1500,le=500;let P={},Ge=0,N=!1,g=null,w=null;function Ye(e={}){let{delay:t=We,closeDelay:o=le}=e,{isOpen:r,open:m,close:u}=Oe(e),l=i.useMemo(()=>`${++Ge}`,[]),n=i.useRef(),v=()=>{P[l]=x},f=()=>{for(let a in P)a!==l&&(P[a](!0),delete P[a])},s=()=>{clearTimeout(n.current),n.current=null,f(),v(),N=!0,m(),g&&(clearTimeout(g),g=null),w&&(clearTimeout(w),w=null)},x=a=>{a||o<=0?(clearTimeout(n.current),n.current=null,u()):n.current||(n.current=setTimeout(()=>{n.current=null,u()},o)),g&&(clearTimeout(g),g=null),N&&(w&&clearTimeout(w),w=setTimeout(()=>{delete P[l],w=null,N=!1},Math.max(le,o)))},h=()=>{f(),v(),!r&&!g&&!N?g=setTimeout(()=>{g=null,N=!0,s()},t):r||s()};return i.useEffect(()=>()=>{clearTimeout(n.current),P[l]&&delete P[l]},[l]),{isOpen:r,open:a=>{!a&&t>0&&!n.current?h():s()},close:x}}function qe(e,t){let o=Ee(e,{labelable:!0}),{hoverProps:r}=se({onHoverStart:()=>t==null?void 0:t.open(!0),onHoverEnd:()=>t==null?void 0:t.close()});return{tooltipProps:C(o,r,{role:"tooltip"})}}function Je(e,t,o){let{isDisabled:r,trigger:m}=e,u=Re(),l=i.useRef(!1),n=i.useRef(!1),v=()=>{(l.current||n.current)&&t.open(n.current)},f=c=>{!l.current&&!n.current&&t.close(c)};i.useEffect(()=>{let c=y=>{o&&o.current&&y.key==="Escape"&&(y.stopPropagation(),t.close(!0))};if(t.isOpen)return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[o,t]);let s=()=>{m!=="focus"&&(je()==="pointer"?l.current=!0:l.current=!1,v())},x=()=>{m!=="focus"&&(n.current=!1,l.current=!1,f())},h=()=>{n.current=!1,l.current=!1,f(!0)},a=()=>{Ae()&&(n.current=!0,v())},p=()=>{n.current=!1,l.current=!1,f(!0)},{hoverProps:D}=se({isDisabled:r,onHoverStart:s,onHoverEnd:x}),{focusableProps:E}=Ie({isDisabled:r,onFocus:a,onBlur:p},o);return{triggerProps:d({"aria-describedby":t.isOpen?u:void 0},C(E,D,{onPointerDown:h,onKeyDown:h})),tooltipProps:{id:u}}}function Qe(e){const[t,o]=Ne(e,te.variantKeys),J=t,{ref:r,as:m,isOpen:u,content:l,children:n,defaultOpen:v,onOpenChange:f,isDisabled:s,trigger:x,shouldFlip:h=!0,containerPadding:a=12,placement:p="top",delay:D=0,closeDelay:E=500,showArrow:c=!1,offset:y=7,crossOffset:_=0,isDismissable:R,shouldCloseOnBlur:ie=!0,portalContainer:ce,isKeyboardDismissDisabled:ue=!1,updatePositionDeps:z=[],shouldCloseOnInteractOutside:de,className:fe,onClose:B,motionProps:pe,classNames:j}=J,M=U(J,["ref","as","isOpen","content","children","defaultOpen","onOpenChange","isDisabled","trigger","shouldFlip","containerPadding","placement","delay","closeDelay","showArrow","offset","crossOffset","isDismissable","shouldCloseOnBlur","portalContainer","isKeyboardDismissDisabled","updatePositionDeps","shouldCloseOnInteractOutside","className","onClose","motionProps","classNames"]),be=m||"div",A=Ye({delay:D,closeDelay:E,isDisabled:s,defaultOpen:v,isOpen:u,onOpenChange:O=>{f==null||f(O),O||B==null||B()}}),S=i.useRef(null),H=i.useRef(null),k=i.useId(),$=A.isOpen&&!s;i.useImperativeHandle(r,()=>_e(H));const{triggerProps:W,tooltipProps:me}=Je({isDisabled:s,trigger:x},A,S),{tooltipProps:G}=qe(d({isOpen:$},C(t,me)),A),{overlayProps:Y,placement:F,updatePosition:$e}=Se({isOpen:$,targetRef:S,placement:Pe(p),overlayRef:H,offset:c?y+3:y,crossOffset:_,shouldFlip:h,containerPadding:a});Ve(()=>{z.length&&$e()},z);const{overlayProps:q}=He({isOpen:$,onClose:A.close,isDismissable:R,shouldCloseOnBlur:ie,isKeyboardDismissDisabled:ue,shouldCloseOnInteractOutside:de},H),L=i.useMemo(()=>{var O,K,Q;return te(T(d({},o),{radius:(O=e==null?void 0:e.radius)!=null?O:"md",size:(K=e==null?void 0:e.size)!=null?K:"md",shadow:(Q=e==null?void 0:e.shadow)!=null?Q:"sm"}))},[...Object.values(o),e==null?void 0:e.radius,e==null?void 0:e.size,e==null?void 0:e.shadow]),ve=i.useCallback((O={},K=null)=>T(d({},C(W,O)),{ref:Be(K,S),"aria-describedby":$?k:void 0}),[W,$,k,A]),he=i.useCallback(()=>T(d({ref:H,"data-slot":"base","data-open":I($),"data-arrow":I(c),"data-disabled":I(s),"data-placement":oe(F,p)},C(G,q,M)),{style:C(Y.style,M.style,t.style),className:L.base({class:j==null?void 0:j.base}),id:k}),[L,$,c,s,F,p,G,q,M,Y,t,k]),Te=i.useCallback(()=>({"data-slot":"content","data-open":I($),"data-arrow":I(c),"data-disabled":I(s),"data-placement":oe(F,p),className:L.content({class:ke(j==null?void 0:j.content,fe)})}),[L,$,c,s,F,p,j]);return{Component:be,content:l,children:n,isOpen:$,triggerRef:S,showArrow:c,portalContainer:ce,placement:p,disableAnimation:e==null?void 0:e.disableAnimation,isDisabled:s,motionProps:pe,getTooltipContentProps:Te,getTriggerProps:ve,getTooltipProps:he}}var ae=Fe((e,t)=>{const{Component:o,children:r,content:m,isOpen:u,portalContainer:l,placement:n,disableAnimation:v,motionProps:f,getTriggerProps:s,getTooltipProps:x,getTooltipContentProps:h}=Qe(T(d({},e),{ref:t}));let a;try{const R=i.Children.only(r);a=i.cloneElement(R,s(R.props,R.ref))}catch(R){a=b.jsx("span",{}),Ue("Tooltip must have only one child node. Please, check your code.")}const _=x(),{ref:p,id:D,style:E}=_,c=U(_,["ref","id","style"]),y=b.jsx("div",{ref:p,id:D,style:E,children:b.jsx(Le.div,T(d({animate:"enter",exit:"exit",initial:"exit",variants:we.scaleSpring},C(f,c)),{style:d({},Ce(n)),children:b.jsx(o,T(d({},h()),{children:m}))}))});return b.jsxs(b.Fragment,{children:[a,v&&u?b.jsx(re,{portalContainer:l,children:b.jsx("div",T(d({ref:p,id:D,style:E},c),{children:b.jsx(o,T(d({},h()),{children:m}))}))}):b.jsx(Ke,{children:u?b.jsx(re,{portalContainer:l,children:y}):null})]})});ae.displayName="NextUI.Tooltip";var rt=ae;export{rt as t};