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
const LOGIN_PAGE_NAME = 'Login'
router.beforeEach((to, from, next) => {
  const user = Cookies.get('user')
  if (to.name === 'Register') { // 跳转到注册页面
    next()
  } else if (user === undefined && to.name !== LOGIN_PAGE_NAME) { //  未登陆且要跳转的页面不是登录页
    next({
      path: '/login'
    })
  } else if (user === undefined && to.name === LOGIN_PAGE_NAME) { // 未登陆且要跳转的页面是登录页
    next() // 跳转
  } else if (user !== undefined && to.name === LOGIN_PAGE_NAME) { // 已登录且要跳转的页面是登录页
    next({
      path: '/media/article'
    })
  } else {
    next()
  }
})
