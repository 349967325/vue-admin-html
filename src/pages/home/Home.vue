<template>
  <div>
    这是Home页面
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Home',
  mounted () {
    this.testAjax()
  },
  methods: {
    testAjax () {
      axios.get('http://api.renqichong.com/?s=Hello.World').then(res => {
        console.log(res)
      })
    }
  }
}
</script>
