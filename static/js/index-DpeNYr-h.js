var j=Object.defineProperty,k=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var f=(e,r,o)=>r in e?j(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,p=(e,r)=>{for(var o in r||(r={}))x.call(r,o)&&f(e,o,r[o]);if(a)for(var o of a(r))N.call(r,o)&&f(e,o,r[o]);return e},b=(e,r)=>k(e,E(r));var h=(e,r)=>{var o={};for(var i in e)x.call(e,i)&&r.indexOf(i)<0&&(o[i]=e[i]);if(e!=null&&a)for(var i of a(e))r.indexOf(i)<0&&N.call(e,i)&&(o[i]=e[i]);return o};import{f as D,u as V,c as y,j as S,ab as v,H as s}from"./index-Dozeaj06.js";import{d as _,r as u}from"./react-DURm6eKk.js";import{I as C}from"./iconify-CKIDWxGs.js";import{T as R}from"./index-NKZZvm9r.js";import{u as z,c as F}from"./chunk-BJUMDPFJ-DpMegOn4.js";import{s as I}from"./chunk-4QI2XQ5W-BI_Bear9.js";import{i as M}from"./chunk-OFGZKCFR-Cc7pyy6O.js";import"./format-DPNjUOCl.js";import"./chunk-XBMXQVV7-DJhewNMH.js";import"./chunk-MCG5YV3A-gIN9frFk.js";import"./chunk-NXTXE2B3-CPhBnlzK.js";import"./index-C0_urITy.js";var A=D((e,r)=>{var o;const d=e,{as:i,className:n,children:m}=d,l=h(d,["as","className","children"]),L=i||"div",w=V(r),{slots:t,classNames:c}=z(),g=y(c==null?void 0:c.footer,n);return S.jsx(L,b(p({ref:w,className:(o=t.footer)==null?void 0:o.call(t,{class:g})},l),{children:m}))});A.displayName="NextUI.CardFooter";var P=A;const Y=()=>{const e=_(),[r,o]=u.useState([]),[i,n]=u.useState([]);return u.useEffect(()=>{v({kw:"境界的彼方"}).then(({result:m})=>{o(m.songs)}),v({kw:"境界的彼方",type:1e3}).then(({result:m})=>{n(m.playlists)})},[]),s.jsxDEV(s.Fragment,{children:[s.jsxDEV("div",{className:"bg-line",children:s.jsxDEV("div",{className:"flex justify-between w-full h-full relative items-center",children:[s.jsxDEV("div",{className:"flex-[60%] max-w-[60%] p-3 gap-1 flex-col md:flex hidden",children:[s.jsxDEV("h2",{className:"flex items-center gap-1 text-white",children:[s.jsxDEV(C,{icon:"icon-park-solid:vip-one"},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/music/index.tsx",lineNumber:33,columnNumber:15},void 0),"境界的彼方"]},void 0,!0,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/music/index.tsx",lineNumber:32,columnNumber:13},void 0),s.jsxDEV("p",{className:"text-sm text-ellipsis overflow-hidden text-white",children:"《境界的彼方》是由鸟居奈古梦著作、鸭居知世插画的轻小说，于2012年6月9日，由KAESUMA文库（京都动画）发行。小说曾获得第2回京都动画大赏（小说部门）奖励赏。 改编自小说的同名电视动画已于2013年10月至12月播出。"},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/music/index.tsx",lineNumber:36,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/music/index.tsx",lineNumber:31,columnNumber:11},void 0),s.jsxDEV("div",{className:"flex-[40%] max-w-[40%] h-full ",children:s.jsxDEV("img",{className:"absolute w-[420px] bottom-0 right-0",src:"src/assets/danceMk.png",alt:"Playlist cover"},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/music/index.tsx",lineNumber:42,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/music/index.tsx",lineNumber:41,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/music/index.tsx",lineNumber:30,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/music/index.tsx",lineNumber:28,columnNumber:7},void 0),s.jsxDEV(I,{orientation:"horizontal",children:s.jsxDEV("div",{className:"flex gap-4 my-5",children:i.map((m,l)=>s.jsxDEV("div",{className:"min-w-max inline-block my-2",onClick:()=>e(`/playlistDetail/${m.id}`),children:s.jsxDEV(F,{isFooterBlurred:!0,className:"w-full h-[200px] col-span-12 sm:col-span-5",children:[s.jsxDEV(M,{removeWrapper:!0,src:m.coverImgUrl+"?param=350y350",alt:m.name,className:"z-0 w-full h-full scale-125 -translate-y-6 object-cover"},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/music/index.tsx",lineNumber:56,columnNumber:17},void 0),s.jsxDEV(P,{className:"absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between",children:s.jsxDEV("p",{className:"text-black text-tiny text-center truncate w-full",children:m.name},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/music/index.tsx",lineNumber:63,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/music/index.tsx",lineNumber:62,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/music/index.tsx",lineNumber:55,columnNumber:15},void 0)},l,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/music/index.tsx",lineNumber:50,columnNumber:13},void 0))},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/music/index.tsx",lineNumber:48,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/music/index.tsx",lineNumber:47,columnNumber:7},void 0),s.jsxDEV(R,{className:"mt-3",SongsData:r},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/music/index.tsx",lineNumber:71,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/music/index.tsx",lineNumber:27,columnNumber:5},void 0)};export{Y as default};
