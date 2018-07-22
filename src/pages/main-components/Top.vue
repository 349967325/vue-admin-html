<template>
  <div class="main-header">
    <div class="header-logo-con">
      <span>全民开店</span>
    </div>
    <div class="header-avator-con">
      <div class="header-user-row">
        <el-row type="flex" justify="center" align="middle" style="height: 100%;">
          <span>余额：</span>
        <span>1000.00</span>
        <el-button type="danger" style="margin-left: 10px;">充值</el-button>
        </el-row>
      </div>
      <div class="user-dropdown-menu-con">
        <el-row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
          <el-dropdown>
            <span class="el-dropdown-link" style="color: #fff; cursor: ponter;">
              患者无病<i class="el-icon-arrow-down el-icon--right"></i>
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
