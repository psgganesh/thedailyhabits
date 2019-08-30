importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/3497b532392aea979d61.js",
    "revision": "763f87db46444189e78a1ad1914ba6d9"
  },
  {
    "url": "/_nuxt/45cc3c1fc774cba7e88e.js",
    "revision": "eff78f0a7d4e008ea0076b7e671075f8"
  },
  {
    "url": "/_nuxt/5c289c5288e13739967e.js",
    "revision": "c5ab31b2d75db1e2a6b2996bf1941d44"
  },
  {
    "url": "/_nuxt/75267963b9967371c707.js",
    "revision": "4bebc2fe4dbe6ff33a079e33e1ff1a82"
  },
  {
    "url": "/_nuxt/9537532932214c35e9d4.js",
    "revision": "91414b43bd034eb1a440a6803b2f6818"
  }
], {
  "cacheId": "nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
