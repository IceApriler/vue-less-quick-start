import 'normalize.css'
import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import WebStorageCache from 'web-storage-cache'

/** antd */
Vue.use(Antd)

/**
 * web-storage-cache
 * 文档：https://github.com/wuchangming/web-storage-cache
 */
export const storage = (Vue.prototype.$storage = new WebStorageCache({
  storage: 'localStorage',
}))
export const session = (Vue.prototype.$session = new WebStorageCache({
  storage: 'sessionCache',
}))

/**
 * 监听网络波动
 */
window.addEventListener('offline', () => {
  // alert('你断网啦！')
})

/**
 * 监听页面可见性
 * 场景：当程序切到后台的时候，如果当前有视频播放或者一些动画执行，可以先暂停。
 */
document.addEventListener('visibilitychange', () => {
  // console.log(`页面可见性：${document.visibilityState}`)
})
