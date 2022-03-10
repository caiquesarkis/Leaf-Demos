(()=>{"use strict";var t={183:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Box2d=void 0;const r=n(467);e.Box2d=class extends class{}{constructor(){super(),this.vertices=[new r.Vector2d(-1,1),new r.Vector2d(1,1),new r.Vector2d(1,-1),new r.Vector2d(-1,-1)]}}},659:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{constructor(){this.value="",this.color="#fff",this.size=30}}},578:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0});const r=n(467);e.default=class{constructor(){this.position=new r.Vector2d(0,0),this.angle=0,this.scale=1}translate(t,e){this.position.x+=t,this.position.y+=e}}},86:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0});const r=n(761);e.default=class{constructor(){this.id=(0,r.v4)(),this.components=[]}addComponent(t){this.components.push(t)}addComponents(t){let e=new Set([...this.components,...t]);this.components=[...e.values()]}}},467:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Vector2d=void 0,e.Vector2d=class{constructor(t,e){this.x=t,this.y=e}norm(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))}multiplyByScalar(t){this.x*=t,this.y*=t}}},691:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0});const r=n(342);e.default=class{constructor(t,e,n){this.name=t,this.time=0,this.deltaTime=1,this.entities={},this.components={},this.entityPools={},this.systems={},this.width=e,this.height=n,this.dom=document,this.dom.getElementById("leaf-container").innerHTML=`<canvas id="leaf-canvas" width=${e} height=${n}></canvas>`,this.canvas=this.dom.getElementById("leaf-canvas"),this.ctx=this.canvas.getContext("2d"),this.ctx.translate(e/2,n/2),this.ctx.scale(1,-1),this.backgroundColor="#000"}addCoreSystems(t){console.log("Initializing core systems"),t.map((t=>{this.systems[t.name]=t.callback}))}addEntity(t){let e=t.id;this.entities[e]=t,t.components.map((t=>{this.entityPools[t]||(this.entityPools[t]={}),this.entityPools[t][e]=new this.components[t]}))}addComponent(t,e){this.components[e]=t}get(t){return this.entityPools[t]}getEntityComponent(t,e){return this.entityPools[e][t]}addSystem(t,e){this.systems[e]=t}runSystemQeue(){for(let t in this.systems)this.systems[t](this)}tick(){console.log("Tick"),this.time+=this.deltaTime}run(){let t=performance.now();this.tick(),this.runSystemQeue();let e=(1e3*(performance.now()-t)).toFixed(2);this.fps=parseFloat(e),window.requestAnimationFrame((()=>this.run()))}start(){this.addCoreSystems([{callback:r.Renderer2d,name:"Rendered2d"}]),this.run()}}},342:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Renderer2d=void 0,e.Renderer2d=function(t){let e=t.get("Transform"),n=t.get("Box2d"),r=t.get("Text"),o=t.canvas,s=t.ctx;s.beginPath(),s.fillStyle=t.backgroundColor,s.fillRect(-o.width/2,-o.height/2,o.width,o.height),s.fill(),s.closePath();for(let t in e){let o=e[t],i=n[t],a=r[t];i&&(s.beginPath(),s.fillStyle="#ff0",i.vertices.map(((t,e)=>{let n=o.angle,r=Math.cos(n)*t.x*o.scale-Math.sin(n)*t.y*o.scale,i=Math.sin(n)*t.x*o.scale+Math.cos(n)*t.y*o.scale;0==e?s.moveTo(r,i):s.lineTo(r,i)})),s.fill(),s.closePath()),a&&(s.save(),s.scale(1,-1),s.font=`${a.size}px Arial`,s.fillStyle=a.color,s.fillText(a.value,o.position.x,o.position.y),s.restore())}}},215:(t,e,n)=>{e.z8=e.JH=e.xs=void 0;const r=n(691);e.xs=r.default;const o=n(86);e.JH=o.default;const s=n(578),i=n(183),a=n(659);let c={Transform:s.default,Geometry:{Box2d:i.Box2d},Text:a.default};e.z8=c},761:(t,e,n)=>{var r;n.r(e),n.d(e,{NIL:()=>_,parse:()=>m,stringify:()=>d,v1:()=>y,v3:()=>P,v4:()=>S,v5:()=>U,validate:()=>a,version:()=>E});var o=new Uint8Array(16);function s(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}const i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,a=function(t){return"string"==typeof t&&i.test(t)};for(var c=[],l=0;l<256;++l)c.push((l+256).toString(16).substr(1));const d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(c[t[e+0]]+c[t[e+1]]+c[t[e+2]]+c[t[e+3]]+"-"+c[t[e+4]]+c[t[e+5]]+"-"+c[t[e+6]]+c[t[e+7]]+"-"+c[t[e+8]]+c[t[e+9]]+"-"+c[t[e+10]]+c[t[e+11]]+c[t[e+12]]+c[t[e+13]]+c[t[e+14]]+c[t[e+15]]).toLowerCase();if(!a(n))throw TypeError("Stringified UUID is invalid");return n};var u,h,f=0,p=0;const y=function(t,e,n){var r=e&&n||0,o=e||new Array(16),i=(t=t||{}).node||u,a=void 0!==t.clockseq?t.clockseq:h;if(null==i||null==a){var c=t.random||(t.rng||s)();null==i&&(i=u=[1|c[0],c[1],c[2],c[3],c[4],c[5]]),null==a&&(a=h=16383&(c[6]<<8|c[7]))}var l=void 0!==t.msecs?t.msecs:Date.now(),y=void 0!==t.nsecs?t.nsecs:p+1,m=l-f+(y-p)/1e4;if(m<0&&void 0===t.clockseq&&(a=a+1&16383),(m<0||l>f)&&void 0===t.nsecs&&(y=0),y>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");f=l,p=y,h=a;var v=(1e4*(268435455&(l+=122192928e5))+y)%4294967296;o[r++]=v>>>24&255,o[r++]=v>>>16&255,o[r++]=v>>>8&255,o[r++]=255&v;var g=l/4294967296*1e4&268435455;o[r++]=g>>>8&255,o[r++]=255&g,o[r++]=g>>>24&15|16,o[r++]=g>>>16&255,o[r++]=a>>>8|128,o[r++]=255&a;for(var w=0;w<6;++w)o[r+w]=i[w];return e||d(o)},m=function(t){if(!a(t))throw TypeError("Invalid UUID");var e,n=new Uint8Array(16);return n[0]=(e=parseInt(t.slice(0,8),16))>>>24,n[1]=e>>>16&255,n[2]=e>>>8&255,n[3]=255&e,n[4]=(e=parseInt(t.slice(9,13),16))>>>8,n[5]=255&e,n[6]=(e=parseInt(t.slice(14,18),16))>>>8,n[7]=255&e,n[8]=(e=parseInt(t.slice(19,23),16))>>>8,n[9]=255&e,n[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,n[11]=e/4294967296&255,n[12]=e>>>24&255,n[13]=e>>>16&255,n[14]=e>>>8&255,n[15]=255&e,n};function v(t,e,n){function r(t,r,o,s){if("string"==typeof t&&(t=function(t){t=unescape(encodeURIComponent(t));for(var e=[],n=0;n<t.length;++n)e.push(t.charCodeAt(n));return e}(t)),"string"==typeof r&&(r=m(r)),16!==r.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var i=new Uint8Array(16+t.length);if(i.set(r),i.set(t,r.length),(i=n(i))[6]=15&i[6]|e,i[8]=63&i[8]|128,o){s=s||0;for(var a=0;a<16;++a)o[s+a]=i[a];return o}return d(i)}try{r.name=t}catch(t){}return r.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",r.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",r}function g(t){return 14+(t+64>>>9<<4)+1}function w(t,e){var n=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(n>>16)<<16|65535&n}function x(t,e,n,r,o,s){return w((i=w(w(e,t),w(r,s)))<<(a=o)|i>>>32-a,n);var i,a}function b(t,e,n,r,o,s,i){return x(e&n|~e&r,t,e,o,s,i)}function C(t,e,n,r,o,s,i){return x(e&r|n&~r,t,e,o,s,i)}function T(t,e,n,r,o,s,i){return x(e^n^r,t,e,o,s,i)}function M(t,e,n,r,o,s,i){return x(n^(e|~r),t,e,o,s,i)}const P=v("v3",48,(function(t){if("string"==typeof t){var e=unescape(encodeURIComponent(t));t=new Uint8Array(e.length);for(var n=0;n<e.length;++n)t[n]=e.charCodeAt(n)}return function(t){for(var e=[],n=32*t.length,r="0123456789abcdef",o=0;o<n;o+=8){var s=t[o>>5]>>>o%32&255,i=parseInt(r.charAt(s>>>4&15)+r.charAt(15&s),16);e.push(i)}return e}(function(t,e){t[e>>5]|=128<<e%32,t[g(e)-1]=e;for(var n=1732584193,r=-271733879,o=-1732584194,s=271733878,i=0;i<t.length;i+=16){var a=n,c=r,l=o,d=s;n=b(n,r,o,s,t[i],7,-680876936),s=b(s,n,r,o,t[i+1],12,-389564586),o=b(o,s,n,r,t[i+2],17,606105819),r=b(r,o,s,n,t[i+3],22,-1044525330),n=b(n,r,o,s,t[i+4],7,-176418897),s=b(s,n,r,o,t[i+5],12,1200080426),o=b(o,s,n,r,t[i+6],17,-1473231341),r=b(r,o,s,n,t[i+7],22,-45705983),n=b(n,r,o,s,t[i+8],7,1770035416),s=b(s,n,r,o,t[i+9],12,-1958414417),o=b(o,s,n,r,t[i+10],17,-42063),r=b(r,o,s,n,t[i+11],22,-1990404162),n=b(n,r,o,s,t[i+12],7,1804603682),s=b(s,n,r,o,t[i+13],12,-40341101),o=b(o,s,n,r,t[i+14],17,-1502002290),n=C(n,r=b(r,o,s,n,t[i+15],22,1236535329),o,s,t[i+1],5,-165796510),s=C(s,n,r,o,t[i+6],9,-1069501632),o=C(o,s,n,r,t[i+11],14,643717713),r=C(r,o,s,n,t[i],20,-373897302),n=C(n,r,o,s,t[i+5],5,-701558691),s=C(s,n,r,o,t[i+10],9,38016083),o=C(o,s,n,r,t[i+15],14,-660478335),r=C(r,o,s,n,t[i+4],20,-405537848),n=C(n,r,o,s,t[i+9],5,568446438),s=C(s,n,r,o,t[i+14],9,-1019803690),o=C(o,s,n,r,t[i+3],14,-187363961),r=C(r,o,s,n,t[i+8],20,1163531501),n=C(n,r,o,s,t[i+13],5,-1444681467),s=C(s,n,r,o,t[i+2],9,-51403784),o=C(o,s,n,r,t[i+7],14,1735328473),n=T(n,r=C(r,o,s,n,t[i+12],20,-1926607734),o,s,t[i+5],4,-378558),s=T(s,n,r,o,t[i+8],11,-2022574463),o=T(o,s,n,r,t[i+11],16,1839030562),r=T(r,o,s,n,t[i+14],23,-35309556),n=T(n,r,o,s,t[i+1],4,-1530992060),s=T(s,n,r,o,t[i+4],11,1272893353),o=T(o,s,n,r,t[i+7],16,-155497632),r=T(r,o,s,n,t[i+10],23,-1094730640),n=T(n,r,o,s,t[i+13],4,681279174),s=T(s,n,r,o,t[i],11,-358537222),o=T(o,s,n,r,t[i+3],16,-722521979),r=T(r,o,s,n,t[i+6],23,76029189),n=T(n,r,o,s,t[i+9],4,-640364487),s=T(s,n,r,o,t[i+12],11,-421815835),o=T(o,s,n,r,t[i+15],16,530742520),n=M(n,r=T(r,o,s,n,t[i+2],23,-995338651),o,s,t[i],6,-198630844),s=M(s,n,r,o,t[i+7],10,1126891415),o=M(o,s,n,r,t[i+14],15,-1416354905),r=M(r,o,s,n,t[i+5],21,-57434055),n=M(n,r,o,s,t[i+12],6,1700485571),s=M(s,n,r,o,t[i+3],10,-1894986606),o=M(o,s,n,r,t[i+10],15,-1051523),r=M(r,o,s,n,t[i+1],21,-2054922799),n=M(n,r,o,s,t[i+8],6,1873313359),s=M(s,n,r,o,t[i+15],10,-30611744),o=M(o,s,n,r,t[i+6],15,-1560198380),r=M(r,o,s,n,t[i+13],21,1309151649),n=M(n,r,o,s,t[i+4],6,-145523070),s=M(s,n,r,o,t[i+11],10,-1120210379),o=M(o,s,n,r,t[i+2],15,718787259),r=M(r,o,s,n,t[i+9],21,-343485551),n=w(n,a),r=w(r,c),o=w(o,l),s=w(s,d)}return[n,r,o,s]}(function(t){if(0===t.length)return[];for(var e=8*t.length,n=new Uint32Array(g(e)),r=0;r<e;r+=8)n[r>>5]|=(255&t[r/8])<<r%32;return n}(t),8*t.length))})),S=function(t,e,n){var r=(t=t||{}).random||(t.rng||s)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var o=0;o<16;++o)e[n+o]=r[o];return e}return d(r)};function I(t,e,n,r){switch(t){case 0:return e&n^~e&r;case 1:case 3:return e^n^r;case 2:return e&n^e&r^n&r}}function A(t,e){return t<<e|t>>>32-e}const U=v("v5",80,(function(t){var e=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){var r=unescape(encodeURIComponent(t));t=[];for(var o=0;o<r.length;++o)t.push(r.charCodeAt(o))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);for(var s=t.length/4+2,i=Math.ceil(s/16),a=new Array(i),c=0;c<i;++c){for(var l=new Uint32Array(16),d=0;d<16;++d)l[d]=t[64*c+4*d]<<24|t[64*c+4*d+1]<<16|t[64*c+4*d+2]<<8|t[64*c+4*d+3];a[c]=l}a[i-1][14]=8*(t.length-1)/Math.pow(2,32),a[i-1][14]=Math.floor(a[i-1][14]),a[i-1][15]=8*(t.length-1)&4294967295;for(var u=0;u<i;++u){for(var h=new Uint32Array(80),f=0;f<16;++f)h[f]=a[u][f];for(var p=16;p<80;++p)h[p]=A(h[p-3]^h[p-8]^h[p-14]^h[p-16],1);for(var y=n[0],m=n[1],v=n[2],g=n[3],w=n[4],x=0;x<80;++x){var b=Math.floor(x/20),C=A(y,5)+I(b,m,v,g)+w+e[b]+h[x]>>>0;w=g,g=v,v=A(m,30)>>>0,m=y,y=C}n[0]=n[0]+y>>>0,n[1]=n[1]+m>>>0,n[2]=n[2]+v>>>0,n[3]=n[3]+g>>>0,n[4]=n[4]+w>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]})),_="00000000-0000-0000-0000-000000000000",E=function(t){if(!a(t))throw TypeError("Invalid UUID");return parseInt(t.substr(14,1),16)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,n),s.exports}n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t=n(467),e=n(215);let r=new e.xs("main",window.innerWidth,window.innerHeight);r.addComponent(e.z8.Transform,"Transform"),r.addComponent(e.z8.Geometry.Box2d,"Box2d"),r.addComponent(e.z8.Text,"Text");let o=new e.JH;o.addComponents(["Transform","Box2d"]);let s=new e.JH;s.addComponents(["Transform","Text"]),r.addEntity(s),r.addEntity(o),r.addSystem((t=>{let e=t.getEntityComponent(o.id,"Transform");e.scale=60,e.angle+=2*Math.PI/360}),"playerSpawn"),r.addSystem((e=>{let n=e.getEntityComponent(s.id,"Transform"),r=e.getEntityComponent(s.id,"Text");r.size=18,r.value=`Fps ${e.fps}`,n.position=new t.Vector2d(e.width/3,-e.height/2+30)}),"FpsDisplayer"),r.start(),console.log(r)})()})();