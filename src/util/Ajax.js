import axios from 'axios'
import qs from 'qs'

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

const baseURL = 'http://api.renqichong.com'

const Ajax = {
  ajax (url, params, opts) {
    if (!url.startsWith('http')) {
      url = baseURL + url
    }
    let config = {url: url, method: 'post', responseType: 'json', timeout: 60000}
    if (opts) {
      config = {...config, ...opts}
    }
    if (config['method'] === 'post') {
      config['data'] = qs.stringify(params)
    } else {
      config['params'] = params
    }
    return axios(config)
  },
  get (url, params, opts) {
    if (opts) {
      opts = Object.assign(opts, {method: 'get'})
    } else {
      opts = {method: 'get'}
    }
    return this.ajax(url, params, opts)
  },
  post (url, params, opts) {
    if (opts) {
      opts = Object.assign(opts, {method: 'post'})
    } else {
      opts = {method: 'post'}
    }
    return this.ajax(url, params, opts)
  }
}
export default Ajax
