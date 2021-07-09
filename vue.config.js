const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const Timestamp = new Date().getTime()
const isPro = process.env.VUE_APP_ENV === 'prod'

module.exports = {
  outputDir: 'dist-vue-less-quick-start',
  publicPath: './',
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
  configureWebpack: {
    devtool: isPro ? false : 'inline-source-map',
    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
        '@assets': path.join(__dirname, './src/assets'),
        '@images': path.join(__dirname, './src/assets/images'),
      },
    },
    plugins: [
      // 配置compression-webpack-plugin压缩
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8,
      }),
    ],
    output: {
      // 输出重构  打包编译后的 文件名称  【模块名称.时间戳】
      filename: `js/[name].${Timestamp}.js`,
      chunkFilename: `js/[name].${Timestamp}.js`,
    },
  },
}
