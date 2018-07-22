<style lang="less" scoped>
  @import './less/account.less';
</style>
<template>
    <div>
        <el-card>
            <el-row>
                <el-tabs type="card">
                <el-tab-pane name="account" label="账号设置"></el-tab-pane>
                </el-tabs>
            </el-row>
            <el-row class-name="user-con">
                <el-form label-width="100px">
                    <el-form-item label="会员名">
                        <span style="padding-left:10px;">患者无病</span>
                    </el-form-item>
                    <el-form-item label="手机">
                        <span style="padding-left:10px;">15850326684</span>
                    </el-form-item>
                    <el-form-item label="邮箱">
                        <span style="padding-left:10px;">349967325@qq.com</span>
                    </el-form-item>
                    <el-form-item label="密码">
                        <span style="padding-left:10px;"><el-button>修改密码</el-button></span>
                    </el-form-item>
                </el-form>
            </el-row>
        </el-card>
    </div>
</template>
<script>
export default {
  name: 'Account'
}
</script>
