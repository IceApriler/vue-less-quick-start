const isPro = process.env.VUE_APP_ENV === 'prod'
module.exports = {
  publicPath: './',
  outputDir: 'dist-vue-less-quick-start',
  transpileDependencies: ['ismobilejs', 'ant-design-vue'],
  configureWebpack: {
    devtool: isPro ? false : 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [
            {
              loader: 'less-loader',
              options: {
                javascriptEnabled: true // fix https://github.com/ant-design/ant-motion/issues/44
              }
            }
          ]
        }
      ]
    }
  },
  css: {
    loaderOptions: {
      less: {
        prependData: `@import "~@/assets/style/global.less"`
      }
    }
  }
}
