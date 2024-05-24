(()=>{"use strict";var e={67:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(601),a=t.n(r),o=t(314),i=t.n(o)()(a());i.push([e.id,":root {\n  --backgrounds-colors: #4f6f52;\n}\n\n.container {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n}\n\n.container .menu {\n  display: grid;\n  grid-template-rows: 50px 1fr;\n  padding: 50px;\n}\n\n.container .menu .menu-title {\n  font-size: 30px;\n  font-weight: bold;\n  align-self: center;\n}\n\n.container .menu-cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 30px;\n}\n\n.container .menu-cards .card {\n  display: grid;\n  grid-template-rows: 125px 50px 25px;\n  padding: 20px;\n  background-color: var(--backgrounds-colors);\n  border-radius: 20px;\n}\n\n.menu-cards .card .food-image {\n  width: 150px;\n  height: 100px;\n  justify-self: center;\n  border-top-right-radius: 20px;\n  border-top-left-radius: 20px;\n}\n\n.menu-cards .card .food-name {\n  text-align: center;\n  color: #e8dfca;\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.menu-cards .card .food-price {\n  text-align: center;\n  color: #e8dfca;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.container .categories {\n  display: grid;\n  grid-template-rows: 50px 1fr;\n  padding: 50px;\n}\n\n.container .categories .categories-title {\n  font-size: 30px;\n  font-weight: bold;\n  align-self: center;\n}\n\n.categories .categories-box {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  height: fit-content;\n  background-color: var(--backgrounds-colors);\n  padding: 20px;\n  border-radius: 20px;\n}\n\n.categories .categories-box .category {\n  display: grid;\n  height: 25px;\n  width: fit-content;\n  padding-left: 10px;\n  padding-right: 10px;\n  justify-content: center;\n  align-items: center;\n  background-color: #e8dfca;\n  border-radius: 10px;\n  color: #1A4D2E;\n}\n",""]);const c=i},365:(e,n,t)=>{t.d(n,{A:()=>u});var r=t(601),a=t.n(r),o=t(314),i=t.n(o),c=t(417),d=t.n(c),s=new URL(t(697),t.b),l=i()(a()),p=d()(s);l.push([e.id,`:root {\n  --header-bg: #1A4D2E;\n  --header-fg: #f5efe6;\n  --header-bg-hover: #e8dfca;\n  --header-button-border-hover: #4f6f52;\n}\n\n@font-face {\n  font-family: InterRegular;\n  src: url(${p});\n}\n\nbody {\n  margin: 0px;\n  display: grid;\n  grid-template-rows: 100px 1fr;\n  height: 100vh;\n}\n\nbody,\nbutton {\n  font-family: InterRegular, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nheader {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  align-items: center;\n  background-color: var(--header-bg);\n  color: var(--header-fg);\n}\n\nheader #logo {\n  margin: 0px;\n  justify-self: start;\n  padding-left: 50px;\n  font-size: 40px;\n}\n\nheader nav {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n\n  justify-self: end;\n  padding-right: 50px;\n  gap: 50px;\n}\n\nheader nav button {\n  width: 150px;\n  height: 40px;\n  background-color: var(--header-fg);\n  border: 0px;\n  padding: 0px;\n  border-radius: 20px;\n  color: var(--header-bg);\n  font-size: 25px;\n  box-sizing: border-box;\n}\n\nheader nav button:hover {\n  background-color: var(--header-bg-hover);\n  border: 1px solid var(--header-button-border-hover);\n}\n\n#content {\n  background-color: var(--header-bg-hover);\n}\n`,""]);const u=l},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=o[s]||0,p="".concat(s," ").concat(l);o[s]=l+1;var u=t(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=a(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var d=r(e,a),s=0;s<o.length;s++){var l=t(o[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=d}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},697:(e,n,t)=>{e.exports=t.p+"76224c7fa303861462e7.woff2"},570:(e,n,t)=>{e.exports=t.p+"9fb087b1decfab0e20fd.png"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(72),n=t.n(e),r=t(825),a=t.n(r),o=t(659),i=t.n(o),c=t(56),d=t.n(c),s=t(540),l=t.n(s),p=t(113),u=t.n(p),f=t(365),m={};m.styleTagTransform=u(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=l(),n()(f.A,m),f.A&&f.A.locals&&f.A.locals;var g=t(67),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),n()(g.A,h),g.A&&g.A.locals&&g.A.locals;const v=JSON.parse('{"L":["dessert","cat2","cat3","cat4","cat5","cat6","cat7","cat8","cat9","cat10","cat11","cat12","cat13","cat14","cat15","cat16","cat17","cat18","cat19","cat20"]}'),b={menu:[{name:"Pizza",price:23,imageUrl:t(570)},{name:"Hamburger",price:23,imageUrl:t(570)},{name:"Nachos",price:23,imageUrl:t(570)},{name:"Hot-dog",price:23,imageUrl:t(570)},{name:"Soup",price:23,imageUrl:t(570)},{name:"Chicken Wings",price:23,imageUrl:t(570)},{name:"Tacos",price:23,imageUrl:t(570)},{name:"Burritos",price:23,imageUrl:t(570)},{name:"An awesome dish with large name!",price:23,imageUrl:t(570)},{name:"Super Hamburger",price:23,imageUrl:t(570)}]},x=function(){const e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div"),c=b.menu,d=v.L;for(let e=0;e<c.length;e++){const n=document.createElement("div"),t=new Image;t.src=c[e].imageUrl;const a=document.createElement("div"),o=document.createElement("div");a.textContent=c[e].name,o.textContent=c[e].price.toFixed(2),t.classList.add("food-image"),a.classList.add("food-name"),o.classList.add("food-price"),n.appendChild(t),n.appendChild(a),n.appendChild(o),n.classList.add("card"),r.appendChild(n)}for(let e=0;e<d.length;e++){const n=document.createElement("div");n.classList.add("category"),n.textContent=d[e],i.appendChild(n)}return e.classList.add("container"),n.classList.add("menu"),t.classList.add("menu-title"),r.classList.add("menu-cards"),a.classList.add("categories"),o.classList.add("categories-title"),i.classList.add("categories-box"),t.textContent="Menu",o.textContent="Categories",a.appendChild(o),a.appendChild(i),n.appendChild(t),n.appendChild(r),e.appendChild(n),e.appendChild(a),e},y=document.querySelector("#home"),C=document.querySelector("#menu"),w=document.querySelector("#about");y.addEventListener("click",(()=>{E.removeContentFromPage()})),C.addEventListener("click",(()=>{E.removeContentFromPage(),E.loadPage(x)})),w.addEventListener("click",(()=>{E.removeContentFromPage()}));const E=(()=>{const e=document.querySelector("#content");return{loadPage:n=>{e.appendChild(n())},removeContentFromPage:()=>{for(;e.lastChild;)e.removeChild(e.lastChild)}}})()})()})();