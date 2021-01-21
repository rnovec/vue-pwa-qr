module.exports = {
  publicPath: '/vue-pwa-qr/',
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'public/service-worker.js'
    },
  },
  "transpileDependencies": [
    "vuetify"
  ]
}