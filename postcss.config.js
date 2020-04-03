const path = require('path')

module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
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
      include: [new RegExp(path.join(__dirname, './src/views/mobile'))], // 只有mobile目录下才会转换（行内样式除外）
      exclude: /(\/|\\)(node_modules)(\/|\\)/
    }
  }
}
