require('dotenv').config();
const colors = require('vuetify/es5/util/colors').default;

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap',
      },
    ],
    script: [
      { src: 'https://widget.cloudinary.com/v2.0/global/all.js' },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/styles.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/webFontLoader.js', ssr: false },
    // {src: '~/node_modules/vue-flux', ssr: false}
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-webfontloader',
  ],
  auth: {
    redirect: {
      callback: '/auth-redirect',
      home: '/auth-discourse',
    },
    strategies: {
      // local: false,
      auth0: {
        domain: process.env.AUTH_DOMAIN,
        client_id: process.env.AUTH_CLIENTID,
      },
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
    BaseURL: process.env.BASE_URL,
  },
  proxy: {
    '/api': {
      target: process.env.BASE_URL,
    },
  },
  baseURL: process.env.BASE_URL,
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.indigo.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // vendor: ['vue-flux'],
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  /*
   ** Back-End APIs
   */
  serverMiddleware: [
    { path: '/api/search', handler: '~/server/search.js' },
    { path: '/api/tags', handler: '~/server/tags.js' },
    { path: '/api/detail', handler: '~/server/detail.js' },
    { path: '/api/user', handler: '~/server/user.js' },
    { path: '/api/comments/topics', handler: '~/server/topics.js' },
    { path: '/api/comments/posts', handler: '~/server/posts.js' },
    { path: '/api/comment', handler: '~/server/comment.js' },
    { path: '/api/role', handler: '~/server/role.js' },
    { path: '/api/uploadtag', handler: '~/server/uploadtag.js' },
    { path: '/api/removetag', handler: '~/server/removetag.js' },
  ],
};
