import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/antd'

Vue.config.productionTip = false

const hehe = new Set()
console.log('heheda', hehe)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
