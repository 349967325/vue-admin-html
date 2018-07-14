
<template>
  <div class=login>
    <div class=login-con>
      <Card>
        <p slot="title">
          <Icon type="log-in"></Icon>
          欢迎登录
        </p>
        <div class="form-con">
          <Form>
            <Form-item>
              <Input placeholder="请输入用户名" />
            </Form-item>
            <Form-item>
              <Input type="password" placeholder="请输入密码" />
            </Form-item>
            <Form-item>
              <Button @click="handleSubmit" type="primary" long>登录</Button>
            </Form-item>
          </Form>
        </div>
      </Card>
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
