<template>
  <div class="shrinkable-menu-wrap">
    <slot name="top"></slot>
    <sidebar-menu></sidebar-menu>
  </div>
</template>
<script>
import SidebarMenu from './components/SidebarMenu'
export default {
  name: 'ShrinkableMenu',
  components: { SidebarMenu }
}
</script>
<style lang="less" scoped>
.shrinkable-menu-wrap {
  width: 100%;
  height: 100%;
  background-color: rgb(73, 80, 96);
}
</style>
