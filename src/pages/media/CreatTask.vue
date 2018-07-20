<style lang="less" scoped>
  @import './less/creatTask.less';
</style>
<template>
    <div>
        <Card>
            <Row class-name="page-oper">
                <Button>返回任务列表</Button>
            </Row>
            <Row class-name="page-step-block">
                <h4 class="step-title"><span class="step-badge">1</span>基础设置</h4>
                <div class="step-con">
                    <Form :label-width="100">
                        <Form-item label="任务名称">
                            <Input style="width: 300px;"/>
                        </Form-item>
                        <Form-item label="文章链接">
                            <Input style="width: 800px;"/>
                        </Form-item>
                        <Form-item label="文章名称">
                            <Input style="width: 800px;"/>
                        </Form-item>
                        <Form-item label="计划阅读量">
                            <Input style="width: 300px;" />
                        </Form-item>
                    </Form>
                </div>
            </Row>
            <Row class-name="page-step-block">
                <h4 class="step-title"><span class="step-badge">2</span>高级设置</h4>
                <div class="step-con">
                    <Form :label-width="100">
                        <Form-item label="流量时间控制">
                            <span>平滑模式</span>
                        </Form-item>
                    </Form>
                    <Form :label-width="100">
                        <Form-item label="阅读完成度">
                            <Select style="width: 200px;"></Select>
                        </Form-item>
                    </Form>
                    <Form :label-width="100">
                        <Form-item label="文章浏览时间">
                            <Select style="width: 200px;"></Select>
                        </Form-item>
                    </Form>
                    <Form :label-width="100">
                        <Form-item label="阅读来源">
                            <span>其他</span>
                        </Form-item>
                    </Form>
                </div>
            </Row>
            <Row class-name="page-footer">
                <Button style="margin-right: 20px;">保存任务</Button>
                <Button type="primary">立即开始</Button>
            </Row>
        </Card>
    </div>
</template>
<script>
export default {
  name: 'CreatTask'
}
</script>
