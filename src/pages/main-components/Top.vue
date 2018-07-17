<template>
  <div class="main-header">
    <div class="header-logo-con">
      <span>全民开店</span>
    </div>
    <div class="header-avator-con">
      <div class="header-user-row">
        <Row type="flex" justify="center" align="middle" style="height: 100%;">
          <span>余额：</span>
        <span>1000.00</span>
        <Button type="error" size="small" style="margin-left: 10px;">充值</Button>
        </Row>
      </div>
      <div class="user-dropdown-menu-con">
        <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
          <Dropdown transfer placement="bottom" trigger="click" @on-click="handleClickUserDropdown">
            <a href="javascript:void(0)">
              <span class="main-user-name">患者无病</span>
              <Icon type="arrow-down-b" color="#fff"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem name="ownSpace">个人中心</DropdownItem>
              <DropdownItem name="loginout" divided>退出登录</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Row>
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
