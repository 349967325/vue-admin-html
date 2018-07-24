<style lang="less" scoped>

</style>
<template>
  <div>
    <el-dialog title="流量控制" :visible.sync="visible" :modal="true">
      <el-form>
        <el-form-item label="0" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="1" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="2" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="3" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="4" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="5" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="6" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="7" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="8" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="9" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="10" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="11" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="12" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="13" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="14" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="15" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="16" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="17" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="18" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="19" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="20" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="21" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="22" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="23" label-width="100px">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button>取 消</el-button>
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
      visible: false
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
