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
  console.log(next)
})
