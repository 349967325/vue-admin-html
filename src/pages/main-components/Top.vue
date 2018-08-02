<template>
  <div class="main-header">
    <div class="header-logo-con">
      <span style="margin-left: 30px;">开店秘籍</span>
    </div>
    <div class="header-avator-con">
      <div class="header-user-row">
        <el-row type="flex" justify="center" align="middle" style="height: 100%;">
          <span>余额：</span>
          <span>{{parseFloat(userBalance).toFixed(2)}}</span>
          <el-button type="danger" size="small" style="margin-left: 20px;">充值</el-button>
          <span style="margin-left: 20px; font-size: 14px;">{{ userDetail['is_vip'] == '1'? 'VIP用户' : '普通用户'}}</span>
        </el-row>
      </div>
      <div class="user-dropdown-menu-con">
        <el-row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link" style="color: #fff; cursor: ponter;">
              {{userDetail.user_name}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item name="ownSpace" command="touser">个人中心</el-dropdown-item>
              <el-dropdown-item name="loginout" command="loginout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
import TaskApi from '@/api/TaskApi'

export default {
  name: 'Top',
  data () {
    return {
      userDetail: {}
    }
  },
  computed: {
    userInfo () {
      let user = JSON.parse(Cookies.get('user'))
      return user
    },
    userBalance () {
      return this.$store.state.user.userBalance
    }
  },
  mounted () {
    this.getUsrInfo()
  },
  methods: {
    // 获取用户信息
    getUsrInfo () {
      let params = {}
      params['user_token'] = this.userInfo['user_token']
      TaskApi.getUserInfo(params).then(res => {
        if (res.ret === 200) {
          this.userDetail = res.data
          this.$store.commit('setUserBalance', res.data.user_balance)
        }
      })
    },
    handleCommand (command) {
      if (command === 'touser') {
        this.$router.push({path: '/user/account'})
      } else {
        this.loginOut()
      }
    },
    loginOut () {
      Cookies.remove('user')
      this.$router.push({path: '/login'})
    }
  }
}
</script>
<style lang="less" scoped>
  @import './less/top.less';
</style>
