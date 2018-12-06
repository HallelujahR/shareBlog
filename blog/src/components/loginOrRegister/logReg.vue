 <style type="scoped" lang="scss">
@import "../../assets/css/logReg.scss";
</style>

<template>
  <div>

    <div id="log-main">
      <transition name="slide-fade">
        <login @reg='reg'
               v-if="show1"></login>
        <register @log='log'
                  v-else></register>
      </transition>
    </div>

  </div>
</template>

<script>
export default {

  data () {
    return {
      show: false,
      show1: true,
    }
  },
  components: {
    'login': () => import('../../components/loginOrRegister/login.vue'),//登录组件
    'register': () => import('../../components/loginOrRegister/register.vue'),//注册组件
  },
  mounted: function () {
    this.show = true;
    if (localStorage.verbState === 'true') this.$router.push({ name: 'index' })
  },
  methods: {
    reg () {
      this.show1 = false;
    },
    log () {
      this.show1 = true;
    }
  }

}
</script>