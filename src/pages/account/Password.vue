<style lang="less" scoped>

</style>
<template>
    <div>
        <el-card shadow="hover">
             <el-row>
                <el-tabs type="card">
                <el-tab-pane name="account" label="修改密码"></el-tab-pane>
                </el-tabs>
            </el-row>
            <el-row class-name="user-con">
                <el-form label-width="100px">
                    <el-form-item label="原密码">
                        <span style="padding-left:10px;">
                            <el-input v-model.trim="query['oldpassword']" style="width: 300px;"/>
                        </span>
                    </el-form-item>
                    <el-form-item label="新密码">
                        <span style="padding-left:10px;">
                            <el-input v-model.trim="query['newpassword']" style="width: 300px;"/>
                        </span>
                    </el-form-item>
                    <el-form-item label="确认新密码">
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
export default {
  name: 'Password',
  data () {
    return {
      query: {
        oldpassword: '',
        newpassword: '',
        password: ''
      }
    }
  }
}
</script>
