(function(){var k=this;function l(a,b){var c=a.split("."),d=k;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}
function n(a){a=a.split(".");for(var b=k,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function p(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function q(a){return"string"==typeof a}
;var aa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function v(a,b){return a<b?-1:a>b?1:0}
;var ba=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ca=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=q(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var m=g[h];
b.call(c,m,h,a)&&(e[f++]=m)}return e};
function da(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e=p(d);if("array"==e||"object"==e&&"number"==typeof d.length){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ea(a){if(a.classList)return a.classList;a=a.className;return q(a)&&a.match(/\S+/g)||[]}
function ga(a,b){var c;a.classList?c=a.classList.contains(b):(c=ea(a),c=0<=ba(c,b));return c}
function ha(a,b){a.classList?a.classList.add(b):ga(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function ia(a,b){a.classList?a.classList.remove(b):ga(a,b)&&(a.className=ca(ea(a),function(a){return a!=b}).join(" "))}
;var ja="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ka(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ja.length;f++)c=ja[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var w;a:{var la=k.navigator;if(la){var ma=la.userAgent;if(ma){w=ma;break a}}w=""};function x(a,b){this.b=a;this.a=b}
x.prototype.ceil=function(){this.b=Math.ceil(this.b);this.a=Math.ceil(this.a);return this};
x.prototype.floor=function(){this.b=Math.floor(this.b);this.a=Math.floor(this.a);return this};
x.prototype.round=function(){this.b=Math.round(this.b);this.a=Math.round(this.a);return this};function na(a,b){var c=oa;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))}
;var pa=-1!=w.indexOf("Opera"),y=-1!=w.indexOf("Trident")||-1!=w.indexOf("MSIE"),qa=-1!=w.indexOf("Edge"),C=-1!=w.indexOf("Gecko")&&!(-1!=w.toLowerCase().indexOf("webkit")&&-1==w.indexOf("Edge"))&&!(-1!=w.indexOf("Trident")||-1!=w.indexOf("MSIE"))&&-1==w.indexOf("Edge"),ra=-1!=w.toLowerCase().indexOf("webkit")&&-1==w.indexOf("Edge");function sa(){var a=k.document;return a?a.documentMode:void 0}
var D;a:{var E="",F=function(){var a=w;if(C)return/rv\:([^\);]+)(\)|;)/.exec(a);if(qa)return/Edge\/([\d\.]+)/.exec(a);if(y)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ra)return/WebKit\/(\S+)/.exec(a);if(pa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
F&&(E=F?F[1]:"");if(y){var ta=sa();if(null!=ta&&ta>parseFloat(E)){D=String(ta);break a}}D=E}var ua=D,oa={};
function va(a){na(a,function(){for(var b=0,c=aa(String(ua)).split("."),d=aa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=v(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||v(0==g[2].length,0==h[2].length)||v(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var wa=k.document,xa=wa&&y?sa()||("CSS1Compat"==wa.compatMode?parseInt(ua,10):5):void 0;var ya;if(!(ya=!C&&!y)){var za;if(za=y)za=9<=Number(xa);ya=za}ya||C&&va("1.9.1");y&&va("9");function Aa(){var a=document;return q("yt-subscribe-card")?a.getElementById("yt-subscribe-card"):"yt-subscribe-card"}
;function Ba(a){var b=a.offsetWidth,c=a.offsetHeight,d=ra&&!b&&!c;if((void 0===b||d)&&a.getBoundingClientRect){var e;a:{try{e=a.getBoundingClientRect()}catch(f){e={left:0,top:0,right:0,bottom:0};break a}y&&a.ownerDocument.body&&(a=a.ownerDocument,e.left-=a.documentElement.clientLeft+a.body.clientLeft,e.top-=a.documentElement.clientTop+a.body.clientTop)}return new x(e.right-e.left,e.bottom-e.top)}return new x(b,c)}
;var G=window,I=document,Ca=G.location;function Da(){}
var Ea=/\[native code\]/;function J(a,b,c){return a[b]=a[b]||c}
function Fa(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function Ga(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function K(){var a;if((a=Object.create)&&Ea.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var L=J(G,"gapi",{});var M;M=J(G,"___jsl",K());J(M,"I",0);J(M,"hel",10);function Ha(){var a=Ca.href,b;if(M.dpo)b=M.h;else{b=M.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Ia(a){var b=J(M,"PQ",[]);M.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Ja(a){return J(J(M,"H",K()),a,K())}
;var N=J(M,"perf",K());J(N,"g",K());var Ka=J(N,"i",K());J(N,"r",[]);K();K();function P(a,b,c){b&&0<b.length&&(b=La(b),c&&0<c.length&&(b+="___"+La(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=J(Ka,"_p",K()),J(b,c,K())[a]=(new Date).getTime(),b=N.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function La(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var Ma=K(),Q=[];function R(a){throw Error("Bad hint"+(a?": "+a:""));}
;Q.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?M[b]=J(M,b,[]).concat(c):J(M,b,c)}if(b=a.u)a=J(M,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);var Na=/^(\/[a-zA-Z0-9_\-]+)+$/,Oa=/^[a-zA-Z0-9\-_\.,!]+$/,Pa=/^gapi\.loaded_[0-9]+$/,Qa=/^[a-zA-Z0-9,._-]+$/;function Ra(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Ma[f],h=null;g?h=g(e,b,c,d):R("no hint processor for: "+f);h||R("failed to generate load url");b=h;c=b.match(Sa);(d=b.match(Ta))&&1===d.length&&Ua.test(b)&&c&&1===c.length||R("failed sanity: "+a);return h}
function Va(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=Wa(a);Pa.test(c)||R("invalid_callback");b=Xa(b);d=d&&d.length?Xa(d):null;return[encodeURIComponent(a.j).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.c?"/am="+e(a.c):"",a.g?"/rs="+e(a.g):"",a.i?"/t="+e(a.i):"","/cb=",e(c)].join("")}
function Wa(a){"/"!==a.charAt(0)&&R("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))R("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");Na.test(b)||R("invalid_prefix");c=S(a,"k",!0);d=S(a,"am");e=S(a,"rs");a=S(a,"t");return{j:b,version:c,
c:d,g:e,i:a}}
function Xa(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Qa.test(e)&&b.push(e)}return b.join(",")}
function S(a,b,c){a=a[b];!a&&c&&R("missing: "+b);if(a){if(Oa.test(a))return a;R("invalid: "+b)}return null}
var Ua=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Ta=/\/cb=/g,Sa=/\/\//g;function Ya(){var a=Ha();if(!a)throw Error("Bad hint");return a}
Ma.m=function(a,b,c,d){(a=a[0])||R("missing_hint");return"https://apis.google.com"+Va(a,b,c,d)};var T=decodeURI("%73cript");function Za(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>Fa.call(b,e)&&c.push(e)}return c}
function $a(a){"loading"!=I.readyState?ab(a):I.write("<"+T+' src="'+encodeURI(a)+'"></'+T+">")}
function ab(a){var b=I.createElement(T);b.setAttribute("src",a);b.async="true";(a=I.getElementsByTagName(T)[0])?a.parentNode.insertBefore(b,a):(I.head||I.body||I.documentElement).appendChild(b)}
function bb(a,b){var c=b&&b._c;if(c)for(var d=0;d<Q.length;d++){var e=Q[d][0],f=Q[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function cb(a,b,c){db(function(){var c;c=b===Ha()?J(L,"_",K()):K();c=J(Ja(b),"_",c);a(c)},c)}
function eb(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);bb(a,c);var d=a?a.split(":"):[],e=c.h||Ya(),f=J(M,"ah",K());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var m=h.split("."),m=f[h]||f[m[1]&&"ns:"+m[0]||""]||e,z=g.length&&g[g.length-1]||null,A=z;z&&z.hint==m||(A={hint:m,f:[]},g.push(A));A.f.push(h)}var H=g.length;if(1<H){var B=c.callback;B&&(c.callback=function(){0==--H&&B()})}for(;d=g.shift();)fb(d.f,c,d.hint)}else fb(d||[],c,e)}
function fb(a,b,c){function d(a,b){if(H)return 0;G.clearTimeout(A);B.push.apply(B,r);var d=((L||{}).config||{}).update;d?d(f):f&&J(M,"cu",[]).push(f);if(b){P("me0",a,O);try{cb(b,c,z)}finally{P("me1",a,O)}}return 1}
a=Ga(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,m=b.onerror,z=void 0;"function"==typeof m&&(z=m);var A=null,H=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var m=J(Ja(c),"r",[]).sort(),B=J(Ja(c),"L",[]).sort(),O=[].concat(m);0<g&&(A=G.setTimeout(function(){H=!0;h()},g));
var r=Za(a,B);if(r.length){var r=Za(a,m),t=J(M,"CP",[]),u=t.length;t[u]=function(a){function b(){var a=t[u+1];a&&a()}
function c(b){t[u]=null;d(r,a)&&Ia(function(){e&&e();b()})}
if(!a)return 0;P("ml1",r,O);0<u&&t[u-1]?t[u]=function(){c(b)}:c(b)};
if(r.length){var fa="loaded_"+M.I++;L[fa]=function(a){t[u](a);L[fa]=null};
a=Ra(c,r,"gapi."+fa,m);m.push.apply(m,r);P("ml0",r,O);b.sync||G.___gapisync?$a(a):ab(a)}else t[u](Da)}else d(r)&&e&&e()}
;function db(a,b){if(M.hee&&0<M.hel)try{return a()}catch(c){b&&b(c),M.hel--,eb("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
;L.load=function(a,b){return db(function(){return eb(a,b)})};var gb=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};l("yt.config_",gb);l("yt.tokens_",window.yt&&window.yt.tokens_||{});var hb=window.yt&&window.yt.msgs_||n("window.ytcfg.msgs")||{};l("yt.msgs_",hb);function ib(){return n("gapi.iframes.getContext")()}
function jb(){return n("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER")}
;function kb(a){try{var b=lb,c=jb();a.register("msg-hovercard-subscription",b,c)}catch(d){}}
function lb(a){if(a){a=!!a.isSubscribed;var b=Aa();a?ia(b,"subscribe"):ha(b,"subscribe");a?ha(b,"subscribed"):ia(b,"subscribed")}}
;var U;
function mb(){var a;a=Aa();var b;b:{b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.display||b.getPropertyValue("display")||"";break b}b=""}if("none"!=(b||(a.currentStyle?a.currentStyle.display:null)||a.style&&a.style.display))a=Ba(a);else{b=a.style;var c=b.display,d=b.visibility,e=b.position;b.visibility="hidden";b.position="absolute";b.display="inline";a=Ba(a);b.display=c;b.position=e;b.visibility=d}a=
{width:a.b,height:a.a};ib().ready(a,null,void 0);a=jb();ib().addOnOpenerHandler(kb,null,a)}
U="function"==p(mb)?{callback:mb}:mb||{};
if(U.gapiHintOverride||"GAPI_HINT_OVERRIDE"in gb&&gb.GAPI_HINT_OVERRIDE){var nb;var V=document.location.href;if(-1!=V.indexOf("?")){var V=(V||"").split("#")[0],ob=V.split("?",2),W=1<ob.length?ob[1]:ob[0];"?"==W.charAt(0)&&(W=W.substr(1));for(var pb=W.split("&"),X={},qb=0,rb=pb.length;qb<rb;qb++){var Y=pb[qb].split("=");if(1==Y.length&&Y[0]||2==Y.length){var Z=decodeURIComponent((Y[0]||"").replace(/\+/g," ")),sb=decodeURIComponent((Y[1]||"").replace(/\+/g," "));Z in X?"array"==p(X[Z])?da(X[Z],sb):
X[Z]=[X[Z],sb]:X[Z]=sb}}nb=X}else nb={};var tb=nb.gapi_jsh;tb&&ka(U,{_c:{jsl:{h:tb}}})}eb("gapi.iframes:gapi.iframes.style.common",U);})();
