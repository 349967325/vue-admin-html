<style lang="less" scoped>
  @import './less/recharge.less';
</style>
<template>
  <div>
    <el-card shadow="hover">
      <el-row>
        <el-tabs type="card" value="recharge">
        <el-tab-pane name="recharge" label="购买点券"></el-tab-pane>
        </el-tabs>
      </el-row>
      <el-row>
        <ul class="recharge-con">
          <li class="recharge-item-block" v-for="item in prdList" :key="item['id']">
            <div class="coupon-box">
              <div class="par">
                <span>{{item['product_spot']}}</span>
                <span class="text">点</span>
              </div>
              <div class="copy">
                <p>购买价格</p>
                <p>{{item['final_price']}}<span class="text">元</span></p>
              </div>
            </div>
            <div class="btn-box">
              <el-button @click="handleBuy(item)">立即购买</el-button>
            </div>
          </li>
        </ul>
      </el-row>
    </el-card>
    <buy-detail-modal v-model="modal.buyModal" :detailinfo="detailInfo"></buy-detail-modal>
  </div>
</template>
<script>
import TaskApi from '@/api/TaskApi'
import Cookies from 'js-cookie'
import BuyDetailModal from './components/BuyDetailModal'
export default {
  name: 'Recharge',
  components: {BuyDetailModal},
  data () {
    return {
      modal: {buyModal: false},
      detailInfo: {},
      prdList: []
    }
  },
  computed: {
    userInfo () {
      let user = JSON.parse(Cookies.get('user'))
      return user
    }
  },
  mounted () {
    this.getPrdList()
  },
  methods: {
    getPrdList () {
      let params = {}
      params['user_token'] = this.userInfo['user_token']
      TaskApi.rechargeProduct(params).then(res => {
        if (res.ret === 200) {
          if (res.data && res.data.length > 0) {
            let _data = res.data
            _data.forEach(item => {
              if (item.status === '1') {
                this.prdList.push(item)
              }
            })
          }
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    // 点击购买
    handleBuy (prd) {
      this.detailInfo = Object.assign({}, prd)
      this.detailInfo['user_name'] = this.userInfo['user_name']
      console.log(this.detailInfo)
      this.modal.buyModal = true
    }
  }
}
</script>
