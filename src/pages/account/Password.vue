<style lang="less" scoped>

</style>
<template>
  <div>
    <el-card shadow="hover">
      <el-row>
        <el-tabs type="card" value="setPassword">
          <el-tab-pane name="setPassword" label="修改密码"></el-tab-pane>
        </el-tabs>
      </el-row>
      <el-row class-name="user-con">
        <el-form label-width="100px" ref="ruleForm" :rules="rules" :model="query">
          <el-form-item label="原密码" prop="oldpassword">
            <span style="padding-left:10px;">
              <el-input v-model.trim="query['oldpassword']" style="width: 300px;"/>
            </span>
          </el-form-item>
          <el-form-item label="新密码" prop="newpassword">
            <span style="padding-left:10px;">
              <el-input v-model.trim="query['newpassword']" style="width: 300px;"/>
            </span>
          </el-form-item>
          <el-form-item label="确认新密码" prop="password">
            <span style="padding-left:10px;">
              <el-input v-model.trim="query['password']" style="width: 300px;"/>
            </span>
          </el-form-item>
          <el-form-item>
            <span style="padding-left:10px;">
              <el-button type="primary">提交</el-button>
            </span>
          </el-form-item>
        </el-form>
      </el-row>
    </el-card>
  </div>
</template>
<script>
import TaskApi from '@/api/TaskApi'
import Cookies from 'js-cookie'
const rules = {
  oldpassword: [
    { required: true, message: '请输入原密码', trigger: 'blur' }
  ],
  newpassword: [
    { required: true, message: '请输入新密码', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请确认密码', trigger: 'blur' }
  ]
}
export default {
  name: 'Password',
  data () {
    return {
      rules,
      query: {
        oldpassword: '',
        newpassword: '',
        password: ''
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
    // 提交按钮
    handleSubmit () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          if (this.query['password'] !== this.query['newpassword']) {
            return
          }
          this.setPassword()
        }
      })
    },
    setPassword () {
      let params = {}
      params['user_token'] = this.userInfo['user_token']
      params['oldpassword'] = this.query['oldpassword']
      params['newpassword'] = this.query['newpassword']
      params['renewpassword'] = this.query['password']
      TaskApi.setPassword(params).then(res => {
        if (res.ret === 200) {
          this.$message.success('修改密码成功！')
          this.clearData()
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    // 清除数据
    clearData () {
      this.$refs.ruleForm.resetFields()
      this.query = {
        oldpassword: '',
        newpassword: '',
        password: ''
      }
    }
  }
}
</script>
