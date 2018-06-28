<template>
  <div id="app" class="app-wrap">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body{
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    overflow: hidden;
}
.app-wrap{
    width: 100%;
    height: 100%;
}
</style>
