import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routerConfig'

Vue.use(VueRouter)

// 配置路由
const RouterConfig = [
  routes
]
export const router = new VueRouter(RouterConfig)
