var ua=Object.defineProperty,fa=Object.defineProperties;var ma=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var S=(a,e,s)=>e in a?ua(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,m=(a,e)=>{for(var s in e||(e={}))Z.call(e,s)&&S(a,s,e[s]);if(C)for(var s of C(e))H.call(e,s)&&S(a,s,e[s]);return a},y=(a,e)=>fa(a,ma(e));var O=(a,e)=>{var s={};for(var l in a)Z.call(a,l)&&e.indexOf(l)<0&&(s[l]=a[l]);if(a!=null&&C)for(var l of C(a))e.indexOf(l)<0&&H.call(a,l)&&(s[l]=a[l]);return s};import{t as J,j as t,u as T,k as ba,s as ga,c as U,l as k,g as q,f as va}from"./index-Cx19wesS.js";import{c as pa}from"./chunk-MCG5YV3A-CEME6LlM.js";import{c as b}from"./chunk-KANCXY5W-DM7AY8iY.js";import{d as xa,t as N}from"./index-C7BFt0tH.js";import{r as p}from"./react-ClPpOBC1.js";import{a as ha}from"./index-Df0UKUGz.js";var Ca=J({slots:{base:["flex","relative","justify-center","items-center","box-border","overflow-hidden","align-middle","text-white","z-0",...xa],img:["flex","object-cover","w-full","h-full","transition-opacity","!duration-500","opacity-0","data-[loaded=true]:opacity-100"],fallback:[...N,"flex","items-center","justify-center"],name:[...N,"font-normal","text-center","text-inherit"],icon:[...N,"flex","items-center","justify-center","text-inherit","w-full","h-full"]},variants:{size:{sm:{base:"w-8 h-8 text-tiny"},md:{base:"w-10 h-10 text-tiny"},lg:{base:"w-14 h-14 text-small"}},color:{default:{base:b.solid.default},primary:{base:b.solid.primary},secondary:{base:b.solid.secondary},success:{base:b.solid.success},warning:{base:b.solid.warning},danger:{base:b.solid.danger}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"},full:{base:"rounded-full"}},isBordered:{true:{base:"ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark"}},isDisabled:{true:{base:"opacity-disabled"}},isInGroup:{true:{base:["-ms-2 data-[hover=true]:-translate-x-3 transition-transform","data-[focus-visible=true]:-translate-x-3"]}},isInGridGroup:{true:{base:"m-0 data-[hover=true]:translate-x-0"}}},defaultVariants:{size:"md",color:"default",radius:"full"},compoundVariants:[{color:"default",isBordered:!0,class:{base:"ring-default"}},{color:"primary",isBordered:!0,class:{base:"ring-primary"}},{color:"secondary",isBordered:!0,class:{base:"ring-secondary"}},{color:"success",isBordered:!0,class:{base:"ring-success"}},{color:"warning",isBordered:!0,class:{base:"ring-warning"}},{color:"danger",isBordered:!0,class:{base:"ring-danger"}}]}),Ra=J({base:"flex items-center justify-center h-auto w-max-content",variants:{isGrid:{true:"inline-grid grid-cols-4 gap-3"}}}),ya=a=>(a==null?void 0:a.length)<=4?a:a==null?void 0:a.slice(0,3),_a=(...a)=>{let e=" ";for(const s of a)if(typeof s=="string"&&s.length>0){e=s;break}return e},ka=()=>t.jsxs("svg",{"aria-hidden":"true",fill:"none",height:"80%",role:"presentation",viewBox:"0 0 24 24",width:"80%",children:[t.jsx("path",{d:"M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z",fill:"currentColor"}),t.jsx("path",{d:"M17.0809 14.1489C14.2909 12.2889 9.74094 12.2889 6.93094 14.1489C5.66094 14.9989 4.96094 16.1489 4.96094 17.3789C4.96094 18.6089 5.66094 19.7489 6.92094 20.5889C8.32094 21.5289 10.1609 21.9989 12.0009 21.9989C13.8409 21.9989 15.6809 21.5289 17.0809 20.5889C18.3409 19.7389 19.0409 18.5989 19.0409 17.3589C19.0309 16.1289 18.3409 14.9889 17.0809 14.1489Z",fill:"currentColor"})]}),[Ma,wa]=pa({name:"AvatarGroupContext",strict:!1});function ja(a={}){var e,s,l,u,x;const r=wa(),o=!!r,L=a,{as:n,ref:g,src:i,name:f,icon:w,classNames:d,fallback:j,alt:I=f||"avatar",imgRef:Q,color:P=(e=r==null?void 0:r.color)!=null?e:"default",radius:F=(s=r==null?void 0:r.radius)!=null?s:"full",size:$=(l=r==null?void 0:r.size)!=null?l:"md",isBordered:R=(u=r==null?void 0:r.isBordered)!=null?u:!1,isDisabled:G=(x=r==null?void 0:r.isDisabled)!=null?x:!1,isFocusable:_=!1,getInitials:W=ya,ignoreFallback:M=!1,showFallback:X=!1,ImgComponent:Y="img",imgProps:z,className:aa,onError:ea}=L,V=O(L,["as","ref","src","name","icon","classNames","fallback","alt","imgRef","color","radius","size","isBordered","isDisabled","isFocusable","getInitials","ignoreFallback","showFallback","ImgComponent","imgProps","className","onError"]),sa=n||"span",ra=T(g),A=T(Q),{isFocusVisible:la,isFocused:oa,focusProps:D}=ba(),{isHovered:ta,hoverProps:ia}=ga({isDisabled:G}),h=ha({src:i,onError:ea,ignoreFallback:M})==="loaded",na=(!i||!h)&&X,v=p.useMemo(()=>{var c;return Ca({color:P,radius:F,size:$,isBordered:R,isDisabled:G,isInGroup:o,isInGridGroup:(c=r==null?void 0:r.isGrid)!=null?c:!1})},[P,F,$,R,G,o,r==null?void 0:r.isGrid]),E=U(d==null?void 0:d.base,aa),B=p.useMemo(()=>_||n==="button",[_,n]),da=p.useCallback((c={})=>m({ref:ra,tabIndex:B?0:-1,"data-hover":k(ta),"data-focus":k(oa),"data-focus-visible":k(la),className:v.base({class:U(E,c==null?void 0:c.className)})},q(V,ia,B?D:{})),[B,v,E,D,V]),ca=p.useCallback((c={})=>m({ref:A,src:i,"data-loaded":k(h),className:v.img({class:d==null?void 0:d.img})},q(z,c)),[v,h,z,i,A]);return{Component:sa,ImgComponent:Y,src:i,alt:I,icon:w,name:f,imgRef:A,slots:v,classNames:d,fallback:j,isImgLoaded:h,showFallback:na,ignoreFallback:M,getInitials:W,getAvatarProps:da,getImageProps:ca}}var K=va((a,e)=>{const{Component:s,ImgComponent:l,src:u,icon:x=t.jsx(ka,{}),alt:r,classNames:o,slots:n,name:g,showFallback:i,fallback:f,getInitials:w,getAvatarProps:d,getImageProps:j}=ja(y(m({},a),{ref:e})),I=p.useMemo(()=>!i&&u?null:f?t.jsx("div",{"aria-label":r,className:n.fallback({class:o==null?void 0:o.fallback}),role:"img",children:f}):g?t.jsx("span",{"aria-label":r,className:n.name({class:o==null?void 0:o.name}),role:"img",children:w(g)}):t.jsx("span",{"aria-label":r,className:n.icon({class:o==null?void 0:o.icon}),role:"img",children:x}),[i,u,f,g,o]);return t.jsxs(s,y(m({},d()),{children:[u&&t.jsx(l,y(m({},j()),{alt:r})),I]}))});K.displayName="NextUI.Avatar";var za=K;export{Ma as A,za as a,Ra as b,_a as s};
