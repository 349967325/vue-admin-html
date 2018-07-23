
<template>
  <div class=login>
    <div class=login-con>
      <el-card>
        <p slot="header">
          欢迎登录
        </p>
        <div class="form-con">
          <el-form ref="loginForm" :model="form" :rules="rules">
            <el-form-item>
              <el-input placeholder="请输入用户名" />
            </el-form-item>
            <el-form-item>
              <el-input type="password" placeholder="请输入密码" />
            </el-form-item>
          </el-form>
        </div>
        <el-row class="login-footer">
            <el-button type="primary" style="width: 120px;">登录</el-button>
          </el-row>
      </el-card>
    </div>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
const rules = {
  userName: [
    { required: true, message: '用户名不能为空', trigger: 'blur'}
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur'}
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
          Cookies.set('user', this.form.userName)
          Cookies.set('password', this.form.password)
        }
      })
    },
    userLogin () {
      console.log('用户登录')
    }
  }
}
</script>
<style lang="less" scoped>
  @import './login.less';
</style>
