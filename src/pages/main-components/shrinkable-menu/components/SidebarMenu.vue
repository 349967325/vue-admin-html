<template>
  <Menu ref="sideMenu" theme="dark" width="auto">
    <Submenu>
      <template slot="title">
        <Icon type="ios-paper"></Icon>
        系统管理
      </template>
      <Menu-item name="系统管理-01">系统管理-01</Menu-item>
      <Menu-item name="系统管理-02">系统管理-02</Menu-item>
      <Menu-item name="系统管理-03">系统管理-03</Menu-item>
    </Submenu>
    <Submenu>
      <template slot="title">
        <Icon type="ios-paper"></Icon>
        统计分析
      </template>
      <Menu-item name="统计分析-01">统计分析-01</Menu-item>
      <Menu-item name="统计分析-02">统计分析-02</Menu-item>
    </Submenu>
    <Submenu>
      <template slot="title">
        <Icon type="ios-paper"></Icon>
        会员管理
      </template>
      <Menu-item name="会员管理-01">会员管理-01</Menu-item>
      <Menu-item name="会员管理-02">会员管理-02</Menu-item>
    </Submenu>
  </Menu>
</template>
<script>
export default {
  name: 'SidebarMenu',
  data () {
    return {}
  }
}
</script>
<style lang="less">
</style>
