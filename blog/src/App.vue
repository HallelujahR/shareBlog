<style lang="scss">
body {
  margin: 0 auto;
}
.el-header {
  box-shadow: 0px 0px 3px #ccc;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 1000 !important;
  background-color: white;
}
.el-main {
  margin-top: 70px;
  padding: 0px !important;
  width: 1200px;
  margin: 0 auto;
  margin-top: 70px;
}
</style>
<template>
  <el-container>
    <el-header height="50px">
      <dh></dh>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {

  data () {
    return {
      show: false,
    }
  },
  components: {
    'dh': () => import('./components/nav.vue'),//引入左侧导航组件
  },
  computed: {
    key () {
      return this.$route.path + Math.random();
    }
  },
  methods: {
    ...mapMutations({
      setverbState: 'SET_VERBSTATE',
      setToken: 'SET_TOKEN',
    }),
    ...mapActions([
      'setUser',
    ]),
  },
  created: function () {

    //判断登录的状态
    const verbState = localStorage.getItem('verbState');
    const token = localStorage.getItem('access_token');

    if (verbState === 'true') {

      this.setverbState(true);
      this.setToken(token);
      this.setUser();

    } else {
      this.setverbState(false);
      this.setToken('');
    }
  },
  mounted: function () {
    setTimeout(() => { this.show = true; }, 100);

  },


}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
