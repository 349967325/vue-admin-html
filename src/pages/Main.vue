<template>
<div class="main">
  <!--左侧 菜单栏-->
  <div class="sidebar-menu-con">左侧</div>
  <!--右侧 顶部导航-->
  <div class="main-header-con">顶部</div>
  <!--右侧 页面视图-->
  <div class="single-page-con">
    <router-view />
  </div>
</div>
</template>
<script>
export default {
  name: 'Main'
}
</script>
<style lang="less" scoped>
</style>
