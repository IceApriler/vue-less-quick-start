const path = require('path')

const isPro = process.env.VUE_APP_ENV === 'prod'

module.exports = {
  outputDir: 'dist-vue-less-quick-start',
  publicPath: process.env.BASE_URL,
  transpileDependencies: ['ismobilejs', 'ant-design-vue'],
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true // fix https://github.com/ant-design/ant-motion/issues/44
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/style/global.less')]
    }
  },
  configureWebpack: {
    devtool: isPro ? false : 'inline-source-map',
    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
        '@assets': path.join(__dirname, './src/assets'),
        '@images': path.join(__dirname, './src/assets/images')
      }
    }
  }
}
