function i(n){const t=Math.floor(n/1e3),s=Math.floor(t/3600),r=Math.floor((t-s*3600)/60),e=t%60;return[s,r,e].map(o=>o<10?`0${o}`:o.toString()).filter((o,c)=>o!=="00"||c>0).join(":")}export{i as f};
