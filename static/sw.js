importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/45403dc56573f648352f.js",
    "revision": "3cc4895ae23e3a25f2f66a2c38381362"
  },
  {
    "url": "/_nuxt/780db5db7d900f684478.js",
    "revision": "eb6815404a665b030ca438fd8be37504"
  },
  {
    "url": "/_nuxt/abd0037aa1792bf03ed2.js",
    "revision": "c3e890ba3ad508c9d5764e9eb256cb4e"
  },
  {
    "url": "/_nuxt/b7b55bfcde1b062f3d87.js",
    "revision": "6515ca1cf168723c41c960c68aa5a13b"
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
