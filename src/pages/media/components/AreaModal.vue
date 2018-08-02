<style lang="less" scoped>
  @import '../less/setFlow.less';
</style>
<template>
  <div>
    <el-dialog title="流量时间设置" width="1000px"
      :visible.sync="visible" :modal="true" :modal-append-to-body="false"
      :close-on-click-modal="false" :before-close="closeModal">
      <el-row class="curve-total">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="(item) in cityList" :label="item.id" :key="item.id" style="margin-left:30px; margin-bottom: 20px;">
            {{item.provincial}}
          </el-checkbox>
        </el-checkbox-group>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeModal">取 消</el-button>
        <el-button type="primary" @click="handleComfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import TaskApi from '@/api/TaskApi'
export default {
  name: 'AreaModal',
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
  },
  data () {
    return {
      visible: false,
      cityList: [],
      checkAll: false,
      isIndeterminate: true,
      checkedCities: []
    }
  },
  methods: {
    // 获取地区列表
    getCitys () {
      let params = {}
      params['user_token'] = this.detailinfo.user_token
      TaskApi.getCityList(params).then(res => {
        if (res.ret === 200) {
          this.cityList = res.data
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    // 不限地区
    handleCheckAllChange (val) {
      if (val === true) {
        this.cityList.forEach(item => {
          this.checkedCities.push(item.id)
        })
      } else {
        this.checkedCities = []
      }
      this.isIndeterminate = false
    },
    // 选择地区
    handleCheckedCitiesChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cityList.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cityList.length
    },
    // 确定按钮
    handleComfirm () {
      let childVal = {}
      childVal['checkAreas'] = this.checkedCities
      childVal['isAll'] = this.checkedCities.length === this.cityList.length ? 'yes' : 'no'
      this.$emit('childByArea', childVal)
      this.closeModal()
    },
    closeModal () {
      this.visible = false
      this.cityList = []
      this.checkAll = false
      this.isIndeterminate = true
      this.checkedCities = []
      this.$parent.modal.areaModal = false
      this.$parent.detailinfo = {}
    }
  },
  watch: {
    value (val) {
      this.visible = val
      if (this.visible === true) {
        this.getCitys()
      }
    }
  }
}
</script>
