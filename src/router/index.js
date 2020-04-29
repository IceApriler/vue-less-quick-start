import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import routes from './routes'

Vue.use(VueRouter)
NProgress.configure({ showSpinner: false })

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return {
      x: 0,
      y: 0,
    }
  }
}

const router = new VueRouter({
  routes,
  scrollBehavior,
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  to.meta &&
    to.meta.title &&
    (document.title = `${to.meta.title} | ${process.env.VUE_APP_TITLE}`)
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
