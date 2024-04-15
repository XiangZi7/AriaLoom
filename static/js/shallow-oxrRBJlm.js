var be=Object.defineProperty,me=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var G=(e,t,r)=>t in e?be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,n=(e,t)=>{for(var r in t||(t={}))J.call(t,r)&&G(e,r,t[r]);if(E)for(var r of E(t))Q.call(t,r)&&G(e,r,t[r]);return e},d=(e,t)=>me(e,ge(t));var Y=(e,t)=>{var r={};for(var a in e)J.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&E)for(var a of E(e))t.indexOf(a)<0&&Q.call(e,a)&&(r[a]=e[a]);return r};import{r as p,c as he,R as ye}from"./react-D4tTB2PF.js";import{t as Pe,g as xe,w as Z,i as ve,p as k,l as we,n as Ce,h as Se,m as $e,ab as ke,r as Re,s as De,X as Oe,a as b,x as w,z as Ie,f as Ne,j as $,a7 as ze,ac as Ee}from"./index-kaevoqjl.js";var j=Pe({slots:{base:"group relative max-w-fit inline-flex items-center justify-start cursor-pointer touch-none tap-highlight-transparent",wrapper:["px-1","relative","inline-flex","items-center","justify-start","flex-shrink-0","overflow-hidden","bg-default-200","rounded-full",...xe],thumb:["z-10","flex","items-center","justify-center","bg-white","shadow-small","rounded-full","origin-right"],startContent:"z-0 absolute left-1.5 text-current",endContent:"z-0 absolute right-1.5 text-default-600",thumbIcon:"text-black",label:"relative text-foreground select-none"},variants:{color:{default:{wrapper:["group-data-[selected=true]:bg-default-400","group-data-[selected=true]:text-default-foreground"]},primary:{wrapper:["group-data-[selected=true]:bg-primary","group-data-[selected=true]:text-primary-foreground"]},secondary:{wrapper:["group-data-[selected=true]:bg-secondary","group-data-[selected=true]:text-secondary-foreground"]},success:{wrapper:["group-data-[selected=true]:bg-success","group-data-[selected=true]:text-success-foreground"]},warning:{wrapper:["group-data-[selected=true]:bg-warning","group-data-[selected=true]:text-warning-foreground"]},danger:{wrapper:["group-data-[selected=true]:bg-danger","data-[selected=true]:text-danger-foreground"]}},size:{sm:{wrapper:"w-10 h-6 mr-2",thumb:["w-4 h-4 text-tiny","group-data-[selected=true]:ml-4 rtl:group-data-[selected=true]:ml-0 rtl:group-data-[selected=true]:mr-4"],endContent:"text-tiny",startContent:"text-tiny",label:"text-small"},md:{wrapper:"w-12 h-7 mr-2",thumb:["w-5 h-5 text-small","group-data-[selected=true]:ml-5 rtl:group-data-[selected=true]:ml-0 rtl:group-data-[selected=true]:mr-5"],endContent:"text-small",startContent:"text-small",label:"text-medium"},lg:{wrapper:"w-14 h-8 mr-2",thumb:["w-6 h-6 text-medium","group-data-[selected=true]:ml-6 rtl:group-data-[selected=true]:ml-0 rtl:group-data-[selected=true]:mr-6"],endContent:"text-medium",startContent:"text-medium",label:"text-large"}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},disableAnimation:{true:{wrapper:"transition-none",thumb:"transition-none"},false:{wrapper:"transition-background",thumb:"transition-all",startContent:["opacity-0","scale-50","transition-transform-opacity","group-data-[selected=true]:scale-100","group-data-[selected=true]:opacity-100"],endContent:["opacity-100","transition-transform-opacity","group-data-[selected=true]:translate-x-3","group-data-[selected=true]:opacity-0"]}}},defaultVariants:{color:"primary",size:"md",isDisabled:!1,disableAnimation:!1},compoundVariants:[{disableAnimation:!1,size:"sm",class:{thumb:["group-data-[pressed=true]:w-5","group-data-[selected]:group-data-[pressed]:ml-3"]}},{disableAnimation:!1,size:"md",class:{thumb:["group-data-[pressed=true]:w-6","group-data-[selected]:group-data-[pressed]:ml-4"]}},{disableAnimation:!1,size:"lg",class:{thumb:["group-data-[pressed=true]:w-7","group-data-[selected]:group-data-[pressed]:ml-5"]}}]});function Te(e,t,r){let{isDisabled:a=!1,isReadOnly:o=!1,value:i,name:c,children:m,"aria-label":g,"aria-labelledby":R,validationState:C="valid",isInvalid:h}=e,S=P=>{P.stopPropagation(),t.setSelected(P.target.checked)},f=m!=null,D=g!=null||R!=null;!f&&!D&&console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps:O,isPressed:l}=Z({isDisabled:a}),{pressProps:I,isPressed:z}=Z({isDisabled:a||o,onPress(){t.toggle()}}),{focusableProps:y}=ve(e,r),T=k(O,y),N=we(e,{labelable:!0});return Ce(r,t.isSelected,t.setSelected),{labelProps:k(I,{onClick:P=>P.preventDefault()}),inputProps:k(N,n(d(n({"aria-invalid":h||C==="invalid"||void 0,"aria-errormessage":e["aria-errormessage"],"aria-controls":e["aria-controls"],"aria-readonly":o||void 0,onChange:S,disabled:a},i==null?{}:{value:i}),{name:c,type:"checkbox"}),T)),isSelected:t.isSelected,isPressed:l||z,isDisabled:a,isReadOnly:o,isInvalid:h||C==="invalid"}}function Fe(e={}){let{isReadOnly:t}=e,[r,a]=Se(e.isSelected,e.defaultSelected||!1,e.onChange);function o(c){t||a(c)}function i(){t||a(!r)}return{isSelected:r,setSelected:o,toggle:i}}function Le(e,t,r){let{labelProps:a,inputProps:o,isSelected:i,isPressed:c,isDisabled:m,isReadOnly:g}=Te(e,t,r);return{labelProps:a,inputProps:d(n({},o),{role:"switch",checked:i}),isSelected:i,isPressed:c,isDisabled:m,isReadOnly:g}}function Me(e={}){const[t,r]=$e(e,j.variantKeys),q=t,{ref:a,as:o,name:i,value:c="",isReadOnly:m=!1,autoFocus:g=!1,startContent:R,endContent:C,defaultSelected:h,isSelected:S,children:f,thumbIcon:D,className:O,classNames:l,onChange:I,onValueChange:z}=q,y=Y(q,["ref","as","name","value","isReadOnly","autoFocus","startContent","endContent","defaultSelected","isSelected","children","thumbIcon","className","classNames","onChange","onValueChange"]),T=o||"label",N=p.useRef(null),P=ke(a,N),F=p.useId(),L=p.useMemo(()=>{const s=y["aria-label"]||typeof f=="string"?f:void 0;return{name:i,value:c,children:f,autoFocus:g,defaultSelected:h,isSelected:S,isDisabled:!!e.isDisabled,isReadOnly:m,"aria-label":s,"aria-labelledby":y["aria-labelledby"]||F,onChange:z}},[c,i,F,f,g,m,S,h,e.isDisabled,y["aria-label"],y["aria-labelledby"],z]),B=Fe(L),{inputProps:x,isPressed:ee,isReadOnly:V}=Le(L,B,N),{focusProps:te,isFocused:H,isFocusVisible:K}=Re({autoFocus:x.autoFocus}),{hoverProps:ae,isHovered:W}=De({isDisabled:x.disabled}),U=L.isDisabled||V,[se,X]=p.useState(!1),{pressProps:re}=Oe({isDisabled:U,onPressStart(s){s.pointerType!=="keyboard"&&X(!0)},onPressEnd(s){s.pointerType!=="keyboard"&&X(!1)}}),_=U?!1:se||ee,v=x.checked,M=x.disabled,u=p.useMemo(()=>j(n({},r)),[...Object.values(r)]),le=b(l==null?void 0:l.base,O),ne=s=>d(n({},k(ae,re,y,s)),{ref:P,className:u.base({class:b(le,s==null?void 0:s.className)}),"data-disabled":w(M),"data-selected":w(v),"data-readonly":w(V),"data-focus":w(H),"data-focus-visible":w(K),"data-hover":w(W),"data-pressed":w(_)}),oe=p.useCallback((s={})=>d(n({},s),{"aria-hidden":!0,className:b(u.wrapper({class:b(l==null?void 0:l.wrapper,s==null?void 0:s.className)}))}),[u,l==null?void 0:l.wrapper]),de=(s={})=>d(n({},k(x,te,s)),{ref:N,id:x.id,onChange:Ie(I,x.onChange)}),ie=p.useCallback((s={})=>d(n({},s),{className:u.thumb({class:b(l==null?void 0:l.thumb,s==null?void 0:s.className)})}),[u,l==null?void 0:l.thumb]),ce=p.useCallback((s={})=>d(n({},s),{id:F,className:u.label({class:b(l==null?void 0:l.label,s==null?void 0:s.className)})}),[u,l==null?void 0:l.label,M,v]),ue=p.useCallback((s={includeStateProps:!1})=>k({width:"1em",height:"1em",className:u.thumbIcon({class:b(l==null?void 0:l.thumbIcon)})},s.includeStateProps?{isSelected:v}:{}),[u,l==null?void 0:l.thumbIcon,v]),pe=p.useCallback((s={})=>d(n({width:"1em",height:"1em"},s),{className:u.startContent({class:b(l==null?void 0:l.startContent,s==null?void 0:s.className)})}),[u,l==null?void 0:l.startContent,v]),fe=p.useCallback((s={})=>d(n({width:"1em",height:"1em"},s),{className:u.endContent({class:b(l==null?void 0:l.endContent,s==null?void 0:s.className)})}),[u,l==null?void 0:l.endContent,v]);return{Component:T,slots:u,classNames:l,domRef:P,children:f,thumbIcon:D,startContent:R,endContent:C,isHovered:W,isSelected:v,isPressed:_,isFocused:H,isFocusVisible:K,isDisabled:M,getBaseProps:ne,getWrapperProps:oe,getInputProps:de,getLabelProps:ce,getThumbProps:ie,getThumbIconProps:ue,getStartContentProps:pe,getEndContentProps:fe}}var A=Ne((e,t)=>{const{Component:r,children:a,startContent:o,endContent:i,thumbIcon:c,getBaseProps:m,getInputProps:g,getWrapperProps:R,getThumbProps:C,getThumbIconProps:h,getLabelProps:S,getStartContentProps:f,getEndContentProps:D}=Me(d(n({},e),{ref:t})),O=typeof c=="function"?c(h({includeStateProps:!0})):c&&p.cloneElement(c,h()),l=o&&p.cloneElement(o,f()),I=i&&p.cloneElement(i,D());return $.jsxs(r,d(n({},m()),{children:[$.jsx(ze,{children:$.jsx("input",n({},g()))}),$.jsxs("span",d(n({},R()),{children:[o&&l,$.jsx("span",d(n({},C()),{children:c&&O})),i&&I]})),a&&$.jsx("span",d(n({},S()),{children:a}))]}))});A.displayName="NextUI.Switch";var Xe=A;const _e=he()(Ee(e=>({Breadcrumbs:!0,BreadcrumbTtile:"Home",updateBreadcrumbs:t=>e({Breadcrumbs:t}),updateBreadcrumbTtile:t=>e({BreadcrumbTtile:t})}),{name:"MenuStore"}));function Ve(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[a,o]of e)if(!Object.is(o,t.get(a)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const a of e)if(!t.has(a))return!1;return!0}const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!1;for(const a of r)if(!Object.prototype.hasOwnProperty.call(t,a)||!Object.is(e[a],t[a]))return!1;return!0}const{useRef:He}=ye;function qe(e){const t=He();return r=>{const a=e(r);return Ve(t.current,a)?t.current:t.current=a}}export{qe as a,Xe as s,_e as u};
