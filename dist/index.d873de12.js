var e,t,n=globalThis,o={},s={},r=n.parcelRequirec6a0;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},n.parcelRequirec6a0=r),(0,r.register)("awTFk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>n,set:e=>n=e,enumerable:!0,configurable:!0});var n,o=new Map;n=function(e,t){for(var n=0;n<t.length-1;n+=2)o.set(t[n],{baseUrl:e,path:t[n+1]})}}),r("awTFk").register(new URL("",import.meta.url).toString(),JSON.parse('["g3LtT","index.d873de12.js","7iMMG","js/sw.js"]'));const i=document;class l{constructor(e,t={},n={}){this.options=Object.assign({},n,t),this._events=[],this.dom={el:this._setElement(e)}}toggle(e){let t=this.dom.el.classList;return void 0!==e?t[e?"remove":"add"]("si-off"):t.toggle("si-off"),this}on(e,t,n=null){return(n||this.dom.el).addEventListener(e,t=t.bind(this),!0),this._events.push({name:e,fn:t,el:n}),this}getElement(){return this.dom.el}remove(){this._events=this._events.filter(e=>(e.el||this.dom.el).removeEventListener(e.name,e.fn,!0)),this.dom.el.parentNode.removeChild(this.dom.el),this.dom=this.options=null}_setElement(e){if(!e&&!e.nodeType&&"string"!=typeof e)throw Error("Wrong element type provided!");return e.nodeType?e:(this.options.parent||i).querySelector(e)}_trigger(e,t=null){let n;"function"==typeof CustomEvent?n=new CustomEvent(e,{detail:t,bubbles:!0,cancelable:!0}):(n=i.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,t),this.dom.el.dispatchEvent(n)}}var a={items:[],display:"value",current:null,parent:null,maxHeight:0,sort:!0,order:"desc",placeholder:"Select items",more:"(+{X} more)"};const d=document;class c extends l{constructor(e,t={}){super(e,t,a),this.options.sort&&(this.options.items=this._sortItems(t.items)),this.options.items=t.items&&t.items.length?this._convertItems(t.items):[],t.current&&t.current.length&&(t.current=this._convertItems(t.current),this._setSelected(t.current)),this._renderInit(),this._setResultMessage(),this._bindEvents()}_bindEvents(){this.on("click",e=>{if(e.target.classList.contains("si-item"))return this._setCurrent(e)._setResultMessage();this.toggle()},this.el),this.on("click",e=>{if(!this.dom.el.contains(e.target))return this.toggle(!1)},d),this.on("keyup",e=>{("Escape"===e.key||27===e.keyCode)&&this.toggle(!1)},d)}getItems(){return Array.from(this.options.items.values())}getCurrent(e=""){let t=this.getItems().filter(e=>e.selected);return e?t.map(t=>t[e]):t}setCurrent(e){let t=Array.isArray(e);if(!e||t&&!e.length)return;let n=this.options.items,o=this.options.display;e=t?e:[e],(e=this._convertItems(e)).forEach(e=>{n.forEach((t,n)=>{t[o]===e[o]&&(this.dom.el.querySelector(`.si-item[data-key="${n}"]`).classList.add("si-selected"),t.selected=!0)})}),this._setResultMessage()}findItem(e){let t=this.options.display;return e=e.nodeName?e.dataset.value:e,this.options.items.find(n=>n[t]===e)}_setCurrent(e,t=!0){let n=e.target,o=parseInt(n.dataset.key,10),s=this.options.items.get(o);return s.selected=n.classList.toggle("si-selected"),this.options.items.set(o,s),t&&this._trigger("change",s),this}_setSelected(e){let t=this.options.items,n=this.options.display;e.forEach(e=>{t.forEach(t=>{t[n]===e[n]&&(t.selected=!0)})})}_setResultMessage(){let e=this.getCurrent(),t=this.options.display,n=e.length,o="";switch(n){case 1:o=e[0][t];break;case 0:o=this.options.placeholder;break;default:o=/({X})/.test(this.options.more)?`${e[0][t]} ${this.options.more.replace("{X}",n-1)}`:this.options.more}this.dom.result.classList[n?"add":"remove"]("si-selection"),this.dom.result.innerHTML=o}_convertItems(e=[]){let t=this.options.display,n=new Map,o=0;return e.forEach(e=>{"object"!=typeof e&&(e={[t]:e}),n.set(o++,e)}),n}_renderInit(){let e=d.createDocumentFragment();return this.dom.el.classList.add("si-off","si-wrap"),this.dom.result=e.appendChild(this._renderResultDiv()),e.appendChild(this._renderList()),this.dom.el.appendChild(e)}_renderResultDiv(){let e=d.createElement("div");return e.className="si-result",e}_renderList(){let e=d.createElement("div"),t=d.createElement("ul"),n=this.options.maxHeight;return e.className="si-list",n&&(e.style.maxHeight=n+"px"),t.innerHTML=this._renderListItems(),e.appendChild(t),e}_renderListItems(){let e=this.options.items,t=this.options.display,n="",o;return e.forEach((e,s)=>{o=e.selected?" si-selected":"",n+=`<li class="si-item${o}" data-key="${s}">${e[t]}</li>`}),n}_sortItems(){let e="desc"===this.options.order?1:-1,t=this.options.display;this.options.items.sort((n,o)=>n[t]<o[t]?-e:n[t]>o[t]?e:0)}}var u={};const p=Math.PI,m=1/3.2808399,h=1/1.852,f={UInt8:(e,t)=>e.getUint8(t,!1),UInt16LE:(e,t)=>e.getUint16(t,!0),UInt32LE:(e,t)=>e.getUint32(t,!0),FloatLE:(e,t)=>e.getFloat32(t,!0)};let g={blockSize:{offset:26,type:"UInt16LE",len:2},lastBlockSize:{offset:28,type:"UInt16LE",len:2},channel:{offset:30,type:"UInt16LE",len:2},packetSize:{offset:32,type:"UInt16LE",len:2},frameIndex:{offset:34,type:"UInt32LE",len:4},upperLimit:{offset:38,type:"FloatLE",len:4},lowerLimit:{offset:42,type:"FloatLE",len:4},frequency:{offset:51,type:"UInt8",len:1},time1:{offset:58,type:"UInt16LE",len:4},waterDepthFt:{offset:62,type:"FloatLE",len:4},keelDepthFt:{offset:66,type:"FloatLE",len:4},speedGpsKnots:{offset:98,type:"FloatLE",len:4},temperature:{offset:102,type:"FloatLE",len:4},raw_lowrance_longitude:{offset:106,type:"UInt32LE",len:4},raw_lowrance_latitude:{offset:110,type:"UInt32LE",len:4},speedWaterKnots:{offset:114,type:"FloatLE",len:4},courseOverGround:{offset:118,type:"FloatLE",len:4},altitudeFt:{offset:122,type:"FloatLE",len:4},heading:{offset:126,type:"FloatLE",len:4},flags:{offset:130,type:"UInt16LE",len:2},time:{offset:138,type:"UInt32LE",len:4}};u={convert_sl2:function(e,t){return new Promise((n,o)=>{let s,r=0,i=[];s=10;let l=new DataView(e,0),a=l.byteLength;console.log(a,s);var d=null,c=null,u=setInterval(()=>{if(s>=a){console.log("Found and decoded "+i.length+"data blocks."),clearInterval(u),n(i);return}if(r%100==0){var e=100*s/a;console.log(`${Math.round(e)}% done...`),t(Math.round(e))}r+=1;let v=function(e,t){let n={};for(let o in g)if(Object.hasOwnProperty.call(g,o)){let s=t+g[o].offset;g[o].len;let r=f[g[o].type];n[o]=r(e,s)}return n}(l,s);if(void 0!=v.raw_lowrance_latitude&&(v.latitude=(2*Math.atan(Math.exp(v.raw_lowrance_latitude/6356752.3142))-p/2)*(180/p),null==d&&(d=v.raw_lowrance_latitude),v.y_displacement=v.raw_lowrance_latitude-d),void 0!=v.raw_lowrance_longitude&&(v.longitude=v.raw_lowrance_longitude/6356752.3142*(180/p),v.longitude>180&&(v.longitude=(v.raw_lowrance_longitude-4294967295)/6356752.3142*(180/p)),null==c&&(c=v.raw_lowrance_longitude),v.x_displacement=v.raw_lowrance_longitude-c),void 0!=v.waterDepthFt&&(v.waterDepthFt*=-1,v.waterDepthM=v.waterDepthFt*m),void 0!=v.keelDepthFt&&(v.keelDepthFt*=-1,v.keelDepthM=v.keelDepthFt*m),void 0!=v.altitudeFt&&(v.altitudeM=v.altitudeFt*m),void 0!=v.speedGpsKnots&&(v.speedGpsKm=v.speedGpsKnots*h),0==v.blockSize){alert("ABORTING! (sl2 file may be corrupt): blockSize = 0 found which will otherwise lead to endless loop."),o("Corrupt sl2 file");return}s+=v.blockSize,i.push(v)},0)})}};var v={};e=function(){return function e(t,n,o){var s,r,i=window,l="application/octet-stream",a=o||l,d=t,c=!n&&!o&&d,u=document.createElement("a"),p=function(e){return String(e)},m=i.Blob||i.MozBlob||i.WebKitBlob||p,h=n||"download";if(m=m.call?m.bind(i):Blob,"true"===String(this)&&(a=(d=[d,a])[0],d=d[1]),c&&c.length<2048&&(h=c.split("/").pop().split("?")[0],u.href=c,-1!==u.href.indexOf(c))){var f=new XMLHttpRequest;return f.open("GET",c,!0),f.responseType="blob",f.onload=function(t){e(t.target.response,h,l)},setTimeout(function(){f.send()},0),f}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(d)){if(!(d.length>2096103.424&&m!==p))return navigator.msSaveBlob?navigator.msSaveBlob(w(d),h):_(d);a=(d=w(d)).type||l}else if(/([\x80-\xff])/.test(d)){for(var g=0,v=new Uint8Array(d.length),y=v.length;g<y;++g)v[g]=d.charCodeAt(g);d=new m([v],{type:a})}function w(e){for(var t=e.split(/[:;,]/),n=t[1],o=("base64"==t[e.indexOf("charset")>0?3:2]?atob:decodeURIComponent)(t.pop()),s=o.length,r=0,i=new Uint8Array(s);r<s;++r)i[r]=o.charCodeAt(r);return new m([i],{type:n})}function _(e,t){if("download"in u)return u.href=e,u.setAttribute("download",h),u.className="download-js-link",u.innerHTML="downloading...",u.style.display="none",u.addEventListener("click",function(e){e.stopPropagation(),this.removeEventListener("click",arguments.callee)}),document.body.appendChild(u),setTimeout(function(){u.click(),document.body.removeChild(u),!0===t&&setTimeout(function(){i.URL.revokeObjectURL(u.href)},250)},66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,l)),window.open(e)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=e),!0;var n=document.createElement("iframe");document.body.appendChild(n),!t&&/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,l)),n.src=e,setTimeout(function(){document.body.removeChild(n)},333)}if(s=d instanceof m?d:new m([d],{type:a}),navigator.msSaveBlob)return navigator.msSaveBlob(s,h);if(i.URL)_(i.URL.createObjectURL(s),!0);else{if("string"==typeof s||s.constructor===p)try{return _("data:"+a+";base64,"+i.btoa(s))}catch(e){return _("data:"+a+","+encodeURIComponent(s))}(r=new FileReader).onload=function(e){_(this.result)},r.readAsDataURL(s)}return!0}},"function"==typeof define&&define.amd?define([],e):v=e();var y={};function w(){return -1!=navigator.userAgent.indexOf("Windows")?"\r\n":"\n"}function _(e){var n=e.target.files[0],o=new FileReader;o.onload=function(e){var o=e.target.result;console.log("Loaded file: ",o),document.getElementById("Info_Text").style.display="none",document.getElementById("input").disabled="true";var s=document.getElementById("message"),r=document.getElementById("progress-bar");s.innerHTML="Converting... (May make page unresponsive)",r.style.display="block",u.convert_sl2(o,e=>{console.log("Progress: ",e),s.innerHTML=`Converting... ${e}% done`,r.value=e/100}).then(e=>{var o;r.style.display="none",document.getElementById("message").innerHTML="Done!",function(e){var n=[];for(var o in e[0])n.push(o);t=new c("#Column_Selector",{items:n,current:["latitude","longitude","waterDepthM"],sort:!1,placeholder:"Select columns to include"})}(e),(o=document.getElementById("download_button")).parentNode.style.display="block",o.onclick=function(){var o,s,r=document.getElementById("Output_Format").value;"csv"==r?(o=function(e,t){let n=Object.keys(e[0]).filter(e=>!0==t[e]).join(",")+w();for(var o=0;o<e.length;o++)n+=Object.keys(e[o]).filter(e=>!0==t[e]).map(t=>e[o][t].toString()).join(",")+w();return n}(e,function(){for(var e=t.getCurrent(),n={},o=0;o<e.length;o++)n[e[o].value]=!0;return n}()),v(o,n.name+"_converted.csv","text/csv")):"kml"==r&&(s=function(e){let t=`<?xml version="1.0" encoding="UTF-8"?>
    <kml xmlns="http://www.opengis.net/kml/2.2">
    <Document>
      <name>SonarConverted.kml</name>
      <open>1</open>
      <Placemark>
        <name>SonarPath</name>
        <LineString>
          <extrude>1</extrude>
          <tessellate>1</tessellate>
          <altitudeMode>relativeToGround</altitudeMode>
          <coordinates>
          `;for(var n=0;n<e.length;n++)t+=["longitude","latitude","waterDepthM"].map(t=>e[n][t].toString()).join(",")+" ";return t+`
                </coordinates>
            </LineString>
        </Placemark>
    </Document>
    </kml>
    `}(e),v(s,n.name+"_converted.kml","application/vnd.google-earth.kml+xml"))}}).catch(e=>{console.error("Conversion failed: ",e),r.style.display="none",s.innerHTML="Conversion failed. Please reload the page and try again."})},o.readAsArrayBuffer(n)}y=new URL("js/sw.js",import.meta.url).toString(),"serviceWorker"in navigator&&navigator.serviceWorker.register(y).then(()=>{console.log("Service Worker Registered")}),window.addEventListener("load",function(){console.log("Page loaded"),document.getElementById("input").addEventListener("change",_,!1)});
//# sourceMappingURL=index.d873de12.js.map
