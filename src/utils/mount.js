/**
 * 挂载全局方法至Vue原型
 */

import Vue from 'vue'
import Antd, { Modal, message, notification } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import WebStorageCache from 'web-storage-cache'

/** antd */
Vue.use(Antd)

Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning

/**
 * web-storage-cache
 * 文档：https://github.com/wuchangming/web-storage-cache
 */
export const storage = (Vue.prototype.$storage = new WebStorageCache({
  storage: 'localStorage'
}))
export const session = (Vue.prototype.$session = new WebStorageCache({
  storage: 'sessionCache'
}))
