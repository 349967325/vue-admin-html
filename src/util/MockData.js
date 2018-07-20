import Mock from 'mockjs'
const Random = Mock.Random
const articleData = Mock.mock({
  'resultList|1-20': [
    {
      'task_name': '@name',
      'article_name': '@name',
      'task_url': '@url',
      'task_plan|200-10000': 200,
      'today|200-1000': 200,
      'yest|20-2000': 20,
      'time': Random.date(),
      'status': 'ing'
    }
  ]
})
export default {
  articleData
}
