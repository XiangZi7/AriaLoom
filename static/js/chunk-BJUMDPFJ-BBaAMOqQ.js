var J=Object.defineProperty,L=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var O=(e,s,a)=>s in e?J(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,r=(e,s)=>{for(var a in s||(s={}))P.call(s,a)&&O(e,a,s[a]);if(c)for(var a of c(s))V.call(s,a)&&O(e,a,s[a]);return e},f=(e,s)=>L(e,Q(s));var W=(e,s)=>{var a={};for(var t in e)P.call(e,t)&&s.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&c)for(var t of c(e))s.indexOf(t)<0&&V.call(e,t)&&(a[t]=e[t]);return a};import{c as X,u as Y,r as Z}from"./chunk-MCG5YV3A-CTOL8ofO.js";import{t as ee,m as se,u as ae,c as te,v as re,p as oe,o as de,s as l,l as le,f as ie,j as D}from"./index-B3xxk_Hx.js";import{d as ne,u as ue,f as S}from"./index-DL2aHjVg.js";import{r as m}from"./react-ClPpOBC1.js";var E=ee({slots:{base:["flex","flex-col","relative","overflow-hidden","height-auto","outline-none","text-foreground","box-border","bg-content1",...ne],header:["flex","p-3","z-10","w-full","justify-start","items-center","shrink-0","overflow-inherit","color-inherit","subpixel-antialiased"],body:["relative","flex","flex-1","w-full","p-3","flex-auto","flex-col","place-content-inherit","align-items-inherit","h-auto","break-words","text-left","overflow-y-auto","subpixel-antialiased"],footer:["p-3","h-auto","flex","w-full","items-center","overflow-hidden","color-inherit","subpixel-antialiased"]},variants:{shadow:{none:{base:"shadow-none"},sm:{base:"shadow-small"},md:{base:"shadow-medium"},lg:{base:"shadow-large"}},radius:{none:{base:"rounded-none",header:"rounded-none",footer:"rounded-none"},sm:{base:"rounded-small",header:"rounded-t-small",footer:"rounded-b-small"},md:{base:"rounded-medium",header:"rounded-t-medium",footer:"rounded-b-medium"},lg:{base:"rounded-large",header:"rounded-t-large",footer:"rounded-b-large"}},fullWidth:{true:{base:"w-full"}},isHoverable:{true:{base:"data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2"}},isPressable:{true:{base:"cursor-pointer"}},isBlurred:{true:{base:["bg-background/80","dark:bg-background/20","backdrop-blur-md","backdrop-saturate-150"]}},isFooterBlurred:{true:{footer:["bg-background/10","backdrop-blur","backdrop-saturate-150"]}},isDisabled:{true:{base:"opacity-disabled cursor-not-allowed"}},disableAnimation:{true:"",false:{base:"transition-transform-background motion-reduce:transition-none"}}},compoundVariants:[{isPressable:!0,disableAnimation:!1,class:"data-[pressed=true]:scale-[0.97] tap-highlight-transparent"}],defaultVariants:{radius:"lg",shadow:"md",fullWidth:!1,isHoverable:!1,isPressable:!1,isDisabled:!1,disableAnimation:!1,isFooterBlurred:!1}}),[be,ve]=X({name:"CardContext",strict:!0,errorMessage:"useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />"});function ce(e){const[s,a]=se(e,E.variantKeys),N=s,{ref:t,as:i,children:p,disableRipple:n=!1,onClick:h,onPress:x,autoFocus:v,className:T,classNames:o,allowTextSelectionOnPress:_=!0}=N,u=W(N,["ref","as","children","disableRipple","onClick","onPress","autoFocus","className","classNames","allowTextSelectionOnPress"]),d=ae(t),$=i||(e.isPressable?"button":"div"),R=typeof $=="string",y=te(o==null?void 0:o.base,T),{onClick:z,onClear:F,ripples:H}=Y(),g=A=>{!e.disableAnimation&&!n&&d.current&&z(A)},{buttonProps:j,isPressed:C}=ue(r({onPress:x,elementType:i,isDisabled:!e.isPressable,onClick:re(h,g),allowTextSelectionOnPress:_},u),d),{hoverProps:B,isHovered:w}=oe(r({isDisabled:!e.isHoverable},u)),{isFocusVisible:k,isFocused:K,focusProps:M}=de({autoFocus:v}),b=m.useMemo(()=>E(r({},a)),[...Object.values(a)]),U=m.useMemo(()=>({isDisabled:e.isDisabled,isFooterBlurred:e.isFooterBlurred,disableAnimation:e.disableAnimation,fullWidth:e.fullWidth,slots:b,classNames:o}),[b,o,e.isDisabled,e.isFooterBlurred,e.disableAnimation,e.fullWidth]),q=m.useCallback((A={})=>r({ref:d,className:b.base({class:y}),tabIndex:e.isPressable?0:-1,"data-hover":l(w),"data-pressed":l(C),"data-focus":l(K),"data-focus-visible":l(k),"data-disabled":l(e.isDisabled)},le(e.isPressable?f(r(r({},j),M),{role:"button"}):{},e.isHoverable?B:{},S(u,{enabled:R}),S(A))),[d,b,y,R,e.isPressable,e.isHoverable,e.isDisabled,w,C,k,j,M,B,u]),G=m.useCallback(()=>({ripples:H,onClear:F}),[H,F]);return{context:U,domRef:d,Component:$,classNames:o,children:p,isHovered:w,isPressed:C,isPressable:e.isPressable,isHoverable:e.isHoverable,disableAnimation:e.disableAnimation,disableRipple:n,handleClick:g,isFocusVisible:k,getCardProps:q,getRippleProps:G}}var I=ie((e,s)=>{const{children:a,context:t,Component:i,isPressable:p,disableAnimation:n,disableRipple:h,getCardProps:x,getRippleProps:v}=ce(f(r({},e),{ref:s}));return D.jsxs(i,f(r({},x()),{children:[D.jsx(be,{value:t,children:a}),p&&!n&&!h&&D.jsx(Z,r({},v()))]}))});I.displayName="NextUI.Card";var Ce=I;export{Ce as c,ve as u};
