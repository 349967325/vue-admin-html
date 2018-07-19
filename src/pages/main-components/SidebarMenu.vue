<template>
  <Menu ref="sideMenu" theme="dark" width="200">
    <Submenu name="media">
      <template slot="title">
        <Icon type="ios-navigate"></Icon>
        <span>自媒体</span>
      </template>
      <router-link to="/media/article">
        <Menu-item name="article">头条文章</Menu-item>
      </router-link>
      <router-link to="/media/video">
        <Menu-item name="video">头条视频</Menu-item>
      </router-link>
    </Submenu>
    <router-link to="/recharge">
      <Menu-item name="recharge">
      <Icon type="social-yen-outline"></Icon>
      <span>账号充值</span>
    </Menu-item>
    </router-link>
    <router-link to="/account">
      <Menu-item name="account">
      <Icon type="ios-gear-outline"></Icon>
      <span>账号设置</span>
    </Menu-item>
    </router-link>
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
