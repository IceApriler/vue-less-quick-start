const path = require('path')

module.exports = {
  outputDir: 'dist-vue-less-quick-start',
  publicPath: './',
  // 生产环境不启用sourceMap
  productionSourceMap: false,
  transpileDependencies: ['ismobilejs', 'ant-design-vue'],
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true, // fix https://github.com/ant-design/ant-motion/issues/44
      },
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/style/global.less')],
    },
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config['performance'] = {
        //打包文件大小配置
        //入口起点的最大体积
        maxEntrypointSize: 50000000,
        //生成文件的最大体积
        maxAssetSize: 30000000,
        //只给出 js 文件的性能提示
        assetFilter: function(assetFilename) {
          return assetFilename.endsWith('.js')
        },
      }
      config.devtool = false
    } else {
      config.devtool = 'inline-source-map'
    }

    Object.assign(config.resolve, {
      alias: {
        '@': path.join(__dirname, './src'),
        '@assets': path.join(__dirname, './src/assets'),
        '@images': path.join(__dirname, './src/assets/images'),
      },
    })
  },
}
