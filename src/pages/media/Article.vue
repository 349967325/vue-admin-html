<style lang="less" scoped>
  @import './less/article.less';
</style>

<template>
  <div>
    <Card>
      <Row>
        <Button type="primary" icon="plus">创建新任务</Button>
      </Row>
    <Row>
      <h4 class="box-title">
        <Icon type="search" size="16" style="margin-right: 10px;"></Icon>
        <span>筛选及查询</span>
        </h4>
      <div class="chooseState">
        <div class="state-block">
          <span class="state-title">任务状态</span>
          <RadioGroup v-model="query['state']">
            <Radio label="all">全部</Radio>
            <Radio label="opti">优化中</Radio>
            <Radio label="stop">停止中</Radio>
            <Radio label="susp">暂停中</Radio>
            <Radio label="time">定时中</Radio>
          </RadioGroup>
        </div>
        <div class="input-block">
          <Select v-model="query['type']" style="width: 160px;">
            <Option value="name" key="1">搜索任务名称</Option>
            <Option value="art_num" key="2">搜索文章编号</Option>
            <Option value="task_num" key="3">搜索任务编号</Option>
          </Select>
          <Input icon="ios-search" v-model="query['text']" style="width: 200px;"/>
          <Button type="primary">查询</Button>
        </div>
      </div>
    </Row>
    <Row>
      <h4 class="box-title">
        <Icon type="navicon-round" size="16" style="margin-right: 10px;"></Icon>
        <span>任务列表</span>
      </h4>
      <Table :data="tableData" :columns="columns" border></Table>
    </Row>
    </Card>
  </div>
</template>
<script>
import articleData from '@/util/MockData'
const columns = [
  {
    title: '编号',
    type: 'index'
  },
  {
    title: '任务名称',
    key: 'task_name'
  },
  {
    title: '文章名称',
    key: 'article_name'
  },
  {
    title: '文章链接',
    key: 'task_url'
  },
  {
    title: '计划量',
    key: 'task_plan'
  },
  {
    title: '今日',
    key: 'today'
  },
  {
    title: '昨日',
    key: 'yest'
  },
  {
    title: '有效期',
    key: 'time'
  },
  {
    title: '状态',
    key: 'status'
  },
  {
    title: '任务控制'
  }
]
export default {
  name: 'Article',
  data () {
    return {
      columns,
      tableData: [],
      query: {
        state: 'all',
        type: '',
        text: ''
      }
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      this.tableData = articleData.articleData.resultList
      console.log(this.tableData)
    }
  }
}
</script>
