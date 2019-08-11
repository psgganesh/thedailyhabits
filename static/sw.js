importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/5f7a4a523c7fd2aa2abd.js",
    "revision": "30598c0f3c84219598382ad659d2afed"
  },
  {
    "url": "/_nuxt/64811836605179d25aee.js",
    "revision": "517836bfbff1c0493994d0744946f65b"
  },
  {
    "url": "/_nuxt/be341293a44b3feac5f6.js",
    "revision": "5f3b6829217bafa9a4114e319e1b5305"
  },
  {
    "url": "/_nuxt/dbad17e52316e0d8ad07.js",
    "revision": "99ca4653154e2a767130a5d0d8fef437"
  },
  {
    "url": "/_nuxt/ed64aac122f6a4d5e1b7.js",
    "revision": "482ac996f58047e0db4b15df3740e016"
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
