importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/356cf04f8ac414da39ad.js",
    "revision": "a6d149e98d90ba4a7f0aeda426c72f94"
  },
  {
    "url": "/_nuxt/3b35cb4ea835ae8adf91.js",
    "revision": "1ceea9eeaf1b3d6580ae3a92462f62fc"
  },
  {
    "url": "/_nuxt/846f6ec1d6548d943f31.js",
    "revision": "8586f71f31465f72cc72506b1cfb5c9a"
  },
  {
    "url": "/_nuxt/c8772815b46950ebddb1.js",
    "revision": "351475b35a63639fb3eb0f80d5e6862f"
  },
  {
    "url": "/_nuxt/da214eb48d2b16d5680c.js",
    "revision": "92ae570bbff952069efed21961b67c6b"
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
