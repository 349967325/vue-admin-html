import Main from '@/pages/Main.vue'

const Login = r => require.ensure([], () => r(require('@/pages/login/login')), 'login')
const Register = r => require.ensure([], () => r(require('@/pages/register/Register')), 'register')
const Home = r => require.ensure([], () => r(require('@/pages/home/Home')), 'home')
// 系统管理
const SysItem01 = r => require.ensure([], () => r(require('@/pages/sys/SysItem01')), 'sysItem01')
const SysItem02 = r => require.ensure([], () => r(require('@/pages/sys/SysItem02')), 'sysItem02')
const SysItem03 = r => require.ensure([], () => r(require('@/pages/sys/SysItem03')), 'sysItem03')

// 会员管理
const MemberItem01 = r => require.ensure([], () => r(require('@/pages/member/MemberItem01')), 'memberItem01')
const MemberItem02 = r => require.ensure([], () => r(require('@/pages/member/MemberItem02')), 'memberItem02')

// 统计分析
const StatisItem01 = r => require.ensure([], () => r(require('@/pages/statis/StatisItem01')), 'statisItem01')
const StatisItem02 = r => require.ensure([], () => r(require('@/pages/statis/StatisItem02')), 'statisItem02')

// 不是Main组件的子页面
export const loginRouter = {
  path: '/login',
  name: 'Login',
  meta: {
    title: 'Login - 登录'
  },
  component: Login
}

export const registerRouter = {
  path: '/register',
  name: 'Register',
  meta: {
    title: 'Register - 注册'
  },
  component: Register
}

// 作为Main组件的子页面展示，单不在左侧菜单展示的路由
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  redirect: '/home',
  component: Main,
  children: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
}

// 作为Main组件的子页面展示并且在左侧菜单显示的路由
export const menuRouter = [
  {
    path: '/sys',
    name: 'Sys',
    title: '系统管理',
    component: Main,
    children: [
      {
        path: 'sysItem01',
        name: 'sysItem01',
        title: '系统管理-01',
        component: SysItem01
      },
      {
        path: 'sysItem02',
        name: 'sysItem02',
        title: '系统管理-02',
        component: SysItem02
      },
      {
        path: 'sysItem03',
        name: 'sysItem03',
        title: '系统管理-03',
        component: SysItem03
      }
    ]
  },
  {
    path: '/statis',
    name: 'Statis',
    title: '统计分析',
    component: Main,
    children: [
      {
        path: 'statisItem01',
        name: 'StatisItem01',
        title: '统计分析-01',
        component: StatisItem01
      },
      {
        path: 'statisItem02',
        name: 'StatisItem02',
        title: '统计分析-02',
        component: StatisItem02
      }
    ]
  },
  {
    path: '/member',
    name: 'Member',
    title: '会员管理',
    component: Main,
    children: [
      {
        path: 'memberItem01',
        name: 'MemberItem01',
        title: '会员管理-01',
        component: MemberItem01
      },
      {
        path: 'memberItem02',
        name: 'MemberItem02',
        title: '会员管理-02',
        component: MemberItem02
      }
    ]
  }
]

export const routers = [
  ...menuRouter,
  loginRouter,
  registerRouter,
  otherRouter
]
