<template>
    <div class="shrinkable-menu-wrap">
        <slot name="top"></slot>
    </div>
</template>
<script>
export default {
    name: 'ShrinkableMenu'
}
</script>
<style lang="less">
.shrinkable-menu-wrap {
  width: 100%;
  height: 100%;
  background-color: rgb(73, 80, 96);
}
</style>


