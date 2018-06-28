import Main from '@/pages/Main'

// 不是Main组件的子页面
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登录'
  }
}

export const registerRouter = {
  path: '/register',
  name: 'register',
  meta: {
    title: 'Register - 注册'
  }
}

// 作为Main组件的子页面展示，单不在左侧菜单展示的路由
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  component: Main,
  children: [
    {
      path: '/home',
      name: 'Home'
    },
    {
      path: '/info',
      name: 'Info'
    },
    {
      path: '/detail',
      name: 'Detail'
    }
  ]
}

// 作为Main组件的子页面展示并且在左侧菜单显示的路由
export const menuRouter = [
  {
    path: '/sys',
    name: 'sys',
    title: '系统管理',
    component: Main,
    children: [
      {
        path: '/sysItem01',
        name: 'sysItem01',
        title: '系统管理-01'
      },
      {
        path: '/sysItem02',
        name: 'sysItem02',
        title: '系统管理-02'
      },
      {
        path: '/sysItem03',
        name: 'sysItem03',
        title: '系统管理-03'
      },
      {
        path: '/sysItem04',
        name: 'sysItem04',
        title: '系统管理-04'
      }
    ]
  },
  {
    path: '/goods',
    name: 'goods',
    title: '商品管理',
    component: Main,
    children: [
      {
        path: '/goodsItem01',
        name: 'goodsItem01',
        title: '商品管理-01'
      },
      {
        path: '/goodsItem02',
        name: 'goodsItem02',
        title: '商品管理-02'
      },
      {
        path: '/goodsItem03',
        name: 'goodsItem03',
        title: '商品管理-03'
      }
    ]
  },
  {
    path: '/order',
    name: 'order',
    title: '订单管理',
    component: Main,
    children: [
      {
        path: '/orderItem01',
        name: 'orderItem01',
        title: '订单管理01'
      },
      {
        path: '/orderItem02',
        name: 'orderItem02',
        title: '订单管理02'
      }
    ]
  },
  {
    path: '/member',
    name: 'member',
    title: '会员管理',
    component: Main,
    children: [
      {
        path: '/memberItem01',
        name: 'memberItem01',
        title: '会员管理01'
      },
      {
        path: '/memberItem02',
        name: 'memberItem02',
        title: '会员管理02'
      }
    ]
  }
]

export const routes = [
  menuRouter,
  otherRouter,
  loginRouter,
  registerRouter
]
