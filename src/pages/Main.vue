<template>
<div class="main">
  <!--顶部导航-->
  <div class="main-header-con">
    <Top></Top>
  </div>
  <!--左侧菜单-->
  <div class="sidebar-menu-con">
    <sidebar-menu></sidebar-menu>
  </div>
  <!--内容-->
  <div class="single-page-con">
    <router-view></router-view>
  </div>
</div>
</template>
<script>
import Top from './main-components/Top'
import SidebarMenu from './main-components/SidebarMenu'
export default {
  name: 'Main',
  components: {
    Top,
    SidebarMenu
  }
}
</script>
<style lang="less" scoped>
.main {
  position: absolute;
  width: 100%;
  height: 100%;

  .main-header-con {
    box-sizing: border-box;
    position: fixed;
    display: block;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 64px;
    z-index: 20;
    background-color: #495060;
  }

  .sidebar-menu-con {
    position: fixed;
    width: 200px;
    height: 100%;
    overflow: auto;
    top: 64px;
    left: 0;
    bottom: 0px;
    z-index: 21;
    background-color: #495060;
  }

  .single-page-con {
    padding: 15px 10px 10px 10px;
    position: absolute;
    top: 64px;
    left: 200px;
    right: 0px;
    bottom: 0px;
    overflow: auto;
    background-color: #f0f0f0;
    z-index: 1;
  }
}
</style>
