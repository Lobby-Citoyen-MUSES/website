const PrismicConfig = require('./prismic.config')

module.exports = {
  mode: 'universal',
  head: {
    title: 'Vue Nuxt Test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      { innerHTML: '{ window.prismic = { endpoint: "' + PrismicConfig.apiEndpoint + '"} }' },
      { src: '//static.cdn.prismic.io/prismic.min.js' }
    ],
    __dangerouslyDisableSanitizers: ['script'],
  },
  plugins: [
    '~/plugins/link-resolver.js',
    '~/plugins/html-serializer.js',
    '~/plugins/prismic-vue.js',
  ],
  build: {
    publicPath: `/_nuxt/`,
    extend(config, ctx) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    }
  },
  performance: {
    gzip: false
  },
  router: {
    base: `/`
  },
  dev: false,
}