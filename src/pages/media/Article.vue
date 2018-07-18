<style lang="less" scoped>
  @import './less/article.less';
</style>

<template>
  <div>
    <Card>
      <Row>
        <Button type="primary">创建新任务</Button>
      </Row>
    <Row>
      <h4>筛选及查询</h4>
      <div class="chooseState">
        <div class="state-block">
          <span>任务状态</span>
          <RadioGroup v-model="state">
            <Radio label="all">全部</Radio>
            <Radio label="opti">优化中</Radio>
            <Radio label="stop">停止中</Radio>
            <Radio label="susp">暂停中</Radio>
            <Radio label="time">定时中</Radio>
          </RadioGroup>
        </div>
        <div class="input-block">
          <Select style="width: 160px;">
            <Option>搜索任务名称</Option>
            <Option>搜索文章编号</Option>
            <Option>搜索任务编号</Option>
          </Select>
          <Input icon="ios-search" style="width: 200px;"/>
          <Button type="info">查询</Button>
        </div>
      </div>
    </Row>
    <Row></Row>
    </Card>
  </div>
</template>
<script>
export default {
  name: 'Article'
}
</script>
