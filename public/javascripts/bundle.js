!function(){return function t(e,r,n){function o(s,a){if(!r[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(i)return i(s,!0);var f=new Error("Cannot find module '"+s+"'");throw f.code="MODULE_NOT_FOUND",f}var c=r[s]={exports:{}};e[s][0].call(c.exports,function(t){var r=e[s][1][t];return o(r||t)},c,c.exports,t,e,r,n)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}}()({1:[function(t,e,r){"use strict";t("whatwg-fetch"),t("promise/polyfill"),t("nodelist-foreach-polyfill");var n,o=t("./components/CreatePersons"),i=(n=o)&&n.__esModule?n:{default:n};window.addEventListener("load",function(){(0,i.default)()})},{"./components/CreatePersons":4,"nodelist-foreach-polyfill":10,"promise/polyfill":14,"whatwg-fetch":15}],2:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.default=function(){var t=document,e=t.querySelector(".tooltip"),r=t.querySelectorAll(".ranking__body__item"),n=window.innerWidth,o=function(n){n.preventDefault();var o=n.currentTarget.dataset.id,i=t.querySelector(".ranking__body"),s=window.getComputedStyle(i).height.split("px")[0]/r.length;r.forEach(function(){e.style.transform="translateY("+s*o+"px)"})},i=function(t){t.preventDefault(),e.style.transform="translateY(0px)"};r.forEach(function(t,e){n>768?(r[e].addEventListener("mouseover",o,!1),r[e].addEventListener("mouseleave",i,!1)):r[e].addEventListener("click",o,!1)})}},{}],3:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=document,r=e.querySelector(".tooltip .tooltip__aproved p"),n=e.querySelector(".tooltip .tooltip__reproved p"),o=e.querySelectorAll(".ranking__body__item"),i=function(e){r.textContent=t[e].positive,n.textContent=t[e].negative};o.forEach(function(t,e){window.innerWidth>768?t.addEventListener("mouseover",function(){return i(e)},!1):t.addEventListener("click",function(){return i(e)},!1)})}},{}],4:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=u(t("./ChangeTooltipPosition")),o=u(t("./ChangeTooltipValue")),i=u(t("./ValidadePercent")),s=u(t("./MakeElement")),a=t("../utils");function u(t){return t&&t.__esModule?t:{default:t}}r.default=function(){fetch("/javascripts/fazenda.json",{method:"GET"}).then(function(t){return t.json()}).then(function(t){var e=[];for(var r in t.data){var u=t.data[r],f=u.positive,c=u.negative;e.push({positive:(0,i.default)(f,c).positive,negative:(0,i.default)(f,c).negative,infos:{user:t.data[r]}})}var l=e.sort(a.orderObjDesc);l.forEach(function(t,e){(0,s.default)(t,e)}),(0,o.default)(l),(0,n.default)()}).catch(function(t){return console.error(t)})}},{"../utils":7,"./ChangeTooltipPosition":2,"./ChangeTooltipValue":3,"./MakeElement":5,"./ValidadePercent":6}],5:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.default=function(t,e){var r=t.infos.user,n=r.name,o=r.description,i=r.picture,s=document,a=s.querySelector(".ranking__body"),u=s.querySelector(".tooltip"),f=s.createElement("li");f.setAttribute("class","ranking__body__item"),f.setAttribute("data-id",e);var c='\n    <div class="item-image">\n      <figure>\n        <img src=\''+i+"' alt='"+n+'\' />\n      </figure>\n    </div>\n    <div class="item-divisor">\n      <h3>'+n+"</h3>\n      <h6>"+o+"</h6>\n    </div>\n  ";f.innerHTML=c,a.insertBefore(f,u)}},{}],6:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};r.default=function(t,e){var r=e,o=function(t){return(void 0===t?"undefined":n(t))===n("string")?t=parseInt(t,10):null==t&&(t=0),t},i=(t/(o(t)+o(r))*100).toFixed(0),s=Math.abs(i-100);return"NaN"!==i&&"NaN"!==s||(i="0",s="0"),{positive:parseInt(i,10),negative:parseInt(s,10)}}},{}],7:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.orderObjDesc=function(t,e){return t.positive<e.positive?1:t.positive>e.positive?-1:0}},{}],8:[function(t,e,r){"use strict";var n=t("./raw"),o=[],i=[],s=n.makeRequestCallFromTimer(function(){if(i.length)throw i.shift()});function a(t){var e;(e=o.length?o.pop():new u).task=t,n(e)}function u(){this.task=null}e.exports=a,u.prototype.call=function(){try{this.task.call()}catch(t){a.onerror?a.onerror(t):(i.push(t),s())}finally{this.task=null,o[o.length]=this}}},{"./raw":9}],9:[function(t,e,r){(function(t){"use strict";function r(t){o.length||(n(),!0),o[o.length]=t}e.exports=r;var n,o=[],i=0,s=1024;function a(){for(;i<o.length;){var t=i;if(i+=1,o[t].call(),i>s){for(var e=0,r=o.length-i;e<r;e++)o[e]=o[e+i];o.length-=i,i=0}}o.length=0,i=0,!1}var u,f,c,l=void 0!==t?t:self,h=l.MutationObserver||l.WebKitMutationObserver;function d(t){return function(){var e=setTimeout(n,0),r=setInterval(n,50);function n(){clearTimeout(e),clearInterval(r),t()}}}"function"==typeof h?(u=1,f=new h(a),c=document.createTextNode(""),f.observe(c,{characterData:!0}),n=function(){u=-u,c.data=u}):n=d(a),r.requestFlush=n,r.makeRequestCallFromTimer=d}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],10:[function(t,e,r){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var r=0;r<this.length;r++)t.call(e,this[r],r,this)})},{}],11:[function(t,e,r){"use strict";var n=t("asap/raw");function o(){}var i=null,s={};function a(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("Promise constructor's argument is not a function");this._40=0,this._65=0,this._55=null,this._72=null,t!==o&&d(t,this)}function u(t,e){for(;3===t._65;)t=t._55;if(a._37&&a._37(t),0===t._65)return 0===t._40?(t._40=1,void(t._72=e)):1===t._40?(t._40=2,void(t._72=[t._72,e])):void t._72.push(e);var r,o;r=t,o=e,n(function(){var t=1===r._65?o.onFulfilled:o.onRejected;if(null!==t){var e=function(t,e){try{return t(e)}catch(t){return i=t,s}}(t,r._55);e===s?c(o.promise,i):f(o.promise,e)}else 1===r._65?f(o.promise,r._55):c(o.promise,r._55)})}function f(t,e){if(e===t)return c(t,new TypeError("A promise cannot be resolved with itself."));if(e&&("object"==typeof e||"function"==typeof e)){var r=function(t){try{return t.then}catch(t){return i=t,s}}(e);if(r===s)return c(t,i);if(r===t.then&&e instanceof a)return t._65=3,t._55=e,void l(t);if("function"==typeof r)return void d(r.bind(e),t)}t._65=1,t._55=e,l(t)}function c(t,e){t._65=2,t._55=e,a._87&&a._87(t,e),l(t)}function l(t){if(1===t._40&&(u(t,t._72),t._72=null),2===t._40){for(var e=0;e<t._72.length;e++)u(t,t._72[e]);t._72=null}}function h(t,e,r){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=r}function d(t,e){var r=!1,n=function(t,e,r){try{t(e,r)}catch(t){return i=t,s}}(t,function(t){r||(r=!0,f(e,t))},function(t){r||(r=!0,c(e,t))});r||n!==s||(r=!0,c(e,i))}e.exports=a,a._37=null,a._87=null,a._61=o,a.prototype.then=function(t,e){if(this.constructor!==a)return n=t,i=e,new(r=this).constructor(function(t,e){var s=new a(o);s.then(t,e),u(r,new h(n,i,s))});var r,n,i,s=new a(o);return u(this,new h(t,e,s)),s}},{"asap/raw":9}],12:[function(t,e,r){"use strict";var n=t("./core.js");e.exports=n;var o=c(!0),i=c(!1),s=c(null),a=c(void 0),u=c(0),f=c("");function c(t){var e=new n(n._61);return e._65=1,e._55=t,e}n.resolve=function(t){if(t instanceof n)return t;if(null===t)return s;if(void 0===t)return a;if(!0===t)return o;if(!1===t)return i;if(0===t)return u;if(""===t)return f;if("object"==typeof t||"function"==typeof t)try{var e=t.then;if("function"==typeof e)return new n(e.bind(t))}catch(t){return new n(function(e,r){r(t)})}return c(t)},n.all=function(t){var e=Array.prototype.slice.call(t);return new n(function(t,r){if(0===e.length)return t([]);var o=e.length;function i(s,a){if(a&&("object"==typeof a||"function"==typeof a)){if(a instanceof n&&a.then===n.prototype.then){for(;3===a._65;)a=a._55;return 1===a._65?i(s,a._55):(2===a._65&&r(a._55),void a.then(function(t){i(s,t)},r))}var u=a.then;if("function"==typeof u)return void new n(u.bind(a)).then(function(t){i(s,t)},r)}e[s]=a,0==--o&&t(e)}for(var s=0;s<e.length;s++)i(s,e[s])})},n.reject=function(t){return new n(function(e,r){r(t)})},n.race=function(t){return new n(function(e,r){t.forEach(function(t){n.resolve(t).then(e,r)})})},n.prototype.catch=function(t){return this.then(null,t)}},{"./core.js":11}],13:[function(t,e,r){"function"!=typeof Promise.prototype.done&&(Promise.prototype.done=function(t,e){(arguments.length?this.then.apply(this,arguments):this).then(null,function(t){setTimeout(function(){throw t},0)})})},{}],14:[function(t,e,r){t("asap");"undefined"==typeof Promise&&(Promise=t("./lib/core.js"),t("./lib/es6-extensions.js")),t("./polyfill-done.js")},{"./lib/core.js":11,"./lib/es6-extensions.js":12,"./polyfill-done.js":13,asap:8}],15:[function(t,e,r){!function(t){"use strict";if(!t.fetch){var e={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(e.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=function(t){return t&&DataView.prototype.isPrototypeOf(t)},o=ArrayBuffer.isView||function(t){return t&&r.indexOf(Object.prototype.toString.call(t))>-1};c.prototype.append=function(t,e){t=a(t),e=u(e);var r=this.map[t];this.map[t]=r?r+","+e:e},c.prototype.delete=function(t){delete this.map[a(t)]},c.prototype.get=function(t){return t=a(t),this.has(t)?this.map[t]:null},c.prototype.has=function(t){return this.map.hasOwnProperty(a(t))},c.prototype.set=function(t,e){this.map[a(t)]=u(e)},c.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},c.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),f(t)},c.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),f(t)},c.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),f(t)},e.iterable&&(c.prototype[Symbol.iterator]=c.prototype.entries);var i=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},y.call(v.prototype),y.call(_.prototype),_.prototype.clone=function(){return new _(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},_.error=function(){var t=new _(null,{status:0,statusText:""});return t.type="error",t};var s=[301,302,303,307,308];_.redirect=function(t,e){if(-1===s.indexOf(e))throw new RangeError("Invalid status code");return new _(null,{status:e,headers:{location:t}})},t.Headers=c,t.Request=v,t.Response=_,t.fetch=function(t,r){return new Promise(function(n,o){var i=new v(t,r),s=new XMLHttpRequest;s.onload=function(){var t,e,r={status:s.status,statusText:s.statusText,headers:(t=s.getAllResponseHeaders()||"",e=new c,t.split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e)};r.url="responseURL"in s?s.responseURL:r.headers.get("X-Request-URL");var o="response"in s?s.response:s.responseText;n(new _(o,r))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.open(i.method,i.url,!0),"include"===i.credentials&&(s.withCredentials=!0),"responseType"in s&&e.blob&&(s.responseType="blob"),i.headers.forEach(function(t,e){s.setRequestHeader(e,t)}),s.send(void 0===i._bodyInit?null:i._bodyInit)})},t.fetch.polyfill=!0}function a(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function u(t){return"string"!=typeof t&&(t=String(t)),t}function f(t){var r={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e.iterable&&(r[Symbol.iterator]=function(){return r}),r}function c(t){this.map={},t instanceof c?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function l(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function h(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function d(t){var e=new FileReader,r=h(e);return e.readAsArrayBuffer(t),r}function p(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(e.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(e.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(e.arrayBuffer&&e.blob&&n(t))this._bodyArrayBuffer=p(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!e.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!o(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=p(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},e.blob&&(this.blob=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(d)}),this.text=function(){var t,e,r,n=l(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=h(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},e.formData&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}function v(t,e){var r,n,o=(e=e||{}).body;if(t instanceof v){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new c(t.headers)),this.method=t.method,this.mode=t.mode,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new c(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),i.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function b(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function _(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new c(e.headers),this.url=e.url||"",this._initBody(t)}}("undefined"!=typeof self?self:this)},{}]},{},[1]);