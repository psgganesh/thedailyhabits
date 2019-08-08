importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/3d72d9ab86efb7a6396a.js",
    "revision": "b650a7550c8d3890b2c1d984608f47db"
  },
  {
    "url": "/_nuxt/3eaa409b9bd4415dd42b.js",
    "revision": "4ca2ba086f56da8920fe53fd716cadf8"
  },
  {
    "url": "/_nuxt/5f7a4a523c7fd2aa2abd.js",
    "revision": "30598c0f3c84219598382ad659d2afed"
  },
  {
    "url": "/_nuxt/be341293a44b3feac5f6.js",
    "revision": "5f3b6829217bafa9a4114e319e1b5305"
  },
  {
    "url": "/_nuxt/dbad17e52316e0d8ad07.js",
    "revision": "99ca4653154e2a767130a5d0d8fef437"
  }
], {
  "cacheId": "atomichabits",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
