<style lang="less" scoped>
  @import './less/creatTask.less';
</style>
<template>
    <div>
        <el-card>
            <el-row class="page-oper">
                <el-button @click="toList">返回任务列表</el-button>
                <div class="cur_task">
                    <span>当前任务计费：</span>
                    <span style="color: red;">0.05点</span>
                </div>
            </el-row>
            <el-row class="page-step-block">
                <h4 class="step-title"><span class="step-badge">1</span>任务设置</h4>
                <div class="step-con">
                    <el-form label-width="120px" ref="ruleForm" :rules="rules" :model="form">
                        <el-form-item label="任务名称" prop="task_name">
                            <el-input v-model.trim="form['task_name']" style="width: 300px;"/>
                        </el-form-item>
                        <el-form-item label="任务链接名称" prop="task_link_name">
                            <el-input v-model.trim="form['task_link_name']" style="width: 700px;"/>
                        </el-form-item>
                        <el-form-item label="任务链接" prop="task_link">
                            <el-input v-model.trim="form['task_link']" style="width:700px;"/>
                        </el-form-item>
                        <el-form-item label="任务数" prop="task_num">
                            <el-input v-model.trim="form['task_num']" style="width: 300px;" />
                            <span style="margin-left: 10px; color: #2d8cf0;">基础流量费：0.05点</span>
                        </el-form-item>
                        <el-form-item label="流量时间控制">
                            <el-radio-group v-model="isUse" @change="toggleFlow">
                                <el-radio label="Y">开启</el-radio>
                                <el-radio label="N">不开启</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-form>
                </div>
            </el-row>
            <el-row class="page-footer">
                <el-button type="primary">立即开始</el-button>
            </el-row>
        </el-card>
        <setflow-modal v-model="modal.flowModal"></setflow-modal>
    </div>
</template>
<script>
import TaskApi from '@/api/TaskApi'
import Cookies from 'js-cookie'
import SetflowModal from './components/SetflowModal'
const rules = {
  task_name: [
    { required: true, message: '请输入任务名称', trigger: 'blur' }
  ],
  task_link_name: [
    { required: true, message: '请输入任务链接名称', trigger: 'blur' }
  ],
  task_link: [
    { required: true, message: '请输入任务链接', trigger: 'blur' }
  ],
  task_num: [
    { required: true, message: '请输入任务数', trigger: 'blur' }
  ]
}
export default {
  name: 'VideoTask',
  components: {SetflowModal},
  data () {
    return {
      rules,
      modal: {flowModal: false},
      isUse: 'N',
      form: {
        task_name: '',
        task_link_name: '',
        task_link: '',
        task_num: ''
      }
    }
  },
  computed: {
    userInfo () {
      let user = JSON.parse(Cookies.get('user'))
      console.log(user)
      return user
    }
  },
  methods: {
    // 点击开始任务按钮
    handleStart () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.creatArticleTask()
        }
      })
    },
    creatArticleTask () {
      let params = Object.assign({}, this.form)
      params['user_token'] = this.userInfo['user_token']
      params['task_type'] = 2
      TaskApi.creatTask(params).then(res => {
        if (res.ret === 200) {
          this.$message.success('创建任务成功！')
          this.clearData()
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    toggleFlow (val) {
      if (val === 'Y') {
        this.modal.flowModal = true
      }
    },
    // 清除数据
    clearData () {
      this.$refs.form.resetFields()
      this.form = {
        task_name: '',
        task_link_name: '',
        task_link: '',
        task_num: ''
      }
    },
    // 返回任务列表
    toList () {
      this.$router.push({path: '/media/video'})
    }
  }
}
</script>
