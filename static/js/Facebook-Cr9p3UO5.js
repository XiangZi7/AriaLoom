var m=Object.defineProperty;var u=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var c=(r,e,t)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,f=(r,e)=>{for(var t in e||(e={}))v.call(e,t)&&c(r,t,e[t]);if(u)for(var t of u(e))O.call(e,t)&&c(r,t,e[t]);return r};import{g as D,r as E}from"./react-D4tTB2PF.js";import{u as S,p as j}from"./playmv-Chwjoron.js";function I(r,e){for(var t=0;t<e.length;t++){const a=e[t];if(typeof a!="string"&&!Array.isArray(a)){for(const s in a)if(s!=="default"&&!(s in r)){const p=Object.getOwnPropertyDescriptor(a,s);p&&Object.defineProperty(r,s,p.get?p:{enumerable:!0,get:()=>a[s]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var k=Object.create,i=Object.defineProperty,w=Object.getOwnPropertyDescriptor,F=Object.getOwnPropertyNames,x=Object.getPrototypeOf,L=Object.prototype.hasOwnProperty,M=(r,e,t)=>e in r?i(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,A=(r,e)=>{for(var t in e)i(r,t,{get:e[t],enumerable:!0})},_=(r,e,t,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of F(e))!L.call(r,s)&&s!==t&&i(r,s,{get:()=>e[s],enumerable:!(a=w(e,s))||a.enumerable});return r},B=(r,e,t)=>(t=r!=null?k(x(r)):{},_(e||!r||!r.__esModule?i(t,"default",{value:r,enumerable:!0}):t,r)),N=r=>_(i({},"__esModule",{value:!0}),r),o=(r,e,t)=>(M(r,typeof e!="symbol"?e+"":e,t),t),g={};A(g,{default:()=>l});var P=N(g),y=B(E),n=S,C=j;const h="https://connect.facebook.net/en_US/sdk.js",b="FB",d="fbAsyncInit",K="facebook-player-";class l extends y.Component{constructor(){super(...arguments),o(this,"callPlayer",n.callPlayer),o(this,"playerID",this.props.config.playerId||`${K}${(0,n.randomString)()}`),o(this,"mute",()=>{this.callPlayer("mute")}),o(this,"unmute",()=>{this.callPlayer("unmute")})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){if(t){(0,n.getSDK)(h,b,d).then(a=>a.XFBML.parse());return}(0,n.getSDK)(h,b,d).then(a=>{a.init({appId:this.props.config.appId,xfbml:!0,version:this.props.config.version}),a.Event.subscribe("xfbml.render",s=>{this.props.onLoaded()}),a.Event.subscribe("xfbml.ready",s=>{s.type==="video"&&s.id===this.playerID&&(this.player=s.instance,this.player.subscribe("startedPlaying",this.props.onPlay),this.player.subscribe("paused",this.props.onPause),this.player.subscribe("finishedPlaying",this.props.onEnded),this.player.subscribe("startedBuffering",this.props.onBuffer),this.player.subscribe("finishedBuffering",this.props.onBufferEnd),this.player.subscribe("error",this.props.onError),this.props.muted?this.callPlayer("mute"):this.callPlayer("unmute"),this.props.onReady(),document.getElementById(this.playerID).querySelector("iframe").style.visibility="visible")})})}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentPosition")}getSecondsLoaded(){return null}render(){const{attributes:e}=this.props.config,t={width:"100%",height:"100%"};return y.default.createElement("div",f({style:t,id:this.playerID,className:"fb-video","data-href":this.props.url,"data-autoplay":this.props.playing?"true":"false","data-allowfullscreen":"true","data-controls":this.props.controls?"true":"false"},e))}}o(l,"displayName","Facebook");o(l,"canPlay",C.canPlay.facebook);o(l,"loopOnEnded",!0);const R=D(P),U=I({__proto__:null,default:R},[P]);export{U as F};