import Ajax from '@/util/Ajax'
export default {
  // 获取登录信息
  getLogin (params) {
    return Ajax.post('', params)
  }
}
