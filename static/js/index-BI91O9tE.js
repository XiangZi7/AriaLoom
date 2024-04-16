var H=Object.defineProperty,K=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var E=(e,s,r)=>s in e?H(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,t=(e,s)=>{for(var r in s||(s={}))M.call(s,r)&&E(e,r,s[r]);if(v)for(var r of v(s))P.call(s,r)&&E(e,r,s[r]);return e},x=(e,s)=>K(e,T(s));var I=(e,s)=>{var r={};for(var l in e)M.call(e,l)&&s.indexOf(l)<0&&(r[l]=e[l]);if(e!=null&&v)for(var l of v(e))s.indexOf(l)<0&&P.call(e,l)&&(r[l]=e[l]);return r};import{t as U,m as q,u as F,a as J,aB as Q,aW as Y,aX as Z,x as S,p as $,f as ee,j as m,O as n,G as ae,P as se}from"./index-EZ9xYJxZ.js";import{r as b}from"./react-D4tTB2PF.js";var z=U({slots:{base:"flex flex-col gap-2 w-full",label:"",labelWrapper:"flex justify-between",value:"",track:"z-0 relative bg-default-300/50 overflow-hidden",indicator:"h-full"},variants:{color:{default:{indicator:"bg-default-400"},primary:{indicator:"bg-primary"},secondary:{indicator:"bg-secondary"},success:{indicator:"bg-success"},warning:{indicator:"bg-warning"},danger:{indicator:"bg-danger"}},size:{sm:{label:"text-small",value:"text-small",track:"h-1"},md:{label:"text-medium",value:"text-medium",track:"h-3"},lg:{label:"text-large",value:"text-large",track:"h-5"}},radius:{none:{track:"rounded-none",indicator:"rounded-none"},sm:{track:"rounded-small",indicator:"rounded-small"},md:{track:"rounded-medium",indicator:"rounded-medium"},lg:{track:"rounded-large",indicator:"rounded-large"},full:{track:"rounded-full",indicator:"rounded-full"}},isStriped:{true:{indicator:"bg-stripe-gradient bg-[length:1.25rem_1.25rem]"}},isIndeterminate:{true:{indicator:["absolute","w-full","origin-left","animate-indeterminate-bar"]}},isDisabled:{true:{base:"opacity-disabled cursor-not-allowed"}},disableAnimation:{true:{},false:{indicator:"transition-transform !duration-500"}}},defaultVariants:{color:"primary",size:"md",radius:"full",isStriped:!1,isIndeterminate:!1,isDisabled:!1,disableAnimation:!1},compoundVariants:[{disableAnimation:!0,isIndeterminate:!1,class:{indicator:"!transition-none motion-reduce:transition-none"}}]},{twMerge:!1});function re(e){const[s,r]=q(e,z.variantKeys),V=s,{ref:l,as:a,id:i,className:d,classNames:o,label:g,valueLabel:N,value:u=0,minValue:c=0,maxValue:w=100,showValueLabel:C=!1,formatOptions:O={style:"percent"}}=V,k=I(V,["ref","as","id","className","classNames","label","valueLabel","value","minValue","maxValue","showValueLabel","formatOptions"]),R=a||"div",h=F(l),A=J(o==null?void 0:o.base,d),[,W]=Q({rerender:!0,delay:100}),f=e.isIndeterminate,{progressBarProps:j,labelProps:y}=Y({id:i,label:g,value:u,minValue:c,maxValue:w,valueLabel:N,formatOptions:O,isIndeterminate:f,"aria-labelledby":e["aria-labelledby"],"aria-label":e["aria-label"]}),p=b.useMemo(()=>z(t({},r)),[...Object.values(r)]),D=e.disableAnimation?!0:W,_=b.useMemo(()=>f||!D?void 0:Z((u-c)/(w-c)*100),[D,f,u,c,w]),X=b.useCallback((L={})=>t({ref:h,"data-indeterminate":S(f),"data-disabled":S(e.isDisabled),className:p.base({class:A})},$(j,k,L)),[h,p,f,e.isDisabled,A,j,k]),G=b.useCallback((L={})=>t({className:p.label({class:o==null?void 0:o.label})},$(y,L)),[p,o,y]);return{Component:R,domRef:h,slots:p,classNames:o,label:g,percentage:_,showValueLabel:C,getProgressBarProps:X,getLabelProps:G}}var B=ee((e,s)=>{const{Component:r,slots:l,classNames:a,label:i,percentage:d,showValueLabel:o,getProgressBarProps:g,getLabelProps:N}=re(x(t({},e),{ref:s})),u=g(),c=i||o;return m.jsxs(r,x(t({},u),{children:[c?m.jsxs("div",{className:l.labelWrapper({class:a==null?void 0:a.labelWrapper}),children:[i&&m.jsx("span",x(t({},N()),{children:i})),o&&m.jsx("span",{className:l.value({class:a==null?void 0:a.value}),children:u["aria-valuetext"]})]}):null,m.jsx("div",{className:l.track({class:a==null?void 0:a.track}),children:m.jsx("div",{className:l.indicator({class:a==null?void 0:a.indicator}),style:{transform:`translateX(-${100-(d||0)}%)`}})})]}))});B.displayName="NextUI.Progress";var le=B;const ie=()=>{const[e,s]=b.useState([{id:1,name:"Music Title 1",type:"mp3",size:"3.2MB",status:"download"}]),[r]=b.useState(50),l=(a,i)=>{s(e.map(d=>d.id===a?x(t({},d),{status:i}):d))};return n.jsxDEV("div",{className:"p-4 flex flex-col ",children:e.map(a=>n.jsxDEV("div",{className:"shadow bg-default-400/20 dark:bg-default-500/30 rounded-2xl w-full py-4 px-8 mb-4 flex items-center justify-between",children:[n.jsxDEV("img",{src:"https://via.placeholder.com/60",alt:"Music Icon",className:"w-12 h-12 object-cover"},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/download/index.tsx",lineNumber:34,columnNumber:11},void 0),n.jsxDEV("div",{className:"flex flex-col ml-4 mr-auto",children:[n.jsxDEV("p",{className:"text-lg font-semibold",children:[a.name,".",a.type]},void 0,!0,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/download/index.tsx",lineNumber:40,columnNumber:13},void 0),a.status==="completed"?n.jsxDEV("p",{className:"text-gray-600",children:a.size},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/download/index.tsx",lineNumber:44,columnNumber:15},void 0):n.jsxDEV(le,{isStriped:!0,"aria-label":"Downloading...",size:"md",value:r,label:"Lose weight",color:"success",showValueLabel:!0,className:"max-w-md"},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/download/index.tsx",lineNumber:46,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/download/index.tsx",lineNumber:39,columnNumber:11},void 0),n.jsxDEV(ae,{isIconOnly:!0,className:"data-[hover]:bg-foreground/10",radius:"full",variant:"light",onClick:()=>l(a.id,a.status==="download"?"pause":"completed"),children:n.jsxDEV(se,{icon:a.status==="download"?"ic:round-pause-circle":a.status==="pause"?"tabler:arrow-bar-to-down":a.status==="completed"?"teenyicons:tick-circle-outline":"",className:"text-2xl"},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/download/index.tsx",lineNumber:70,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/download/index.tsx",lineNumber:58,columnNumber:11},void 0)]},a.id,!0,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/download/index.tsx",lineNumber:30,columnNumber:9},void 0))},void 0,!1,{fileName:"/home/runner/work/AriaLoom/AriaLoom/src/pages/download/index.tsx",lineNumber:28,columnNumber:5},void 0)};export{ie as default};