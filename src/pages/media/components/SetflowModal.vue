<style lang="less" scoped>
  @import '../less/setFlow.less';
</style>
<template>
  <div>
    <el-dialog title="流量时间设置" width="1000px"
      :visible.sync="visible" :modal="true" :modal-append-to-body="false" :append-to-body="true"
      :close-on-click-modal="false" :before-close="closeModal">
      <el-row class="curve-total">
        <el-form label-width="110px" :inline="true">
          <el-form-item label="预设总访客量:">
            <span>{{detailinfo.task_num}}</span>
          </el-form-item>
          <el-form-item label="已分配访客量:">
            <span>{{distribution}}</span>
          </el-form-item>
          <el-form-item label="未分配访客量:">
            <span>{{detailinfo.task_num - distribution}}</span>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row class="curve-row">
        <el-form :inline="true" label-width="50px">
          <el-row :gutter="10">
            <el-col :span="6">
            <el-form-item label="0点">
              <el-input-number size="small" :min="0" v-model.trim="vals.val0"></el-input-number>
            </el-form-item>
            </el-col>
            <el-col :span="6">
            <el-form-item label="1点">
              <el-input-number size="small" :min="0" v-model.trim="vals.val1"></el-input-number>
            </el-form-item>
            </el-col>
            <el-col :span="6">
            <el-form-item label="2点">
              <el-input-number size="small" :min="0" v-model.trim="vals.val2"></el-input-number>
            </el-form-item>
            </el-col>
            <el-col :span="6">
            <el-form-item label="3点">
              <el-input-number size="small" :min="0" v-model.trim="vals.val3"></el-input-number>
            </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="10">
            <el-col :span="6">
            <el-form-item label="4点">
              <el-input-number size="small" :min="0" v-model.trim="vals.val4"></el-input-number>
            </el-form-item>
            </el-col>
            <el-col :span="6">
            <el-form-item label="5点">
              <el-input-number size="small" :min="0" v-model.trim="vals.val5"></el-input-number>
            </el-form-item>
            </el-col>
            <el-col :span="6">
            <el-form-item label="6点">
              <el-input-number size="small" :min="0" v-model.trim="vals.val6"></el-input-number>
            </el-form-item>
            </el-col>
            <el-col :span="6">
            <el-form-item label="7点">
              <el-input-number size="small" :min="0" v-model.trim="vals.val7"></el-input-number>
            </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="10">
            <el-col :span="6">
            <el-form-item label="8点">
              <el-input-number size="small" :min="0" v-model.trim="vals.val8"></el-input-number>
            </el-form-item>
            </el-col>
            <el-col :span="6">
            <el-form-item label="9点">
              <el-input-number size="small" :min="0" v-model.trim="vals.val9"></el-input-number>
            </el-form-item>
            </el-col>
            <el-col :span="6">
            <el-form-item label="10点">
              <el-input-number size="small" :min="0" v-model.trim="vals.val10"></el-input-number>
            </el-form-item>
            </el-col>
            <el-col :span="6">
            <el-form-item label="11点">
              <el-input-number size="small" :min="0" v-model.trim="vals.val11"></el-input-number>
            </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="10">
            <el-col :span="6">
            <el-form-item label="12点">
              <el-input-number size="small" :min="0" v-model.trim="vals.val12"></el-input-number>
            </el-form-item>
            </el-col>
            <el-col :span="6">
            <el-form-item label="13点">
              <el-input-number size="small" :min="0" v-model.trim="vals.val13"></el-input-number>
            </el-form-item>
            </el-col>
            <el-col :span="6">
            <el-form-item label="14点">
              <el-input-number size="small" :min="0" v-model.trim="vals.val14"></el-input-number>
            </el-form-item>
            </el-col>
            <el-col :span="6">
            <el-form-item label="15点">
              <el-input-number size="small" :min="0" v-model.trim="vals.val15"></el-input-number>
            </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="10">
            <el-col :span="6">
            <el-form-item label="16点">
              <el-input-number size="small" :min="0" v-model.trim="vals.val16"></el-input-number>
            </el-form-item>
            </el-col>
            <el-col :span="6">
            <el-form-item label="17点">
              <el-input-number size="small" :min="0" v-model.trim="vals.val17"></el-input-number>
            </el-form-item>
            </el-col>
            <el-col :span="6">
            <el-form-item label="18点">
              <el-input-number size="small" :min="0" v-model.trim="vals.val18"></el-input-number>
            </el-form-item>
            </el-col>
            <el-col :span="6">
            <el-form-item label="19点">
              <el-input-number size="small" :min="0" v-model.trim="vals.val19"></el-input-number>
            </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="10">
            <el-col :span="6">
            <el-form-item label="20点">
              <el-input-number size="small" :min="0" v-model.trim="vals.val20"></el-input-number>
            </el-form-item>
            </el-col>
            <el-col :span="6">
            <el-form-item label="21点">
              <el-input-number size="small" :min="0" v-model.trim="vals.val21"></el-input-number>
            </el-form-item>
            </el-col>
            <el-col :span="6">
            <el-form-item label="22点">
              <el-input-number size="small" :min="0" v-model.trim="vals.val22"></el-input-number>
            </el-form-item>
            </el-col>
            <el-col :span="6">
            <el-form-item label="23点">
              <el-input-number size="small" :min="0" v-model.trim="vals.val23"></el-input-number>
            </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeModal">取 消</el-button>
        <el-button type="primary" @click="handleComfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'SetflowModal',
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
  computed: {
    // 计算已经分配
    distribution () {
      let total = 0
      Object.keys(this.vals).forEach(item => {
        total += this.vals[item]
      })
      return total
    },
    // 检查分配的值
    checkVals () {
      let canComfirm = false
      let total = 0
      Object.keys(this.vals).forEach(item => {
        total += this.vals[item]
      })
      if (total < Number(this.detailinfo.task_num) || total === Number(this.detailinfo.task_num)) {
        canComfirm = true
      } else {
        canComfirm = false
      }
      return canComfirm
    },
    taskInfo () {
      let arr = []
      Object.keys(this.vals).forEach(item => {
        arr.push(this.vals[item])
      })
      return arr
    }
  },
  data () {
    return {
      visible: false,
      vals: {
        val0: 0,
        val1: 0,
        val2: 0,
        val3: 0,
        val4: 0,
        val5: 0,
        val6: 0,
        val7: 0,
        val8: 0,
        val9: 0,
        val10: 0,
        val11: 0,
        val12: 0,
        val13: 0,
        val14: 0,
        val15: 0,
        val16: 0,
        val17: 0,
        val18: 0,
        val19: 0,
        val20: 0,
        val21: 0,
        val22: 0,
        val23: 0
      }
    }
  },
  methods: {
    // 确定按钮
    handleComfirm () {
      if (this.checkVals === false) {
        this.$message.error('分配的数量之和不能大于预设总量！！！')
        return
      }
      this.$emit('childByValue', this.taskInfo)
      this.closeModal()
    },
    closeModal () {
      this.visible = false
      this.$parent.modal.flowModal = false
      this.$parent.detailinfo = {}
    }
  },
  watch: {
    value (val) {
      this.visible = val
    }
  }
}
</script>
