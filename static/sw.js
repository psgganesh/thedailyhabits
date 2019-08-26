importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/5e542703886479f57032.js",
    "revision": "a36908db13b73aa605fc9a8914861516"
  },
  {
    "url": "/_nuxt/75267963b9967371c707.js",
    "revision": "4bebc2fe4dbe6ff33a079e33e1ff1a82"
  },
  {
    "url": "/_nuxt/7ec6e40d1f39cd227c46.js",
    "revision": "7c914cd87ab7afd508cd6385c22246d2"
  },
  {
    "url": "/_nuxt/9537532932214c35e9d4.js",
    "revision": "91414b43bd034eb1a440a6803b2f6818"
  },
  {
    "url": "/_nuxt/aff6d2962c74776585c8.js",
    "revision": "139c67829412c6121752bf67b7e504d7"
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
