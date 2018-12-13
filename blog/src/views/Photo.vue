<style type="scoped" lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<template>
  <div>
    <div id="background-img3"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
    }
  },
  mounted: function () {
    var _this = this;
  }
}
</script>