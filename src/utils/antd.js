import Vue from 'vue'
import Antd, { Modal, message, notification } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
Vue.use(Antd)

Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning
