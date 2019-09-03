importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0632f7486c4f2e833aa3.js",
    "revision": "83e537a55f422a79a3177b6750e252b7"
  },
  {
    "url": "/_nuxt/08690ea0ce170c6c6a5e.js",
    "revision": "eece5a2a3656602284559810487e56da"
  },
  {
    "url": "/_nuxt/0b634fa583614cb2e75e.js",
    "revision": "d22da909d6db48f0a844ef92dd3a30c0"
  },
  {
    "url": "/_nuxt/4c04f8fb0106e4bc27c0.js",
    "revision": "b4cfac2cf0e7d2b6bcad05d447ba3892"
  },
  {
    "url": "/_nuxt/5afeb4bd2e1aac803df3.js",
    "revision": "8719a800f8ead025fbf03371466e5d8e"
  },
  {
    "url": "/_nuxt/d719ab58e14eb27e6266.js",
    "revision": "dfc1ef4f7245f9346d92acd86174ca2e"
  },
  {
    "url": "/_nuxt/f7fd23e8e19f734e315a.js",
    "revision": "671d4e50c14f4da580222357117447ad"
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
