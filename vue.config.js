const { resolve } = require('path')
const baseUrl = resolve('src')

module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~ASSETS/scss/global.scss";`
      },
      postcss: {
        autoprefixer: true,
        plugins: [require('autoprefixer')]
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '~': resolve(baseUrl),
        '~ASSETS': resolve(baseUrl, 'assets'),
        '~COMPONENTS': resolve(baseUrl, 'components'),
        '~VIEWS': resolve(baseUrl, 'views'),
        '~DATA': resolve(baseUrl, 'data')
      },
      extensions: ['*', '.js', '.vue', '.json']
    }
  }
}
