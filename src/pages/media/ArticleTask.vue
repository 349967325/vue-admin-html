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
                            <el-input-number v-model.trim="form['task_num']" style="width: 300px;"></el-input-number>
                            <span style="margin-left: 10px; color: #2d8cf0;">基础流量费：0.05点</span>
                        </el-form-item>
                        <el-form-item label="流量时间控制">
                          <el-button style="margin-left: 30px;" @click="setFlowModal">设置</el-button>
                        </el-form-item>
                        <template v-if="userInfo['is_vip'] == '1'">
                        <el-form-item label="开启优质IP">
                          <el-radio-group v-model="form.open_ip">
                            <el-radio label="1">开启</el-radio>
                            <el-radio label="0">不开启</el-radio>
                          </el-radio-group>
                        </el-form-item>
                        <el-form-item label="访客地区">
                          <span style="margin-right: 20px;">
                            {{isAllArea === 'no' ? '部分地区' : '不限地区'}}
                          </span>
                          <el-button @click="setAreaModal">设置</el-button>
                        </el-form-item>
                        </template>
                    </el-form>
                </div>
            </el-row>
            <el-row class="page-footer">
                <el-button type="primary" @click="handleStart">立即开始</el-button>
            </el-row>
        </el-card>
        <!--弹窗-->
        <setflow-modal v-model="modal.flowModal" :detailinfo="detailInfo" v-on:childByValue="receiveFlowValue"></setflow-modal>
        <!--地区弹窗-->
        <area-modal v-model="modal.areaModal" :detailinfo="detailInfo" v-on:childByArea="receiveAreaValue"></area-modal>
    </div>
</template>
<script>
import TaskApi from '@/api/TaskApi'
import Cookies from 'js-cookie'
import SetflowModal from './components/SetflowModal'
import AreaModal from './components/AreaModal'

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
  name: 'ArticleTask',
  components: {SetflowModal, AreaModal},
  data () {
    return {
      rules,
      modal: {flowModal: false, areaModal: false},
      form: {
        task_name: '',
        task_link_name: '',
        task_link: '',
        task_num: '',
        open_ip: '0'
      },
      cityList: [], // 城市列表
      flowVals: [],
      areaVals: [],
      isAllArea: 'yes',
      detailInfo: {}
    }
  },
  mounted () {
    this.getCitys()
  },
  computed: {
    userInfo () {
      let user = JSON.parse(Cookies.get('user'))
      return user
    }
  },
  methods: {
    // 点击开始任务按钮
    handleStart () {
      console.log(this.calcBalance)
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.creatArticleTask()
        }
      })
    },
    creatArticleTask () {
      let params = Object.assign({}, this.form)
      params['user_token'] = this.userInfo['user_token']
      params['task_type'] = 1
      params['task_area '] = JSON.stringify(this.areaVals)
      params['task_info'] = JSON.stringify(this.flowVals)
      TaskApi.creatTask(params).then(res => {
        if (res.ret === 200) {
          this.$message.success('创建任务成功！')
          this.$store.commit('setUserBalance', this.calcBalance())
          this.clearData()
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    // 获取地区列表
    getCitys () {
      let params = {}
      params['user_token'] = this.userInfo['user_token']
      TaskApi.getCityList(params).then(res => {
        if (res.ret === 200) {
          this.cityList = res.data
          if (this.cityList.length > 0) {
            this.cityList.forEach(item => {
              this.areaVals.push(item.id)
            })
            this.isAllArea = 'yes'
          }
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    setFlowModal () {
      if (parseInt(this.form['task_num']) === '') {
        this.$message.error('任务数量不能为空！！！')
        return
      }
      let Obj = {}
      Obj['task_num'] = this.form['task_num']
      this.detailInfo = Object.assign({}, Obj)
      this.modal.flowModal = true
    },
    setAreaModal () {
      let Obj = {}
      Obj['user_token'] = this.userInfo['user_token']
      this.detailInfo = Object.assign({}, Obj)
      this.modal.areaModal = true
    },
    // 接收子组件传的值
    receiveFlowValue (val) {
      this.flowVals = val
    },
    receiveAreaValue (val) {
      this.areaVals = val['checkAreas']
      this.isAllArea = val['isAll']
    },
    // 计算余额
    calcBalance () {
      let jine = this.$store.state.user.userBalance
      let pay = Math.ceil((Number(this.form['task_num']) / 100)) * 0.05
      let balance = Number(jine) - pay
      return balance
    },
    // 清除数据
    clearData () {
      this.areaVals = []
      this.isAllArea = 'yes'
      this.form = {
        task_name: '',
        task_link_name: '',
        task_link: '',
        task_num: '',
        open_ip: '0'
      }
    },
    // 返回任务列表
    toList () {
      this.$router.push({path: '/media/article'})
    }
  }
}
</script>
