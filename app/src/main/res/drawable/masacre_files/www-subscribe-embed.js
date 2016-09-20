(function(){var m,p=this;function q(a){a=a.split(".");for(var b=p,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function aa(){}
function ba(a){a.D=function(){return a.ba?a.ba:a.ba=new a}}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function da(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function r(a){return"string"==typeof a}
function ea(a){return"function"==ca(a)}
function fa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var ga="closure_uid_"+(1E9*Math.random()>>>0),ha=0;function ka(a,b,c){return a.call.apply(a.bind,arguments)}
function la(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function t(a,b,c){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ka:la;return t.apply(null,arguments)}
function ma(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var na=Date.now||function(){return+new Date};
function u(a,b){var c=a.split("."),d=p;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}
function v(a,b){function c(){}
c.prototype=b.prototype;a.T=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.La=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var oa;var pa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function qa(a,b){return a<b?-1:a>b?1:0}
;var ra=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(r(a))return r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},w=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ta=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=r(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},ua=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
function va(a,b){var c;a:{c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function wa(a,b){return 0<=ra(a,b)}
function xa(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function ya(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function za(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(da(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Aa(a,b,c,d){return Array.prototype.splice.apply(a,Ba(arguments,1))}
function Ba(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
;function Ca(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function Da(a,b){return a.classList?a.classList.contains(b):wa(Ca(a),b)}
function Ea(a,b){a.classList?a.classList.add(b):Da(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Fa(a,b){a.classList?a.classList.remove(b):Da(a,b)&&(a.className=ta(Ca(a),function(a){return a!=b}).join(" "))}
function Ga(a,b,c){c?Ea(a,b):Fa(a,b)}
;function Ha(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ia(a){var b=Ja,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
var Ka="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function La(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ka.length;f++)c=Ka[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Ma;a:{var Na=p.navigator;if(Na){var Oa=Na.userAgent;if(Oa){Ma=Oa;break a}}Ma=""}function x(a){return-1!=Ma.indexOf(a)}
;function Pa(){}
;function y(a,b){this.i=void 0!==a?a:0;this.l=void 0!==b?b:0}
y.prototype.ceil=function(){this.i=Math.ceil(this.i);this.l=Math.ceil(this.l);return this};
y.prototype.floor=function(){this.i=Math.floor(this.i);this.l=Math.floor(this.l);return this};
y.prototype.round=function(){this.i=Math.round(this.i);this.l=Math.round(this.l);return this};function z(a,b){this.b=a;this.f=b}
z.prototype.ceil=function(){this.b=Math.ceil(this.b);this.f=Math.ceil(this.f);return this};
z.prototype.floor=function(){this.b=Math.floor(this.b);this.f=Math.floor(this.f);return this};
z.prototype.round=function(){this.b=Math.round(this.b);this.f=Math.round(this.f);return this};function Qa(a,b){var c=Ra;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Sa=x("Opera"),A=x("Trident")||x("MSIE"),Ta=x("Edge"),Ua=x("Gecko")&&!(-1!=Ma.toLowerCase().indexOf("webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),Va=-1!=Ma.toLowerCase().indexOf("webkit")&&!x("Edge"),Wa=x("Windows");function Xa(){var a=p.document;return a?a.documentMode:void 0}
var Ya;a:{var Za="",$a=function(){var a=Ma;if(Ua)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ta)return/Edge\/([\d\.]+)/.exec(a);if(A)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Va)return/WebKit\/(\S+)/.exec(a);if(Sa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
$a&&(Za=$a?$a[1]:"");if(A){var ab=Xa();if(null!=ab&&ab>parseFloat(Za)){Ya=String(ab);break a}}Ya=Za}var bb=Ya,Ra={};
function cb(a){return Qa(a,function(){for(var b=0,c=pa(String(bb)).split("."),d=pa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=qa(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||qa(0==g[2].length,0==h[2].length)||qa(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var db=p.document,eb=db&&A?Xa()||("CSS1Compat"==db.compatMode?parseInt(bb,10):5):void 0;!Ua&&!A||A&&9<=Number(eb)||Ua&&cb("1.9.1");var fb=A&&!cb("9");function gb(a){return a?new ib(jb(a)):oa||(oa=new ib)}
function B(a){var b=document;return r(a)?b.getElementById(a):a}
function kb(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):lb(a,void 0)}
function lb(a,b){var c,d,e,f;c=document;c=b||c;if(c.querySelectorAll&&c.querySelector&&a)return c.querySelectorAll(""+(a?"."+a:""));if(a&&c.getElementsByClassName){var g=c.getElementsByClassName(a);return g}g=c.getElementsByTagName("*");if(a){f={};for(d=e=0;c=g[d];d++){var h=c.className;"function"==typeof h.split&&wa(h.split(/\s+/),a)&&(f[e++]=c)}f.length=e;return f}return g}
function mb(a){return"CSS1Compat"==a.compatMode}
function jb(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function nb(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(jb(a).createTextNode(String(b)))}}
var ob={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},pb={IMG:" ",BR:"\n"};function qb(a){if(fb&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];rb(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");fb||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function rb(a,b,c){if(!(a.nodeName in ob))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in pb)b.push(pb[a.nodeName]);else for(a=a.firstChild;a;)rb(a,b,c),a=a.nextSibling}
function sb(a){var b=tb.oa;return b?ub(a,function(a){return!b||r(a.className)&&wa(a.className.split(/\s+/),b)},!0,void 0):null}
function ub(a,b,c,d){c||(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function ib(a){this.b=a||p.document||document}
ib.prototype.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
ib.prototype.createElement=function(a){return this.b.createElement(String(a))};
ib.prototype.isElement=function(a){return fa(a)&&1==a.nodeType};function vb(a){p.setTimeout(function(){throw a;},0)}
var wb;
function xb(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!x("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=t(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!x("Trident")&&!x("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.Z;c.Z=null;a()}};
return function(a){d.next={Z:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;function yb(a,b,c){this.j=c;this.g=a;this.o=b;this.f=0;this.b=null}
yb.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};function zb(){this.f=this.b=null}
var Bb=new yb(function(){return new Ab},function(a){a.reset()},100);
zb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Ab(){this.next=this.f=this.b=null}
Ab.prototype.set=function(a,b){this.b=a;this.f=b;this.next=null};
Ab.prototype.reset=function(){this.next=this.f=this.b=null};function Cb(a){Db||Eb();Fb||(Db(),Fb=!0);var b=Gb,c=Bb.get();c.set(a,void 0);b.f?b.f.next=c:b.b=c;b.f=c}
var Db;function Eb(){if(p.Promise&&p.Promise.resolve){var a=p.Promise.resolve(void 0);Db=function(){a.then(Hb)}}else Db=function(){var a=Hb;
!ea(p.setImmediate)||p.Window&&p.Window.prototype&&!x("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(wb||(wb=xb()),wb(a)):p.setImmediate(a)}}
var Fb=!1,Gb=new zb;function Hb(){for(var a;a=Gb.remove();){try{a.b.call(a.f)}catch(c){vb(c)}var b=Bb;b.o(a);b.f<b.j&&(b.f++,a.next=b.b,b.b=a)}Fb=!1}
;function Ib(){this.f=this.f;this.g=this.g}
Ib.prototype.f=!1;Ib.prototype.dispose=function(){this.f||(this.f=!0,this.R())};
Ib.prototype.R=function(){if(this.g)for(;this.g.length;)this.g.shift()()};function C(a){Ib.call(this);this.F=1;this.j=[];this.o=0;this.b=[];this.v={};this.ca=!!a}
v(C,Ib);m=C.prototype;m.subscribe=function(a,b,c){var d=this.v[a];d||(d=this.v[a]=[]);var e=this.F;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.F=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.v[a]){var d=this.b;if(a=va(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.H(a)}return!1};
m.H=function(a){var b=this.b[a];if(b){var c=this.v[b];if(0!=this.o)this.j.push(a),this.b[a+1]=aa;else{if(c){var d=ra(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.b[a];delete this.b[a+1];delete this.b[a+2]}}return!!b};
m.L=function(a,b){var c=this.v[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.ca)for(e=0;e<c.length;e++){var g=c[e];Jb(this.b[g+1],this.b[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.o--,0<this.j.length&&0==this.o)for(;c=this.j.pop();)this.H(c)}}return 0!=e}return!1};
function Jb(a,b,c){Cb(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.v[a];b&&(w(b,this.H,this),delete this.v[a])}else this.b.length=0,this.v={}};
function Kb(a,b){if(b){var c=a.v[b];return c?c.length:0}var c=0,d;for(d in a.v)c+=Kb(a,d);return c}
m.R=function(){C.T.R.call(this);this.clear();this.j.length=0};var Lb=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};u("yt.config_",Lb);u("yt.tokens_",window.yt&&window.yt.tokens_||{});var Mb=window.yt&&window.yt.msgs_||q("window.ytcfg.msgs")||{};u("yt.msgs_",Mb);function Nb(a){var b=arguments;if(1<b.length){var c=b[0];Lb[c]=b[1]}else for(c in b=b[0],b)Lb[c]=b[c]}
function D(a,b){return a in Lb?Lb[a]:b}
function Ob(a,b){ea(a)&&(a=Pb(a));return window.setTimeout(a,b)}
function Pb(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){throw Qb(b),b;}}:a}
function Qb(a){var b=q("yt.logging.errors.log");b?b(a,void 0,void 0,void 0,void 0):(b=D("ERRORS",[]),b.push([a,void 0,void 0,void 0,void 0]),Nb("ERRORS",b))}
;function Rb(a){var b=void 0;isNaN(b)&&(b=void 0);var c=q("yt.scheduler.instance.addJob");c?c(a,1,b):void 0===b?a():Ob(a,b||0)}
;function E(a,b){this.version=a;this.args=b}
function Sb(a){if(!a.ka){var b={};a.call(b);a.ka=b.version}return a.ka}
function Tb(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=Sb(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function F(a,b){this.b=a;this.J=b}
F.prototype.toString=function(){return this.b};var Ub=q("yt.pubsub2.instance_")||new C;C.prototype.subscribe=C.prototype.subscribe;C.prototype.unsubscribeByKey=C.prototype.H;C.prototype.publish=C.prototype.L;C.prototype.clear=C.prototype.clear;u("yt.pubsub2.instance_",Ub);var Vb=q("yt.pubsub2.subscribedKeys_")||{};u("yt.pubsub2.subscribedKeys_",Vb);var Wb=q("yt.pubsub2.topicToKeys_")||{};u("yt.pubsub2.topicToKeys_",Wb);var Xb=q("yt.pubsub2.isAsync_")||{};u("yt.pubsub2.isAsync_",Xb);u("yt.pubsub2.skipSubKey_",null);
function G(a,b){var c=Yb();return c?c.publish.call(c,a.toString(),a,b):!1}
function Zb(a,b,c){window.yt.pubsub2.skipSubKey_=a;G.call(null,b,c);window.yt.pubsub2.skipSubKey_=null}
function H(a,b,c){var d=Yb();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var f=function(){if(Vb[e])try{if(g&&a instanceof F&&a!=d)try{g=Tb(a.J,g)}catch(k){throw k.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+k.message,k;}b.call(c||window,g)}catch(k){Qb(k)}};
Xb[a.toString()]?q("yt.scheduler.instance")?Rb(f):Ob(f,0):f()}});
Vb[e]=!0;Wb[a.toString()]||(Wb[a.toString()]=[]);Wb[a.toString()].push(e);return e}
function $b(a){var b=Yb();b&&("number"==typeof a&&(a=[a]),w(a,function(a){b.unsubscribeByKey(a);delete Vb[a]}))}
function Yb(){return q("yt.pubsub2.instance_")}
;var I=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function bc(a){return a?decodeURI(a):a}
function cc(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function dc(a,b,c){if("array"==ca(b))for(var d=0;d<b.length;d++)dc(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function ec(a,b,c){for(c=c||0;c<b.length;c+=2)dc(b[c],b[c+1],a);return a}
function fc(a,b){for(var c in b)dc(c,b[c],a);return a}
function gc(a){a=fc([],a);a[0]="";return a.join("")}
function hc(a,b){return cc(2==arguments.length?ec([a],arguments[1],0):ec([a],arguments,1))}
;var ic={},jc=0;function kc(a){var b=new Image,c=""+jc++;ic[c]=b;b.onload=b.onerror=function(){delete ic[c]};
b.src=a}
;function lc(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?"array"==ca(b[f])?za(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function mc(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=lc(d[1]||""),e;for(e in b)d[e]=b[e];return cc(fc([a],d))+c}
;function nc(a){E.call(this,1,arguments);this.b=a}
v(nc,E);function J(a){E.call(this,1,arguments);this.b=a}
v(J,E);function oc(a,b,c,d){E.call(this,2,arguments);this.j=a;this.b=null===b?null:!!b;this.g=null===c?null:!!c;this.f=null===d?null:!!d}
v(oc,E);function pc(a,b,c,d,e){E.call(this,2,arguments);this.f=a;this.b=b;this.j=c||null;this.g=d||null;this.o=e||null}
v(pc,E);function qc(a,b,c){E.call(this,1,arguments);this.b=a;this.f=b}
v(qc,E);function rc(a,b,c,d,e,f,g){E.call(this,1,arguments);this.f=a;this.F=b;this.b=c;this.ca=d||null;this.j=e||null;this.g=f||null;this.o=g||null}
v(rc,E);
var sc=new F("subscription-batch-subscribe",nc),tc=new F("subscription-batch-unsubscribe",nc),uc=new F("subscription-pref-email",oc),vc=new F("subscription-subscribe",pc),wc=new F("subscription-subscribe-loading",J),xc=new F("subscription-subscribe-loaded",J),K=new F("subscription-subscribe-success",qc),yc=new F("subscription-subscribe-external",pc),zc=new F("subscription-unsubscribe",rc),Ac=new F("subscription-unsubscirbe-loading",J),Bc=new F("subscription-unsubscribe-loaded",J),L=new F("subscription-unsubscribe-success",J),
Cc=new F("subscription-external-unsubscribe",rc),Dc=new F("subscription-enable-ypc",J),Ec=new F("subscription-disable-ypc",J);var Fc=q("yt.pubsub.instance_")||new C;C.prototype.subscribe=C.prototype.subscribe;C.prototype.unsubscribeByKey=C.prototype.H;C.prototype.publish=C.prototype.L;C.prototype.clear=C.prototype.clear;u("yt.pubsub.instance_",Fc);var Gc=q("yt.pubsub.subscribedKeys_")||{};u("yt.pubsub.subscribedKeys_",Gc);var Hc=q("yt.pubsub.topicToKeys_")||{};u("yt.pubsub.topicToKeys_",Hc);var Ic=q("yt.pubsub.isSynchronous_")||{};u("yt.pubsub.isSynchronous_",Ic);var Jc=q("yt.pubsub.skipSubId_")||null;
u("yt.pubsub.skipSubId_",Jc);function Kc(a,b,c){var d=Lc();if(d){var e=d.subscribe(a,function(){if(!Jc||Jc!=e){var d=arguments,g;g=function(){Gc[e]&&b.apply(c||window,d)};
try{Ic[a]?g():Ob(g,0)}catch(h){Qb(h)}}},c);
Gc[e]=!0;Hc[a]||(Hc[a]=[]);Hc[a].push(e);return e}return 0}
function Mc(a){var b=Lc();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),w(a,function(a){b.unsubscribeByKey(a);delete Gc[a]}))}
function Nc(a,b){var c=Lc();return c?c.publish.apply(c,arguments):!1}
function Lc(){return q("yt.pubsub.instance_")}
;function Oc(a){var b=document.location.protocol+"//"+document.domain+"/post_login",b=hc(b,"mode","subscribe"),b=hc("/signin?context=popup","next",b),b=hc(b,"feature","sub_button");if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=Kc("LOGGED_IN",function(b){Mc(D("LOGGED_IN_PUBSUB_KEY",void 0));Nb("LOGGED_IN",!0);a(b)});
Nb("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
u("yt.pubsub.publish",Nc);function Pc(a){return eval("("+a+")")}
;var Qc=null;"undefined"!=typeof XMLHttpRequest?Qc=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Qc=function(){return new ActiveXObject("Microsoft.XMLHTTP")});function Rc(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Pb(b)(k)}
var k=Qc&&Qc();if(!("open"in k))return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;c=(c||"GET").toUpperCase();d=d||"";k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);f="POST"==c;if(e=Sc(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(f=!1);f&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);return k}
function Sc(a,b){b=b||{};var c;c||(c=window.location.href);var d=a.match(I)[1]||null,e=bc(a.match(I)[3]||null);d&&e?(d=c,c=a.match(I),d=d.match(I),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?bc(c.match(I)[3]||null)==e&&(Number(c.match(I)[4]||null)||null)==(Number(a.match(I)[4]||null)||null):!0;for(var f in Tc){if((e=d=D(Tc[f]))&&!(e=c)){var e=f,g=D("CORS_HEADER_WHITELIST")||{},h=bc(a.match(I)[3]||null);e=h?(g=g[h])?wa(g,e):!1:!0}e&&(b[f]=d)}return b}
function Uc(a,b){var c=D("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Na&&(!bc(a.match(I)[3]||null)||b.withCredentials||bc(a.match(I)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.B&&b.B[c])}
function Vc(a,b){var c=b.format||"JSON";b.Oa&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=D("XSRF_FIELD_NAME",void 0),e=D("XSRF_TOKEN",void 0),f=b.ja;f&&(f[d]&&delete f[d],a=mc(a,f||{}));var g=b.Pa||"",f=b.B;Uc(a,b)&&(f||(f={}),f[d]=e);f&&r(g)&&(d=lc(g),La(d,f),g=b.Ca&&"JSON"==b.Ca?JSON.stringify(d):gc(d));var h=!1,k,l=Rc(a,function(a){if(!h){h=!0;k&&window.clearTimeout(k);var d;a:switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:d=
!0;break a;default:d=!1}var e=null;if(d||400<=a.status&&500>a.status)e=Wc(c,a,b.Ma);if(d)a:if(D("EXPERIMENT_FLAGS",{}).ajax_204_success&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||p;d?b.G&&b.G.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.S&&b.S.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.Aa&&0<b.timeout&&(k=Ob(function(){h||(h=!0,l.abort(),window.clearTimeout(k),b.Aa.call(b.context||p,l))},b.timeout))}
function Wc(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=Pc(a));break;case "XML":if(b=(b=b.responseXML)?Xc(b):null)d={},w(b.getElementsByTagName("*"),function(a){d[a.tagName]=Yc(a)})}c&&Zc(d);
return d}
function Zc(a){if(fa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=new Pa:Zc(a[b])}}
function Xc(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Yc(a){var b="";w(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Tc={"X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};function $c(){var a=D("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!D("SESSION_INDEX")&&!D("LOGGED_IN"))}
;function ad(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
ad.prototype.getHeight=function(){return this.bottom-this.top};
ad.prototype.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
ad.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
ad.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function bd(a,b,c,d){this.left=a;this.top=b;this.f=c;this.b=d}
bd.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.f=Math.ceil(this.f);this.b=Math.ceil(this.b);return this};
bd.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.f=Math.floor(this.f);this.b=Math.floor(this.b);return this};
bd.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.f=Math.round(this.f);this.b=Math.round(this.b);return this};function M(a,b){var c=jb(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function cd(a,b){return M(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function dd(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}A&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function ed(a){"number"==typeof a&&(a+="px");return a}
function fd(a){var b=gd;if("none"!=cd(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function gd(a){var b=a.offsetWidth,c=a.offsetHeight,d=Va&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=dd(a),new z(a.right-a.left,a.bottom-a.top)):new z(b,c)}
function hd(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return e}
function id(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?hd(a,c):0}
var jd={thin:2,medium:4,thick:6};function kd(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in jd?jd[c]:hd(a,c)}
;var ld=q("yt.dom.getNextId_");if(!ld){ld=function(){return++md};
u("yt.dom.getNextId_",ld);var md=0}function nd(){var a=document,b;ua(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
;function od(){var a=nd();return a?a:null}
;function pd(a,b){(a=B(a))&&a.style&&(a.style.display=b?"":"none",Ga(a,"hid",!b))}
function qd(a){w(arguments,function(a){!da(a)||a instanceof Element?pd(a,!0):w(a,function(a){qd(a)})})}
function rd(a){w(arguments,function(a){!da(a)||a instanceof Element?pd(a,!1):w(a,function(a){rd(a)})})}
;function sd(a){this.type="";this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.b=a;for(var b in a)b in td||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=
a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
sd.prototype.preventDefault=function(){this.b&&(this.b.returnValue=!1,this.b.preventDefault&&this.b.preventDefault())};
sd.prototype.stopPropagation=function(){this.b&&(this.b.cancelBubble=!0,this.b.stopPropagation&&this.b.stopPropagation())};
sd.prototype.stopImmediatePropagation=function(){this.b&&(this.b.cancelBubble=!0,this.b.stopImmediatePropagation&&this.b.stopImmediatePropagation())};
var td={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};var Ja=q("yt.events.listeners_")||{};u("yt.events.listeners_",Ja);var ud=q("yt.events.counter_")||{count:0};u("yt.events.counter_",ud);function vd(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ia(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function N(a,b,c,d){if(a&&(a.addEventListener||a.attachEvent)){d=!!d;var e=vd(a,b,c,d);if(!e){var e=++ud.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),g;g=f?function(d){d=new sd(d);if(!ub(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new sd(b);
b.currentTarget=a;return c.call(a,b)};
g=Pb(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Ja[e]=[a,b,c,g,d]}}}
;var O={},wd="ontouchstart"in document;function xd(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return ub(c,function(a){return Da(a,b)},!0,d)}
function P(a){var b="mouseover"==a.type&&"mouseenter"in O||"mouseout"==a.type&&"mouseleave"in O,c=a.type in O||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=O[b],d;for(d in c.v){var e=xd(b,d,a.target);e&&!ub(a.relatedTarget,function(a){return a==e},!0)&&c.L(d,e,b,a)}}if(b=O[a.type])for(d in b.v)(e=xd(a.type,d,a.target))&&b.L(d,e,a.type,a)}}
N(document,"blur",P,!0);N(document,"change",P,!0);N(document,"click",P);N(document,"focus",P,!0);N(document,"mouseover",P);N(document,"mouseout",P);N(document,"mousedown",P);N(document,"keydown",P);N(document,"keyup",P);N(document,"keypress",P);N(document,"cut",P);N(document,"paste",P);wd&&(N(document,"touchstart",P),N(document,"touchend",P),N(document,"touchcancel",P));function yd(a,b,c){a&&(a.dataset?a.dataset[zd(b)]=c:a.setAttribute("data-"+b,c))}
function Q(a,b){return a?a.dataset?a.dataset[zd(b)]:a.getAttribute("data-"+b):null}
function Ad(a,b){a&&(a.dataset?delete a.dataset[zd(b)]:a.removeAttribute("data-"+b))}
var Bd={};function zd(a){return Bd[a]||(Bd[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function Cd(a){this.o=a;this.g={};this.M=[];this.j=[]}
function R(a,b){return"yt-uix"+(a.o?"-"+a.o:"")+(b?"-"+b:"")}
Cd.prototype.register=function(){throw Error("unimplemented abstract method");};
Cd.prototype.unregister=function(){Mc(this.M);this.M.length=0;$b(this.j);this.j.length=0};
Cd.prototype.init=aa;Cd.prototype.dispose=aa;function Dd(a,b,c){a.j.push(H(b,c,a))}
function T(a,b,c){var d=R(a,void 0),e=t(c,a);b in O||(O[b]=new C);O[b].subscribe(d,e);a.g[c]=e}
function Ed(a,b,c){if(b in O){var d=O[b];d.unsubscribe(R(a,void 0),a.g[c]);0>=Kb(d)&&(d.dispose(),delete O[b])}delete a.g[c]}
function Fd(a,b){yd(a,"tooltip-text",b)}
;function Gd(){Cd.call(this,"tooltip");this.b=0;this.f={}}
v(Gd,Cd);ba(Gd);m=Gd.prototype;m.register=function(){T(this,"mouseover",this.K);T(this,"mouseout",this.A);T(this,"focus",this.aa);T(this,"blur",this.Y);T(this,"click",this.A);T(this,"touchstart",this.ia);T(this,"touchend",this.N);T(this,"touchcancel",this.N)};
m.unregister=function(){Ed(this,"mouseover",this.K);Ed(this,"mouseout",this.A);Ed(this,"focus",this.aa);Ed(this,"blur",this.Y);Ed(this,"click",this.A);Ed(this,"touchstart",this.ia);Ed(this,"touchend",this.N);Ed(this,"touchcancel",this.N);this.dispose();Gd.T.unregister.call(this)};
m.dispose=function(){for(var a in this.f)this.A(this.f[a]);this.f={}};
m.K=function(a){if(!(this.b&&1E3>na()-this.b)){var b=parseInt(Q(a,"tooltip-hide-timer"),10);b&&(Ad(a,"tooltip-hide-timer"),window.clearTimeout(b));var b=t(function(){Hd(this,a);Ad(a,"tooltip-show-timer")},this),c=parseInt(Q(a,"tooltip-show-delay"),10)||0,b=Ob(b,c);
yd(a,"tooltip-show-timer",b.toString());a.title&&(Fd(a,Id(a)),a.title="");b=(a[ga]||(a[ga]=++ha)).toString();this.f[b]=a}};
m.A=function(a){var b=parseInt(Q(a,"tooltip-show-timer"),10);b&&(window.clearTimeout(b),Ad(a,"tooltip-show-timer"));b=t(function(){if(a){var b=B(Jd(this,a));b&&(Kd(b),b&&b.parentNode&&b.parentNode.removeChild(b),Ad(a,"content-id"));(b=B(Jd(this,a,"arialabel")))&&b.parentNode&&b.parentNode.removeChild(b)}Ad(a,"tooltip-hide-timer")},this);
b=Ob(b,50);yd(a,"tooltip-hide-timer",b.toString());if(b=Q(a,"tooltip-text"))a.title=b;b=(a[ga]||(a[ga]=++ha)).toString();delete this.f[b]};
m.aa=function(a){this.b=0;this.K(a)};
m.Y=function(a){this.b=0;this.A(a)};
m.ia=function(a,b,c){c.changedTouches&&(this.b=0,a=xd(b,R(this),c.changedTouches[0].target),this.K(a))};
m.N=function(a,b,c){c.changedTouches&&(this.b=na(),a=xd(b,R(this),c.changedTouches[0].target),this.A(a))};
function Ld(a,b){Fd(a,b);var c=Q(a,"content-id");(c=B(c))&&nb(c,b)}
function Id(a){return Q(a,"tooltip-text")||a.title}
function Hd(a,b){if(b){var c=Id(b);if(c){var d=B(Jd(a,b));if(!d){d=document.createElement("div");d.id=Jd(a,b);d.className=R(a,"tip");var e=document.createElement("div");e.className=R(a,"tip-body");var f=document.createElement("div");f.className=R(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=R(a,"tip-content");var h=Md(a,b),k=Jd(a,b,"content");g.id=k;yd(b,"content-id",k);e.appendChild(g);h&&d.appendChild(h);d.appendChild(e);d.appendChild(f);var l=
qb(b),k=Jd(a,b,"arialabel"),f=document.createElement("div");Ea(f,R(a,"arialabel"));f.id=k;l=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+l:l+" "+c;nb(f,l);b.setAttribute("aria-labelledby",k);k=od()||document.body;k.appendChild(f);k.appendChild(d);Ld(b,c);(c=parseInt(Q(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",Ea(g,R(a,"normal-wrap")));g=Da(b,R(a,"reverse"));Nd(a,b,d,e,h,g)||Nd(a,b,d,e,h,!g);var n=R(a,"tip-visible");
Ob(function(){Ea(d,n)},0)}}}}
function Nd(a,b,c,d,e,f){Ga(c,R(a,"tip-reverse"),f);var g=0;f&&(g=1);a=fd(b);f=new y((a.b-10)/2,f?a.f:0);var h=jb(b),k=new y(0,0),l;l=h?jb(h):document;l=!A||9<=Number(eb)||mb(gb(l).b)?l.documentElement:l.body;if(b!=l){l=dd(b);var n=gb(h).b,h=n.scrollingElement?n.scrollingElement:!Va&&mb(n)?n.documentElement:n.body||n.documentElement,n=n.parentWindow||n.defaultView,h=A&&cb("10")&&n.pageYOffset!=h.scrollTop?new y(h.scrollLeft,h.scrollTop):new y(n.pageXOffset||h.scrollLeft,n.pageYOffset||h.scrollTop);
k.i=l.left+h.i;k.l=l.top+h.l}f=new y(k.i+f.i,k.l+f.l);f=new y(f.i,f.l);k=(g&8&&"rtl"==cd(c,"direction")?g^4:g)&-9;g=fd(c);h=new z(g.b,g.f);l=f;l=new y(l.i,l.l);h=new z(h.b,h.f);0!=k&&(k&4?l.i-=h.b+0:k&2&&(l.i-=h.b/2),k&1&&(l.l-=h.f+0));f=new bd(0,0,0,0);f.left=l.i;f.top=l.l;f.f=h.b;f.b=h.f;l=new y(f.left,f.top);l instanceof y?(k=l.i,l=l.l):(k=l,l=void 0);c.style.left=ed(k);c.style.top=ed(l);h=new z(f.f,f.b);if(!(g==h||g&&h&&g.b==h.b&&g.f==h.f))if(g=h,k=mb(gb(jb(c)).b),!A||cb("10")||k&&cb("8"))f=c.style,
Ua?f.MozBoxSizing="border-box":Va?f.WebkitBoxSizing="border-box":f.boxSizing="border-box",f.width=Math.max(g.b,0)+"px",f.height=Math.max(g.f,0)+"px";else if(f=c.style,k){A?(k=id(c,"paddingLeft"),l=id(c,"paddingRight"),h=id(c,"paddingTop"),n=id(c,"paddingBottom"),k=new ad(h,l,n,k)):(k=M(c,"paddingLeft"),l=M(c,"paddingRight"),h=M(c,"paddingTop"),n=M(c,"paddingBottom"),k=new ad(parseFloat(h),parseFloat(l),parseFloat(n),parseFloat(k)));if(!A||9<=Number(eb))l=M(c,"borderLeftWidth"),h=M(c,"borderRightWidth"),
n=M(c,"borderTopWidth"),X=M(c,"borderBottomWidth"),l=new ad(parseFloat(n),parseFloat(h),parseFloat(X),parseFloat(l));else{l=kd(c,"borderLeft");var h=kd(c,"borderRight"),n=kd(c,"borderTop"),X=kd(c,"borderBottom");l=new ad(n,h,X,l)}f.pixelWidth=g.b-l.left-k.left-k.right-l.right;f.pixelHeight=g.f-l.top-k.top-k.bottom-l.bottom}else f.pixelWidth=g.b,f.pixelHeight=g.f;g=window.document;g=mb(g)?g.documentElement:g.body;f=new z(g.clientWidth,g.clientHeight);1==c.nodeType?(c=dd(c),l=new y(c.left,c.top)):(c=
c.changedTouches?c.changedTouches[0]:c,l=new y(c.clientX,c.clientY));c=fd(d);h=Math.floor(c.b/2);g=!!(f.f<l.l+a.f);a=!!(l.l<a.f);k=!!(l.i<h);f=!!(f.b<l.i+h);l=(c.b+3)/-2- -5;b=Q(b,"force-tooltip-direction");if("left"==b||k)l=-5;else if("right"==b||f)l=20-c.b-3;b=Math.floor(l)+"px";d.style.left=b;e&&(e.style.left=b,e.style.height=c.f+"px",e.style.width=c.b+"px");return!(g||a)}
function Jd(a,b,c){a=R(a);var d=b.__yt_uid_key;d||(d=ld(),b.__yt_uid_key=d);b=a+d;c&&(b+="-"+c);return b}
function Md(a,b){var c=null;Wa&&Da(b,R(a,"masked"))&&((c=B("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),qd(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=R(a,"tip-mask")));return c}
function Kd(a){var b=B("yt-uix-tooltip-shared-mask"),c=b&&ub(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),rd(b),document.body.appendChild(b))}
;function U(){Cd.call(this,"subscription-button");this.b=!1}
v(U,Cd);ba(U);U.prototype.register=function(){T(this,"click",this.O);Dd(this,wc,this.ea);Dd(this,xc,this.da);Dd(this,K,this.Da);Dd(this,Ac,this.ea);Dd(this,Bc,this.da);Dd(this,L,this.Ea);Dd(this,Dc,this.za);Dd(this,Ec,this.ya)};
U.prototype.unregister=function(){Ed(this,"click",this.O);U.T.unregister.call(this)};
U.prototype.f=function(a){return!!Q(a,"is-subscribed")};
var tb={U:"hover-enabled",ma:"yt-uix-button-subscribe",na:"yt-uix-button-subscribed",Fa:"ypc-enabled",oa:"yt-uix-button-subscription-container",pa:"yt-subscription-button-disabled-mask-container"},Od={Ga:"channel-external-id",qa:"subscriber-count-show-when-subscribed",ra:"subscriber-count-tooltip",sa:"subscriber-count-title",Ha:"href",V:"is-subscribed",Ia:"parent-url",Ja:"clicktracking",ta:"style-type",W:"subscription-id",Ka:"target",ua:"ypc-enabled"};m=U.prototype;
m.O=function(a){var b=Q(a,"href"),c=$c();if(!b||this.b&&c)if(c){var b=Q(a,"channel-external-id"),c=Q(a,"clicktracking"),d;if(Q(a,"ypc-enabled")){d=Q(a,"ypc-item-type");var e=Q(a,"ypc-item-id");d={itemType:d,itemId:e,subscriptionElement:a}}else d=null;e=Q(a,"parent-url");if(Q(a,"is-subscribed")){var f=Q(a,"subscription-id");G(zc,new rc(b,f,d,a,c,e))}else G(vc,new pc(b,d,c,e))}else Pd(this,a);else a=Q(a,"target")||"_self",window.open(b,a)};
m.ea=function(a){this.C(a.b,this.ga,!0)};
m.da=function(a){this.C(a.b,this.ga,!1)};
m.Da=function(a){this.C(a.b,this.ha,!0,a.f)};
m.Ea=function(a){this.C(a.b,this.ha,!1)};
m.za=function(a){this.C(a.b,this.xa)};
m.ya=function(a){this.C(a.b,this.wa)};
m.ha=function(a,b,c){b?(yd(a,Od.V,"true"),c&&yd(a,Od.W,c)):(Ad(a,Od.V),Ad(a,Od.W));Qd(a)};
m.ga=function(a,b){var c;c=sb(a);Ga(c,tb.pa,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Qd(a){var b=Q(a,Od.ta),c=!!Q(a,"is-subscribed"),b="-"+b,d=tb.na+b;Ga(a,tb.ma+b,!c);Ga(a,d,c);Q(a,Od.ra)&&!Q(a,Od.qa)&&(b=R(Gd.D()),Ga(a,b,!c),a.title=c?"":Q(a,Od.sa));c?Ob(function(){Ea(a,tb.U)},1E3):Fa(a,tb.U)}
m.xa=function(a){var b=!!Q(a,"ypc-item-type"),c=!!Q(a,"ypc-item-id");!Q(a,"ypc-enabled")&&b&&c&&(Ea(a,"ypc-enabled"),yd(a,Od.ua,"true"))};
m.wa=function(a){Q(a,"ypc-enabled")&&(Fa(a,"ypc-enabled"),Ad(a,"ypc-enabled"))};
function Rd(a,b){return ta(kb(R(a)),function(a){return b==Q(a,"channel-external-id")},a)}
m.va=function(a,b,c){var d=Ba(arguments,2);w(a,function(a){b.apply(this,xa(a,d))},this)};
m.C=function(a,b,c){var d=Rd(this,a);this.va.apply(this,xa([d],Ba(arguments,1)))};
function Pd(a,b){var c=t(function(a){a.discoverable_subscriptions&&Nb("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.O(b)},a);
Oc(c)}
;var Sd=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};u("yt.uix.widgets_",Sd);var Td=window,Ud=document,Vd=Td.location;function Wd(){}
var Xd=/\[native code\]/;function V(a,b,c){return a[b]=a[b]||c}
function Yd(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function Zd(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function W(){var a;if((a=Object.create)&&Xd.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var $d=V(Td,"gapi",{});var Y;Y=V(Td,"___jsl",W());V(Y,"I",0);V(Y,"hel",10);function ae(){var a=Vd.href,b;if(Y.dpo)b=Y.h;else{b=Y.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function be(a){var b=V(Y,"PQ",[]);Y.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function ce(a){return V(V(Y,"H",W()),a,W())}
;var de=V(Y,"perf",W());V(de,"g",W());var ee=V(de,"i",W());V(de,"r",[]);W();W();function fe(a,b,c){b&&0<b.length&&(b=ge(b),c&&0<c.length&&(b+="___"+ge(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=V(ee,"_p",W()),V(b,c,W())[a]=(new Date).getTime(),b=de.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function ge(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var he=W(),ie=[];function Z(a){throw Error("Bad hint"+(a?": "+a:""));}
;ie.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?Y[b]=V(Y,b,[]).concat(c):V(Y,b,c)}if(b=a.u)a=V(Y,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);var je=/^(\/[a-zA-Z0-9_\-]+)+$/,ke=/^[a-zA-Z0-9\-_\.,!]+$/,le=/^gapi\.loaded_[0-9]+$/,me=/^[a-zA-Z0-9,._-]+$/;function ne(a,b,c,d){var e=a.split(";"),f=e.shift(),g=he[f],h=null;g?h=g(e,b,c,d):Z("no hint processor for: "+f);h||Z("failed to generate load url");b=h;c=b.match(oe);(d=b.match(pe))&&1===d.length&&qe.test(b)&&c&&1===c.length||Z("failed sanity: "+a);return h}
function re(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=se(a);le.test(c)||Z("invalid_callback");b=te(b);d=d&&d.length?te(d):null;return[encodeURIComponent(a.Ba).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.X?"/am="+e(a.X):"",a.fa?"/rs="+e(a.fa):"",a.la?"/t="+e(a.la):"","/cb=",e(c)].join("")}
function se(a){"/"!==a.charAt(0)&&Z("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))Z("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");je.test(b)||Z("invalid_prefix");c=ue(a,"k",!0);d=ue(a,"am");e=ue(a,"rs");a=ue(a,"t");return{Ba:b,version:c,
X:d,fa:e,la:a}}
function te(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");me.test(e)&&b.push(e)}return b.join(",")}
function ue(a,b,c){a=a[b];!a&&c&&Z("missing: "+b);if(a){if(ke.test(a))return a;Z("invalid: "+b)}return null}
var qe=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,pe=/\/cb=/g,oe=/\/\//g;function ve(){var a=ae();if(!a)throw Error("Bad hint");return a}
he.m=function(a,b,c,d){(a=a[0])||Z("missing_hint");return"https://apis.google.com"+re(a,b,c,d)};var we=decodeURI("%73cript");function xe(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>Yd.call(b,e)&&c.push(e)}return c}
function ye(a){"loading"!=Ud.readyState?ze(a):Ud.write("<"+we+' src="'+encodeURI(a)+'"></'+we+">")}
function ze(a){var b=Ud.createElement(we);b.setAttribute("src",a);b.async="true";(a=Ud.getElementsByTagName(we)[0])?a.parentNode.insertBefore(b,a):(Ud.head||Ud.body||Ud.documentElement).appendChild(b)}
function Ae(a,b){var c=b&&b._c;if(c)for(var d=0;d<ie.length;d++){var e=ie[d][0],f=ie[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Be(a,b,c){Ce(function(){var c;c=b===ae()?V($d,"_",W()):W();c=V(ce(b),"_",c);a(c)},c)}
function De(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Ae(a,c);var d=a?a.split(":"):[],e=c.h||ve(),f=V(Y,"ah",W());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var k=h.split("."),k=f[h]||f[k[1]&&"ns:"+k[0]||""]||e,l=g.length&&g[g.length-1]||null,n=l;l&&l.hint==k||(n={hint:k,$:[]},g.push(n));n.$.push(h)}var X=g.length;if(1<X){var sa=c.callback;sa&&(c.callback=function(){0==--X&&sa()})}for(;d=g.shift();)Ee(d.$,c,d.hint)}else Ee(d||[],c,e)}
function Ee(a,b,c){function d(a,b){if(X)return 0;Td.clearTimeout(n);sa.push.apply(sa,S);var d=(($d||{}).config||{}).update;d?d(f):f&&V(Y,"cu",[]).push(f);if(b){fe("me0",a,hb);try{Be(b,c,l)}finally{fe("me1",a,hb)}}return 1}
a=Zd(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,k=b.onerror,l=void 0;"function"==typeof k&&(l=k);var n=null,X=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var k=V(ce(c),"r",[]).sort(),sa=V(ce(c),"L",[]).sort(),hb=[].concat(k);0<g&&(n=Td.setTimeout(function(){X=!0;h()},g));
var S=xe(a,sa);if(S.length){var S=xe(a,k),ia=V(Y,"CP",[]),ja=ia.length;ia[ja]=function(a){function b(){var a=ia[ja+1];a&&a()}
function c(b){ia[ja]=null;d(S,a)&&be(function(){e&&e();b()})}
if(!a)return 0;fe("ml1",S,hb);0<ja&&ia[ja-1]?ia[ja]=function(){c(b)}:c(b)};
if(S.length){var ac="loaded_"+Y.I++;$d[ac]=function(a){ia[ja](a);$d[ac]=null};
a=ne(c,S,"gapi."+ac,k);k.push.apply(k,S);fe("ml0",S,hb);b.sync||Td.___gapisync?ye(a):ze(a)}else ia[ja](Wd)}else d(S)&&e&&e()}
;function Ce(a,b){if(Y.hee&&0<Y.hel)try{return a()}catch(c){b&&b(c),Y.hel--,De("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
;$d.load=function(a,b){return Ce(function(){return De(a,b)})};function Fe(a){a=ea(a)?{callback:a}:a||{};if(a.gapiHintOverride||D("GAPI_HINT_OVERRIDE")){var b;b=document.location.href;-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=lc(1<b.length?b[1]:b[0])):b={};(b=b.gapi_jsh)&&La(a,{_c:{jsl:{h:b}}})}De("gapi.iframes:gapi.iframes.style.common",a)}
;function Ge(){return q("gapi.iframes.getContext")()}
function He(a){(Ge()||Ge()).connectIframes(a)}
function Ie(a,b){Ge().addOnConnectHandler("yt",a,void 0,b)}
function Je(){return Ge().getParentIframe()}
;var Ke="http://www.youtube.com https://www.youtube.com https://plus.google.com https://plus.googleapis.com https://plus.sandbox.google.com https://plusone.google.com https://plusone.sandbox.google.com https://apis.google.com https://apis.sandbox.google.com".split(" "),Le=[wc,xc,K,Ac,Bc,L,yc,Cc],Me=[wc,xc,K,Ac,Bc,L,Dc,Ec];function Ne(a){this.b=a;this.w=null;D("SUBSCRIBE_EMBED_HOVERCARD_URL")&&(Oe(this),N(this.b,"mouseover",t(this.j,this)),N(this.b,"mouseout",t(this.P,this)),N(this.b,"click",t(this.P,this)),H(K,ma(this.f,!0),this),H(L,ma(this.f,!1),this),Pe(this))}
function Oe(a){var b={url:D("SUBSCRIBE_EMBED_HOVERCARD_URL"),style:"bubble",hideClickDetection:!0,show:!1,anchor:a.b,relayOpen:"-1"};a=t(a.g,a);Ge().open(b,a)}
function Pe(a){$c()||Kc("LOGGED_IN",function(){this.w&&(this.P(),this.w.close(),this.w=null,Oe(this))},a)}
Ne.prototype.g=function(a){this.w=a;a=U.D().f(this.b);this.f(a)};
Ne.prototype.j=function(){this.w&&this.w.restyle({show:!0})};
Ne.prototype.P=function(){this.w&&this.w.restyle({show:!1})};
Ne.prototype.f=function(a){if(this.w){a={isSubscribed:a};try{var b=q("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER");this.w.send("msg-hovercard-subscription",a,void 0,b)}catch(c){}}};na();function Qe(a){if(da(a))return Re(a);if(fa(a)&&!ea(a)&&!(fa(a)&&0<a.nodeType))return Se(a);try{return p.JSON.stringify(a),a}catch(b){}}
function Se(a){var b={};Ha(a,function(a,d){b[d]=Qe(a)});
return b}
function Re(a){var b=[];w(a,function(a,d){b[d]=Qe(a)});
return b}
;function Te(a){this.f=null;this.b=a;a=Je();var b=Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^na()).toString(36);a&&(He({role:"ytsubscribe",iframe:a,data:{id:b}}),Ie(t(function(a){this.f=a},this),this.b))}
Te.prototype.register=function(a,b){if(this.f)this.f.register(a,b,this.b);else{var c=t(this.register,this,a,b,this.b);Ie(c,this.b)}};
Te.prototype.send=function(a,b){if(this.f)this.f.send(a,b,void 0,this.b);else{var c=t(this.send,this,a,b);Ie(c,this.b)}};function Ue(){this.b=this.f=null}
function Ve(a,b){var c=q("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");try{var d=c||We(a),e=Je();e&&e.send("onytevent",b,void 0,d)}catch(f){}}
Ue.prototype.g=function(a,b){if("pubsub2"==b.eventType){var c=b.topicString;c&&a(c,b.serializedData||null)}};
function We(a){if(!a.f){var b;b=q("gapi.iframes.makeWhiteListIframesFilter")(Ke);a.f=b}return a.f}
;function Xe(){this.b=new Ue;this.g=!1;this.f={}}
function Ye(a){w(Le,function(a){if(!this.f[a.toString()]){var b=H(a,function(b){var c=this.b;b=b?{version:b.version,args:b.args}:null;c.b&&(b={eventType:"pubsub2",topicString:a.toString(),serializedData:Qe(b)},c.b.send("msg-youtube-pubsub",b))},this);
b&&(this.f[a.toString()]=b)}},a)}
Xe.prototype.j=function(a,b){var c=va(Me,function(b){return b.toString()==a});
if(c&&(!c.J||b)){var d;if(c.J)try{d=Tb(c.J,b)}catch(f){return}var e=this.f[c.toString()];e?Zb(e,c,d):G(c,d)}};
Xe.prototype.o=function(a){Ze(this)&&Ve(this.b,{eventType:"subscribe",channelExternalId:a.b})};
Xe.prototype.F=function(a){Ze(this)&&Ve(this.b,{eventType:"unsubscribe",channelExternalId:a.b})};
function Ze(a){return a.g||!!D("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS")}
;function $e(){Fe(function(){var a;a=fd(B("yt-subscribe"));a={width:a.b,height:a.f};var b=af;Ge().ready(a,null,b)})}
function af(a){if(a.length&&a[a.length-1]){var b=a[a.length-1];a=b.eurl;var b=b.notificationsPipeSupported,c=B("yt-subscribe"),d=U.D(),d=R(d),e=c||document,f=null;e.getElementsByClassName?f=e.getElementsByClassName(d)[0]:e.querySelectorAll&&e.querySelector?f=e.querySelector("."+d):f=lb(d,c)[0];c=f||null;a&&c&&(U.D(),yd(c,"parent-url",a));a=bf();b&&a&&(U.D().b=!0);c&&!a&&new Ne(c);a=new Xe;H(K,a.o,a);H(L,a.F,a);if(bf()){b=a.b;b.b=new Te(We(b));Ye(a);b=a.b;c=t(a.j,a);if(b.b)try{b.b.register("cmd-youtube-pubsub",
ma(b.g,c))}catch(g){}a.g=!0}}}
function bf(){var a=Je().getOrigin();return wa(Ke,a)}
;function cf(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&kc(c)}}
;function df(a){E.call(this,1,arguments);this.b=a}
v(df,E);function ef(a,b){E.call(this,2,arguments);this.f=a;this.b=b}
v(ef,E);function ff(a,b,c,d){E.call(this,1,arguments);this.b=b;this.g=c||null;this.f=d||null}
v(ff,E);function gf(a,b){E.call(this,1,arguments);this.f=a;this.b=b||null}
v(gf,E);function hf(a){E.call(this,1,arguments)}
v(hf,E);var jf=new F("ypc-core-load",df),kf=new F("ypc-guide-sync-success",ef),lf=new F("ypc-purchase-success",ff),mf=new F("ypc-subscription-cancel",hf),nf=new F("ypc-subscription-cancel-success",gf),of=new F("ypc-init-subscription",hf);var pf=!1,qf=[],rf=[];function sf(a){a.b?pf?G(yc,a):G(jf,new df(function(){G(of,new hf(a.b))})):tf(a.f,a.j,a.g,a.o)}
function uf(a){a.b?pf?G(Cc,a):G(jf,new df(function(){G(mf,new hf(a.b))})):vf(a.f,a.F,a.j,a.g,a.o)}
function wf(a){xf(ya(a.b))}
function yf(a){zf(ya(a.b))}
function Af(a){Bf(a.j,a,null)}
function Cf(a,b,c,d){Bf(a,b,c,d)}
function Df(a){var b=a.f,c=a.b.subscriptionId;b&&c&&G(K,new qc(b,c,a.b.channelInfo))}
function Ef(a){var b=a.b;Ha(a.f,function(a,d){G(K,new qc(d,a,b[d]))})}
function Ff(a){G(L,new J(a.f.itemId));a.b&&a.b.length&&(Gf(a.b,L),Gf(a.b,Dc))}
function tf(a,b,c,d){var e=new J(a);G(wc,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=D("PLAYBACK_ID"))&&(c.plid=d);(d=D("EVENT_ID"))&&(c.ei=d);b&&Hf(b,c);Vc("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",ja:f,B:c,G:function(b,c){var d=c.response;G(K,new qc(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&Nc("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&cf(d.actions)},
S:function(){G(xc,e)}})}
function vf(a,b,c,d,e){var f=new J(a);G(Ac,f);var g={};d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=D("PLAYBACK_ID"))&&(d.plid=a);(a=D("EVENT_ID"))&&(d.ei=a);c&&Hf(c,d);Vc("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",ja:g,B:d,G:function(a,b){var c=b.response;G(L,f);c.actions&&cf(c.actions)},
S:function(){G(Bc,f)}})}
function Bf(a,b,c,d){if(null!==b&&(null!==b.b||null!==b.g||null!==b.f)){var e={};a&&(e.channel_id=a);null!==b.b&&(e.receive_all_updates=b.b);null!==b.g&&(e.receive_post_updates=b.g);null!==b.f&&(e.receive_no_updates=b.f);Vc("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",B:e,onError:function(){c&&c()},
G:function(){d&&d()}})}}
function xf(a){if(a.length){var b=Aa(a,0,40);G("subscription-batch-subscribe-loading");Gf(b,wc);var c={};c.a=b.join(",");var d=function(){G("subscription-batch-subscribe-loaded");Gf(b,xc)};
Vc("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",B:c,G:function(c,f){d();var e=f.response,h=e.id;if("array"==ca(h)&&h.length==b.length){var k=e.channel_info_map;w(h,function(a,c){var d=b[c];G(K,new qc(d,a,k[d]))});
a.length?xf(a):G("subscription-batch-subscribe-finished")}},
onError:function(){d();G("subscription-batch-subscribe-failure")}})}}
function zf(a){if(a.length){var b=Aa(a,0,40);G("subscription-batch-unsubscribe-loading");Gf(b,Ac);var c={};c.c=b.join(",");var d=function(){G("subscription-batch-unsubscribe-loaded");Gf(b,Bc)};
Vc("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",B:c,G:function(){d();Gf(b,L);a.length&&zf(a)},
onError:function(){d()}})}}
function Gf(a,b){w(a,function(a){G(b,new J(a))})}
function Hf(a,b){var c=lc(a),d;for(d in c)b[d]=c[d]}
;u("yt.setConfig",Nb);u("ytbin.www.subscribeembed.init",function(){pf=!0;rf.push(H(vc,sf),H(zc,uf));pf||(rf.push(H(yc,sf),H(Cc,uf),H(sc,wf),H(tc,yf),H(uc,Af)),qf.push(Kc("subscription-prefs",Cf)),rf.push(H(lf,Df),H(nf,Ff),H(kf,Ef)));var a=U.D(),b=R(a);b in Sd||(a.register(),a.M.push(Kc("yt-uix-init-"+b,a.init,a)),a.M.push(Kc("yt-uix-dispose-"+b,a.dispose,a)),Sd[b]=a);$e()});})();
