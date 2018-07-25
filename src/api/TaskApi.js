import Ajax from '@/util/Ajax'
export default {
  // 获取登录信息
  getLogin (params) {
    return Ajax.post('/?s=Login.index', params)
  },
  // 注册
  userRegister (params) {
    return Ajax.post('?/Login.register', params)
  },
  // 创建任务
  creatTask (params) {
    return Ajax.post('/?s=Task.createTask', params)
  },
  // 获取任务列表
  getTaskList (params) {
    return Ajax.post('/?s=Task.index', params)
  },
  // 修改密码
  setPassword (params) {
    return Ajax.post('/?s=Task.index', params)
  },
  // 获取用户详情
  getUserInfo (params) {
    return Ajax.get('/?s=User.info', params)
  },
  // 用户余额变动
  getBalanceLog (params) {
    return Ajax.post('/?s=User.balanceLog', params)
  },
  // 账号充值商品
  rechargeProduct (params) {
    return Ajax.post('/?s=Product.index', params)
  }
}
