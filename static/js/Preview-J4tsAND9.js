var P=Object.defineProperty;var g=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var m=(r,e,t)=>e in r?P(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,l=(r,e)=>{for(var t in e||(e={}))O.call(e,t)&&m(r,t,e[t]);if(g)for(var t of g(e))x.call(e,t)&&m(r,t,e[t]);return r};import{g as I,r as j}from"./react-BcmoR6v_.js";function E(r,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in r)){const o=Object.getOwnPropertyDescriptor(n,a);o&&Object.defineProperty(r,a,o.get?o:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var S=Object.create,s=Object.defineProperty,C=Object.getOwnPropertyDescriptor,N=Object.getOwnPropertyNames,k=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty,M=(r,e,t)=>e in r?s(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,A=(r,e)=>{for(var t in e)s(r,t,{get:e[t],enumerable:!0})},b=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of N(e))!D.call(r,a)&&a!==t&&s(r,a,{get:()=>e[a],enumerable:!(n=C(e,a))||n.enumerable});return r},K=(r,e,t)=>(t=r!=null?S(k(r)):{},b(e||!r||!r.__esModule?s(t,"default",{value:r,enumerable:!0}):t,r)),$=r=>b(s({},"__esModule",{value:!0}),r),u=(r,e,t)=>(M(r,typeof e!="symbol"?e+"":e,t),t),y={};A(y,{default:()=>z});var v=$(y),i=K(j);const d="64px",f={};class z extends i.Component{constructor(){super(...arguments),u(this,"mounted",!1),u(this,"state",{image:null}),u(this,"handleKeyPress",e=>{(e.key==="Enter"||e.key===" ")&&this.props.onClick()})}componentDidMount(){this.mounted=!0,this.fetchImage(this.props)}componentDidUpdate(e){const{url:t,light:n}=this.props;(e.url!==t||e.light!==n)&&this.fetchImage(this.props)}componentWillUnmount(){this.mounted=!1}fetchImage({url:e,light:t,oEmbedUrl:n}){if(!i.default.isValidElement(t)){if(typeof t=="string"){this.setState({image:t});return}if(f[e]){this.setState({image:f[e]});return}return this.setState({image:null}),window.fetch(n.replace("{url}",e)).then(a=>a.json()).then(a=>{if(a.thumbnail_url&&this.mounted){const o=a.thumbnail_url.replace("height=100","height=480").replace("-d_295x166","-d_640");this.setState({image:o}),f[e]=o}})}}render(){const{light:e,onClick:t,playIcon:n,previewTabIndex:a,previewAriaLabel:o}=this.props,{image:h}=this.state,c=i.default.isValidElement(e),_={display:"flex",alignItems:"center",justifyContent:"center"},p={preview:l({width:"100%",height:"100%",backgroundImage:h&&!c?`url(${h})`:void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer"},_),shadow:l({background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:d,width:d,height:d,position:c?"absolute":void 0},_),playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},w=i.default.createElement("div",{style:p.shadow,className:"react-player__shadow"},i.default.createElement("div",{style:p.playIcon,className:"react-player__play-icon"}));return i.default.createElement("div",l({style:p.preview,className:"react-player__preview",onClick:t,tabIndex:a,onKeyPress:this.handleKeyPress},o?{"aria-label":o}:{}),c?e:null,n||w)}}const F=I(v),U=E({__proto__:null,default:F},[v]);export{U as P};
