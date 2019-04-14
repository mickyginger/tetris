!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!x[e]||!w[e])return;for(var n in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--b&&0===y&&S()}(e,n),t&&t(e,n)};var n,r=!0,i="d99c2d5724246b660a4b",o=1e4,s={},a=[],c=[];function d(e){var t=M[e];if(!t)return k;var r=function(r){return t.hot.active?(M[r]?-1===M[r].parents.indexOf(e)&&M[r].parents.push(e):(a=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),a=[]),k(r)},i=function(e){return{configurable:!0,enumerable:!0,get:function(){return k[e]},set:function(t){k[e]=t}}};for(var o in k)Object.prototype.hasOwnProperty.call(k,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(r,o,i(o));return r.e=function(e){return"ready"===u&&p("prepare"),y++,k.e(e).then(t,function(e){throw t(),e});function t(){y--,"prepare"===u&&(g[e]||j(e),0===y&&0===b&&S())}},r.t=function(e,t){return 1&t&&(e=r(e)),k.t(e,-2&t)},r}function l(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:E,apply:L,status:function(e){if(!e)return u;h.push(e)},addStatusHandler:function(e){h.push(e)},removeStatusHandler:function(e){var t=h.indexOf(e);t>=0&&h.splice(t,1)},data:s[e]};return n=void 0,t}var h=[],u="idle";function p(e){u=e;for(var t=0;t<h.length;t++)h[t].call(null,e)}var f,m,v,b=0,y=0,g={},w={},x={};function O(e){return+e+""===e?+e:e}function E(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return r=e,p("check"),(t=o,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=k.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return p("idle"),null;w={},g={},x=e.c,v=e.h,p("prepare");var t=new Promise(function(e,t){f={resolve:e,reject:t}});m={};return j(0),"prepare"===u&&0===y&&0===b&&S(),t});var t}function j(e){x[e]?(w[e]=!0,b++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=k.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):g[e]=!0}function S(){p("ready");var e=f;if(f=null,e)if(r)Promise.resolve().then(function(){return L(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(O(n));e.resolve(t)}}function L(t){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var n,r,o,c,d;function l(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var i=r.pop(),o=i.id,s=i.chain;if((c=M[o])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:o};if(c.hot._main)return{type:"unaccepted",chain:s,moduleId:o};for(var a=0;a<c.parents.length;a++){var d=c.parents[a],l=M[d];if(l){if(l.hot._declinedDependencies[o])return{type:"declined",chain:s.concat([d]),moduleId:o,parentId:d};-1===t.indexOf(d)&&(l.hot._acceptedDependencies[o]?(n[d]||(n[d]=[]),h(n[d],[o])):(delete n[d],t.push(d),r.push({chain:s.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var f={},b=[],y={},g=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var w in m)if(Object.prototype.hasOwnProperty.call(m,w)){var E;d=O(w);var j=!1,S=!1,L=!1,q="";switch((E=m[w]?l(d):{type:"disposed",moduleId:w}).chain&&(q="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(j=new Error("Aborted because of self decline: "+E.moduleId+q));break;case"declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+q));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(E),t.ignoreUnaccepted||(j=new Error("Aborted because "+d+" is not accepted"+q));break;case"accepted":t.onAccepted&&t.onAccepted(E),S=!0;break;case"disposed":t.onDisposed&&t.onDisposed(E),L=!0;break;default:throw new Error("Unexception type "+E.type)}if(j)return p("abort"),Promise.reject(j);if(S)for(d in y[d]=m[d],h(b,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,d)&&(f[d]||(f[d]=[]),h(f[d],E.outdatedDependencies[d]));L&&(h(b,[E.moduleId]),y[d]=g)}var I,D=[];for(r=0;r<b.length;r++)d=b[r],M[d]&&M[d].hot._selfAccepted&&D.push({module:d,errorHandler:M[d].hot._selfAccepted});p("dispose"),Object.keys(x).forEach(function(e){!1===x[e]&&function(e){delete installedChunks[e]}(e)});for(var R,_,T=b.slice();T.length>0;)if(d=T.pop(),c=M[d]){var A={},U=c.hot._disposeHandlers;for(o=0;o<U.length;o++)(n=U[o])(A);for(s[d]=A,c.hot.active=!1,delete M[d],delete f[d],o=0;o<c.children.length;o++){var H=M[c.children[o]];H&&((I=H.parents.indexOf(d))>=0&&H.parents.splice(I,1))}}for(d in f)if(Object.prototype.hasOwnProperty.call(f,d)&&(c=M[d]))for(_=f[d],o=0;o<_.length;o++)R=_[o],(I=c.children.indexOf(R))>=0&&c.children.splice(I,1);for(d in p("apply"),i=v,y)Object.prototype.hasOwnProperty.call(y,d)&&(e[d]=y[d]);var C=null;for(d in f)if(Object.prototype.hasOwnProperty.call(f,d)&&(c=M[d])){_=f[d];var P=[];for(r=0;r<_.length;r++)if(R=_[r],n=c.hot._acceptedDependencies[R]){if(-1!==P.indexOf(n))continue;P.push(n)}for(r=0;r<P.length;r++){n=P[r];try{n(_)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:d,dependencyId:_[r],error:e}),t.ignoreErrored||C||(C=e)}}}for(r=0;r<D.length;r++){var W=D[r];d=W.module,a=[d];try{k(d)}catch(e){if("function"==typeof W.errorHandler)try{W.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:n,originalError:e}),t.ignoreErrored||C||(C=n),C||(C=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:d,error:e}),t.ignoreErrored||C||(C=e)}}return C?(p("fail"),Promise.reject(C)):(p("idle"),new Promise(function(e){e(b)}))}var M={};function k(t){if(M[t])return M[t].exports;var n=M[t]={i:t,l:!1,exports:{},hot:l(t),parents:(c=a,a=[],c),children:[]};return e[t].call(n.exports,n,n.exports,d(t)),n.l=!0,n.exports}k.m=e,k.c=M,k.d=function(e,t,n){k.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},k.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},k.t=function(e,t){if(1&t&&(e=k(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(k.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)k.d(n,r,function(t){return e[t]}.bind(null,r));return n},k.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return k.d(t,"a",t),t},k.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},k.p="",k.h=function(){return i},d(8)(k.s=8)}([function(e,t,n){t=e.exports=n(2)(!1);var r=n(3),i=r(n(4)),o=r(n(5));t.push([e.i,"@font-face {\n    font-family: 'Gameboy';\n    src: url("+i+") format('woff2'),\n         url("+o+") format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n* {\n  font-family: 'Gameboy', monospace;\n  font-size: 20px;\n}\n\nbody {\n  margin: 0;\n}\n\nmain {\n  display: flex;\n  justify-content: center;\n}\n\n.board {\n  width: calc(50vh + 20px);\n  height: calc(100vh - 10px);\n  margin-top: 10px;\n  overflow: hidden;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-end;\n  border-left: 5px solid;\n  border-right: 5px solid;\n  border-bottom: 5px solid;\n  border-radius: 0 0 5px 5px;\n  position: relative;\n}\n\n.board.game-over:before {\n  content: 'GAME OVER';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255,255,255,0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.panel {\n  padding: 30px;\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.next {\n  width: calc(20vh + 10px);\n  height: calc(20vh + 10px);\n  display: flex;\n  flex-wrap: wrap;\n  border: 5px solid;\n  border-radius: 5px;\n  margin: 12px 0;\n}\n\n.board div, .next div {\n  width: 5vh;\n  height: 5vh;\n  border: 1px solid white;\n}\n\n.shape.O {\n  background-color: yellow;\n}\n\n.shape.J {\n  background-color: blue;\n}\n\n.shape.T {\n  background-color: pink;\n}\n\n.shape.I {\n  background-color: cyan;\n}\n\n.shape.L {\n  background-color: orange;\n}\n\n.shape.S {\n  background-color: green;\n}\n\n.shape.Z {\n  background-color: red;\n}\n",""])},function(e,t,n){var r=n(0);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0},o=n(6)(r,i);r.locals&&(e.exports=r.locals),e.hot.accept(0,function(){var t=n(0);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(o).concat([i]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){"use strict";e.exports=function(e,t){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||t?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,t,n){e.exports=n.p+"assets/gameboy.woff2"},function(e,t,n){e.exports=n.p+"assets/gameboy.woff"},function(e,t,n){var r,i,o={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),c=null,d=0,l=[],h=n(7);function u(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(y(r.parts[s],t))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(y(r.parts[s],t));o[r.id]={id:r.id,refs:1,parts:a}}}}function p(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],s=t.base?o[0]+t.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function f(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(e.insertAt.before,n);n.insertBefore(t,i)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return b(t,e.attrs),f(e,t),t}function b(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,r,i,o;if(t.transform&&e.css){if(!(o="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=o}if(t.singleton){var s=d++;n=c||(c=v(t)),r=x.bind(null,n,s,!1),i=x.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),f(e,t),t}(t),r=function(e,t,n){var r=n.css,i=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=h(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,t),i=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){m(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return u(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var s=n[i];(a=o[s.id]).refs--,r.push(a)}e&&u(p(e,t),t);for(i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete o[a.id]}}}};var g,w=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function x(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,t,n){"use strict";n.r(t);n(1);function r(e,t={},n){const r=document.createElement(e);return Object.assign(r,t),"string"==typeof n?r.innerHTML=n:n instanceof Element&&r.appendChild(n),r}const i={O:e=>[{width:2,indices:[0,1,e,e+1]}],I:e=>[{width:1,indices:[0,e,2*e,3*e]},{width:4,indices:[0,1,2,3]}],T:e=>[{width:3,indices:[0,1,2,e+1]},{width:2,indices:[1,e,e+1,2*e+1]},{width:3,indices:[1,e,e+1,e+2]},{width:2,indices:[0,e,e+1,2*e]}],J:e=>[{width:2,indices:[1,e+1,2*e,2*e+1]},{width:3,indices:[0,e,e+1,e+2]},{width:2,indices:[0,1,e,2*e]},{width:3,indices:[0,1,2,e+2]}],L:e=>[{width:2,indices:[0,e,2*e,2*e+1]},{width:3,indices:[0,1,2,e]},{width:2,indices:[0,1,e+1,2*e+1]},{width:3,indices:[e,e+1,e+2,2]}],S:e=>[{width:3,indices:[1,2,e,e+1]},{width:2,indices:[0,e,e+1,2*e+1]}],Z:e=>[{width:3,indices:[0,1,e+1,e+2]},{width:2,indices:[1,e,e+1,2*e]}]};var o=class{constructor(e,t,n,r,i){this.name=e,this.shapes=t,this.squares=n,this.boardWidth=r,this.turns=t.length,this.orientationIndex=0,this.shape=t[0];const o=Math.round(Math.random()*(this.boardWidth-this.shape.width));if(this.position=this.shape.indices.map(e=>e+o),this.position.some(e=>this.squares[e].classList.contains("shape")))return i();this.draw()}getLeftEdge(){const e=this.position.map(e=>e%this.boardWidth),t=Math.min(...e);return this.position.filter((n,r)=>e[r]===t)}getRightEdge(){const e=this.position.map(e=>e%this.boardWidth),t=Math.max(...e);return this.position.filter((n,r)=>e[r]===t)}canMoveLeft(){return this.position.every(e=>e%this.boardWidth>0)&&this.getLeftEdge().every(e=>!this.squares[e-1].className)}canMoveRight(){return this.position.every(e=>e%this.boardWidth<this.boardWidth-1)&&this.getRightEdge().every(e=>!this.squares[e+1].className)}isSettled(){const e=this.position.some(e=>!this.squares[e+this.boardWidth]||this.squares[e+this.boardWidth].classList.contains("settled"));return e&&this.position.forEach(e=>this.squares[e].classList.add("settled")),e}draw(){this.position.forEach(e=>this.squares[e].classList.add("shape",this.name))}erase(){this.position.forEach(e=>this.squares[e].classList.remove("shape",this.name))}moveLeft(){if(!this.canMoveLeft())return!1;this.erase(),this.position=this.position.map(e=>e-1),this.draw()}moveRight(){if(!this.canMoveRight())return!1;this.erase(),this.position=this.position.map(e=>e+1),this.draw()}moveDown(){if(this.isSettled())return!1;this.erase(),this.position=this.position.map(e=>e+this.boardWidth),this.draw()}rotate(){this.erase(),this.orientationIndex=this.orientationIndex===this.turns-1?0:this.orientationIndex+1,this.shape=this.shapes[this.orientationIndex];const e=this.position.reduce((e,t)=>e>t?t:e)%this.boardWidth,t=this.boardWidth-e-this.shape.width;t<0&&(this.position=this.position.map(e=>e+t)),this.position=this.shape.indices.map(e=>e+this.position[0]),this.draw()}};var s=class{constructor(e,t,n,r,o,s){this.squares=e,this.boardWidth=t,this.levelElem=n,this.linesElem=r,this.scoreElem=o,this.nextSquares=s,this.tetronimo=null,this.interval=0,this.shapes=i,this.nextTetronimo=this.generateRandomTetronimo(this.nextSquares,4),this.score=0,this.lines=0,this.level=0,this.gameOver=!1,this.possibleScores={1:40,2:100,3:300,4:1200},this.audio=new Audio("assets/theme.mp3"),this.audio.loop=!0,this.audio.play(),this.handleKeydown=this.handleKeydown.bind(this),this.stop=this.stop.bind(this),document.addEventListener("keydown",this.handleKeydown)}generateTetronimo(e,t,n){const r=this.shapes[e](n);return new o(e,r,t,n,this.stop)}generateRandomTetronimo(e,t){const n=Object.keys(this.shapes),r=n[Math.floor(Math.random()*n.length)];return this.generateTetronimo(r,e,t)}updateScore(e){this.score+=e,this.scoreElem.innerText=this.score}updateLines(e){this.lines+=e,this.linesElem.innerText=this.lines}updateLevel(){if(9===this.level)return!1;this.level=Math.floor(this.lines/10),this.levelElem.innerText=this.level}animate(){if(this.gameOver)return!1;this.interval=setTimeout(()=>{if(this.tetronimo.moveDown(),this.tetronimo.isSettled())return clearInterval(this.interval),this.clearLines(),this.start();this.animate()},750-50*this.level)}start(){this.tetronimo=this.generateTetronimo(this.nextTetronimo.name,this.squares,this.boardWidth),this.clearNext(),this.nextTetronimo=this.generateRandomTetronimo(this.nextSquares,4),this.animate()}stop(){this.gameOver=!0,this.squares[0].parentNode.classList.add("game-over"),clearTimeout(this.interval),document.removeEventListener("keydown",this.handleKeydown)}clearNext(){this.nextSquares.forEach(e=>e.removeAttribute("class"))}clearLines(){let e=(Math.floor(this.squares.length/this.boardWidth)-1)*this.boardWidth,t=0;for(;e>0;){const n=this.squares.slice(e,e+this.boardWidth);if(n.every(e=>!e.className))break;if(n.every(e=>e.className)){t+=1,n.forEach(e=>{e.removeAttribute("class"),e.parentNode.insertBefore(e,this.squares[0])});const r=this.squares.splice(e,this.boardWidth);this.squares=r.concat(this.squares)}else e-=this.boardWidth}t&&(this.updateLines(t),this.updateScore(this.possibleScores[t]*(this.level+1)),this.updateLevel())}handleKeydown(e){if(![37,39,40,32].includes(e.keyCode)||this.tetronimo.isSettled())return!1;switch(e.keyCode){case 37:this.tetronimo.moveLeft();break;case 39:this.tetronimo.moveRight();break;case 40:this.tetronimo.moveDown();break;case 32:this.tetronimo.rotate()}}};const a=document.querySelector(".board"),c=document.querySelector(".level"),d=document.querySelector(".lines"),l=document.querySelector(".score"),h=document.querySelector(".next"),u=[],p=[];for(let e=0;e<Math.floor(100*2.2);e++){const e=r("div");a.appendChild(e),u.push(e)}for(let e=0;e<16;e++){const e=r("div");h.appendChild(e),p.push(e)}new s(u,10,c,d,l,p).start()}]);
//# sourceMappingURL=bundle.js.map