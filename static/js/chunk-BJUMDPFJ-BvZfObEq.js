var Y=Object.defineProperty,Z=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var W=(e,a,s)=>a in e?Y(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,r=(e,a)=>{for(var s in a||(a={}))_.call(a,s)&&W(e,s,a[s]);if(C)for(var s of C(a))S.call(a,s)&&W(e,s,a[s]);return e},f=(e,a)=>Z(e,ee(a));var $=(e,a)=>{var s={};for(var t in e)_.call(e,t)&&a.indexOf(t)<0&&(s[t]=e[t]);if(e!=null&&C)for(var t of C(e))a.indexOf(t)<0&&S.call(e,t)&&(s[t]=e[t]);return s};import{t as se,f as T,u as U,c as z,j as w,m as ae,y as te,v as re,k as oe,r as k,l as m,g as de}from"./index-BSqC4-dN.js";import{d as le,c as ne,e as ie,a as ue,f as I,r as be}from"./chunk-MCG5YV3A-CDWeqifC.js";var E=se({slots:{base:["flex","flex-col","relative","overflow-hidden","height-auto","outline-none","text-foreground","box-border","bg-content1",...le],header:["flex","p-3","z-10","w-full","justify-start","items-center","shrink-0","overflow-inherit","color-inherit","subpixel-antialiased"],body:["relative","flex","flex-1","w-full","p-3","flex-auto","flex-col","place-content-inherit","align-items-inherit","h-auto","break-words","text-left","overflow-y-auto","subpixel-antialiased"],footer:["p-3","h-auto","flex","w-full","items-center","overflow-hidden","color-inherit","subpixel-antialiased"]},variants:{shadow:{none:{base:"shadow-none"},sm:{base:"shadow-small"},md:{base:"shadow-medium"},lg:{base:"shadow-large"}},radius:{none:{base:"rounded-none",header:"rounded-none",footer:"rounded-none"},sm:{base:"rounded-small",header:"rounded-t-small",footer:"rounded-b-small"},md:{base:"rounded-medium",header:"rounded-t-medium",footer:"rounded-b-medium"},lg:{base:"rounded-large",header:"rounded-t-large",footer:"rounded-b-large"}},fullWidth:{true:{base:"w-full"}},isHoverable:{true:{base:"data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2"}},isPressable:{true:{base:"cursor-pointer"}},isBlurred:{true:{base:["bg-background/80","dark:bg-background/20","backdrop-blur-md","backdrop-saturate-150"]}},isFooterBlurred:{true:{footer:["bg-background/10","backdrop-blur","backdrop-saturate-150"]}},isDisabled:{true:{base:"opacity-disabled cursor-not-allowed"}},disableAnimation:{true:"",false:{base:"transition-transform-background motion-reduce:transition-none"}}},compoundVariants:[{isPressable:!0,disableAnimation:!1,class:"data-[pressed=true]:scale-[0.97] tap-highlight-transparent"}],defaultVariants:{radius:"lg",shadow:"md",fullWidth:!1,isHoverable:!1,isPressable:!1,isDisabled:!1,disableAnimation:!1,isFooterBlurred:!1}}),[ce,fe]=ne({name:"CardContext",strict:!0,errorMessage:"useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />"}),K=T((e,a)=>{var s;const h=e,{as:t,className:d,children:i}=h,l=$(h,["as","className","children"]),u=t||"div",b=U(a),{slots:n,classNames:p}=fe(),o=z(p==null?void 0:p.body,d);return w.jsx(u,f(r({ref:b,className:(s=n.body)==null?void 0:s.call(n,{class:o})},l),{children:i}))});K.displayName="NextUI.CardBody";var xe=K;function me(e){const[a,s]=ae(e,E.variantKeys),V=a,{ref:t,as:d,children:i,disableRipple:l=!1,onClick:u,onPress:b,autoFocus:n,className:p,classNames:o,allowTextSelectionOnPress:h=!0}=V,v=$(V,["ref","as","children","disableRipple","onClick","onPress","autoFocus","className","classNames","allowTextSelectionOnPress"]),c=U(t),F=d||(e.isPressable?"button":"div"),N=typeof F=="string",B=z(o==null?void 0:o.base,p),{onClick:G,onClear:H,ripples:g}=ie(),j=R=>{!e.disableAnimation&&!l&&c.current&&G(R)},{buttonProps:M,isPressed:y}=ue(r({onPress:b,elementType:d,isDisabled:!e.isPressable,onClick:te(u,j),allowTextSelectionOnPress:h},v),c),{hoverProps:P,isHovered:A}=re(r({isDisabled:!e.isHoverable},v)),{isFocusVisible:D,isFocused:J,focusProps:O}=oe({autoFocus:n}),x=k.useMemo(()=>E(r({},s)),[...Object.values(s)]),L=k.useMemo(()=>({isDisabled:e.isDisabled,isFooterBlurred:e.isFooterBlurred,disableAnimation:e.disableAnimation,fullWidth:e.fullWidth,slots:x,classNames:o}),[x,o,e.isDisabled,e.isFooterBlurred,e.disableAnimation,e.fullWidth]),Q=k.useCallback((R={})=>r({ref:c,className:x.base({class:B}),tabIndex:e.isPressable?0:-1,"data-hover":m(A),"data-pressed":m(y),"data-focus":m(J),"data-focus-visible":m(D),"data-disabled":m(e.isDisabled)},de(e.isPressable?f(r(r({},M),O),{role:"button"}):{},e.isHoverable?P:{},I(v,{enabled:N}),I(R))),[c,x,B,N,e.isPressable,e.isHoverable,e.isDisabled,A,y,D,M,O,P,v]),X=k.useCallback(()=>({ripples:g,onClear:H}),[g,H]);return{context:L,domRef:c,Component:F,classNames:o,children:i,isHovered:A,isPressed:y,isPressable:e.isPressable,isHoverable:e.isHoverable,disableAnimation:e.disableAnimation,disableRipple:l,handleClick:j,isFocusVisible:D,getCardProps:Q,getRippleProps:X}}var q=T((e,a)=>{const{children:s,context:t,Component:d,isPressable:i,disableAnimation:l,disableRipple:u,getCardProps:b,getRippleProps:n}=me(f(r({},e),{ref:a}));return w.jsxs(d,f(r({},b()),{children:[w.jsx(ce,{value:t,children:s}),i&&!l&&!u&&w.jsx(be,r({},n()))]}))});q.displayName="NextUI.Card";var Ce=q;export{xe as a,Ce as c};
