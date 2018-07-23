import axios from 'axios'

axios.interceptors.response.use(response => {
  return response.data
}, error => {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        return {success: false, msg: 'Sorry, 错误请求！'}
      case 403:
        return {success: false, msg: 'Sorry, 无权限操作！'}
      case 404:
        return {success: false, msg: 'Sorry, 服务不存在！'}
      case 503:
        return {success: false, msg: 'Sorry, 服务器异常！'}
      case 504:
        return {success: false, msg: 'Sorry, 请求超时！'}
      default:
        return {success: false, msg: 'Sorry, 服务器错误！'}
    }
  }
  return {success: false, msg: 'Sorry, 页面错误！'}
})

axios.defaults.baseURL = 'http://api.renqichong.com'
// 设置默认请求头
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest'
}
axios.defaults.timeout = 10000

const Ajax = {
  get (url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: param
      }).then(res => {
        resolve(res)
      })
    })
  },
  post (url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: param
      }).then(res => {
        resolve(res)
      })
    })
  }
}
export default Ajax
