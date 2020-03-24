import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/entry'
import './utils/mount' // 挂载全局方法至Vue原型

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
