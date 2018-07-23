
<template>
  <div class=login>
    <div class=login-con>
      <el-card>
        <p slot="header">
          欢迎登录
        </p>
        <div class="form-con">
          <el-form ref="loginForm" :model="form" :rules="rules">
            <el-form-item prop="userName">
              <el-input v-model.trim="form['userName']" placeholder="请输入用户名" />
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model.trim="form['password']" type="password" placeholder="请输入密码" />
            </el-form-item>
          </el-form>
        </div>
        <el-row class="login-footer">
            <el-button type="primary" @click="handleSubmit" style="width: 120px;">登录</el-button>
          </el-row>
      </el-card>
    </div>
  </div>
</template>
<script>
import TaskApi from '@/api/TaskApi'
// import Cookies from 'js-cookie'
const rules = {
  userName: [
    {required: true, message: '用户名不能为空', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '密码不能为空', trigger: 'blur'}
  ]
}
export default {
  name: 'Login',
  data () {
    return {
      rules,
      form: {
        userName: '',
        password: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.userLogin()
          // Cookies.set('user', this.form.userName)
          // Cookies.set('password', this.form.password)
        }
      })
    },
    userLogin () {
      let params = {}
      params['user_name'] = this.form['userName']
      params['password'] = this.form['password']
      TaskApi.getLogin(params).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang="less" scoped>
  @import './login.less';
</style>
