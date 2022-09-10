import{a as fe,r as Et}from"./use.7750d99d.js";function Rt(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ge={exports:{}},pe={exports:{}},Ke=function(e,t){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return e.apply(t,n)}},xt=Ke,ve=Object.prototype.toString,me=function(r){return function(e){var t=ve.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function A(r){return r=r.toLowerCase(),function(t){return me(t)===r}}function we(r){return Array.isArray(r)}function M(r){return typeof r>"u"}function Ot(r){return r!==null&&!M(r)&&r.constructor!==null&&!M(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}var Ye=A("ArrayBuffer");function bt(r){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&Ye(r.buffer),e}function At(r){return typeof r=="string"}function St(r){return typeof r=="number"}function Ze(r){return r!==null&&typeof r=="object"}function H(r){if(me(r)!=="object")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}var $t=A("Date"),Tt=A("File"),kt=A("Blob"),Ct=A("FileList");function _e(r){return ve.call(r)==="[object Function]"}function Pt(r){return Ze(r)&&_e(r.pipe)}function qt(r){var e="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||ve.call(r)===e||_e(r.toString)&&r.toString()===e)}var Ut=A("URLSearchParams");function Nt(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function Dt(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function ye(r,e){if(!(r===null||typeof r>"u"))if(typeof r!="object"&&(r=[r]),we(r))for(var t=0,s=r.length;t<s;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function ce(){var r={};function e(n,a){H(r[a])&&H(n)?r[a]=ce(r[a],n):H(n)?r[a]=ce({},n):we(n)?r[a]=n.slice():r[a]=n}for(var t=0,s=arguments.length;t<s;t++)ye(arguments[t],e);return r}function Bt(r,e,t){return ye(e,function(n,a){t&&typeof n=="function"?r[a]=xt(n,t):r[a]=n}),r}function It(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}function Lt(r,e,t,s){r.prototype=Object.create(e.prototype,s),r.prototype.constructor=r,t&&Object.assign(r.prototype,t)}function Ft(r,e,t){var s,n,a,i={};e=e||{};do{for(s=Object.getOwnPropertyNames(r),n=s.length;n-- >0;)a=s[n],i[a]||(e[a]=r[a],i[a]=!0);r=Object.getPrototypeOf(r)}while(r&&(!t||t(r,e))&&r!==Object.prototype);return e}function Ht(r,e,t){r=String(r),(t===void 0||t>r.length)&&(t=r.length),t-=e.length;var s=r.indexOf(e,t);return s!==-1&&s===t}function jt(r){if(!r)return null;var e=r.length;if(M(e))return null;for(var t=new Array(e);e-- >0;)t[e]=r[e];return t}var Mt=function(r){return function(e){return r&&e instanceof r}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),w={isArray:we,isArrayBuffer:Ye,isBuffer:Ot,isFormData:qt,isArrayBufferView:bt,isString:At,isNumber:St,isObject:Ze,isPlainObject:H,isUndefined:M,isDate:$t,isFile:Tt,isBlob:kt,isFunction:_e,isStream:Pt,isURLSearchParams:Ut,isStandardBrowserEnv:Dt,forEach:ye,merge:ce,extend:Bt,trim:Nt,stripBOM:It,inherits:Lt,toFlatObject:Ft,kindOf:me,kindOfTest:A,endsWith:Ht,toArray:jt,isTypedArray:Mt,isFileList:Ct},C=w;function be(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var et=function(e,t,s){if(!t)return e;var n;if(s)n=s(t);else if(C.isURLSearchParams(t))n=t.toString();else{var a=[];C.forEach(t,function(l,f){l===null||typeof l>"u"||(C.isArray(l)?f=f+"[]":l=[l],C.forEach(l,function(d){C.isDate(d)?d=d.toISOString():C.isObject(d)&&(d=JSON.stringify(d)),a.push(be(f)+"="+be(d))}))}),n=a.join("&")}if(n){var i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},Wt=w;function W(){this.handlers=[]}W.prototype.use=function(e,t,s){return this.handlers.push({fulfilled:e,rejected:t,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1};W.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};W.prototype.forEach=function(e){Wt.forEach(this.handlers,function(s){s!==null&&e(s)})};var Jt=W,zt=w,Vt=function(e,t){zt.forEach(e,function(n,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[a])})},tt=w;function q(r,e,t,s,n){Error.call(this),this.message=r,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),s&&(this.request=s),n&&(this.response=n)}tt.inherits(q,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var rt=q.prototype,st={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(r){st[r]={value:r}});Object.defineProperties(q,st);Object.defineProperty(rt,"isAxiosError",{value:!0});q.from=function(r,e,t,s,n,a){var i=Object.create(rt);return tt.toFlatObject(r,i,function(l){return l!==Error.prototype}),q.call(i,r.message,e,t,s,n),i.name=r.name,a&&Object.assign(i,a),i};var N=q,nt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},R=w;function Xt(r,e){e=e||new FormData;var t=[];function s(a){return a===null?"":R.isDate(a)?a.toISOString():R.isArrayBuffer(a)||R.isTypedArray(a)?typeof Blob=="function"?new Blob([a]):Buffer.from(a):a}function n(a,i){if(R.isPlainObject(a)||R.isArray(a)){if(t.indexOf(a)!==-1)throw Error("Circular reference detected in "+i);t.push(a),R.forEach(a,function(l,f){if(!R.isUndefined(l)){var h=i?i+"."+f:f,d;if(l&&!i&&typeof l=="object"){if(R.endsWith(f,"{}"))l=JSON.stringify(l);else if(R.endsWith(f,"[]")&&(d=R.toArray(l))){d.forEach(function(u){!R.isUndefined(u)&&e.append(h,s(u))});return}}n(l,h)}}),t.pop()}else e.append(i,s(a))}return n(r),e}var at=Xt,K,Ae;function Qt(){if(Ae)return K;Ae=1;var r=N;return K=function(t,s,n){var a=n.config.validateStatus;!n.status||!a||a(n.status)?t(n):s(new r("Request failed with status code "+n.status,[r.ERR_BAD_REQUEST,r.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},K}var Y,Se;function Gt(){if(Se)return Y;Se=1;var r=w;return Y=r.isStandardBrowserEnv()?function(){return{write:function(s,n,a,i,o,l){var f=[];f.push(s+"="+encodeURIComponent(n)),r.isNumber(a)&&f.push("expires="+new Date(a).toGMTString()),r.isString(i)&&f.push("path="+i),r.isString(o)&&f.push("domain="+o),l===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(s){var n=document.cookie.match(new RegExp("(^|;\\s*)("+s+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(s){this.write(s,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Y}var Kt=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},Yt=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},Zt=Kt,er=Yt,it=function(e,t){return e&&!Zt(t)?er(e,t):t},Z,$e;function tr(){if($e)return Z;$e=1;var r=w,e=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return Z=function(s){var n={},a,i,o;return s&&r.forEach(s.split(`
`),function(f){if(o=f.indexOf(":"),a=r.trim(f.substr(0,o)).toLowerCase(),i=r.trim(f.substr(o+1)),a){if(n[a]&&e.indexOf(a)>=0)return;a==="set-cookie"?n[a]=(n[a]?n[a]:[]).concat([i]):n[a]=n[a]?n[a]+", "+i:i}}),n},Z}var ee,Te;function rr(){if(Te)return ee;Te=1;var r=w;return ee=r.isStandardBrowserEnv()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),s=document.createElement("a"),n;function a(i){var o=i;return t&&(s.setAttribute("href",o),o=s.href),s.setAttribute("href",o),{href:s.href,protocol:s.protocol?s.protocol.replace(/:$/,""):"",host:s.host,search:s.search?s.search.replace(/^\?/,""):"",hash:s.hash?s.hash.replace(/^#/,""):"",hostname:s.hostname,port:s.port,pathname:s.pathname.charAt(0)==="/"?s.pathname:"/"+s.pathname}}return n=a(window.location.href),function(o){var l=r.isString(o)?a(o):o;return l.protocol===n.protocol&&l.host===n.host}}():function(){return function(){return!0}}(),ee}var te,ke;function J(){if(ke)return te;ke=1;var r=N,e=w;function t(s){r.call(this,s==null?"canceled":s,r.ERR_CANCELED),this.name="CanceledError"}return e.inherits(t,r,{__CANCEL__:!0}),te=t,te}var re,Ce;function sr(){return Ce||(Ce=1,re=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}),re}var se,Pe;function qe(){if(Pe)return se;Pe=1;var r=w,e=Qt(),t=Gt(),s=et,n=it,a=tr(),i=rr(),o=nt,l=N,f=J(),h=sr();return se=function(u){return new Promise(function(S,$){var D=u.data,B=u.headers,I=u.responseType,T;function Re(){u.cancelToken&&u.cancelToken.unsubscribe(T),u.signal&&u.signal.removeEventListener("abort",T)}r.isFormData(D)&&r.isStandardBrowserEnv()&&delete B["Content-Type"];var c=new XMLHttpRequest;if(u.auth){var _t=u.auth.username||"",yt=u.auth.password?unescape(encodeURIComponent(u.auth.password)):"";B.Authorization="Basic "+btoa(_t+":"+yt)}var X=n(u.baseURL,u.url);c.open(u.method.toUpperCase(),s(X,u.params,u.paramsSerializer),!0),c.timeout=u.timeout;function xe(){if(!!c){var E="getAllResponseHeaders"in c?a(c.getAllResponseHeaders()):null,k=!I||I==="text"||I==="json"?c.responseText:c.response,b={data:k,status:c.status,statusText:c.statusText,headers:E,config:u,request:c};e(function(G){S(G),Re()},function(G){$(G),Re()},b),c=null}}if("onloadend"in c?c.onloadend=xe:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(xe)},c.onabort=function(){!c||($(new l("Request aborted",l.ECONNABORTED,u,c)),c=null)},c.onerror=function(){$(new l("Network Error",l.ERR_NETWORK,u,c,c)),c=null},c.ontimeout=function(){var k=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded",b=u.transitional||o;u.timeoutErrorMessage&&(k=u.timeoutErrorMessage),$(new l(k,b.clarifyTimeoutError?l.ETIMEDOUT:l.ECONNABORTED,u,c)),c=null},r.isStandardBrowserEnv()){var Oe=(u.withCredentials||i(X))&&u.xsrfCookieName?t.read(u.xsrfCookieName):void 0;Oe&&(B[u.xsrfHeaderName]=Oe)}"setRequestHeader"in c&&r.forEach(B,function(k,b){typeof D>"u"&&b.toLowerCase()==="content-type"?delete B[b]:c.setRequestHeader(b,k)}),r.isUndefined(u.withCredentials)||(c.withCredentials=!!u.withCredentials),I&&I!=="json"&&(c.responseType=u.responseType),typeof u.onDownloadProgress=="function"&&c.addEventListener("progress",u.onDownloadProgress),typeof u.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",u.onUploadProgress),(u.cancelToken||u.signal)&&(T=function(E){!c||($(!E||E&&E.type?new f:E),c.abort(),c=null)},u.cancelToken&&u.cancelToken.subscribe(T),u.signal&&(u.signal.aborted?T():u.signal.addEventListener("abort",T))),D||(D=null);var Q=h(X);if(Q&&["http","https","file"].indexOf(Q)===-1){$(new l("Unsupported protocol "+Q+":",l.ERR_BAD_REQUEST,u));return}c.send(D)})},se}var ne,Ue;function nr(){return Ue||(Ue=1,ne=null),ne}var v=w,Ne=Vt,De=N,ar=nt,ir=at,or={"Content-Type":"application/x-www-form-urlencoded"};function Be(r,e){!v.isUndefined(r)&&v.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function ur(){var r;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(r=qe()),r}function lr(r,e,t){if(v.isString(r))try{return(e||JSON.parse)(r),v.trim(r)}catch(s){if(s.name!=="SyntaxError")throw s}return(t||JSON.stringify)(r)}var z={transitional:ar,adapter:ur(),transformRequest:[function(e,t){if(Ne(t,"Accept"),Ne(t,"Content-Type"),v.isFormData(e)||v.isArrayBuffer(e)||v.isBuffer(e)||v.isStream(e)||v.isFile(e)||v.isBlob(e))return e;if(v.isArrayBufferView(e))return e.buffer;if(v.isURLSearchParams(e))return Be(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var s=v.isObject(e),n=t&&t["Content-Type"],a;if((a=v.isFileList(e))||s&&n==="multipart/form-data"){var i=this.env&&this.env.FormData;return ir(a?{"files[]":e}:e,i&&new i)}else if(s||n==="application/json")return Be(t,"application/json"),lr(e);return e}],transformResponse:[function(e){var t=this.transitional||z.transitional,s=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,a=!s&&this.responseType==="json";if(a||n&&v.isString(e)&&e.length)try{return JSON.parse(e)}catch(i){if(a)throw i.name==="SyntaxError"?De.from(i,De.ERR_BAD_RESPONSE,this,null,this.response):i}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:nr()},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};v.forEach(["delete","get","head"],function(e){z.headers[e]={}});v.forEach(["post","put","patch"],function(e){z.headers[e]=v.merge(or)});var ge=z,hr=w,dr=ge,cr=function(e,t,s){var n=this||dr;return hr.forEach(s,function(i){e=i.call(n,e,t)}),e},ae,Ie;function ot(){return Ie||(Ie=1,ae=function(e){return!!(e&&e.__CANCEL__)}),ae}var Le=w,ie=cr,fr=ot(),pr=ge,vr=J();function oe(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new vr}var mr=function(e){oe(e),e.headers=e.headers||{},e.data=ie.call(e,e.data,e.headers,e.transformRequest),e.headers=Le.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Le.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||pr.adapter;return t(e).then(function(n){return oe(e),n.data=ie.call(e,n.data,n.headers,e.transformResponse),n},function(n){return fr(n)||(oe(e),n&&n.response&&(n.response.data=ie.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},g=w,ut=function(e,t){t=t||{};var s={};function n(h,d){return g.isPlainObject(h)&&g.isPlainObject(d)?g.merge(h,d):g.isPlainObject(d)?g.merge({},d):g.isArray(d)?d.slice():d}function a(h){if(g.isUndefined(t[h])){if(!g.isUndefined(e[h]))return n(void 0,e[h])}else return n(e[h],t[h])}function i(h){if(!g.isUndefined(t[h]))return n(void 0,t[h])}function o(h){if(g.isUndefined(t[h])){if(!g.isUndefined(e[h]))return n(void 0,e[h])}else return n(void 0,t[h])}function l(h){if(h in t)return n(e[h],t[h]);if(h in e)return n(void 0,e[h])}var f={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l};return g.forEach(Object.keys(e).concat(Object.keys(t)),function(d){var u=f[d]||a,m=u(d);g.isUndefined(m)&&u!==l||(s[d]=m)}),s},ue,Fe;function lt(){return Fe||(Fe=1,ue={version:"0.27.2"}),ue}var wr=lt().version,O=N,Ee={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){Ee[r]=function(s){return typeof s===r||"a"+(e<1?"n ":" ")+r}});var He={};Ee.transitional=function(e,t,s){function n(a,i){return"[Axios v"+wr+"] Transitional option '"+a+"'"+i+(s?". "+s:"")}return function(a,i,o){if(e===!1)throw new O(n(i," has been removed"+(t?" in "+t:"")),O.ERR_DEPRECATED);return t&&!He[i]&&(He[i]=!0,console.warn(n(i," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(a,i,o):!0}};function _r(r,e,t){if(typeof r!="object")throw new O("options must be an object",O.ERR_BAD_OPTION_VALUE);for(var s=Object.keys(r),n=s.length;n-- >0;){var a=s[n],i=e[a];if(i){var o=r[a],l=o===void 0||i(o,a,r);if(l!==!0)throw new O("option "+a+" must be "+l,O.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new O("Unknown option "+a,O.ERR_BAD_OPTION)}}var yr={assertOptions:_r,validators:Ee},ht=w,gr=et,je=Jt,Me=mr,V=ut,Er=it,dt=yr,P=dt.validators;function U(r){this.defaults=r,this.interceptors={request:new je,response:new je}}U.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=V(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var s=t.transitional;s!==void 0&&dt.assertOptions(s,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1);var n=[],a=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(t)===!1||(a=a&&m.synchronous,n.unshift(m.fulfilled,m.rejected))});var i=[];this.interceptors.response.forEach(function(m){i.push(m.fulfilled,m.rejected)});var o;if(!a){var l=[Me,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(i),o=Promise.resolve(t);l.length;)o=o.then(l.shift(),l.shift());return o}for(var f=t;n.length;){var h=n.shift(),d=n.shift();try{f=h(f)}catch(u){d(u);break}}try{o=Me(f)}catch(u){return Promise.reject(u)}for(;i.length;)o=o.then(i.shift(),i.shift());return o};U.prototype.getUri=function(e){e=V(this.defaults,e);var t=Er(e.baseURL,e.url);return gr(t,e.params,e.paramsSerializer)};ht.forEach(["delete","get","head","options"],function(e){U.prototype[e]=function(t,s){return this.request(V(s||{},{method:e,url:t,data:(s||{}).data}))}});ht.forEach(["post","put","patch"],function(e){function t(s){return function(a,i,o){return this.request(V(o||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:a,data:i}))}}U.prototype[e]=t(),U.prototype[e+"Form"]=t(!0)});var Rr=U,le,We;function xr(){if(We)return le;We=1;var r=J();function e(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var s;this.promise=new Promise(function(i){s=i});var n=this;this.promise.then(function(a){if(!!n._listeners){var i,o=n._listeners.length;for(i=0;i<o;i++)n._listeners[i](a);n._listeners=null}}),this.promise.then=function(a){var i,o=new Promise(function(l){n.subscribe(l),i=l}).then(a);return o.cancel=function(){n.unsubscribe(i)},o},t(function(i){n.reason||(n.reason=new r(i),s(n.reason))})}return e.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},e.prototype.subscribe=function(s){if(this.reason){s(this.reason);return}this._listeners?this._listeners.push(s):this._listeners=[s]},e.prototype.unsubscribe=function(s){if(!!this._listeners){var n=this._listeners.indexOf(s);n!==-1&&this._listeners.splice(n,1)}},e.source=function(){var s,n=new e(function(i){s=i});return{token:n,cancel:s}},le=e,le}var he,Je;function Or(){return Je||(Je=1,he=function(e){return function(s){return e.apply(null,s)}}),he}var de,ze;function br(){if(ze)return de;ze=1;var r=w;return de=function(t){return r.isObject(t)&&t.isAxiosError===!0},de}var Ve=w,Ar=Ke,j=Rr,Sr=ut,$r=ge;function ct(r){var e=new j(r),t=Ar(j.prototype.request,e);return Ve.extend(t,j.prototype,e),Ve.extend(t,e),t.create=function(n){return ct(Sr(r,n))},t}var y=ct($r);y.Axios=j;y.CanceledError=J();y.CancelToken=xr();y.isCancel=ot();y.VERSION=lt().version;y.toFormData=at;y.AxiosError=N;y.Cancel=y.CanceledError;y.all=function(e){return Promise.all(e)};y.spread=Or();y.isAxiosError=br();pe.exports=y;pe.exports.default=y;(function(r){r.exports=pe.exports})(Ge);const Xe=Rt(Ge.exports);class ft{constructor(){this.mode=typeof window>"u"?"json":"cookie"}}var Qe;(function(r){r.TOTAL_COUNT="total_count",r.FILTER_COUNT="filter_count"})(Qe||(Qe={}));class p extends Error{constructor(e){super(`${e!=null?e:"ID"} cannot be an empty string`)}}class x{constructor(e,t){this.collection=e,this.transport=t,this.endpoint=e.startsWith("directus_")?`/${e.substring(9)}`:`/items/${e}`}async readOne(e,t,s){if(`${e}`=="")throw new p("id");return(await this.transport.get(`${this.endpoint}/${encodeURI(e)}`,{params:t,...s==null?void 0:s.requestOptions})).data}async readMany(e,t,s){var n;const i=(n=(await this.transport.get(`/fields/${this.collection}`)).data)===null||n===void 0?void 0:n.find(f=>f.schema.is_primary_key===!0),{data:o,meta:l}=await this.transport.get(`${this.endpoint}`,{params:{...t,filter:{[i.field]:{_in:e},...t==null?void 0:t.filter},sort:(t==null?void 0:t.sort)||i.field},...s==null?void 0:s.requestOptions});return{data:o,...l&&{meta:l}}}async readByQuery(e,t){const{data:s,meta:n}=await this.transport.get(`${this.endpoint}`,{params:e,...t==null?void 0:t.requestOptions});return{data:s,...n&&{meta:n}}}async createOne(e,t,s){return(await this.transport.post(`${this.endpoint}`,e,{params:t,...s==null?void 0:s.requestOptions})).data}async createMany(e,t,s){return await this.transport.post(`${this.endpoint}`,e,{params:t,...s==null?void 0:s.requestOptions})}async updateOne(e,t,s,n){if(`${e}`=="")throw new p("id");return(await this.transport.patch(`${this.endpoint}/${encodeURI(e)}`,t,{params:s,...n==null?void 0:n.requestOptions})).data}async updateMany(e,t,s,n){return await this.transport.patch(`${this.endpoint}`,{keys:e,data:t},{params:s,...n==null?void 0:n.requestOptions})}async updateByQuery(e,t,s,n){return await this.transport.patch(`${this.endpoint}`,{query:e,data:t},{params:s,...n==null?void 0:n.requestOptions})}async deleteOne(e,t){if(`${e}`=="")throw new p("id");await this.transport.delete(`${this.endpoint}/${encodeURI(e)}`,void 0,t==null?void 0:t.requestOptions)}async deleteMany(e,t){await this.transport.delete(`${this.endpoint}`,e,t==null?void 0:t.requestOptions)}}class Tr{constructor(e){this.transport=e}async create(e){return(await this.transport.post("/activity/comment",e)).data}async update(e,t){if(`${e}`=="")throw new p("comment_activity_id");return(await this.transport.patch(`/activity/comment/${encodeURI(e)}`,{comment:t})).data}async delete(e){if(`${e}`=="")throw new p("comment_activity_id");await this.transport.delete(`/activity/comment/${encodeURI(e)}`)}}class kr extends x{constructor(e){super("directus_activity",e),this._comments=new Tr(this.transport)}get comments(){return this._comments}}class Cr{constructor(e){this.transport=e}async readOne(e){if(`${e}`=="")throw new p("collection");return(await this.transport.get(`/collections/${e}`)).data}async readAll(){const{data:e,meta:t}=await this.transport.get("/collections");return{data:e,meta:t}}async createOne(e){return(await this.transport.post("/collections",e)).data}async createMany(e){const{data:t,meta:s}=await this.transport.post("/collections",e);return{data:t,meta:s}}async updateOne(e,t,s){if(`${e}`=="")throw new p("collection");return(await this.transport.patch(`/collections/${e}`,t,{params:s})).data}async deleteOne(e){if(`${e}`=="")throw new p("collection");await this.transport.delete(`/collections/${e}`)}}class Pr{constructor(e){this.transport=e}async readOne(e,t){if(`${e}`=="")throw new p("collection");if(`${t}`=="")throw new p("id");return(await this.transport.get(`/fields/${e}/${t}`)).data}async readMany(e){if(`${e}`=="")throw new p("collection");return(await this.transport.get(`/fields/${e}`)).data}async readAll(){return(await this.transport.get("/fields")).data}async createOne(e,t){if(`${e}`=="")throw new p("collection");return(await this.transport.post(`/fields/${e}`,t)).data}async updateOne(e,t,s){if(`${e}`=="")throw new p("collection");if(`${t}`=="")throw new p("field");return(await this.transport.patch(`/fields/${e}/${t}`,s)).data}async deleteOne(e,t){if(`${e}`=="")throw new p("collection");if(`${t}`=="")throw new p("field");await this.transport.delete(`/fields/${e}/${t}`)}}class qr extends x{constructor(e){super("directus_files",e)}async import(e){return(await this.transport.post("/files/import",e)).data}}class Ur extends x{constructor(e){super("directus_folders",e)}}class Nr extends x{constructor(e){super("directus_permissions",e)}}class Dr extends x{constructor(e){super("directus_presets",e)}}class Br{constructor(e){this.transport=e}async readOne(e,t){if(`${e}`=="")throw new p("collection");if(`${t}`=="")throw new p("id");return(await this.transport.get(`/relations/${e}/${t}`)).data}async readMany(e){if(`${e}`=="")throw new p("collection");return(await this.transport.get(`/relations/${e}`)).data}async readAll(){return(await this.transport.get("/relations")).data}async createOne(e){return(await this.transport.post("/relations",e)).data}async updateOne(e,t,s){if(`${e}`=="")throw new p("collection");if(`${t}`=="")throw new p("field");return(await this.transport.patch(`/relations/${e}/${t}`,s)).data}async deleteOne(e,t){if(`${e}`=="")throw new p("collection");if(`${t}`=="")throw new p("field");await this.transport.delete(`/relations/${e}/${t}`)}}class Ir extends x{constructor(e){super("directus_revisions",e)}}class Lr extends x{constructor(e){super("directus_roles",e)}}class Fr{constructor(e){this.transport=e}async ping(){return(await this.transport.get("/server/ping")).raw}async info(){return(await this.transport.get("/server/info")).data}async oas(){return(await this.transport.get("/server/specs/oas")).raw}}class pt{constructor(e,t){this.collection=e,this.transport=t,this.endpoint=e.startsWith("directus_")?`/${e.substring(9)}`:`/items/${e}`}async read(e){return(await this.transport.get(`${this.endpoint}`,{params:e})).data}async update(e,t){return(await this.transport.patch(`${this.endpoint}`,e,{params:t})).data}}class Hr extends pt{constructor(e){super("directus_settings",e)}}class jr{constructor(e){this.transport=e}async send(e,t,s){await this.transport.post("/users/invite",{email:e,role:t,invite_url:s})}async accept(e,t){await this.transport.post("/users/invite/accept",{token:e,password:t})}}class Mr{constructor(e){this.transport=e}async generate(e){return(await this.transport.post("/users/me/tfa/generate",{password:e})).data}async enable(e,t){await this.transport.post("/users/me/tfa/enable",{secret:e,otp:t})}async disable(e){await this.transport.post("/users/me/tfa/disable",{otp:e})}}class Wr{constructor(e){this._transport=e}get tfa(){return this._tfa||(this._tfa=new Mr(this._transport))}async read(e){return(await this._transport.get("/users/me",{params:e})).data}async update(e,t){return(await this._transport.patch("/users/me",e,{params:t})).data}}class Jr extends x{constructor(e){super("directus_users",e)}get invites(){return this._invites||(this._invites=new jr(this.transport))}get me(){return this._me||(this._me=new Wr(this.transport))}}class zr{constructor(e){this.random={string:async(t=32)=>(await this.transport.get("/utils/random/string",{params:{length:t}})).data},this.hash={generate:async t=>(await this.transport.post("/utils/hash/generate",{string:t})).data,verify:async(t,s)=>(await this.transport.post("/utils/hash/verify",{string:t,hash:s})).data},this.transport=e}async sort(e,t,s){await this.transport.post(`/utils/sort/${encodeURI(e)}`,{item:t,to:s})}async revert(e){await this.transport.post(`/utils/revert/${encodeURI(e)}`)}}class vt{}class mt{}class L extends Error{constructor(e,t){var s,n;!((s=t==null?void 0:t.errors)===null||s===void 0)&&s.length?super((n=t==null?void 0:t.errors[0])===null||n===void 0?void 0:n.message):super((e==null?void 0:e.message)||"Unknown transport error"),this.parent=e,this.response=t,this.errors=(t==null?void 0:t.errors)||[],Object.values(t||{}).some(a=>a!==void 0)||(this.response=void 0),Object.setPrototypeOf(this,L.prototype)}}var _;(function(r){r.AuthToken="auth_token",r.RefreshToken="auth_refresh_token",r.Expires="auth_expires",r.ExpiresAt="auth_expires_at"})(_||(_={}));class wt extends vt{constructor(e){var t;super(),this.prefix=(t=e==null?void 0:e.prefix)!==null&&t!==void 0?t:""}get auth_token(){return this.get(_.AuthToken)}set auth_token(e){e===null?this.delete(_.AuthToken):this.set(_.AuthToken,e)}get auth_expires(){const e=this.get(_.Expires);return e===null?null:parseInt(e)}set auth_expires(e){e===null?this.delete(_.Expires):this.set(_.Expires,e.toString())}get auth_expires_at(){const e=this.get(_.ExpiresAt);return e===null?null:parseInt(e)}set auth_expires_at(e){e===null?this.delete(_.ExpiresAt):this.set(_.ExpiresAt,e.toString())}get auth_refresh_token(){return this.get(_.RefreshToken)}set auth_refresh_token(e){e===null?this.delete(_.RefreshToken):this.set(_.RefreshToken,e)}}class Vr extends wt{constructor(){super(...arguments),this.values={}}get(e){const t=this.key(e);return t in this.values?this.values[t]:null}set(e,t){return this.values[this.key(e)]=t,t}delete(e){const t=this.key(e),s=this.get(e);return t in this.values&&delete this.values[t],s}key(e){return`${this.prefix}${e}`}}class Xr extends wt{get(e){const t=localStorage.getItem(this.key(e));return t!==null?t:null}set(e,t){return localStorage.setItem(this.key(e),t),t}delete(e){const t=this.key(e),s=this.get(t);return s&&localStorage.removeItem(t),s}key(e){return`${this.prefix}${e}`}}class Qr extends mt{constructor(e){var t;super(),this.config=e,this.axios=Xe.create({baseURL:this.config.url,params:this.config.params,headers:this.config.headers,onUploadProgress:this.config.onUploadProgress,withCredentials:!0}),!((t=this.config)===null||t===void 0)&&t.beforeRequest&&(this.beforeRequest=this.config.beforeRequest)}async beforeRequest(e){return e}get url(){return this.config.url}async request(e,t,s,n){var a,i,o,l,f;try{let h={method:e,url:t,data:s,params:n==null?void 0:n.params,headers:n==null?void 0:n.headers,onUploadProgress:n==null?void 0:n.onUploadProgress};h=await this.beforeRequest(h);const d=await this.axios.request(h),u={raw:d.data,status:d.status,statusText:d.statusText,headers:d.headers,data:d.data.data,meta:d.data.meta,errors:d.data.errors};if(d.data.errors)throw new L(null,u);return u}catch(h){if(!h||!(h instanceof Error))throw h;if(Xe.isAxiosError(h)){const d=(a=h.response)===null||a===void 0?void 0:a.data;throw new L(h,{raw:(i=h.response)===null||i===void 0?void 0:i.data,status:(o=h.response)===null||o===void 0?void 0:o.status,statusText:(l=h.response)===null||l===void 0?void 0:l.statusText,headers:(f=h.response)===null||f===void 0?void 0:f.headers,data:d==null?void 0:d.data,meta:d==null?void 0:d.meta,errors:d==null?void 0:d.errors})}throw new L(h)}}async get(e,t){return await this.request("get",e,void 0,t)}async head(e,t){return await this.request("head",e,void 0,t)}async options(e,t){return await this.request("options",e,void 0,t)}async delete(e,t,s){return await this.request("delete",e,t,s)}async put(e,t,s){return await this.request("put",e,t,s)}async post(e,t,s){return await this.request("post",e,t,s)}async patch(e,t,s){return await this.request("patch",e,t,s)}}class Gr{constructor(e){this.transport=e}async request(e,t){await this.transport.post("/auth/password/request",{email:e,reset_url:t})}async reset(e,t){await this.transport.post("/auth/password/reset",{token:e,password:t})}}class Kr extends ft{constructor(e){var t,s,n;super(),this.autoRefresh=!0,this.msRefreshBeforeExpires=3e4,this.staticToken="",this._transport=e.transport,this._storage=e.storage,this.autoRefresh=(t=e==null?void 0:e.autoRefresh)!==null&&t!==void 0?t:this.autoRefresh,this.mode=(s=e==null?void 0:e.mode)!==null&&s!==void 0?s:this.mode,this.msRefreshBeforeExpires=(n=e==null?void 0:e.msRefreshBeforeExpires)!==null&&n!==void 0?n:this.msRefreshBeforeExpires,e!=null&&e.staticToken&&(this.staticToken=e==null?void 0:e.staticToken,this.updateStorage({access_token:this.staticToken,expires:null,refresh_token:null}))}get storage(){return this._storage}get transport(){return this._transport}get token(){return(async()=>{if(this._refreshPromise)try{await this._refreshPromise}finally{this._refreshPromise=void 0}return this._storage.auth_token})()}get password(){return this.passwords=this.passwords||new Gr(this._transport)}resetStorage(){this._storage.auth_token=null,this._storage.auth_refresh_token=null,this._storage.auth_expires=null,this._storage.auth_expires_at=null}updateStorage(e){var t,s;const n=(t=e.expires)!==null&&t!==void 0?t:null;this._storage.auth_token=e.access_token,this._storage.auth_refresh_token=(s=e.refresh_token)!==null&&s!==void 0?s:null,this._storage.auth_expires=n,this._storage.auth_expires_at=new Date().getTime()+(n!=null?n:0)}async refreshIfExpired(){if(!this.staticToken&&!!this.autoRefresh){if(!this._storage.auth_expires_at){try{await this._refreshPromise}finally{this._refreshPromise=void 0}return}this._storage.auth_expires_at<new Date().getTime()+this.msRefreshBeforeExpires&&this.refresh();try{await this._refreshPromise}finally{this._refreshPromise=void 0}}}refresh(){const e=async()=>{var t;const s=this._storage.auth_refresh_token;this.resetStorage();const n=await this._transport.post("/auth/refresh",{refresh_token:this.mode==="json"?s:void 0});return this.updateStorage(n.data),{access_token:n.data.access_token,...((t=n.data)===null||t===void 0?void 0:t.refresh_token)&&{refresh_token:n.data.refresh_token},expires:n.data.expires}};return this._refreshPromise=e()}async login(e){var t;this.resetStorage();const s=await this._transport.post("/auth/login",{mode:this.mode,...e},{headers:{Authorization:null}});return this.updateStorage(s.data),{access_token:s.data.access_token,...((t=s.data)===null||t===void 0?void 0:t.refresh_token)&&{refresh_token:s.data.refresh_token},expires:s.data.expires}}async static(e){return this.staticToken||(this.staticToken=e),await this._transport.get("/users/me",{params:{access_token:e},headers:{Authorization:null}}),this.updateStorage({access_token:e,expires:null,refresh_token:null}),!0}async logout(){let e;this.mode==="json"&&(e=this._storage.auth_refresh_token||void 0),await this._transport.post("/auth/logout",{refresh_token:e}),this.updateStorage({access_token:null,expires:null,refresh_token:null})}}class Yr{constructor(e){this.transport=e}async request(e,t,s){return await this.transport.post(e,{query:t,variables:typeof s>"u"?{}:s})}async items(e,t){return await this.request("/graphql",e,t)}async system(e,t){return await this.request("/graphql/system",e,t)}}class Zr{constructor(e,t){var s,n,a,i,o,l,f,h,d;if(this._url=e,this._options=t,this._items={},this._singletons={},((s=this._options)===null||s===void 0?void 0:s.storage)&&((n=this._options)===null||n===void 0?void 0:n.storage)instanceof vt)this._storage=this._options.storage;else{const u=(a=this._options)===null||a===void 0?void 0:a.storage,{mode:m,...S}=u!=null?u:{};m==="MemoryStorage"||typeof window>"u"?this._storage=new Vr(S):this._storage=new Xr(S)}((i=this._options)===null||i===void 0?void 0:i.transport)&&((o=this._options)===null||o===void 0?void 0:o.transport)instanceof mt?this._transport=this._options.transport:this._transport=new Qr({url:this.url,beforeRequest:async u=>{await this._auth.refreshIfExpired();const m=this.storage.auth_token,S=m?m.startsWith("Bearer ")?String(this.storage.auth_token):`Bearer ${this.storage.auth_token}`:"";return{...u,headers:{Authorization:S,...u.headers}}},...(l=this._options)===null||l===void 0?void 0:l.transport}),((f=this._options)===null||f===void 0?void 0:f.auth)&&((h=this._options)===null||h===void 0?void 0:h.auth)instanceof ft?this._auth=this._options.auth:this._auth=new Kr({transport:this._transport,storage:this._storage,...(d=this._options)===null||d===void 0?void 0:d.auth})}get url(){return this._url}get auth(){return this._auth}get storage(){return this._storage}get transport(){return this._transport}get activity(){return this._activity||(this._activity=new kr(this.transport))}get collections(){return this._collections||(this._collections=new Cr(this.transport))}get fields(){return this._fields||(this._fields=new Pr(this.transport))}get files(){return this._files||(this._files=new qr(this.transport))}get folders(){return this._folders||(this._folders=new Ur(this.transport))}get permissions(){return this._permissions||(this._permissions=new Nr(this.transport))}get presets(){return this._presets||(this._presets=new Dr(this.transport))}get relations(){return this._relations||(this._relations=new Br(this.transport))}get revisions(){return this._revisions||(this._revisions=new Ir(this.transport))}get roles(){return this._roles||(this._roles=new Lr(this.transport))}get users(){return this._users||(this._users=new Jr(this.transport))}get settings(){return this._settings||(this._settings=new Hr(this.transport))}get server(){return this._server||(this._server=new Fr(this.transport))}get utils(){return this._utils||(this._utils=new zr(this.transport))}get graphql(){return this._graphql||(this._graphql=new Yr(this.transport))}singleton(e){return this._singletons[e]||(this._singletons[e]=new pt(e,this.transport))}items(e){return this._items[e]||(this._items[e]=new x(e,this.transport))}}const F=new Zr("https://api.etovoteto.ru");function ts(r){const e=Et([]);async function t(){if(!!r)for(let s of r){let n=await F.items("links").readOne(s),a=await F.items("definitions").readOne(n.def);e.push(a)}}return t(),e}function rs(r="words",e="letters"){const t=fe(0);async function s(){var a,i;const{data:n}=await F.items(r).readByQuery({aggregate:{count:e}});t.value=(i=(a=n==null?void 0:n[0])==null?void 0:a.count)==null?void 0:i[e]}return s(),{load:s,count:t}}function ss(r){const e=fe();async function t(){const s=await F.items("words").readOne(r);e.value=s}return t(),{word:e,load:t}}function ns(r){const e=fe();async function t(){e.value=await F.items("directus_users").readOne(r)}return t(),{user:e,load:t}}export{ns as a,ss as b,rs as c,F as d,ts as u};
//# sourceMappingURL=useDb.869b2a34.js.map