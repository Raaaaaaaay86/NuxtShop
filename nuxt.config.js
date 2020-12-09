export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxtShop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '化妝品,唇彩,指彩,腮紅,Claire\'s' },
      { hid: 'description', name: 'description', content: 'Claire\'s - 讓您綻放美麗與自信，致力打造親膚與實用的化妝品' },
      { name: 'distribution', content: 'Taiwan' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@800&display=swap', rel: 'stylesheet' },
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
    '~/plugins/categoryFilter.js',
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
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  // http://localhost:5001/shop-admin-3bc87/us-central1/app
  // https://us-central1-shop-admin-3bc87.cloudfunctions.net/app
  axios: {
    baseURL: 'https://us-central1-shop-admin-3bc87.cloudfunctions.net/app',
    // baseURL: 'http://localhost:5001/shop-admin-3bc87/us-central1/app',
    credentials: true,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  env: {
    API_USER: 'raylin',
  },

  // server: {
  //   port: 3000,
  //   host: '0.0.0.0',
  // },
};
