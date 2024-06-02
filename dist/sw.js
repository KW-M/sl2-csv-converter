importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js");
if (workbox) workbox.routing.registerRoute((url)=>true, new workbox.strategies.NetworkFirst({
    cacheName: "cache-store"
}));

//# sourceMappingURL=sw.js.map
