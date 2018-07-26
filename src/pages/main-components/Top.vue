<template>
  <div class="main-header">
    <div class="header-logo-con">
      <span>全民开店</span>
    </div>
    <div class="header-avator-con">
      <div class="header-user-row">
        <el-row type="flex" justify="center" align="middle" style="height: 100%;">
          <span style="margin-right: 20px; font-size: 14px;">{{ userInfo['is_vip'] == '1'? 'VIP用户' : '普通用户'}}</span>
          <span>余额：</span>
          <span>{{parseFloat(userInfo['user_balance']).toFixed(2)}}</span>
          <el-button type="danger" style="margin-left: 10px;">充值</el-button>
        </el-row>
      </div>
      <div class="user-dropdown-menu-con">
        <el-row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
          <el-dropdown>
            <span class="el-dropdown-link" style="color: #fff; cursor: ponter;">
              {{userInfo.user_name}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item name="ownSpace">个人中心</el-dropdown-item>
              <el-dropdown-item name="loginout" divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Top',
  computed: {
    userInfo () {
      return this.$store.state.user.userinfo
    }
  },
  methods: {
    handleClickUserDropdown () {
      console.log('ko')
    }
  }
}
</script>
<style lang="less" scoped>
  @import './less/top.less';
</style>
