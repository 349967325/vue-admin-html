<style lang="less" scoped>
  @import './less/noResult.less';
</style>
<template>
  <div class="no-result-con">
    <img src="./images/noresult.png" />
    <p>暂无任务，你可以&nbsp;&nbsp;<a class="creat" @click="handleCreat">创建任务</a></p>
  </div>
</template>
<script>
export default {
  name: 'NoResult',
  props: {
    pathUrl: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleCreat () {
      this.$router.push({path: this.pathUrl})
    }
  }
}
</script>
