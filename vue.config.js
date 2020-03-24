const path = require('path')

const isPro = process.env.VUE_APP_ENV === 'prod'

module.exports = {
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
    },
    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
        '@assets': path.join(__dirname, './src/assets'),
        '@images': path.join(__dirname, './src/assets/images')
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        prependData: `@import "~@/assets/style/global.less"`
      }
    }
  },
  parallel: require('os').cpus().length > 1
}
