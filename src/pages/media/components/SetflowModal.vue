<style lang="less" scoped>
  @import '../less/setFlow.less';
</style>
<template>
  <div>
    <el-dialog title="流量时间设置"
      :visible.sync="visible" :modal="true" :modal-append-to-body="false"
      :close-on-click-modal="false" :before-close="closeModal">
      <el-row class="curve-total">
        <el-form label-width="110px" :inline="true">
          <el-form-item label="预设总访客量:">
            <span>10000</span>
          </el-form-item>
          <el-form-item label="已分配访客量:">
            <span>200</span>
          </el-form-item>
          <el-form-item label="未分配访客量:">
            <span>0</span>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row class="curve-row">
        <el-col :span="1">
          <div class="curve-label">11</div>
          <div class="curve-slider">
            <el-slider v-model="val1" vertical height="200px"></el-slider>
          </div>
          <div class="curve-label">&nbsp;&nbsp;0</div>
        </el-col>
        <el-col :span="1">
          <div class="curve-label">11</div>
          <div class="curve-slider">
            <el-slider v-model="val1" vertical height="200px"></el-slider>
          </div>
          <div class="curve-label"> &nbsp;&nbsp;1</div>
        </el-col>
        <el-col :span="1">
          <div class="curve-label">11</div>
          <div class="curve-slider">
            <el-slider v-model="val1" vertical height="200px"></el-slider>
          </div>
          <div class="curve-label">&nbsp;&nbsp;2</div>
        </el-col>
        <el-col :span="1">
          <div class="curve-label">11</div>
          <div class="curve-slider">
            <el-slider v-model="val1" vertical height="200px"></el-slider>
          </div>
          <div class="curve-label">&nbsp;&nbsp;3</div>
        </el-col>
        <el-col :span="1">
          <div>11</div>
          <div class="curve-slider">
            <el-slider v-model="val1" vertical height="200px"></el-slider>
          </div>
          <div class="curve-label">&nbsp;&nbsp;4</div>
        </el-col>
        <el-col :span="1">
          <div>11</div>
          <div class="curve-slider">
            <el-slider v-model="val1" vertical height="200px"></el-slider>
          </div>
          <div class="curve-label">&nbsp;&nbsp;5</div>
        </el-col>
        <el-col :span="1">
          <div>11</div>
          <div class="curve-slider">
            <el-slider v-model="val1" vertical height="200px"></el-slider>
          </div>
          <div class="curve-label">&nbsp;&nbsp;6</div>
        </el-col>
        <el-col :span="1">
          <div class="curve-label">11</div>
          <div class="curve-slider">
            <el-slider v-model="val1" vertical height="200px"></el-slider>
          </div>
          <div class="curve-label">&nbsp;&nbsp;7</div>
        </el-col>
        <el-col :span="1">
          <div class="curve-label">11</div>
          <div class="curve-slider">
            <el-slider v-model="val1" vertical height="200px"></el-slider>
          </div>
          <div class="curve-label">&nbsp;&nbsp;8</div>
        </el-col>
        <el-col :span="1">
          <div class="curve-label">11</div>
          <div class="curve-slider">
            <el-slider v-model="val1" vertical height="200px"></el-slider>
          </div>
          <div class="curve-label">&nbsp;&nbsp;9</div>
        </el-col>
        <el-col :span="1">
          <div class="curve-label">11</div>
          <div class="curve-slider">
            <el-slider v-model="val1" vertical height="200px"></el-slider>
          </div>
          <div class="curve-label">&nbsp;&nbsp;10</div>
        </el-col>
        <el-col :span="1">
          <div class="curve-label">11</div>
          <div class="curve-slider">
            <el-slider v-model="val1" vertical height="200px"></el-slider>
          </div>
          <div class="curve-label">&nbsp;&nbsp;11</div>
        </el-col>
        <el-col :span="1">
          <div class="curve-label">11</div>
          <div class="curve-slider">
            <el-slider v-model="val1" vertical height="200px"></el-slider>
          </div>
          <div class="curve-label">&nbsp;&nbsp;12</div>
        </el-col>
        <el-col :span="1">
          <div class="curve-label">11</div>
          <div class="curve-slider">
            <el-slider v-model="val1" vertical height="200px"></el-slider>
          </div>
          <div class="curve-label">&nbsp;&nbsp;13</div>
        </el-col>
        <el-col :span="1">
          <div class="curve-label">11</div>
          <div class="curve-slider">
            <el-slider v-model="val1" vertical height="200px"></el-slider>
          </div>
          <div class="curve-label">&nbsp;&nbsp;14</div>
        </el-col>
        <el-col :span="1">
          <div class="curve-label">11</div>
          <div class="curve-slider">
            <el-slider v-model="val1" vertical height="200px"></el-slider>
          </div>
          <div class="curve-label">&nbsp;&nbsp;15</div>
        </el-col>
        <el-col :span="1">
          <div class="curve-label">11</div>
          <div class="curve-slider">
            <el-slider v-model="val1" vertical height="200px"></el-slider>
          </div>
          <div class="curve-label">&nbsp;&nbsp;16</div>
        </el-col>
        <el-col :span="1">
          <div class="curve-label">11</div>
          <div class="curve-slider">
            <el-slider v-model="val1" vertical height="200px"></el-slider>
          </div>
          <div class="curve-label">&nbsp;&nbsp;17</div>
        </el-col>
        <el-col :span="1">
          <div class="curve-label">11</div>
          <div class="curve-slider">
            <el-slider v-model="val1" vertical height="200px"></el-slider>
          </div>
          <div class="curve-label">&nbsp;&nbsp;18</div>
        </el-col>
        <el-col :span="1">
          <div class="curve-label">11</div>
          <div class="curve-slider">
            <el-slider v-model="val1" vertical height="200px"></el-slider>
          </div>
          <div class="curve-label">&nbsp;&nbsp;19</div>
        </el-col>
        <el-col :span="1">
          <div class="curve-label">11</div>
          <div class="curve-slider">
            <el-slider v-model="val1" vertical height="200px"></el-slider>
          </div>
          <div class="curve-label">&nbsp;&nbsp;20</div>
        </el-col>
        <el-col :span="1">
          <div class="curve-label">11</div>
          <div class="curve-slider">
            <el-slider v-model="val1" vertical height="200px"></el-slider>
          </div>
          <div class="curve-label">&nbsp;&nbsp;21</div>
        </el-col>
        <el-col :span="1">
          <div class="curve-label">11</div>
          <div class="curve-slider">
            <el-slider v-model="val1" vertical height="200px"></el-slider>
          </div>
          <div class="curve-label">&nbsp;&nbsp;22</div>
        </el-col>
        <el-col :span="1">
          <div class="curve-label">11</div>
          <div class="curve-slider">
            <el-slider v-model="val1" vertical height="200px"></el-slider>
          </div>
          <div class="curve-label">&nbsp;&nbsp;23</div>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeModal">取 消</el-button>
        <el-button type="primary">确 定</el-button>
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
    }
  },
  data () {
    return {
      visible: false,
      val1: 100
    }
  },
  methods: {
    closeModal () {
      this.visible = false
      this.$parent.modal.flowModal = false
    }
  },
  watch: {
    value (val) {
      console.log(val)
      this.visible = val
    }
  }
}
</script>
