var Y=Object.defineProperty;var v=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var w=(a,e,t)=>e in a?Y(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,f=(a,e)=>{for(var t in e||(e={}))k.call(e,t)&&w(a,t,e[t]);if(v)for(var t of v(e))M.call(e,t)&&w(a,t,e[t]);return a};import{g as j,r as N}from"./react-BcmoR6v_.js";import{u as V,p as B}from"./playmv-CZfMhOu7.js";function x(a,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const r in s)if(r!=="default"&&!(r in a)){const n=Object.getOwnPropertyDescriptor(s,r);n&&Object.defineProperty(a,r,n.get?n:{enumerable:!0,get:()=>s[r]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var K=Object.create,u=Object.defineProperty,F=Object.getOwnPropertyDescriptor,H=Object.getOwnPropertyNames,G=Object.getPrototypeOf,z=Object.prototype.hasOwnProperty,Q=(a,e,t)=>e in a?u(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,Z=(a,e)=>{for(var t in e)u(a,t,{get:e[t],enumerable:!0})},D=(a,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of H(e))!z.call(a,r)&&r!==t&&u(a,r,{get:()=>e[r],enumerable:!(s=F(e,r))||s.enumerable});return a},$=(a,e,t)=>(t=a!=null?K(G(a)):{},D(e||!a||!a.__esModule?u(t,"default",{value:a,enumerable:!0}):t,a)),J=a=>D(u({},"__esModule",{value:!0}),a),o=(a,e,t)=>(Q(a,typeof e!="symbol"?e+"":e,t),t),E={};Z(E,{default:()=>T});var A=J(E),b=$(N),p=V,C=B;const q="https://www.youtube.com/iframe_api",S="YT",W="onYouTubeIframeAPIReady",P=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,O=/user\/([a-zA-Z0-9_-]+)\/?/,X=/youtube-nocookie\.com/,ee="https://www.youtube-nocookie.com";class T extends b.Component{constructor(){super(...arguments),o(this,"callPlayer",p.callPlayer),o(this,"parsePlaylist",e=>{if(e instanceof Array)return{listType:"playlist",playlist:e.map(this.getID).join(",")};if(P.test(e)){const[,t]=e.match(P);return{listType:"playlist",list:t.replace(/^UC/,"UU")}}if(O.test(e)){const[,t]=e.match(O);return{listType:"user_uploads",list:t}}return{}}),o(this,"onStateChange",e=>{const{data:t}=e,{onPlay:s,onPause:r,onBuffer:n,onBufferEnd:_,onEnded:g,onReady:m,loop:y,config:{playerVars:l,onUnstarted:h}}=this.props,{UNSTARTED:d,PLAYING:c,PAUSED:i,BUFFERING:R,ENDED:U,CUED:I}=window[S].PlayerState;if(t===d&&h(),t===c&&(s(),_()),t===i&&r(),t===R&&n(),t===U){const L=!!this.callPlayer("getPlaylist");y&&!L&&(l.start?this.seekTo(l.start):this.play()),g()}t===I&&m()}),o(this,"mute",()=>{this.callPlayer("mute")}),o(this,"unmute",()=>{this.callPlayer("unMute")}),o(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(e){return!e||e instanceof Array||P.test(e)?null:e.match(C.MATCH_URL_YOUTUBE)[1]}load(e,t){const{playing:s,muted:r,playsinline:n,controls:_,loop:g,config:m,onError:y}=this.props,{playerVars:l,embedOptions:h}=m,d=this.getID(e);if(t){if(P.test(e)||O.test(e)||e instanceof Array){this.player.loadPlaylist(this.parsePlaylist(e));return}this.player.cueVideoById({videoId:d,startSeconds:(0,p.parseStartTime)(e)||l.start,endSeconds:(0,p.parseEndTime)(e)||l.end});return}(0,p.getSDK)(q,S,W,c=>c.loaded).then(c=>{this.container&&(this.player=new c.Player(this.container,f({width:"100%",height:"100%",videoId:d,playerVars:f(f({autoplay:s?1:0,mute:r?1:0,controls:_?1:0,start:(0,p.parseStartTime)(e),end:(0,p.parseEndTime)(e),origin:window.location.origin,playsinline:n?1:0},this.parsePlaylist(e)),l),events:{onReady:()=>{g&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:i=>this.props.onPlaybackRateChange(i.data),onPlaybackQualityChange:i=>this.props.onPlaybackQualityChange(i),onStateChange:this.onStateChange,onError:i=>y(i.data)},host:X.test(e)?ee:void 0},h)))},y),h.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(e,t=!1){this.callPlayer("seekTo",e),!t&&!this.props.playing&&this.pause()}setVolume(e){this.callPlayer("setVolume",e*100)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return b.default.createElement("div",{style:t},b.default.createElement("div",{ref:this.ref}))}}o(T,"displayName","YouTube");o(T,"canPlay",C.canPlay.youtube);const te=j(A),oe=x({__proto__:null,default:te},[A]);export{oe as Y};
