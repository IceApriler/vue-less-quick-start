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
      include: [makeRegPath(path.join(__dirname, './src/views/mobile'))], // 只有mobile目录下才会转换（行内样式除外）
      exclude: [makeRegPath(path.join(__dirname, './node_modules'))],
    },
  },
}

/**
 * 生成正则路径
 * linux: '/src/views/report' => /\/src\/views\/report/
 * windows: '/src/views/report' => /\\src\\views\\report/
 * @param {String} stringPath 路径
 * @returns {RegExp} 正则路径
 */
function makeRegPath(stringPath) {
  return new RegExp(stringPath.split(path.sep).join(`\\${path.sep}`))
}
