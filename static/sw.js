importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/131030165c64d8a77692.js",
    "revision": "c15d1910d61487fa10c332816e6870c7"
  },
  {
    "url": "/_nuxt/5a403a6a84954b36c948.js",
    "revision": "12bfe5868ef787cc06202af33b092c1c"
  },
  {
    "url": "/_nuxt/69a7a39ba25f2c19b854.js",
    "revision": "fce775bdfa6133e31349d3c8cbd9db06"
  },
  {
    "url": "/_nuxt/a27a3a918a7043d8ab76.js",
    "revision": "3fb8334ec3c0e737c230795ddb021726"
  },
  {
    "url": "/_nuxt/bd1a8fcff4630d41da7f.js",
    "revision": "46135883a534c747ddb5a7883af7b389"
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
