import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie'
import { routers } from './routerConfig'

Vue.use(VueRouter)

// 配置路由
const RouterConfig = {
  routes: routers
}
export const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  if (!Cookies.get('user')) { // 判断是否已经登录且前往的页面不是登录页
    next({
      path: '/login'
    })
  } else {
    next()
  }
})
