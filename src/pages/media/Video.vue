<style lang="less" scoped>
  @import './less/article.less';
</style>

<template>
  <div>
    <el-card shadow="hover">
      <el-row>
        <el-tabs type="card" value="inside">
        <el-tab-pane name="inside" label="头条视频"></el-tab-pane>
        </el-tabs>
      </el-row>
      <el-row>
        <el-button type="primary" icon="el-icon-plus" @click="goTaskPage">创建新任务</el-button>
      </el-row>
    <el-row v-if="tableData.length > 0">
      <h4 class="box-title">
        <span>任务列表</span>
      </h4>
      <el-table :data="tableData" border width="100%">
        <el-table-column label="编号" prop="task_no"></el-table-column>
        <el-table-column label="任务名称" prop="task_name"></el-table-column>
        <el-table-column label="视频名称" prop="task_link_name"></el-table-column>
        <el-table-column label="视频链接" prop="task_link"></el-table-column>
        <el-table-column label="计划量" prop="task_num"></el-table-column>
        <el-table-column label="今日" prop="task_day_num"></el-table-column>
        <el-table-column label="状态" prop="task_status"></el-table-column>
      </el-table>
      <div class="pagination-box">
        <el-pagination
          background
          :current-page="page.current"
          :page-size="page.size"
          :page-sizes="page.sizeOpts"
          :total="page.total"
          @size-change="pageChange"
          @current-change="pageCurrentChange"
          layout="total, sizes, pager, jumper">
        </el-pagination>
      </div>
    </el-row>
    <el-row v-else>
      <div class="no-result">
        <no-result :pathUrl="toUrl"></no-result>
      </div>
    </el-row>
    </el-card>
  </div>
</template>
<script>
import TaskApi from '@/api/TaskApi'
import Cookies from 'js-cookie'
import NoResult from '@/pages/main-components/NoResult'
export default {
  name: 'Video',
  components: {NoResult},
  data () {
    return {
      toUrl: '/media/videoTask',
      tableData: [],
      page: { total: 0, size: 20, current: 1, sizeOpts: [10, 20, 50, 100, 200, 500] }
    }
  },
  mounted () {
    this.getVideoList()
  },
  computed: {
    userInfo () {
      let user = JSON.parse(Cookies.get('user'))
      console.log(user)
      return user
    }
  },
  methods: {
    getVideoList () {
      let params = {}
      params['user_token'] = this.userInfo['user_token']
      params['task_type'] = 2
      params['page'] = this.page.current
      params['pagesize'] = this.page.size
      TaskApi.getTaskList(params).then(res => {
        if (res.ret === 200) {
          console.log(res)
          this.page.total = Number(res.data.count)
          if (res.data.taskInfo) {
            this.tableData = res.data.taskInfo
          }
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    pageChange (size) {
      this.page.size = size
      this.getVideoList()
    },
    pageCurrentChange (current) {
      this.page.current = current
      this.getVideoList()
    },
    // 页面跳转
    goTaskPage () {
      this.$router.push({path: '/media/videoTask'})
    }
  }
}
</script>
