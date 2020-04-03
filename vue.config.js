const path = require('path')

const isPro = process.env.VUE_APP_ENV === 'prod'

module.exports = {
  outputDir: 'dist-vue-less-quick-start',
  transpileDependencies: ['ismobilejs', 'ant-design-vue'],
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true // fix https://github.com/ant-design/ant-motion/issues/44
      },
      postcss: {
        plugins: [
          require('postcss-px-to-viewport')({
            unitToConvert: 'px',
            viewportWidth: 750,
            viewportHeight: 1334,
            unitPrecision: 3,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            include: [new RegExp(path.join(__dirname, './src/views/mobile'))],
            exclude: /(\/|\\)(node_modules)(\/|\\)/
          })
        ]
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
