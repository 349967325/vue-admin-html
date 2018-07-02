<template>
<div class="main">
  <!--左侧 菜单栏-->
  <div class="sidebar-menu-con">
    <shrinkable-menu></shrinkable-menu>
  </div>
  <!--右侧 顶部导航-->
  <div class="main-header-con">顶部</div>
  <!--右侧 页面视图-->
  <div class="single-page-con">
    <router-view />
  </div>
</div>
</template>
<script>
import ShrinkableMenu from './main-components/shrinkable-menu/ShrinkableMenu'
export default {
  name: 'Main',
  components: {
    ShrinkableMenu
  }
}
</script>
<style lang="less" scoped>
.main {
  position: absolute;
  width: 100%;
  height: 100%;

  .sidebar-menu-con {
    position: fixed;
    width: 200px;
    height: 100%;
    overflow: auto;
    top: 0;
    left: 0;
    z-index: 21;
    transition: width 0.3s;
  }

  .main-header-con {
    box-sizing: border-box;
    position: fixed;
    display: block;
    padding-left: 200px;
    width: 100%;
    height: 60px;
    z-index: 20;
    box-shadow: 0 2px 1px 1px rgba(100, 100, 100, 0.1);
    transition: padding 0.3s;
  }

  .single-page-con {
    position: absolute;
    top: 100px;
    left: 200px;
    right: 0px;
    bottom: 0px;
    overflow: auto;
    background-color: #F0F0F0;
    z-index: 1;
    transition: left 0.3s;
  }
}
</style>
