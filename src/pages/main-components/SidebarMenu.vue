<template>
  <Menu ref="sideMenu" theme="dark" width="200">
    <Submenu name="1">
      <template slot="title">
        <Icon type="ios-navigate"></Icon>
        <span>自媒体</span>
      </template>
      <Menu-item name="1-1">头条文章</Menu-item>
      <Menu-item name="1-2">头条视频</Menu-item>
      <Menu-item name="1-3">新美大</Menu-item>
    </Submenu>
    <Menu-item>
      <Icon type="social-yen-outline"></Icon>
      <span>账号充值</span>
    </Menu-item>
    <Menu-item>
      <Icon type="ios-gear-outline"></Icon>
      <span>账号设置</span>
    </Menu-item>
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
