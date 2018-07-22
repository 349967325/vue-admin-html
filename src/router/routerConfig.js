import Main from '@/pages/Main.vue'

const Login = r => require.ensure([], () => r(require('@/pages/login/login')), 'login')
const Register = r => require.ensure([], () => r(require('@/pages/register/Register')), 'register')
const Home = r => require.ensure([], () => r(require('@/pages/home/Home')), 'home')
// 自媒体
const Article = r => require.ensure([], () => r(require('@/pages/media/Article')), 'article')
const Video = r => require.ensure([], () => r(require('@/pages/media/Video')), 'video')
const ArticleTask = r => require.ensure([], () => r(require('@/pages/media/ArticleTask')), 'articleTask')
const VideoTask = r => require.ensure([], () => r(require('@/pages/media/VideoTask')), 'videoTask')

const Recharge = r => require.ensure([], () => r(require('@/pages/recharge/Recharge')), 'recharge')
const Account = r => require.ensure([], () => r(require('@/pages/account/Account')), 'account')

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
    },
    {
      path: '/media/articleTask',
      name: 'ArticleTask',
      component: ArticleTask
    },
    {
      path: '/media/videoTask',
      name: 'VideoTask',
      component: VideoTask
    }
  ]
}

// 作为Main组件的子页面展示并且在左侧菜单显示的路由
export const menuRouter = [
  {
    path: '/media',
    name: 'Media',
    title: '自媒体',
    component: Main,
    children: [
      {
        path: 'article',
        name: 'Article',
        title: '头条文章',
        component: Article
      },
      {
        path: 'video',
        name: 'Video',
        title: '头条视频',
        component: Video
      }
    ]
  },
  {
    path: '/rechange',
    name: 'Rechange',
    title: '账号充值',
    component: Main,
    children: [
      {
        path: 'recharge',
        name: 'Rechange',
        title: '账号充值',
        component: Recharge
      }
    ]
  },
  {
    path: '/user',
    name: 'User',
    title: '账号设置',
    component: Main,
    children: [
      {
        path: 'account',
        name: 'Account',
        title: '账号设置',
        component: Account
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
