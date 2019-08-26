importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0f3d08a0855749b35f3a.js",
    "revision": "36e08c584482aa773cbea8cb57461461"
  },
  {
    "url": "/_nuxt/1d24c8338bdc2a6f2e96.js",
    "revision": "e4ccdfa7e33747c1bc538b591cb06321"
  },
  {
    "url": "/_nuxt/686d91db0ee684a63093.js",
    "revision": "e72ca6b23711868b52970d8d11e2eb55"
  },
  {
    "url": "/_nuxt/75267963b9967371c707.js",
    "revision": "4bebc2fe4dbe6ff33a079e33e1ff1a82"
  },
  {
    "url": "/_nuxt/faf4682ddc8a663c959d.js",
    "revision": "a8b739039912bf205b563a7dce01962b"
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
