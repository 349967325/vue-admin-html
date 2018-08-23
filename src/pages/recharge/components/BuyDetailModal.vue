<style lang="less" scoped>
  @import '../less/buydetail.less';
</style>
<template>
  <div>
    <el-dialog title="点数充值"
      :visible.sync="visible" :modal="true" :modal-append-to-body="false"
      :close-on-click-modal="false" :before-close="closeModal">
      <div class="buy-detail">
        <el-row style="margin-bottom: 25px;">
          <h4 class="step-title"><span class="step-badge">1</span>充值信息</h4>
          <div class="detail-con">
            <div class="detail-item">
              <label>充值点数：</label>
              <span style="color: #00bdae;">{{detailinfo['product_spot']}}</span><span>点</span>
            </div>
            <div class="detail-item">
              <label>充值账号：</label>
              <span>{{detailinfo['user_name']}}</span>
            </div>
            <div class="detail-item">
              <label>付款金额：</label>
              <span style="color: #ff4752;">￥{{detailinfo['final_price']}}</span>
            </div>
          </div>
        </el-row>
         <el-row>
          <h4 class="step-title"><span class="step-badge">2</span>支付方式</h4>
          <p>
            在线支付&nbsp;&nbsp;&nbsp;<span style="font-size: 12px; color: #999;">实时到账，自动充值</span>
          </p>
          <div class="detail-con">
            <el-radio v-model="paymethod" label="zfb">
              <img style="display: inline-block; width: 50px; vertical-align: middle;" src="../images/timg02.jpg" />
            </el-radio>
          </div>
        </el-row>
        <!--底部按钮-->
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" :loading="loading" @click="confirm">确认付款</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import TaskApi from '@/api/TaskApi'
import Cookies from 'js-cookie'
export default {
  name: 'BuyDetailModal',
  props: {
    value: {
      type: Boolean,
      default: () => {
        return {}
      }
    },
    detailinfo: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      visible: false,
      loading: false,
      paymethod: 'zfb' // 支付方式
    }
  },
  computed: {
    userInfo () {
      let user = JSON.parse(Cookies.get('user'))
      return user
    }
  },
  methods: {
    // 确认付款 按钮
    confirm () {
      this.loading = true
      this.creatOrder()
    },
    // 生成订单
    creatOrder () {
      let params = {}
      params['user_token'] = this.userInfo['user_token']
      params['product_id'] = this.detailinfo['id']
      TaskApi.setOrder(params).then(res => {
        this.loading = false
        if (res.ret === 200) {
          this.orderPay(res.data)
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    // 支付
    orderPay (orderId) {
      let params = {}
      params['user_token'] = this.userInfo['user_token']
      params['order_id'] = orderId
      TaskApi.pay(params).then(res => {
        if (res.ret === 200) {
          if (res.data) {
            document.write(res.data)
          }
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    // 关闭弹窗
    closeModal () {
      this.loading = false
      this.$parent.detailInfo = {}
      this.$parent.modal['buyModal'] = false
    }
  },
  watch: {
    value (val) {
      this.visible = val
    }
  }
}
</script>
