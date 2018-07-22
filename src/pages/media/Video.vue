<style lang="less" scoped>
  @import './less/article.less';
</style>

<template>
  <div>
    <el-card shadow="hover">
      <el-row>
        <el-tabs type="card">
        <el-tab-pane name="inside" label="头条文章(站内)"></el-tab-pane>
        </el-tabs>
      </el-row>
      <el-row>
        <el-button type="primary" icon="el-icon-plus" @click="goTaskPage">创建新任务</el-button>
      </el-row>
    <el-row>
      <h4 class="box-title">
        <span>任务列表</span>
      </h4>
      <el-table :data="tableData" border width="100%">
        <el-table-column label="编号"></el-table-column>
        <el-table-column label="任务名称"></el-table-column>
        <el-table-column label="文章名称"></el-table-column>
        <el-table-column label="文章链接"></el-table-column>
        <el-table-column label="计划量"></el-table-column>
        <el-table-column label="今日"></el-table-column>
        <el-table-column label="状态"></el-table-column>
      </el-table>
      <div class="pagination-box">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </el-row>
    </el-card>
  </div>
</template>
<script>
import articleData from '@/util/MockData'

export default {
  name: 'Video',
  data () {
    return {
      tableData: [],
      query: {
        state: 'all',
        type: '',
        text: ''
      },
      curTab: '' // 当前tab
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      this.tableData = articleData.articleData.resultList
      console.log(this.tableData)
    },
    // 页面跳转
    goTaskPage () {
      this.$router.push({path: '/media/videoTask'})
    }
  }
}
</script>
