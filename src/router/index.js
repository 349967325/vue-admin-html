import Vue from 'vue'
import VueRouter from 'vue-router'
// import Cookies from 'js-cookie'
import { routers } from './routerConfig'

Vue.use(VueRouter)

// 配置路由
const RouterConfig = {
  routes: routers
}
export const router = new VueRouter(RouterConfig)

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.auth)) {
//     if (Cookies.get('user')) {
//       next()
//     } else {
//       console.log('ok')
//       next({
//         path: 'login'
//       })
//     }
//   }
// })
