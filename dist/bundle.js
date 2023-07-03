/*!
 * Advanced Quote Tool
 * 
 * @version 1.0.1
 * 
 * @package https://github.com/VolgaIgor/editorjs-quote-advanced
 * @licence MIT
 * @author Igor Shuvalov «VolgaIgor» & CodeX
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.QuoteAdvanced=t():e.QuoteAdvanced=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=7)}([function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){window,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e){var r=n(2),o=setTimeout;function i(){}function a(e){if(!(this instanceof a))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(e,this)}function u(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,a._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void l(t.promise,e)}s(t.promise,r)}else(1===e._state?s:l)(t.promise,e._value)}))):e._deferreds.push(t)}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof a)return e._state=3,e._value=t,void c(e);if("function"==typeof n)return void f((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,c(e)}catch(t){l(e,t)}var r,o}function l(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&a._immediateFn((function(){e._handled||a._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;t<n;t++)u(e,e._deferreds[t]);e._deferreds=null}function d(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function f(e,t){var n=!1;try{e((function(e){n||(n=!0,s(t,e))}),(function(e){n||(n=!0,l(t,e))}))}catch(e){if(n)return;n=!0,l(t,e)}}a.prototype.catch=function(e){return this.then(null,e)},a.prototype.then=function(e,t){var n=new this.constructor(i);return u(this,new d(e,t,n)),n},a.prototype.finally=r.a,a.all=function(e){return new a((function(t,n){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var o=r.length;function i(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var u=a.then;if("function"==typeof u)return void u.call(a,(function(t){i(e,t)}),n)}r[e]=a,0==--o&&t(r)}catch(e){n(e)}}for(var a=0;a<r.length;a++)i(a,r[a])}))},a.resolve=function(e){return e&&"object"==typeof e&&e.constructor===a?e:new a((function(t){t(e)}))},a.reject=function(e){return new a((function(t,n){n(e)}))},a.race=function(e){return new a((function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)}))},a._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){o(e,0)},a._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.a=a}).call(this,n(5).setImmediate)},function(e,t,n){"use strict";t.a=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))}},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n(4);var o,i,a,u,s,l,c,d=n(8),f=(i=function(e){return new Promise((function(t,n){e=u(e),(e=s(e)).beforeSend&&e.beforeSend();var r=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");r.open(e.method,e.url),r.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(e.headers).forEach((function(t){var n=e.headers[t];r.setRequestHeader(t,n)}));var o=e.ratio;r.upload.addEventListener("progress",(function(t){var n=Math.round(t.loaded/t.total*100),r=Math.ceil(n*o/100);e.progress(Math.min(r,100))}),!1),r.addEventListener("progress",(function(t){var n=Math.round(t.loaded/t.total*100),r=Math.ceil(n*(100-o)/100)+o;e.progress(Math.min(r,100))}),!1),r.onreadystatechange=function(){if(4===r.readyState){var e=r.response;try{e=JSON.parse(e)}catch(e){}var o=d.parseHeaders(r.getAllResponseHeaders()),i={body:e,code:r.status,headers:o};c(r.status)?t(i):n(i)}},r.send(e.data)}))},a=function(e){return e.method="POST",i(e)},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.url&&"string"!=typeof e.url)throw new Error("Url must be a string");if(e.url=e.url||"",e.method&&"string"!=typeof e.method)throw new Error("`method` must be a string or null");if(e.method=e.method?e.method.toUpperCase():"GET",e.headers&&"object"!==r(e.headers))throw new Error("`headers` must be an object or null");if(e.headers=e.headers||{},e.type&&("string"!=typeof e.type||!Object.values(o).includes(e.type)))throw new Error("`type` must be taken from module's «contentType» library");if(e.progress&&"function"!=typeof e.progress)throw new Error("`progress` must be a function or null");if(e.progress=e.progress||function(e){},e.beforeSend=e.beforeSend||function(e){},e.ratio&&"number"!=typeof e.ratio)throw new Error("`ratio` must be a number");if(e.ratio<0||e.ratio>100)throw new Error("`ratio` must be in a 0-100 interval");if(e.ratio=e.ratio||90,e.accept&&"string"!=typeof e.accept)throw new Error("`accept` must be a string with a list of allowed mime-types");if(e.accept=e.accept||"*/*",e.multiple&&"boolean"!=typeof e.multiple)throw new Error("`multiple` must be a true or false");if(e.multiple=e.multiple||!1,e.fieldName&&"string"!=typeof e.fieldName)throw new Error("`fieldName` must be a string");return e.fieldName=e.fieldName||"files",e},s=function(e){switch(e.method){case"GET":var t=l(e.data,o.URLENCODED);delete e.data,e.url=/\?/.test(e.url)?e.url+"&"+t:e.url+"?"+t;break;case"POST":case"PUT":case"DELETE":case"UPDATE":var n=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type||o.JSON}(e);(d.isFormData(e.data)||d.isFormElement(e.data))&&(n=o.FORM),e.data=l(e.data,n),n!==f.contentType.FORM&&(e.headers["content-type"]=n)}return e},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(arguments.length>1?arguments[1]:void 0){case o.URLENCODED:return d.urlEncode(e);case o.JSON:return d.jsonEncode(e);case o.FORM:return d.formEncode(e);default:return e}},c=function(e){return e>=200&&e<300},{contentType:o={URLENCODED:"application/x-www-form-urlencoded; charset=utf-8",FORM:"multipart/form-data",JSON:"application/json; charset=utf-8"},request:i,get:function(e){return e.method="GET",i(e)},post:a,transport:function(e){return e=u(e),d.selectFiles(e).then((function(t){for(var n=new FormData,r=0;r<t.length;r++)n.append(e.fieldName,t[r],t[r].name);d.isObject(e.data)&&Object.keys(e.data).forEach((function(t){var r=e.data[t];n.append(t,r)}));var o=e.beforeSend;return e.beforeSend=function(){return o(t)},e.data=n,a(e)}))},selectFiles:function(e){return delete(e=u(e)).beforeSend,d.selectFiles(e)}});e.exports=f},function(e,t,n){"use strict";n.r(t);var r=n(1);window.Promise=window.Promise||r.a},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(6),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,o,i,a,u,s=1,l={},c=!1,d=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick((function(){p(e)}))}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?(a="setImmediate$"+Math.random()+"$",u=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&p(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",u,!1):e.attachEvent("onmessage",u),r=function(t){e.postMessage(a+t,"*")}):e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){p(e.data)},r=function(e){i.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(o=d.documentElement,r=function(e){var t=d.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):r=function(e){setTimeout(p,0,e)},f.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return l[s]=o,r(s),s++},f.clearImmediate=h}function h(e){delete l[e]}function p(e){if(c)setTimeout(p,0,e);else{var t=l[e];if(t){c=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{h(e),c=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(0),n(7))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var s,l=[],c=!1,d=-1;function f(){c&&s&&(c=!1,s.length?l=s.concat(l):d=-1,l.length&&h())}function h(){if(!c){var e=u(f);c=!0;for(var t=l.length;t;){for(s=l,l=[];++d<t;)s&&s[d].run();d=-1,t=l.length}s=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||c||u(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(9);e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"urlEncode",value:function(e){return o(e)}},{key:"jsonEncode",value:function(e){return JSON.stringify(e)}},{key:"formEncode",value:function(e){if(this.isFormData(e))return e;if(this.isFormElement(e))return new FormData(e);if(this.isObject(e)){var t=new FormData;return Object.keys(e).forEach((function(n){var r=e[n];t.append(n,r)})),t}throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")}},{key:"isObject",value:function(e){return"[object Object]"===Object.prototype.toString.call(e)}},{key:"isFormData",value:function(e){return e instanceof FormData}},{key:"isFormElement",value:function(e){return e instanceof HTMLFormElement}},{key:"selectFiles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,n){var r=document.createElement("INPUT");r.type="file",e.multiple&&r.setAttribute("multiple","multiple"),e.accept&&r.setAttribute("accept",e.accept),r.style.display="none",document.body.appendChild(r),r.addEventListener("change",(function(e){var n=e.target.files;t(n),document.body.removeChild(r)}),!1),r.click()}))}},{key:"parseHeaders",value:function(e){var t=e.trim().split(/[\r\n]+/),n={};return t.forEach((function(e){var t=e.split(": "),r=t.shift(),o=t.join(": ");r&&(n[r]=o)})),n}}])&&r(t,n),e}()},function(e,t){var n=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,escape).replace(/%20/g,"+")},r=function(e,t,o,i){return t=t||null,o=o||"&",i=i||null,e?function(e){for(var t=new Array,n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}(Object.keys(e).map((function(a){var u,s,l=a;if(i&&(l=i+"["+l+"]"),"object"==typeof e[a]&&null!==e[a])u=r(e[a],null,o,l);else{t&&(s=l,l=!isNaN(parseFloat(s))&&isFinite(s)?t+Number(l):l);var c=e[a];c=(c=0===(c=!1===(c=!0===c?"1":c)?"0":c)?"0":c)||"",u=n(l)+"="+n(c)}return u}))).join(o).replace(/[!'()*]/g,""):""};e.exports=r}])},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t,n){var r=n(3);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t,n){var r=n(12),o=n(13),i=n(4),a=n(14);e.exports=function(e){return r(e)||o(e)||i(e)||a()}},function(e,t,n){var r=n(15),o=n(16),i=n(4),a=n(17);e.exports=function(e,t){return r(e)||o(e,t)||i(e,t)||a()}},function(e,t,n){e.exports=n(18)},function(e,t,n){var r=n(9),o=n(10);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});e.exports=a},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function u(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],l=n[s]||0,c="".concat(s," ").concat(l);n[s]=l+1;var d=u(c),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:c,updater:v(f,t),references:1}),r.push(c)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,d=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function h(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function v(e,t){var n,r,o;if(t.singleton){var i=m++;n=p||(p=l(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=l(t),r=h.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=u(n[r]);a[o].references--}for(var i=s(e,t),l=0;l<n.length;l++){var c=u(n[l]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}n=i}}}},function(e,t,n){(t=n(11)(!1)).push([e.i,'.quote-adv {\r\n  --bg-color: #cdd1e0;\r\n  --front-color: #388ae5;\r\n  --border-color: #e8e8eb;\r\n}\r\n\r\n  .quote-adv_quote {\r\n    min-height: 158px;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .quote-adv_author {\r\n    display: flex;\r\n    gap: 10px;\r\n  }\r\n\r\n  .quote-adv_author-inputs {\r\n    flex-grow: 1;\r\n  }\r\n\r\n  .quote-adv_author-name {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .quote-adv__image {\r\n    display: flex;\r\n    flex-shrink: 0;\r\n    border-radius: 3px;\r\n    overflow: hidden;\r\n    width: 120px;\r\n    height: 120px;\r\n    position: relative;\r\n  }\r\n\r\n  .quote-adv__image-picture {\r\n      width: 100%;\r\n      height: 100%;\r\n      display: block;\r\n      object-fit: cover;\r\n      border-radius: 50%;\r\n    }\r\n\r\n  .quote-adv__image-preloader {\r\n      width: 50px;\r\n      height: 50px;\r\n      border-radius: 50%;\r\n      background-size: cover;\r\n      margin: auto;\r\n      position: relative;\r\n      background-color: var(--bg-color);\r\n      background-position: center center;\r\n    }\r\n\r\n  .quote-adv__image-preloader::after {\r\n        content: "";\r\n        position: absolute;\r\n        z-index: 3;\r\n        width: 60px;\r\n        height: 60px;\r\n        border-radius: 50%;\r\n        border: 2px solid var(--bg-color);\r\n        border-top-color: var(--front-color);\r\n        left: 50%;\r\n        top: 50%;\r\n        margin-top: -30px;\r\n        margin-left: -30px;\r\n        animation: image-preloader-spin 2s infinite linear;\r\n        box-sizing: border-box;\r\n      }\r\n\r\n  .quote-adv_quote[contentEditable="true"][data-placeholder]::before {\r\n      position: absolute !important;\r\n      content: attr(data-placeholder);\r\n      color: #707684;\r\n      font-weight: normal;\r\n      display: none;\r\n    }\r\n\r\n  .quote-adv_quote[contentEditable="true"][data-placeholder]:empty::before {\r\n        display: block;\r\n      }\r\n\r\n  .quote-adv_quote[contentEditable="true"][data-placeholder]:empty:focus::before {\r\n        display: none;\r\n      }\r\n\r\n  .quote-adv_delete-button {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n    background-color: rgb(0 0 0 / 50%);\r\n    cursor: pointer;\r\n    transition: .2s;\r\n    opacity: 0;\r\n    border-radius: 50%;\r\n  }\r\n\r\n  .quote-adv_delete-button svg {\r\n      width: 32px;\r\n      height: 32px;\r\n    }\r\n\r\n  .quote-adv_delete-button:hover {\r\n      opacity: 1;\r\n    }\r\n\r\n  .quote-adv .cdx-button {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 14px;\r\n    height: 100%;\r\n  }\r\n\r\n  .quote-adv .cdx-button svg {\r\n      height: 26px;\r\n      width: 26px;\r\n      margin: 0;\r\n    }\r\n\r\n  .quote-adv--empty .quote-adv__image-preloader {\r\n      display: none;\r\n    }\r\n\r\n  .quote-adv--empty .quote-adv_delete-button {\r\n      display: none;\r\n    }\r\n\r\n  .quote-adv--loading .cdx-button {\r\n      display: none;\r\n    }\r\n\r\n  .quote-adv--loading .quote-adv_delete-button {\r\n      display: none;\r\n    }\r\n\r\n  .quote-adv--filled .quote-adv__image-preloader {\r\n      display: none;\r\n    }\r\n\r\n  .quote-adv--filled .cdx-button {\r\n      display: none;\r\n    }\r\n\r\n@keyframes image-preloader-spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(s," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,u,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){var r=n(3);e.exports=function(e){if(Array.isArray(e))return r(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var r=n(1),o=n.n(r),i=n(0),a=n.n(i);n(8);var u=n(5),s=n.n(u);function l(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=document.createElement(e);Array.isArray(n)?(t=o.classList).add.apply(t,s()(n)):n&&o.classList.add(n);for(var i in r)o[i]=r[i];return o}var c=function(){function e(t){var n=t.api,r=t.config,i=t.onSelectFile,a=t.onDeleteFile;o()(this,e),this.api=n,this.config=r,this.onSelectFile=i,this.onDeleteFile=a,this.nodes={wrapper:l("div",[this.CSS.baseClass,this.CSS.wrapper]),quote:l("div",[this.CSS.input,this.CSS.quote],{contentEditable:!0}),imageContainer:l("div",[this.CSS.imageContainer]),imageEl:void 0,imagePreloader:l("div",this.CSS.imagePreloader),fileButton:this.createFileButton(),deleteButton:this.createDeleteButton(),authorName:l("input",[this.CSS.input,this.CSS.authorName]),authorInfo:l("input",[this.CSS.input,this.CSS.authorInfo])},this.nodes.imageContainer.appendChild(this.nodes.imagePreloader),this.nodes.imageContainer.appendChild(this.nodes.fileButton),this.nodes.imageContainer.appendChild(this.nodes.deleteButton);var u=l("div",[this.CSS.authorInputs]);this.nodes.authorName.placeholder=this.config.authorNamePlaceholder,u.appendChild(this.nodes.authorName),this.nodes.authorInfo.placeholder=this.config.authorInfoPlaceholder,u.appendChild(this.nodes.authorInfo);var s=l("div",[this.CSS.author]);s.appendChild(this.nodes.imageContainer),s.appendChild(u),this.nodes.quote.dataset.placeholder=this.config.quotePlaceholder,this.nodes.wrapper.appendChild(this.nodes.quote),this.nodes.wrapper.appendChild(s)}return a()(e,[{key:"render",value:function(t){return t.file&&0!==Object.keys(t.file).length?this.toggleStatus(e.status.UPLOADING):this.toggleStatus(e.status.EMPTY),this.nodes.wrapper}},{key:"createFileButton",value:function(){var e=this,t=l("div",[this.CSS.button]);return t.innerHTML=this.config.buttonContent||"".concat('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>'," ").concat(this.api.i18n.t("Select an Image")),t.addEventListener("click",(function(){e.onSelectFile()})),t}},{key:"createDeleteButton",value:function(){var e=this,t=l("div",[this.CSS.deleteButton]);return t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.1328 7.7234C18.423 7.7634 18.7115 7.80571 19 7.85109M18.1328 7.7234L17.2267 17.4023C17.1897 17.8371 16.973 18.2432 16.62 18.5394C16.267 18.8356 15.8037 19.0001 15.3227 19H8.67733C8.19632 19.0001 7.73299 18.8356 7.37998 18.5394C7.02698 18.2432 6.81032 17.8371 6.77333 17.4023L5.86715 7.7234M18.1328 7.7234C17.1536 7.58919 16.1693 7.48733 15.1818 7.41803M5.86715 7.7234C5.57697 7.76263 5.28848 7.80494 5 7.85032M5.86715 7.7234C6.84642 7.58919 7.83074 7.48733 8.81818 7.41803M15.1818 7.41803C13.0638 7.26963 10.9362 7.26963 8.81818 7.41803M15.1818 7.41803C15.1818 5.30368 13.7266 4.34834 12 4.34834C10.2734 4.34834 8.81818 5.43945 8.81818 7.41803"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.5 15.5L10 11"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 11L13.5 15.5"/></svg>',t.addEventListener("click",(function(){e.onDeleteFile()})),t}},{key:"showPreloader",value:function(t){this.nodes.imagePreloader.style.backgroundImage="url(".concat(t,")"),this.toggleStatus(e.status.UPLOADING)}},{key:"hidePreloader",value:function(){this.nodes.imagePreloader.style.backgroundImage="",this.toggleStatus(e.status.EMPTY)}},{key:"deleteImage",value:function(){this.nodes.imageContainer.removeChild(this.nodes.imageEl),this.nodes.imageEl=void 0,this.toggleStatus(e.status.EMPTY)}},{key:"fillImage",value:function(t){var n=this,r={src:t};this.nodes.imageEl=l("IMG",this.CSS.imageEl,r),this.nodes.imageEl.addEventListener("load",(function(){n.toggleStatus(e.status.FILLED),n.nodes.imagePreloader&&(n.nodes.imagePreloader.style.backgroundImage="")})),this.nodes.imageContainer.appendChild(this.nodes.imageEl)}},{key:"fillQuote",value:function(e){this.nodes.quote&&(this.nodes.quote.innerHTML=e)}},{key:"fillAuthorName",value:function(e){this.nodes.authorName&&(this.nodes.authorName.value=e)}},{key:"fillAuthorInfo",value:function(e){this.nodes.authorInfo&&(this.nodes.authorInfo.value=e)}},{key:"toggleStatus",value:function(t){for(var n in e.status)Object.prototype.hasOwnProperty.call(e.status,n)&&this.nodes.wrapper.classList.toggle("".concat(this.CSS.wrapper,"--").concat(e.status[n]),t===e.status[n])}},{key:"CSS",get:function(){return{baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,button:this.api.styles.button,wrapper:"quote-adv",quote:"quote-adv_quote",imageContainer:"quote-adv__image",imagePreloader:"quote-adv__image-preloader",imageEl:"quote-adv__image-picture",author:"quote-adv_author",authorInputs:"quote-adv_author-inputs",authorName:"quote-adv_author-name",authorInfo:"quote-adv_author-info",deleteButton:"quote-adv_delete-button"}}}],[{key:"status",get:function(){return{EMPTY:"empty",UPLOADING:"loading",FILLED:"filled"}}}]),e}(),d=n(6),f=n.n(d),h=n(2),p=n.n(h);function m(e){return e&&"function"==typeof e.then}var v=function(){function e(t){var n=t.config,r=t.onUpload,i=t.onError;o()(this,e),this.config=n,this.onUpload=r,this.onError=i}return a()(e,[{key:"uploadSelectedFile",value:function(e){var t=this,n=e.onPreview,r=function(e){var t=new FileReader;t.readAsDataURL(e),t.onload=function(e){n(e.target.result)}};(this.config.uploader&&"function"==typeof this.config.uploader.uploadByFile?p.a.selectFiles({accept:this.config.types}).then((function(e){r(e[0]);var n=t.config.uploader.uploadByFile(e[0]);return m(n)||console.warn("Custom uploader method uploadByFile should return a Promise"),n})):p.a.transport({url:this.config.endpoints.byFile,data:this.config.additionalRequestData,accept:this.config.types,headers:this.config.additionalRequestHeaders,beforeSend:function(e){r(e[0])},fieldName:this.config.field}).then((function(e){return e.body}))).then((function(e){t.onUpload(e)})).catch((function(e){t.onError(e)}))}},{key:"uploadByFile",value:function(e,t){var n,r=this,o=t.onPreview,i=new FileReader;if(i.readAsDataURL(e),i.onload=function(e){o(e.target.result)},this.config.uploader&&"function"==typeof this.config.uploader.uploadByFile)m(n=this.config.uploader.uploadByFile(e))||console.warn("Custom uploader method uploadByFile should return a Promise");else{var a=new FormData;a.append(this.config.field,e),this.config.additionalRequestData&&Object.keys(this.config.additionalRequestData).length&&Object.entries(this.config.additionalRequestData).forEach((function(e){var t=f()(e,2),n=t[0],r=t[1];a.append(n,r)})),n=p.a.post({url:this.config.endpoints.byFile,data:a,type:p.a.contentType.JSON,headers:this.config.additionalRequestHeaders}).then((function(e){return e.body}))}n.then((function(e){r.onUpload(e)})).catch((function(e){r.onError(e)}))}}]),e}(),g=function(){function e(t){var n=this,r=t.data,i=t.config,a=t.api,u=t.readOnly;o()(this,e),this.api=a,this.readOnly=u,this.config={endpoints:i.endpoints||"",additionalRequestData:i.additionalRequestData||{},additionalRequestHeaders:i.additionalRequestHeaders||{},field:i.field||"image",types:i.types||"image/*",quotePlaceholder:this.api.i18n.t(i.quotePlaceholder||"Enter quote..."),authorNamePlaceholder:this.api.i18n.t(i.authorNamePlaceholder||"Author name"),authorInfoPlaceholder:this.api.i18n.t(i.authorInfoPlaceholder||"Author summary"),buttonContent:i.buttonContent||"",uploader:i.uploader||void 0,actions:i.actions||[]},this.uploader=new v({config:this.config,onUpload:function(e){return n.onUpload(e)},onError:function(e){return n.uploadingFailed(e)}}),this.ui=new c({api:a,config:this.config,onSelectFile:function(){n.uploader.uploadSelectedFile({onPreview:function(e){n.ui.showPreloader(e)}})},onDeleteFile:function(){n.image=null,n.ui.deleteImage()}}),this._data={},this.data=r}return a()(e,null,[{key:"toolbox",get:function(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.8182L9 10.8182C8.80222 10.8182 8.60888 10.7649 8.44443 10.665C8.27998 10.5651 8.15181 10.4231 8.07612 10.257C8.00043 10.0909 7.98063 9.90808 8.01922 9.73174C8.0578 9.55539 8.15304 9.39341 8.29289 9.26627C8.43275 9.13913 8.61093 9.05255 8.80491 9.01747C8.99889 8.98239 9.19996 9.00039 9.38268 9.0692C9.56541 9.13801 9.72159 9.25453 9.83147 9.40403C9.94135 9.55353 10 9.72929 10 9.90909L10 12.1818C10 12.664 9.78929 13.1265 9.41421 13.4675C9.03914 13.8084 8.53043 14 8 14"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.8182L15 10.8182C14.8022 10.8182 14.6089 10.7649 14.4444 10.665C14.28 10.5651 14.1518 10.4231 14.0761 10.257C14.0004 10.0909 13.9806 9.90808 14.0192 9.73174C14.0578 9.55539 14.153 9.39341 14.2929 9.26627C14.4327 9.13913 14.6109 9.05255 14.8049 9.01747C14.9989 8.98239 15.2 9.00039 15.3827 9.0692C15.5654 9.13801 15.7216 9.25453 15.8315 9.40403C15.9414 9.55353 16 9.72929 16 9.90909L16 12.1818C16 12.664 15.7893 13.1265 15.4142 13.4675C15.0391 13.8084 14.5304 14 14 14"/></svg>',title:"Quote"}}}]),a()(e,[{key:"render",value:function(){return this.ui.render(this.data)}},{key:"validate",value:function(e){return 0!==e.quote.length}},{key:"save",value:function(){var e=this.ui.nodes.quote,t=this.ui.nodes.authorName,n=this.ui.nodes.authorInfo;return this._data.quote=e.innerHTML.trim(),this._data.authorName=t.value.trim(),this._data.authorInfo=n.value.trim(),this.data}},{key:"onUpload",value:function(e){e.success&&e.file?this.image=e.file:this.uploadingFailed("incorrect response: "+JSON.stringify(e))}},{key:"uploadingFailed",value:function(e){console.log("Image Tool: uploading failed because of",e),this.api.notifier.show({message:this.api.i18n.t("Couldn’t upload image. Please try another."),style:"error"}),this.ui.hidePreloader()}},{key:"uploadFile",value:function(e){var t=this;this.uploader.uploadByFile(e,{onPreview:function(e){t.ui.showPreloader(e)}})}},{key:"data",set:function(e){this.image=e.file,this._data.quote=e.quote||"",this.ui.fillQuote(this._data.quote),this._data.authorName=e.authorName||"",this.ui.fillAuthorName(this._data.authorName),this._data.authorInfo=e.authorInfo||"",this.ui.fillAuthorInfo(this._data.authorInfo)},get:function(){return this._data}},{key:"image",set:function(e){this._data.file=e||{},e&&e.url&&this.ui.fillImage(e.url)}}],[{key:"enableLineBreaks",get:function(){return!1}},{key:"sanitize",get:function(){return{quote:{br:!0}}}}]),e}();
/**
 * Advanced Quote Tool for the Editor.js
 *
 * @author Igor Shuvalov «VolgaIgor»
 * @license MIT
 * @see {@link https://github.com/VolgaIgor/editorjs-quote-advanced}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * quote: {
 *   class: QuoteAdvanced,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *     }
 *   },
 * },
 */}]).default}));