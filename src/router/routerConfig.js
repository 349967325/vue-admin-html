import Main from '@/pages/Main.vue'

const Login = r => require.ensure([], () => r(require('@/pages/login/login')), 'login')
const Register = r => require.ensure([], () => r(require('@/pages/register/Register')), 'register')
// const Home = r => require.ensure([], () => r(require('@/pages/home/Home')), 'home')
// 自媒体
const Article = r => require.ensure([], () => r(require('@/pages/media/Article')), 'article')
const Video = r => require.ensure([], () => r(require('@/pages/media/Video')), 'video')
const ArticleTask = r => require.ensure([], () => r(require('@/pages/media/ArticleTask')), 'articleTask')
const VideoTask = r => require.ensure([], () => r(require('@/pages/media/VideoTask')), 'videoTask')
const NewYelp = r => require.ensure([], () => r(require('@/pages/media/NewYelp')), 'newYelp')
const YelpTask = r => require.ensure([], () => r(require('@/pages/media/YelpTask')), 'yelpTask')

const Recharge = r => require.ensure([], () => r(require('@/pages/recharge/Recharge')), 'recharge')
const Account = r => require.ensure([], () => r(require('@/pages/account/Account')), 'account')
const Password = r => require.ensure([], () => r(require('@/pages/account/Password')), 'Password')

// 不是Main组件的子页面
export const loginRouter = {
  path: '/login',
  name: 'Login',
  component: Login
}

export const registerRouter = {
  path: '/register',
  name: 'Register',
  component: Register
}

// 作为Main组件的子页面展示
export const menuRouter = [
  {
    path: '/',
    redirect: '/media/article'
  },
  {
    path: '/media',
    name: 'Media',
    component: Main,
    children: [
      {
        path: 'article',
        name: 'Article',
        meta: {
          auth: true // 添加该字段，表示进入这个路由是需要登录的
        },
        component: Article
      },
      {
        path: 'video',
        name: 'Video',
        component: Video
      },
      {
        path: 'articleTask',
        name: 'ArticleTask',
        meta: {
          auth: true // 添加该字段，表示进入这个路由是需要登录的
        },
        component: ArticleTask
      },
      {
        path: 'videoTask',
        name: 'VideoTask',
        component: VideoTask
      },
      {
        path: 'newYelp',
        name: 'NewYelp',
        component: NewYelp
      },
      {
        path: 'yelpTask',
        name: 'YelpTask',
        component: YelpTask
      }
    ]
  },
  {
    path: '/user',
    component: Main,
    children: [
      {
        path: 'recharge',
        name: 'Recharge',
        meta: {
          auth: true // 添加该字段，表示进入这个路由是需要登录的
        },
        component: Recharge
      },
      {
        path: 'account',
        name: 'Account',
        meta: {
          auth: true // 添加该字段，表示进入这个路由是需要登录的
        },
        component: Account
      },
      {
        path: 'password',
        name: 'Password',
        meta: {
          auth: true // 添加该字段，表示进入这个路由是需要登录的
        },
        component: Password
      }
    ]
  }
]

export const routers = [
  ...menuRouter,
  loginRouter,
  registerRouter
]
