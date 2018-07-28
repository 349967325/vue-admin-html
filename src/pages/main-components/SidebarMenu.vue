<template>
<el-menu background-color="#495060" text-color="#fff" active-text-color="#ffd04b">
  <el-submenu>
    <template slot="title">
      <i class="el-icon-menu"></i>
      <span>自媒体</span>
    </template>
    <router-link to="/media/article">
    <el-menu-item index="1-1">头条文章</el-menu-item>
    </router-link>
    <router-link to="/media/video">
    <el-menu-item index="1-2">头条视频</el-menu-item>
    </router-link>
    <router-link to="/media/newYelp">
    <el-menu-item index="1-3">新美大</el-menu-item>
    </router-link>
  </el-submenu>
  <router-link to="/user/rechange">
  <el-menu-item index="2">
    <i class="el-icon-star-off"></i>
    <span slot="title">账号充值</span>
  </el-menu-item>
  </router-link>
  <router-link to="/user/account">
  <el-menu-item index="3">
    <i class="el-icon-setting"></i>
    <span slot="title">账号设置</span>
  </el-menu-item>
  </router-link>
</el-menu>
</template>
<script>
export default {
  name: 'SidebarMenu',
  data () {
    return {}
  }
}
</script>
