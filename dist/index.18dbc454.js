// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6yMdq":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1SICI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _rubyConversionJs = require("./ruby_conversion.js");
var _rubyConversionJsDefault = parcelHelpers.interopDefault(_rubyConversionJs);
var _downloadMinJs = require("./download.min.js");
var _downloadMinJsDefault = parcelHelpers.interopDefault(_downloadMinJs);
// var MultiSelect = require('./multi-select-umd.js')
var _multiSelect = require("@dotburo/multi-select");
var _multiSelectDefault = parcelHelpers.interopDefault(_multiSelect);
// Register service worker to control making site work offline
if ("serviceWorker" in navigator) navigator.serviceWorker.register(require("a3ece347c1138ce")).then(()=>{
    console.log("Service Worker Registered");
});
window.addEventListener("load", function() {
    console.log("Page loaded");
    const inputElement = document.getElementById("input");
    inputElement.addEventListener("change", handleFiles, false);
});
function setMessage(message) {
    document.getElementById("message").innerHTML = message;
}
function getLinebreak() {
    if (navigator.userAgent.indexOf("Windows") != -1) return "\r\n";
    return "\n";
}
var columnSelector;
function addColumnSelctionPicker(resultObject) {
    // var selectParent = document.getElementById("Column_Selector")
    var options = [];
    for(var key in resultObject[0])options.push(key);
    columnSelector = new (0, _multiSelectDefault.default)("#Column_Selector", {
        items: options,
        current: [
            "latitude",
            "longitude",
            "waterDepthM"
        ],
        sort: false,
        placeholder: "Select columns to include"
    });
}
// function getSelectValues(selectElem) {
//     var result = [];
//     var options = selectElem && selectElem.options;
//     var opt;
//     for (var i = 0, iLen = options.length; i < iLen; i++) {
//         opt = options[i];
//         if (opt.selected) {
//             result.push(opt.value || opt.text);
//         }
//     }
//     return result;
// }
function getSelectedColumns() {
    // var select = document.getElementById("mySelect")
    var selectedOptions = columnSelector.getCurrent();
    var result = {};
    for(var i = 0; i < selectedOptions.length; i++)result[selectedOptions[i].value] = true;
    return result;
}
function resultToCSV(resultObject, columsToInclude) {
    let columns = Object.keys(resultObject[0]).filter((rowName)=>{
        return columsToInclude[rowName] == true;
    });
    let output_csv_string = columns.join(",") + getLinebreak();
    // Finally every row is written to the csv string:
    for(var i = 0; i < resultObject.length; i++)output_csv_string += Object.keys(resultObject[i]).filter((rowName)=>{
        return columsToInclude[rowName] == true;
    }).map((keyName)=>{
        return resultObject[i][keyName].toString();
    }).join(",") + getLinebreak();
    return output_csv_string;
}
function resultToKML(resultObject) {
    let output_kml_string = `<?xml version="1.0" encoding="UTF-8"?>
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
          `;
    // every row is written to the kml string:
    for(var i = 0; i < resultObject.length; i++)output_kml_string += [
        "longitude",
        "latitude",
        "waterDepthM"
    ].map((keyName)=>{
        // if (keyName == "waterDepthM") resultObject[i][keyName] *= -1;
        return resultObject[i][keyName].toString();
    }).join(",") + ` `; // space char
    output_kml_string += `
                </coordinates>
            </LineString>
        </Placemark>
    </Document>
    </kml>
    `;
    return output_kml_string;
}
function handleFiles(evt) {
    var files = evt.target.files;
    var file = files[0];
    function downloadCSV(string) {
        (0, _downloadMinJsDefault.default)(string, file.name + "_converted.csv", "text/csv");
    }
    function downloadKML(string) {
        (0, _downloadMinJsDefault.default)(string, file.name + "_converted.kml", "application/vnd.google-earth.kml+xml");
    }
    function conversionCompleteHandler(output) {
        setMessage("Done!");
        addColumnSelctionPicker(output);
        var button = document.getElementById("download_button");
        button.parentNode.style.display = "block";
        button.onclick = function() {
            var output_format = document.getElementById("Output_Format").value;
            // if csv is the selected format:
            if (output_format == "csv") downloadCSV(resultToCSV(output, getSelectedColumns()));
            else if (output_format == "kml") downloadKML(resultToKML(output));
        };
    }
    var jsFileReader = new FileReader();
    jsFileReader.onload = function(event) {
        var file_contents = event.target.result;
        console.log("Loaded file: ", file_contents);
        document.getElementById("Info_Text").style.display = "none";
        document.getElementById("input").disabled = "true";
        var message_el = document.getElementById("message");
        var progress_el = document.getElementById("progress-bar");
        message_el.innerHTML = "Converting... (May make page unresponsive)";
        progress_el.style.display = "block";
        setTimeout(function() {
            (0, _rubyConversionJsDefault.default)(file_contents, async (percent_done)=>{
                message_el.innerHTML = `Converting... ${percent_done}% done`;
                progress_el.value = percent_done / 100.0;
                await new Promise((r)=>setTimeout(r, 0));
            }).then((output)=>{
                progress_el.style.display = "none";
                conversionCompleteHandler(output);
            }).catch((error)=>{
                console.error("Conversion failed: ", error);
                progress_el.style.display = "none";
                message_el.innerHTML = "Conversion failed. Please reload the page and try again.";
            });
        }, 1);
    };
    jsFileReader.readAsArrayBuffer(file);
}
module.exports = {};

},{"@dotburo/multi-select":"j37b8","a3ece347c1138ce":"fyFKB","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC","./ruby_conversion.js":"5iQEg","./download.min.js":"8WIVf"}],"j37b8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _domComponentJs = require("./dom-component.js");
var _domComponentJsDefault = parcelHelpers.interopDefault(_domComponentJs);
var _defaultsJs = require("./defaults.js");
var _defaultsJsDefault = parcelHelpers.interopDefault(_defaultsJs);
const d = document;
class MultiSelect extends (0, _domComponentJsDefault.default) {
    constructor(element, options = {}){
        super(element, options, (0, _defaultsJsDefault.default));
        if (this.options.sort) this.options.items = this._sortItems(options.items);
        this.options.items = options.items && options.items.length ? this._convertItems(options.items) : [];
        if (options.current && options.current.length) {
            options.current = this._convertItems(options.current);
            this._setSelected(options.current);
        }
        this._renderInit();
        this._setResultMessage();
        this._bindEvents();
    }
    /**
     * Bind the delegated dom events
     * @private
     */ _bindEvents() {
        // Select or just unfold the options
        this.on("click", (e)=>{
            if (e.target.classList.contains("si-item")) return this._setCurrent(e)._setResultMessage();
            this.toggle();
        }, this.el);
        // Close the dropdown if the user click outside of it
        this.on("click", (e)=>{
            if (!this.dom.el.contains(e.target)) return this.toggle(false);
        }, d);
        // Fold up the dropdown if the user presses the Escape key
        this.on("keyup", (e)=>{
            if (e.key === "Escape" || e.keyCode === 27) this.toggle(false);
        }, d);
    }
    /**
     * Get all items in the list
     * @return {Object[]}
     * @public
     */ getItems() {
        return Array.from(this.options.items.values());
    }
    /**
     * Return the current field value object
     * @param {string} key Only return a specific value from each current item
     * @return {[]|null}
     * @public
     */ getCurrent(key = "") {
        let items = this.getItems().filter((i)=>i.selected);
        return !key ? items : items.map((i)=>i[key]);
    }
    /**
     * @todo do better: setCurrent, _setCurrent & _setSelected ...
     * @param {*|!object} currents
     * @public
     */ setCurrent(currents) {
        const isArray = Array.isArray(currents);
        if (!currents || isArray && !currents.length) return;
        let items = this.options.items, display = this.options.display;
        currents = isArray ? currents : [
            currents
        ];
        currents = this._convertItems(currents);
        currents.forEach((current)=>{
            items.forEach((item, key)=>{
                if (item[display] === current[display]) {
                    this.dom.el.querySelector(`.si-item[data-key="${key}"]`).classList.add("si-selected");
                    item.selected = true;
                }
            });
        });
        this._setResultMessage();
    }
    /**
     * Find an item in the list
     * @param {HTMLElement|String|Number} item
     * @return {{}}
     * @public
     */ findItem(item) {
        let display = this.options.display;
        item = item.nodeName ? item.dataset.value : item;
        return this.options.items.find((i)=>i[display] === item);
    }
    /**
     *
     * @param {Event} e
     * @param {boolean} trigger
     * @private
     */ _setCurrent(e, trigger = true) {
        let el = e.target, key = parseInt(el.dataset.key, 10), item = this.options.items.get(key);
        item.selected = el.classList.toggle("si-selected");
        this.options.items.set(key, item);
        if (trigger) this._trigger("change", item);
        return this;
    }
    /**
     * Loop over the passed array to set selected items
     * @param {array} currents
     * @private
     */ _setSelected(currents) {
        let items = this.options.items, display = this.options.display;
        currents.forEach((current)=>{
            items.forEach((item)=>{
                if (item[display] === current[display]) item.selected = true;
            });
        });
    }
    /**
     * Display selection result message
     * @private
     */ _setResultMessage() {
        let selection = this.getCurrent(), display = this.options.display, count = selection.length, result = "";
        switch(count){
            case 1:
                result = selection[0][display];
                break;
            case 0:
                result = this.options.placeholder;
                break;
            default:
                result = /({X})/.test(this.options.more) ? `${selection[0][display]} ${this.options.more.replace("{X}", count - 1)}` : this.options.more;
        }
        this.dom.result.classList[count ? "add" : "remove"]("si-selection");
        this.dom.result.innerHTML = result;
    }
    /**
     * Make an array of object if needed
     * @todo better 'selected' checking: what if `current` is array of objects
     * @param {Array} items
     * @return {Map<Object>}
     * @private
     */ _convertItems(items = []) {
        let display = this.options.display, map = new Map(), key = 0;
        items.forEach((item)=>{
            if (typeof item !== "object") item = {
                [display]: item
            };
            map.set(key++, item);
        });
        return map;
    }
    /**
     * Create the HTML upon instantiation
     * @return {Node}
     * @private
     */ _renderInit() {
        let frag = d.createDocumentFragment();
        this.dom.el.classList.add("si-off", "si-wrap");
        this.dom.result = frag.appendChild(this._renderResultDiv());
        frag.appendChild(this._renderList());
        return this.dom.el.appendChild(frag);
    }
    /**
     * Create the selection result element
     * @return {HTMLElement}
     * @private
     */ _renderResultDiv() {
        let el = d.createElement("div");
        el.className = "si-result";
        return el;
    }
    /**
     * Create the list element
     * @return {HTMLElement}
     * @private
     */ _renderList() {
        let wrap = d.createElement("div"), el = d.createElement("ul"), maxHeight = this.options.maxHeight;
        wrap.className = "si-list";
        if (maxHeight) wrap.style.maxHeight = maxHeight + "px";
        el.innerHTML = this._renderListItems();
        wrap.appendChild(el);
        return wrap;
    }
    /**
     * Create the list items
     * @return {String}
     * @private
     */ _renderListItems() {
        let items = this.options.items, display = this.options.display, list = "", selected;
        items.forEach((item, key)=>{
            selected = item.selected ? " si-selected" : "";
            list += `<li class="si-item${selected}" data-key="${key}">${item[display]}</li>`;
        });
        return list;
    }
    /**
     * Rearrange the list
     * @private
     */ _sortItems() {
        let order = this.options.order === "desc" ? 1 : -1, display = this.options.display;
        this.options.items.sort((a, b)=>{
            if (a[display] < b[display]) return -order;
            if (a[display] > b[display]) return order;
            return 0;
        });
    }
}
exports.default = MultiSelect;

},{"./dom-component.js":"7XDx4","./defaults.js":"iiQFv","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"7XDx4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const d = document;
class DomComponent {
    constructor(element, options = {}, defaults = {}){
        this.options = Object.assign({}, defaults, options);
        this._events = [];
        this.dom = {
            el: this._setElement(element)
        };
    }
    /**
     * Add/remove the toggling className
     * @param {Boolean|undefined} show
     * @return DomComponent
     */ toggle(show) {
        let classList = this.dom.el.classList;
        if (show !== undefined) {
            classList[show ? "remove" : "add"]("si-off");
            return this;
        }
        classList.toggle("si-off");
        return this;
    }
    /**
     * Bind a (delegated) event
     * @param {String} event
     * @param {Function} fn
     * @param {HTMLElement|Document} el
     * @return DomComponent
     */ on(event, fn, el = null) {
        (el || this.dom.el).addEventListener(event, fn = fn.bind(this), true);
        this._events.push({
            name: event,
            fn: fn,
            el: el
        });
        return this;
    }
    /**
     * Return the main wrapping element
     * @return {Element}
     */ getElement() {
        return this.dom.el;
    }
    /**
     * Unbind all events and nullify references
     * @return void
     */ remove() {
        this._events = this._events.filter((event)=>{
            return (event.el || this.dom.el).removeEventListener(event.name, event.fn, true);
        });
        this.dom.el.parentNode.removeChild(this.dom.el);
        this.dom = this.options = null;
    }
    /**
     * Query the element in the DOM if its a string
     * @param {Element|String} el
     * @return {Element|null}
     * @protected
     */ _setElement(el) {
        if (!el && !el.nodeType && typeof el !== "string") throw new Error("Wrong element type provided!");
        if (el.nodeType) return el;
        return (this.options.parent || d).querySelector(el);
    }
    /**
     * Communicate changes
     * @param {String} name
     * @param {Object|null} detail
     * @protected
     */ _trigger(name, detail = null) {
        let event;
        if (typeof CustomEvent === "function") event = new CustomEvent(name, {
            detail: detail,
            bubbles: true,
            cancelable: true
        });
        else {
            event = d.createEvent("CustomEvent");
            event.initCustomEvent(name, true, true, detail);
        }
        this.dom.el.dispatchEvent(event);
    }
}
exports.default = DomComponent;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"6elpC":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"iiQFv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    items: [],
    display: "value",
    current: null,
    parent: null,
    maxHeight: 0,
    sort: true,
    order: "desc",
    placeholder: "Select items",
    more: "(+{X} more)"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"fyFKB":[function(require,module,exports) {
module.exports = require("42e79872a4924430").getBundleURL("10Mjw") + "js/sw.js" + "?" + Date.now();

},{"42e79872a4924430":"bKRuN"}],"bKRuN":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"5iQEg":[function(require,module,exports) {
// Constants:
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const POLAR_EARTH_RADIUS = 6356752.3142;
const PI = Math.PI;
const MAX_UINT4 = 4294967295;
const FT2M = 1 / 3.2808399 // factor for feet to meter conversions
;
const KN2KM = 1 / 1.852 // factor for knots to km conversions
;
// Datatypes:
// ===================================================================================================
// Type    Definition                                          Directive for Ruby's String#unpack
// ---------------------------------------------------------------------------------------------------
// byte 	 UInt8  (16-bit unsigned int)                                      C
// short  UInt16LE  (16-bit unsigned int,littleEndian)                         v
// int 	  UInt32LE  (32-bit unsigned int,littleEndian)                         V
// float   FloatLE  (32 bits IEEE 754 floating point number,littleEndian)      e
// flags  UInt16LE  (16-bit unsigned int,littleEndian)                         v
// ---------------------------------------------------------------------------------------------------
const typeReaderFunctions = {
    "UInt8": (dataView, offset)=>dataView.getUint8(offset, false),
    "UInt16LE": (dataView, offset)=>dataView.getUint16(offset, true),
    "UInt32LE": (dataView, offset)=>dataView.getUint32(offset, true),
    "FloatLE": (dataView, offset)=>dataView.getFloat32(offset, true)
} //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView
;
// Available block attributes, their offset inside each block and their type:
let block_def = {
    "blockSize": {
        "offset": 26,
        "type": "UInt16LE",
        "len": 2
    },
    "lastBlockSize": {
        "offset": 28,
        "type": "UInt16LE",
        "len": 2
    },
    "channel": {
        "offset": 30,
        "type": "UInt16LE",
        "len": 2
    },
    "packetSize": {
        "offset": 32,
        "type": "UInt16LE",
        "len": 2
    },
    "frameIndex": {
        "offset": 34,
        "type": "UInt32LE",
        "len": 4
    },
    "upperLimit": {
        "offset": 38,
        "type": "FloatLE",
        "len": 4
    },
    "lowerLimit": {
        "offset": 42,
        "type": "FloatLE",
        "len": 4
    },
    "frequency": {
        "offset": 51,
        "type": "UInt8",
        "len": 1
    },
    "time1": {
        "offset": 58,
        "type": "UInt16LE",
        "len": 4
    },
    "waterDepthFt": {
        "offset": 62,
        "type": "FloatLE",
        "len": 4
    },
    "keelDepthFt": {
        "offset": 66,
        "type": "FloatLE",
        "len": 4
    },
    "speedGpsKnots": {
        "offset": 98,
        "type": "FloatLE",
        "len": 4
    },
    "temperature": {
        "offset": 102,
        "type": "FloatLE",
        "len": 4
    },
    "raw_lowrance_longitude": {
        "offset": 106,
        "type": "UInt32LE",
        "len": 4
    },
    "raw_lowrance_latitude": {
        "offset": 110,
        "type": "UInt32LE",
        "len": 4
    },
    "speedWaterKnots": {
        "offset": 114,
        "type": "FloatLE",
        "len": 4
    },
    "courseOverGround": {
        "offset": 118,
        "type": "FloatLE",
        "len": 4
    },
    "altitudeFt": {
        "offset": 122,
        "type": "FloatLE",
        "len": 4
    },
    "heading": {
        "offset": 126,
        "type": "FloatLE",
        "len": 4
    },
    "flags": {
        "offset": 130,
        "type": "UInt16LE",
        "len": 2
    },
    "time": {
        "offset": 138,
        "type": "UInt32LE",
        "len": 4
    } // unknown resolution, unknown epoche
};
function readBlock(dataView, block_offset) {
    let output = {};
    for(const key in block_def)if (Object.hasOwnProperty.call(block_def, key)) {
        const value_byte_offset = block_offset + block_def[key].offset;
        const length = block_def[key].len;
        const type = block_def[key].type;
        const typeReader = typeReaderFunctions[type];
        output[key] = typeReader(dataView, value_byte_offset);
    // console.log(`${key} is ${value_byte_offset}`)
    }
    return output;
}
function getLinebreak() {
    if (navigator.userAgent.indexOf("Windows") != -1) return "\r\n";
    else return "\n";
}
async function convert_sl2(sl2_file_buffer, progress_callback) {
    let alive_counter = 0 // counter to regularly show, that the script is still running
    ;
    let output_rows = [];
    let block_offset = 0;
    block_offset += 10 // Startindex of the first block (i.e. skip the 10 Bytes of Header)
    ;
    const dataView = new DataView(sl2_file_buffer, 0);
    const sl2_file_size = dataView.byteLength;
    console.log(sl2_file_size, block_offset);
    var starting_laurence_latitude = null, starting_lowrance_longitude = null;
    while(block_offset < sl2_file_size){
        if (alive_counter % 500 == 0) {
            var percent = 100.0 * block_offset / sl2_file_size;
            await progress_callback(Math.round(percent));
        }
        alive_counter += 1;
        let outputRow = readBlock(dataView, block_offset);
        // A few conversions into non-proprietary or metric formats:
        // =========================================================
        if (outputRow["raw_lowrance_latitude"] != undefined) {
            outputRow["latitude"] = (2 * Math.atan(Math.exp(outputRow["raw_lowrance_latitude"] / POLAR_EARTH_RADIUS)) - PI / 2) * (180 / PI);
            // Calculate the displacement of the current point from the starting point using the raw laurence lat values:
            if (starting_laurence_latitude == null) starting_laurence_latitude = outputRow["raw_lowrance_latitude"];
            outputRow["y_displacement"] = outputRow["raw_lowrance_latitude"] - starting_laurence_latitude;
        }
        if (outputRow["raw_lowrance_longitude"] != undefined) {
            outputRow["longitude"] = outputRow["raw_lowrance_longitude"] / POLAR_EARTH_RADIUS * (180 / PI);
            // [ Caution! ] If the expected longitude (in decimal degrees) is *negative*, use the following line instead:
            if (outputRow["longitude"] > 180) outputRow["longitude"] = (outputRow["raw_lowrance_longitude"] - MAX_UINT4) / POLAR_EARTH_RADIUS * (180 / PI);
            // Calculate the displacement of the current point from the starting point using the raw laurence lon values:
            if (starting_lowrance_longitude == null) starting_lowrance_longitude = outputRow["raw_lowrance_longitude"];
            outputRow["x_displacement"] = outputRow["raw_lowrance_longitude"] - starting_lowrance_longitude;
        }
        if (outputRow["waterDepthFt"] != undefined) {
            outputRow["waterDepthFt"] *= -1;
            outputRow["waterDepthM"] = outputRow["waterDepthFt"] * FT2M;
        }
        if (outputRow["keelDepthFt"] != undefined) {
            outputRow["keelDepthFt"] *= -1;
            outputRow["keelDepthM"] = outputRow["keelDepthFt"] * FT2M;
        }
        if (outputRow["altitudeFt"] != undefined) outputRow["altitudeM"] = outputRow["altitudeFt"] * FT2M;
        if (outputRow["speedGpsKnots"] != undefined) outputRow["speedGpsKm"] = outputRow["speedGpsKnots"] * KN2KM;
        // console.log("Read block:", outputRow)
        if (outputRow["blockSize"] == 0) {
            alert("ABORTING! (sl2 file may be corrupt): blockSize = 0 found which will otherwise lead to endless loop.");
            break;
        }
        block_offset += outputRow["blockSize"];
        // // Save only one set of data per GPS position to csv-file:
        // unless output_h[[h['latitude'], h['longitude']]]
        // output_h[[h['latitude'], h['longitude']]] = h['waterDepthM']
        output_rows.push(outputRow);
    }
    // When finished, output some statistics:
    console.log("Found and decoded " + output_rows.length + "data blocks.");
    return output_rows;
}
exports.default = convert_sl2;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"8WIVf":[function(require,module,exports) {
//download.js v4.21, by dandavis; 2008-2018. [MIT] see http://danml.com/download.html for tests/usage
(function(root, factory) {
    typeof define == "function" && define.amd ? define([], factory) : module.exports = factory();
})(this, function() {
    return function download(data, strFileName, strMimeType) {
        var self = window, defaultMime = "application/octet-stream", mimeType = strMimeType || defaultMime, payload = data, url = !strFileName && !strMimeType && payload, anchor = document.createElement("a"), toString = function(a) {
            return String(a);
        }, myBlob = self.Blob || self.MozBlob || self.WebKitBlob || toString, fileName = strFileName || "download", blob, reader;
        myBlob = myBlob.call ? myBlob.bind(self) : Blob, String(this) === "true" && (payload = [
            payload,
            mimeType
        ], mimeType = payload[0], payload = payload[1]);
        if (url && url.length < 2048) {
            fileName = url.split("/").pop().split("?")[0], anchor.href = url;
            if (anchor.href.indexOf(url) !== -1) {
                var ajax = new XMLHttpRequest;
                return ajax.open("GET", url, !0), ajax.responseType = "blob", ajax.onload = function(e) {
                    download(e.target.response, fileName, defaultMime);
                }, setTimeout(function() {
                    ajax.send();
                }, 0), ajax;
            }
        }
        if (/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(payload)) {
            if (!(payload.length > 2096103.424 && myBlob !== toString)) return navigator.msSaveBlob ? navigator.msSaveBlob(dataUrlToBlob(payload), fileName) : saver(payload);
            payload = dataUrlToBlob(payload), mimeType = payload.type || defaultMime;
        } else if (/([\x80-\xff])/.test(payload)) {
            var i = 0, tempUiArr = new Uint8Array(payload.length), mx = tempUiArr.length;
            for(i; i < mx; ++i)tempUiArr[i] = payload.charCodeAt(i);
            payload = new myBlob([
                tempUiArr
            ], {
                type: mimeType
            });
        }
        blob = payload instanceof myBlob ? payload : new myBlob([
            payload
        ], {
            type: mimeType
        });
        function dataUrlToBlob(strUrl) {
            var parts = strUrl.split(/[:;,]/), type = parts[1], indexDecoder = strUrl.indexOf("charset") > 0 ? 3 : 2, decoder = parts[indexDecoder] == "base64" ? atob : decodeURIComponent, binData = decoder(parts.pop()), mx = binData.length, i = 0, uiArr = new Uint8Array(mx);
            for(i; i < mx; ++i)uiArr[i] = binData.charCodeAt(i);
            return new myBlob([
                uiArr
            ], {
                type: type
            });
        }
        function saver(url, winMode) {
            if ("download" in anchor) return anchor.href = url, anchor.setAttribute("download", fileName), anchor.className = "download-js-link", anchor.innerHTML = "downloading...", anchor.style.display = "none", anchor.addEventListener("click", function(e) {
                e.stopPropagation(), this.removeEventListener("click", arguments.callee);
            }), document.body.appendChild(anchor), setTimeout(function() {
                anchor.click(), document.body.removeChild(anchor), winMode === !0 && setTimeout(function() {
                    self.URL.revokeObjectURL(anchor.href);
                }, 250);
            }, 66), !0;
            if (/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) return /^data:/.test(url) && (url = "data:" + url.replace(/^data:([\w\/\-\+]+)/, defaultMime)), window.open(url) || confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.") && (location.href = url), !0;
            var f = document.createElement("iframe");
            document.body.appendChild(f), !winMode && /^data:/.test(url) && (url = "data:" + url.replace(/^data:([\w\/\-\+]+)/, defaultMime)), f.src = url, setTimeout(function() {
                document.body.removeChild(f);
            }, 333);
        }
        if (navigator.msSaveBlob) return navigator.msSaveBlob(blob, fileName);
        if (self.URL) saver(self.URL.createObjectURL(blob), !0);
        else {
            if (typeof blob == "string" || blob.constructor === toString) try {
                return saver("data:" + mimeType + ";base64," + self.btoa(blob));
            } catch (y) {
                return saver("data:" + mimeType + "," + encodeURIComponent(blob));
            }
            reader = new FileReader, reader.onload = function(e) {
                saver(this.result);
            }, reader.readAsDataURL(blob);
        }
        return !0;
    };
});

},{}]},["6yMdq","1SICI"], "1SICI", "parcelRequirec6a0")

//# sourceMappingURL=index.18dbc454.js.map
