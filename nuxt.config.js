const pkg = require('./package');
const colors = require('vuetify/es5/util/colors').default;

module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: 'thedailyhabits',
    title: 'thedailyhabits - A habits journal centred around privacy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A habits journal centred around privacy' },
      { name: 'google-site-verification', content: 'oRH3xHvUr0rK_acsWOzRChba0IlmeaWj0eb5eUel070' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/sass/custom.scss', lang: 'scss' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/draggable', ssr: false },
    { src: '@/plugins/ga.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/device',
    'nuxt-material-design-icons',
    '@nuxtjs/ngrok',
    '@nuxtjs/google-tag-manager', { id: 'GTM-TNLFJ35' }
  ],
  router: {
    middleware: ['check-auth']
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/sass/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          primary: colors.deepPurple.darken4,
          secondary: colors.indigo.darken4,
          accent: colors.blueGrey.darken4,
          error: colors.red.base,
          warning: colors.yellow.base,
          info: colors.lightBlue.base,
          success: colors.green.base
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  /*
  ** Nuxt generate command configuration
  */
  generate: {
    fallback: false
  }
}
