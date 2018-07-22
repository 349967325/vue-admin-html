
<template>
  <div class=login>
    <div class=login-con>
      <el-card>
        <p slot="header">
          欢迎登录
        </p>
        <div class="form-con">
          <el-form>
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
export default {
  name: 'Login',
  data () {
    return {}
  },
  methods: {
    handleSubmit () {
      console.log('登录')
    }
  }
}
</script>
<style lang="less" scoped>
  @import './login.less';
</style>
