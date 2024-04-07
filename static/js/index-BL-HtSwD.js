import{H as e}from"./index-DS7n0a4g.js";import{r as a}from"./react-BcmoR6v_.js";import{I as N}from"./iconify-L0yf5jZS.js";import{a as L}from"./chunk-XBMXQVV7-BXYxI_bv.js";import{b}from"./chunk-NXTXE2B3-Dt0iKyNT.js";function w(o,{threshold:n=.1,root:l=null,rootMargin:m="0px",pageSize:c,initialPageNum:r=1},h){const[d,v]=a.useState(r);return a.useEffect(()=>{if(!o.current)return;const t=new Map,u=new IntersectionObserver(i=>{i.forEach(s=>{const x=s.target;s.isIntersecting&&t.get(x)&&(h(d,c),v(A=>A+1),u.unobserve(x))})},{threshold:n,root:l,rootMargin:m}),f=Array.isArray(o.current)?o.current:[o.current],p=f.length-1;return f.forEach((i,s)=>{i&&(u.observe(i),t.set(i,s===p))}),()=>{u.disconnect(),t.clear()}},[o]),{pageNum:d}}const E=Array.from({length:20},(o,n)=>({id:n,title:`Song ${n+1+Math.random()*1e9}`,artist:`歌手${n+1}`,artistImageUrl:"/path/to/image1.jpg",album:`专辑${n+1}`,duration:"3:45"})),V=({className:o})=>{const[n]=a.useState(E),[l]=a.useState(!1),m=a.useRef(null);return w(m,{initialPageNum:1,pageSize:10,threshold:.1},r=>{}),e.jsxDEV("div",{className:`flex ${o}`,children:e.jsxDEV("div",{className:"flex flex-col flex-1 ",children:[e.jsxDEV("ul",{className:"w-full ",children:n.map(r=>e.jsxDEV("li",{ref:m,className:"hover:bg-default-400/20 hover:dark:bg-default-500/30 hover:opacity-80 p-2 mb-2 rounded-xl  flex items-center gap-2 transition-all duration-300 ease-in-out",children:[e.jsxDEV("div",{className:"flex-none w-10 h-10",children:e.jsxDEV(L,{src:r.artistImageUrl,alt:r.artist,radius:"sm",className:"w-full h-full"},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/components/TablePro/index.tsx",lineNumber:52,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/components/TablePro/index.tsx",lineNumber:51,columnNumber:15},void 0),e.jsxDEV("div",{className:"flex flex-col justify-center flex-1 min-w-0",children:[e.jsxDEV("div",{className:"truncate text-small",children:r.title},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/components/TablePro/index.tsx",lineNumber:57,columnNumber:17},void 0),e.jsxDEV("div",{className:"truncate text-sm text-gray-500 text-small",children:r.artist},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/components/TablePro/index.tsx",lineNumber:58,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/components/TablePro/index.tsx",lineNumber:55,columnNumber:15},void 0),e.jsxDEV("div",{className:"w-48 truncate text-small",children:r.album},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/components/TablePro/index.tsx",lineNumber:61,columnNumber:15},void 0),e.jsxDEV("div",{className:"flex-none w-30 text-small",children:r.duration},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/components/TablePro/index.tsx",lineNumber:62,columnNumber:15},void 0),e.jsxDEV("div",{className:"w-40 justify-end w-full flex",children:[e.jsxDEV(b,{isIconOnly:!0,className:"data-[hover]:bg-foreground/10",radius:"full",variant:"light",children:e.jsxDEV(N,{icon:"material-symbols:play-circle-outline",className:"text-2xl"},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/components/TablePro/index.tsx",lineNumber:65,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/components/TablePro/index.tsx",lineNumber:64,columnNumber:17},void 0),e.jsxDEV(b,{isIconOnly:!0,className:"data-[hover]:bg-foreground/10",radius:"full",variant:"light",children:e.jsxDEV(N,{icon:"ph:film-strip",className:"text-2xl"},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/components/TablePro/index.tsx",lineNumber:68,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/components/TablePro/index.tsx",lineNumber:67,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/components/TablePro/index.tsx",lineNumber:63,columnNumber:15},void 0)]},r.id,!0,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/components/TablePro/index.tsx",lineNumber:46,columnNumber:13},void 0))},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/components/TablePro/index.tsx",lineNumber:44,columnNumber:9},void 0),e.jsxDEV("div",{className:"m-5",children:l?e.jsxDEV("div",{children:"加载中..."},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/components/TablePro/index.tsx",lineNumber:74,columnNumber:41},void 0):e.jsxDEV("button",{className:"btn",children:"加载更多"},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/components/TablePro/index.tsx",lineNumber:74,columnNumber:61},void 0)},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/components/TablePro/index.tsx",lineNumber:74,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/components/TablePro/index.tsx",lineNumber:43,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/components/TablePro/index.tsx",lineNumber:42,columnNumber:5},void 0)};export{V as T};
