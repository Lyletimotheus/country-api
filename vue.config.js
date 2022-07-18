module.exports = {
  transpileDependencies: true,
  // ...other vue-cli plugin options...
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: './src/service-worker.js',
    }
  }
}