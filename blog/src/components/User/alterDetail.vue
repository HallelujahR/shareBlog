<style scoped lang="scss">
@import "@/assets/css/user/alterDetail.scss";
</style>

<template>
  <div id="alterDetail"
       v-bind:style="{ width: width+'px'}">
    <div id="detail-body">
      <el-tabs :tab-position="tabPosition"
               style="height: 100%;margin-left:150px;">
        <el-tab-pane label="基本信息">
          <Detail></Detail>
        </el-tab-pane>
        <el-tab-pane label="设置">配置管理</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Detail from './detail.vue';

export default {
  components: {
    Detail,
  },
  data () {
    return {
      tabPosition: 'left',
      width: '',
    };
  },
  mounted: function () {
    //获取浏览器窗口的宽度 
    this.width = window.screen.width;
  }
}
</script>
