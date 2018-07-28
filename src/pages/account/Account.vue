<style lang="less" scoped>
  @import './less/account.less';
</style>
<template>
    <div>
        <el-card shadow="hover">
            <el-row>
                <el-tabs type="card" value="account">
                <el-tab-pane name="account" label="账号设置"></el-tab-pane>
                </el-tabs>
            </el-row>
            <el-row class-name="user-con">
                <el-form label-width="100px">
                    <el-form-item label="用户名">
                        <span style="padding-left:10px;">{{userDetail['user_name']}}</span>
                    </el-form-item>
                    <el-form-item label="手机">
                        <span style="padding-left:10px;">{{userDetail['user_mobile']}}</span>
                    </el-form-item>
                    <el-form-item label="邮箱">
                        <span style="padding-left:10px;">{{userDetail['user_mail']}}</span>
                    </el-form-item>
                    <el-form-item label="密码">
                        <span style="padding-left:10px;"><el-button @click="goModifyPassword">修改密码</el-button></span>
                    </el-form-item>
                </el-form>
            </el-row>
        </el-card>
    </div>
</template>
<script>
import TaskApi from '@/api/TaskApi'
import Cookies from 'js-cookie'
export default {
  name: 'Account',
  data () {
    return {
      userDetail: {}
    }
  },
  computed: {
    userInfo () {
      let user = JSON.parse(Cookies.get('user'))
      console.log(user)
      return user
    }
  },
  mounted () {
    this.getUserInfo()
  },
  methods: {
    // 获取用户信息
    getUserInfo () {
      let params = {}
      params['user_token'] = this.userInfo['user_token']
      TaskApi.getUserInfo(params).then(res => {
        if (res.ret === 200) {
          this.userDetail = res.data
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    goModifyPassword () {
      this.$router.push({path: '/user/password'})
    }
  }
}
</script>
