var J=Object.defineProperty,K=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var k=(a,e,r)=>e in a?J(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r,m=(a,e)=>{for(var r in e||(e={}))P.call(e,r)&&k(a,r,e[r]);if(N)for(var r of N(e))S.call(e,r)&&k(a,r,e[r]);return a},g=(a,e)=>K(a,Z(e));var z=(a,e)=>{var r={};for(var t in a)P.call(a,t)&&e.indexOf(t)<0&&(r[t]=a[t]);if(a!=null&&N)for(var t of N(a))e.indexOf(t)<0&&S.call(a,t)&&(r[t]=a[t]);return r};import{t as q,m as G,u as Q,c as B,o as W,l as X,f as Y,j as v,ac as ee,H as o}from"./index-Dozeaj06.js";import{r as n,i as se}from"./react-DURm6eKk.js";import{T as ae}from"./index-NKZZvm9r.js";import{h as re,a as oe}from"./chunk-MCG5YV3A-gIN9frFk.js";import{c as s}from"./chunk-NXTXE2B3-CPhBnlzK.js";import{C as te}from"./chunk-M3MASYO7-BDmpLaIv.js";import{a as le}from"./chunk-XBMXQVV7-DJhewNMH.js";import"./iconify-CKIDWxGs.js";import"./format-DPNjUOCl.js";import"./index-C0_urITy.js";var O=q({slots:{base:["relative","max-w-fit","min-w-min","inline-flex","items-center","justify-between","box-border","whitespace-nowrap"],content:"flex-1 text-inherit font-normal",dot:["w-2","h-2","ml-1","rounded-full"],avatar:"flex-shrink-0",closeButton:["z-10","appearance-none","outline-none","select-none","transition-opacity","opacity-70","hover:opacity-100","cursor-pointer","active:opacity-disabled","tap-highlight-transparent"]},variants:{variant:{solid:{},bordered:{base:"border-medium bg-transparent"},light:{base:"bg-transparent"},flat:{},faded:{base:"border-medium"},shadow:{},dot:{base:"border-medium border-default text-foreground bg-transparent"}},color:{default:{dot:"bg-default-400"},primary:{dot:"bg-primary"},secondary:{dot:"bg-secondary"},success:{dot:"bg-success"},warning:{dot:"bg-warning"},danger:{dot:"bg-danger"}},size:{sm:{base:"px-1 h-6 text-tiny",content:"px-1",closeButton:"text-medium",avatar:"w-4 h-4"},md:{base:"px-1 h-7 text-small",content:"px-2",closeButton:"text-large",avatar:"w-5 h-5"},lg:{base:"px-2 h-8 text-medium",content:"px-2",closeButton:"text-xl",avatar:"w-6 h-6"}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"},full:{base:"rounded-full"}},isOneChar:{true:{},false:{}},isCloseable:{true:{},false:{}},hasStartContent:{true:{}},hasEndContent:{true:{}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},isCloseButtonFocusVisible:{true:{closeButton:[...re,"ring-1","rounded-full"]}}},defaultVariants:{variant:"solid",color:"default",size:"md",radius:"full",isDisabled:!1},compoundVariants:[{variant:"solid",color:"default",class:{base:s.solid.default}},{variant:"solid",color:"primary",class:{base:s.solid.primary}},{variant:"solid",color:"secondary",class:{base:s.solid.secondary}},{variant:"solid",color:"success",class:{base:s.solid.success}},{variant:"solid",color:"warning",class:{base:s.solid.warning}},{variant:"solid",color:"danger",class:{base:s.solid.danger}},{variant:"shadow",color:"default",class:{base:s.shadow.default}},{variant:"shadow",color:"primary",class:{base:s.shadow.primary}},{variant:"shadow",color:"secondary",class:{base:s.shadow.secondary}},{variant:"shadow",color:"success",class:{base:s.shadow.success}},{variant:"shadow",color:"warning",class:{base:s.shadow.warning}},{variant:"shadow",color:"danger",class:{base:s.shadow.danger}},{variant:"bordered",color:"default",class:{base:s.bordered.default}},{variant:"bordered",color:"primary",class:{base:s.bordered.primary}},{variant:"bordered",color:"secondary",class:{base:s.bordered.secondary}},{variant:"bordered",color:"success",class:{base:s.bordered.success}},{variant:"bordered",color:"warning",class:{base:s.bordered.warning}},{variant:"bordered",color:"danger",class:{base:s.bordered.danger}},{variant:"flat",color:"default",class:{base:s.flat.default}},{variant:"flat",color:"primary",class:{base:s.flat.primary}},{variant:"flat",color:"secondary",class:{base:s.flat.secondary}},{variant:"flat",color:"success",class:{base:s.flat.success}},{variant:"flat",color:"warning",class:{base:s.flat.warning}},{variant:"flat",color:"danger",class:{base:s.flat.danger}},{variant:"faded",color:"default",class:{base:s.faded.default}},{variant:"faded",color:"primary",class:{base:s.faded.primary}},{variant:"faded",color:"secondary",class:{base:s.faded.secondary}},{variant:"faded",color:"success",class:{base:s.faded.success}},{variant:"faded",color:"warning",class:{base:s.faded.warning}},{variant:"faded",color:"danger",class:{base:s.faded.danger}},{variant:"light",color:"default",class:{base:s.light.default}},{variant:"light",color:"primary",class:{base:s.light.primary}},{variant:"light",color:"secondary",class:{base:s.light.secondary}},{variant:"light",color:"success",class:{base:s.light.success}},{variant:"light",color:"warning",class:{base:s.light.warning}},{variant:"light",color:"danger",class:{base:s.light.danger}},{isOneChar:!0,hasStartContent:!1,hasEndContent:!1,size:"sm",class:{base:"w-5 h-5 min-w-unit-5 min-h-5"}},{isOneChar:!0,hasStartContent:!1,hasEndContent:!1,size:"md",class:{base:"w-6 h-6 min-w-unit-6 min-h-6"}},{isOneChar:!0,hasStartContent:!1,hasEndContent:!1,size:"lg",class:{base:"w-7 h-7 min-w-unit-7 min-h-7"}},{isOneChar:!0,isCloseable:!1,hasStartContent:!1,hasEndContent:!1,class:{base:"px-0 justify-center",content:"px-0 flex-none"}},{isOneChar:!0,isCloseable:!0,hasStartContent:!1,hasEndContent:!1,class:{base:"w-auto"}},{isOneChar:!0,variant:"dot",class:{base:"w-auto h-7 px-1 items-center",content:"px-2"}},{hasStartContent:!0,size:"sm",class:{content:"pl-0.5"}},{hasStartContent:!0,size:["md","lg"],class:{content:"pl-1"}},{hasEndContent:!0,size:"sm",class:{content:"pr-0.5"}},{hasEndContent:!0,size:["md","lg"],class:{content:"pr-1"}}]});function ne(a){const[e,r]=G(a,O.variantKeys),V=e,{ref:t,as:c,children:l,avatar:u,startContent:b,endContent:d,onClose:h,classNames:i,className:w}=V,y=z(V,["ref","as","children","avatar","startContent","endContent","onClose","classNames","className"]),C=c||"div",F=Q(t),$=B(i==null?void 0:i.base,w),p=!!h,I=a.variant==="dot",{focusProps:R,isFocusVisible:A}=W(),L=n.useMemo(()=>typeof l=="string"&&(l==null?void 0:l.length)===1,[l]),E=n.useMemo(()=>!!u||!!b,[u,b]),j=n.useMemo(()=>!!d||p,[d,p]),x=n.useMemo(()=>O(g(m({},r),{hasStartContent:E,hasEndContent:j,isOneChar:L,isCloseable:p,isCloseButtonFocusVisible:A})),[...Object.values(r),A,E,j,L,p]),{pressProps:U}=oe({isDisabled:!!(a!=null&&a.isDisabled),onPress:h}),T=()=>m({ref:F,className:x.base({class:$})},y),_=()=>m({role:"button",tabIndex:0,className:x.closeButton({class:i==null?void 0:i.closeButton})},X(U,R)),H=f=>n.isValidElement(f)?n.cloneElement(f,{className:x.avatar({class:i==null?void 0:i.avatar})}):null,D=f=>n.isValidElement(f)?n.cloneElement(f,{className:B("max-h-[80%]",f.props.className)}):null;return{Component:C,children:l,slots:x,classNames:i,isDot:I,isCloseable:p,startContent:H(u)||D(b),endContent:D(d),getCloseButtonProps:_,getChipProps:T}}var M=Y((a,e)=>{const{Component:r,children:t,slots:c,classNames:l,isDot:u,isCloseable:b,startContent:d,endContent:h,getCloseButtonProps:i,getChipProps:w}=ne(g(m({},a),{ref:e})),y=n.useMemo(()=>u&&!d?v.jsx("span",{className:c.dot({class:l==null?void 0:l.dot})}):d,[c,d,u]),C=n.useMemo(()=>b?v.jsx("span",g(m({},i()),{children:h||v.jsx(te,{})})):h,[h,b,i]);return v.jsxs(r,g(m({},w()),{children:[y,v.jsx("span",{className:c.content({class:l==null?void 0:l.content}),children:t}),C]}))});M.displayName="NextUI.Chip";var ie=M;function Ne(){var t;const{id:a}=se(),[e,r]=n.useState(void 0);return n.useEffect(()=>{ee(Number(a)||0).then(({playlist:c})=>{r(c)})},[]),o.jsxDEV("div",{className:"container mx-auto px-4 py-8",children:[o.jsxDEV("div",{className:"flex mb-8",children:[o.jsxDEV("div",{className:"flex-none w-72 h-72",children:o.jsxDEV("div",{className:"relative shadow-black/5 shadow-none rounded-large",children:[o.jsxDEV("img",{className:"relative z-10 shadow-black/5 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large",src:e==null?void 0:e.coverImgUrl,alt:"Playlist cover"},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/playlists/playlistDetail.tsx",lineNumber:24,columnNumber:13},this),o.jsxDEV("img",{className:"absolute z-0 inset-0 w-full h-full object-cover filter blur-lg scale-105 saturate-150 opacity-30 translate-y-1 rounded-large",src:e==null?void 0:e.coverImgUrl,alt:"Playlist cover"},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/playlists/playlistDetail.tsx",lineNumber:29,columnNumber:13},this)]},void 0,!0,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/playlists/playlistDetail.tsx",lineNumber:23,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/playlists/playlistDetail.tsx",lineNumber:22,columnNumber:9},this),o.jsxDEV("div",{className:"flex-grow ml-4 flex gap-3 flex-col",children:[o.jsxDEV("h1",{className:"text-xl font-bold mb-2",children:e==null?void 0:e.name},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/playlists/playlistDetail.tsx",lineNumber:37,columnNumber:11},this),o.jsxDEV("div",{className:"flex items-center mb-2 gap-2",children:(e==null?void 0:e.creator)&&o.jsxDEV(o.Fragment,{children:[o.jsxDEV(le,{src:e==null?void 0:e.creator.avatarUrl,alt:"用户头像"},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/playlists/playlistDetail.tsx",lineNumber:42,columnNumber:17},this),o.jsxDEV("span",{className:"text-sm",children:e==null?void 0:e.creator.nickname},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/playlists/playlistDetail.tsx",lineNumber:43,columnNumber:17},this)]},void 0,!0,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/playlists/playlistDetail.tsx",lineNumber:41,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/playlists/playlistDetail.tsx",lineNumber:39,columnNumber:11},this),(e==null?void 0:e.tags)&&(e==null?void 0:e.tags.length)>0&&o.jsxDEV("div",{className:"flex flex-wrap mb-2 gap-2",children:e==null?void 0:e.tags.map((c,l)=>o.jsxDEV(ie,{color:"secondary",variant:"shadow",children:c},l,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/playlists/playlistDetail.tsx",lineNumber:52,columnNumber:17},this))},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/playlists/playlistDetail.tsx",lineNumber:50,columnNumber:13},this),o.jsxDEV("p",{className:"text-small",children:e==null?void 0:e.description},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/playlists/playlistDetail.tsx",lineNumber:59,columnNumber:11},this),o.jsxDEV("div",{className:"text-sm mt-auto ",children:["创建时间:",new Date((t=e==null?void 0:e.createTime)!=null?t:0).toLocaleDateString()]},void 0,!0,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/playlists/playlistDetail.tsx",lineNumber:62,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/playlists/playlistDetail.tsx",lineNumber:36,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/playlists/playlistDetail.tsx",lineNumber:21,columnNumber:7},this),o.jsxDEV("div",{className:"song-list",children:[o.jsxDEV("h2",{className:"text-2xl font-semibold mb-4",children:"Songs"},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/playlists/playlistDetail.tsx",lineNumber:69,columnNumber:9},this),o.jsxDEV(ae,{SongsData:e==null?void 0:e.tracks},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/playlists/playlistDetail.tsx",lineNumber:70,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/playlists/playlistDetail.tsx",lineNumber:68,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/playlists/playlistDetail.tsx",lineNumber:20,columnNumber:5},this)}export{Ne as default};
