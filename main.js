(()=>{"use strict";var e={148:(e,t,n)=>{n.d(t,{A:()=>d});var o=n(601),r=n.n(o),i=n(314),c=n.n(i)()(r());c.push([e.id,".modal-background {\n    position: fixed;\n    left: 0;\n    top: 0;\n    z-index: 8;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.modal {\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    z-index: 9;\n    transform: translate(-50%, -50%);\n    background-color: whitesmoke;\n    padding: 20px;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n}\n\n.modal-content {\n    position: relative;\n}\n\n#form {\n    display: flex;\n    flex-direction: column;\n}\n\n.header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-bottom: 10px;\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n\n.header>p {\n    margin-right: 10px;\n}\n\n#new-task-close {\n    width: 30px;\n    height: 30px;\n    margin-left: 10px;\n    font-size: 1.75rem;\n    border-radius: 50%;\n    border: none;\n    background-color: red;\n    cursor: pointer;\n}\n\nlabel {\n    padding: 10px 0 2px 0;\n    font-size: 1.25rem;\n}\n\ninput,\nselect {\n    width: 100%;\n    padding: 5px;\n    font-size: 1.25rem;\n    border-radius: 8px;\n}\n\n#submit {\n    margin-top: 20px;\n    padding: 10px;\n    font-weight: bold;\n    border-radius: 8px;\n    background-color: limegreen;\n}",""]);const d=c},159:(e,t,n)=>{n.d(t,{A:()=>m});var o=n(601),r=n.n(o),i=n(314),c=n.n(i),d=n(148),a=n(417),s=n.n(a),u=new URL(n(449),n.b),l=c()(r());l.i(d.A);var p=s()(u);l.push([e.id,`@font-face {\n    font-family: 'Roboto';\n    src: url(${p}), format(truetype);\n}\n\n*::before,\n*::after,\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    width: 100%;\n    height: 100%;\n    font-family: 'Roboto';\n}\n\n#content {\n    width: 100%;\n}\n\n#content>nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 20%;\n    height: 100%;\n    background-color: #272727;\n    border-right: 1px solid whitesmoke;\n}\n\n#content>nav>p {\n    padding: 20px;\n    text-align: center;\n    font-size: 2rem;\n    font-weight: bold;\n    border-bottom: 1px solid whitesmoke;\n    color: whitesmoke;\n}\n\n.projects {\n    padding: 20px;\n}\n\n.project {\n    padding: 10px;\n    color: whitesmoke;\n    cursor: pointer;\n}\n\n\n.project:hover {\n    border-radius: 8px;\n    background-color: #474747;\n}\n\n.new-project {\n    display: flex;\n    justify-content: center;\n    border-top: 1px solid whitesmoke;\n    border-bottom: 1px solid whitesmoke;\n}\n\n#new-project-button,\n#new-task-button {\n    margin: 20px;\n    padding: 10px;\n    font-weight: bold;\n    border-radius: 8px;\n    border: none;\n    background-color: whitesmoke;\n    cursor: pointer;\n    transition: background-color 0.2s ease-in-out;\n}\n\n#new-task-button:hover {\n    background-color: white;\n}\n\n.tasks-container {\n    position: absolute;\n    left: 20%;\n    top: 0;\n    width: 80%;\n    height: 100%;\n    background-color: aliceblue;\n}\n\n.add-task-container {\n    border-bottom: 1px solid whitesmoke;\n    background-color: #272727;\n}`,""]);const m=l},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var d=0;d<this.length;d++){var a=this[d][0];null!=a&&(c[a]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);o&&c[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},c=[],d=0;d<e.length;d++){var a=e[d],s=o.base?a[0]+o.base:a[0],u=i[s]||0,l="".concat(s," ").concat(u);i[s]=u+1;var p=n(l),m={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=d,t.splice(d,0,{identifier:l,updater:f,references:1})}c.push(l)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var d=n(i[c]);t[d].references--}for(var a=o(e,r),s=0;s<i.length;s++){var u=n(i[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=a}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},449:(e,t,n)=>{e.exports=n.p+"fc2b5060f7accec5cf74.ttf"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(72),t=n.n(e),o=n(825),r=n.n(o),i=n(659),c=n.n(i),d=n(56),a=n.n(d),s=n(540),u=n.n(s),l=n(113),p=n.n(l),m=n(159),f={};f.styleTagTransform=p(),f.setAttributes=a(),f.insert=c().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),t()(m.A,f),m.A&&m.A.locals&&m.A.locals;const h={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let b;const g=new Uint8Array(16);function v(){if(!b&&(b="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!b))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return b(g)}const y=[];for(let e=0;e<256;++e)y.push((e+256).toString(16).slice(1));const x=function(e,t,n){if(h.randomUUID&&!t&&!e)return h.randomUUID();const o=(e=e||{}).random||(e.rng||v)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=o[e];return t}return function(e,t=0){return y[e[t+0]]+y[e[t+1]]+y[e[t+2]]+y[e[t+3]]+"-"+y[e[t+4]]+y[e[t+5]]+"-"+y[e[t+6]]+y[e[t+7]]+"-"+y[e[t+8]]+y[e[t+9]]+"-"+y[e[t+10]]+y[e[t+11]]+y[e[t+12]]+y[e[t+13]]+y[e[t+14]]+y[e[t+15]]}(o)};class E{constructor(e,t){this.id=e,this.name=t;let n=[];this.addTask=e=>{n.push(e)},this.getTasks=()=>n}}class w{constructor(e,t,n,o,r){this.id=e,this.title=t,this.description=n,this.dueDate=o,this.priority=r}}function k(){const e=document.getElementById("modal-background"),t=document.getElementById("modal"),n=document.getElementById("submit"),o=document.getElementById("new-task-close");n.removeEventListener("click",A),o.removeEventListener("click",k),t&&t.remove(),e&&e.remove()}function A(e){e.preventDefault();const t=x(),n=document.getElementById("title").value,o=document.getElementById("description").value,r=document.getElementById("due-date").value,i=document.getElementById("priority").value,c=new w(t,n,o,r,i);B(c),k()}const C=()=>{document.body.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","modal-background"),e.classList.add("modal-background"),e})()),document.body.appendChild((()=>{const e=document.createElement("div");e.setAttribute("id","modal"),e.classList.add("modal");const t=document.createElement("div");t.classList.add("modal-content");const n=document.createElement("div");n.classList.add("header");const o=document.createElement("p");o.innerText="Add new task",n.appendChild(o);const r=document.createElement("button");r.setAttribute("id","new-task-close"),r.innerHTML="&times;",r.addEventListener("click",k),n.appendChild(r),t.appendChild(n);const i=document.createElement("form");i.setAttribute("id","form");const c=document.createElement("label");c.innerText="Title",c.setAttribute("for","title"),i.appendChild(c);const d=document.createElement("input");d.setAttribute("type","text"),d.setAttribute("id","title"),d.setAttribute("name","title"),i.appendChild(d);const a=document.createElement("label");a.innerText="Description",a.setAttribute("for","description"),i.appendChild(a);const s=document.createElement("input");s.setAttribute("type","text"),s.setAttribute("id","description"),s.setAttribute("name","description"),i.appendChild(s);const u=document.createElement("label");u.innerText="Due date",u.setAttribute("for","due-date"),i.appendChild(u);const l=document.createElement("input");l.setAttribute("type","date"),l.setAttribute("id","due-date"),l.setAttribute("name","due-date"),i.appendChild(l);const p=document.createElement("label");p.innerText="Priority",p.setAttribute("for","priority"),i.appendChild(p);const m=document.createElement("select");m.setAttribute("id","priority"),m.setAttribute("name","priority");const f=["high","medium","low"];for(let e=0;e<3;e++){const t=document.createElement("option");t.setAttribute("value",f[e]),t.innerText=f[e].charAt(0).toUpperCase()+f[e].slice(1),m.appendChild(t)}i.appendChild(m);const h=document.createElement("input");return h.setAttribute("type","submit"),h.setAttribute("id","submit"),h.setAttribute("name","submit"),h.value="Add task",h.addEventListener("click",A),i.appendChild(h),t.appendChild(i),e.appendChild(t),e})())};function j(){const e=this.getAttribute("data-project-id");I=e,document.getElementById("new-task-button")||(()=>{const e=document.querySelector(".add-task-container"),t=document.createElement("button");t.setAttribute("id","new-task-button"),t.innerText="Add task",t.addEventListener("click",C),e.appendChild(t)})()}function L(){const e=document.getElementById("new-task-button");e&&(e.removeEventListener("click",C),e.remove(),I=null)}let T=[],I=null;const S=e=>{const t=x(),n=new E(t,e);T.push(n),(e=>{const t=document.querySelector(".custom-projects"),n=document.createElement("p");n.classList.add("project"),n.setAttribute("data-project-id",e.id),n.innerText=e.name,n.addEventListener("click",j),t.appendChild(n)})(n)},B=e=>{const t=T.find((e=>e.id===I));t&&t.addTask(e)};function U(){const e=document.getElementById("new-project-name");""!==e.value.trim()&&(S(e.value.trim()),M())}function M(){const e=document.getElementById("new-project-name"),t=document.querySelector(".new-project-buttons"),n=document.getElementById("add-new-project"),o=document.getElementById("cancel-new-project");n.removeEventListener("click",U),o.removeEventListener("click",M),t&&t.remove(),e&&e.remove()}(()=>{const e=document.getElementById("content"),t=document.createElement("nav"),n=document.createElement("p");n.classList.add("page-title"),n.innerText="Todo List",t.appendChild(n);const o=document.createElement("div");o.classList.add("projects"),o.classList.add("default-projects"),t.appendChild(o);const r=document.createElement("div");r.classList.add("new-project");const i=document.createElement("button");i.setAttribute("id","new-project-button"),i.innerText="Add project",r.appendChild(i),t.appendChild(r);const c=document.createElement("div");c.classList.add("projects"),c.classList.add("custom-projects"),t.appendChild(c),e.appendChild(t),i.addEventListener("click",(()=>{const e=document.querySelector(".custom-projects"),t=document.createElement("input");t.setAttribute("type","text"),t.setAttribute("id","new-project-name"),t.setAttribute("name","new-project-name"),t.setAttribute("placeholder","new project name"),e.appendChild(t);const n=document.createElement("div");n.classList.add("new-project-buttons");const o=document.createElement("button");o.setAttribute("id","add-new-project"),o.innerText="Add",n.appendChild(o);const r=document.createElement("button");r.setAttribute("id","cancel-new-project"),r.innerText="Cancel",n.appendChild(r),e.appendChild(n),o.addEventListener("click",U),r.addEventListener("click",M)}))})(),(()=>{const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("tasks-container");const n=document.querySelector(".page-title").offsetHeight,o=document.createElement("div");o.classList.add("add-task-container"),o.style.height=`${n+1}px`,t.appendChild(o),e.appendChild(t)})(),(()=>{const e=document.querySelector(".default-projects");["All","High priority","Medium priority","Low priority"].forEach((t=>{const n=document.createElement("p");n.classList.add("project"),n.innerText=t,n.addEventListener("click",L),e.appendChild(n)}))})(),(()=>{const e=document.querySelector(".custom-projects");T.forEach((t=>{const n=document.createElement("p");n.classList.add("project"),n.setAttribute("data-project-id",t.id),n.innerText=t.name,n.addEventListener("click",j),e.appendChild(n)}))})()})()})();