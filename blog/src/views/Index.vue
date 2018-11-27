<style type="scoped" lang="scss">
    @import '../assets/css/index.scss';
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<template>
  <div id="index-body">
      <div id="background-img1"></div>
      <div>{{user}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

    export default {
      data: () => ({
        show: false,
        test:'1',
        percent:0,
        a:null,
      }),
      computed:{
        ...mapState([
          'user'
        ])
      },
      created:function(){
        const _this = this;
       // this.$store.dispatch('setUser');
      },
      mounted:function(){
        var _this = this;
        _this.show = true;
      },
      methods: {

      }
  }
</script>
