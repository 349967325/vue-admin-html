<style lang="less" scoped>
  @import './less/creatTask.less';
</style>
<template>
    <div>
        <el-card>
            <el-row class="page-oper">
                <el-button>返回任务列表</el-button>
                <div class="cur_task">
                    <span>当前任务计费：</span>
                    <span style="color: red;">0.05点</span>
                </div>
            </el-row>
            <el-row class="page-step-block">
                <h4 class="step-title"><span class="step-badge">1</span>任务设置</h4>
                <div class="step-con">
                    <el-form label-width="120px">
                        <el-form-item label="任务名称">
                            <el-input style="width: 300px;"/>
                        </el-form-item>
                        <el-form-item label="文章链接">
                            <el-input style="width: 700px;"/>
                        </el-form-item>
                        <el-form-item label="文章名称">
                            <el-input style="width:700px;"/>
                        </el-form-item>
                        <el-form-item label="计划阅读量">
                            <el-input style="width: 300px;" />
                            <span style="margin-left: 10px; color: #2d8cf0;">基础流量费：0.05点</span>
                        </el-form-item>
                        <el-form-item label="流量时间控制">
                            <el-radio-group v-model="radio2">
                                <el-radio :label="3">开启</el-radio>
                                <el-radio :label="6">不开启</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-form>
                </div>
            </el-row>
            <el-row class="page-footer">
                <el-button type="primary">立即开始</el-button>
            </el-row>
        </el-card>
    </div>
</template>
<script>
export default {
  name: 'ArticleTask',
  data () {
    return {
      radio2: '6'
    }
  }
}
</script>
