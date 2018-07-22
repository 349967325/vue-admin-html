<template>
<el-menu background-color="#495060" text-color="#fff" active-text-color="#ffd04b">
  <el-submenu>
    <template slot="title">
      <i class="el-icon-menu"></i>
      <span>自媒体</span>
    </template>
    <el-menu-item index="1-1">头条文章</el-menu-item>
    <el-menu-item index="1-2">头条视频</el-menu-item>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-star-off"></i>
    <span slot="title">账号充值</span>
  </el-menu-item>
  <el-menu-item index="3">
    <i class="el-icon-setting"></i>
    <span slot="title">账号设置</span>
  </el-menu-item>
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
