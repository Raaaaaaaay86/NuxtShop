/* eslint-disable no-param-reassign */
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxtShop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      { src: 'https://kit.fontawesome.com/1af9f69884.js', crossorigin: 'anonymous' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/styles/style.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/globalComponents.js',
    '~/plugins/validate.client.js',
    '~/plugins/currencyFilter.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api',
    '@nuxtjs/pwa',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://vue-course-api.hexschool.io/',
    credentials: true,
  },

  env: {
    API_USER: 'raylin',
  },

  server: {
    port: 3000,
    host: '0.0.0.0',
  },

  pwa: {
    manifest: {
      name: 'Claire\'s - Since 1997 ',
      short_name: 'Claire\'s',
      start_url: '/',
      display: 'standalone',
      orientation: 'portrait-primary',
      background_color: '#fff',
      theme_color: '#fff',
      description: 'Claire\'s 滿足你對美麗美麗的需求',
      dir: 'ltr',
      lang: 'zh-TW',
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: 'https://storage.googleapis.com/vue-course-api.appspot.com/.*',
          handler: 'StaleWhileRevalidate',
          strategyOptions: {
            cacheName: 'product-imgs',
          },
          strategyPlugins: [{
            use: 'Expiration',
            config: {
              maxAgeSeconds: 60 * 60 * 24,
            },
          }],
        },
        {
          urlPattern: 'https://ka-f.fontawesome.com/.*',
          handler: 'StaleWhileRevalidate',
          strategyOptions: {
            cacheName: 'font-awsome',
            strategyPlugins: [{
              use: 'Expiration',
              config: {
                maxAgeSeconds: 60 * 60 * 24,
              },
            }],
          },
        },
      ],
    },
  },
};
