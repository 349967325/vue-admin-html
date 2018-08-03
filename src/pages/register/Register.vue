
<template>
  <div class=login>
    <div class=login-con>
      <el-card>
        <p slot="header">
          账号注册
        </p>
        <div class="form-con">
          <el-form ref="form" :model="form" :rules="regRules">
            <el-form-item prop="userName">
              <el-input type="email" v-model.trim="form['userName']" placeholder="请输入邮箱" />
            </el-form-item>
            <el-form-item prop="mobile">
              <el-input v-model.trim="form['mobile']" placeholder="请输入手机号"/>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model.trim="form['password']" type="password" placeholder="请输入密码" />
            </el-form-item>
            <el-form-item prop="repassword">
              <el-input v-model.trim="form['repassword']" type="password" placeholder="请确认密码" />
            </el-form-item>
          </el-form>
        </div>
        <el-row class="login-footer">
          <el-button type="primary" @click="handleSubmit" style="width: 120px;">注册</el-button>
          <p class="hint">
            <router-link to="/login">已有账号，马上登录</router-link>
          </p>
        </el-row>
      </el-card>
    </div>
  </div>
</template>
<script>
import TaskApi from '@/api/TaskApi'
// import Cookies from 'js-cookie'

const regRules = {
  userName: [
    {required: true, message: '用户邮箱不能为空', trigger: 'blur'}
  ],
  mobile: [
    {required: true, message: '手机号不能为空', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '密码不能为空', trigger: 'blur'}
  ],
  repassword: [
    {required: true, message: '确认密码不能为空', trigger: 'blur'}
  ]
}
export default {
  name: 'Register',
  data () {
    return {
      regRules,
      form: {
        userName: '',
        password: '',
        repassword: '',
        mobile: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          let isEmail = this.checkEmail()
          let isMobile = this.checkMobile()
          if (isEmail === true && isMobile === true) {
            this.userRegister()
          } else {
            this.$message.error('请输入正确的邮箱和手机号！！！')
            this.form['password'] = ''
            this.form['repassword'] = ''
          }
        }
      })
    },
    userRegister () {
      let params = {}
      params['user_name'] = this.form['userName']
      params['password'] = this.form['password']
      params['repassword'] = this.form['repassword']
      params['user_mobile'] = this.form['mobile']
      TaskApi.userRegister(params).then(res => {
        if (res.ret === 200) {
          this.$message.success('恭喜你，注册成功！')
          this.clearData()
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    // 校验是否是邮箱
    checkEmail () {
      let reg = new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$')
      if (!reg.test(this.form['userName'])) {
        return false
      } else {
        return true
      }
    },
    // 校验手机
    checkMobile () {
      let reg = new RegExp(/(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/)
      if (!reg.test(this.form['mobile'])) {
        return false
      } else {
        return true
      }
    },
    // 清除数据
    clearData () {
      this.$refs.form.resetFields()
      this.form = {
        userName: '',
        password: '',
        repassword: ''
      }
    }
  }
}
</script>
<style lang="less" scoped>
  @import './less/register.less';
</style>
