<style type="scoped" lang="scss">

  #app-son{
    width:1300px;
    margin:0 auto;
    background-color: rgba(15,26,29,0.7);
    width:100%;
    height:100%;
    margin:0;
    position:fixed;
    top:0px;
    left:0px;
    z-index:-1;
  }
  .app-main{
    width:1400px;
    margin:0 auto;
  }

</style>
<template>
<div id="app">
  <div id="app-son">
  </div>

  <transition name="el-fade-in">

    <div v-show="show" class="transition-box app-main">
      <el-container >
        <el-aside>
          <dh></dh>
        </el-aside>
        <el-main id="main"  >
          <router-view :key="key"></router-view>
        </el-main>
      </el-container>
    </div>

  </transition>

</div>
</template>

<script>
export default {

  data () {
    return {
      qwer:1,
      msg:'as',
      show:false,
    }
  },
  methods:{

  },
  created:function(){
    //判断登录的状态
    const verbState = localStorage.getItem('verbState');
    if(verbState == 'true'){
      this.$store.commit('changeToken',{
        verbState:true,
      })
    }else{
      this.$store.commit('changeToken',{
        verbState:false,
      })
    }
  },
  mounted:function(){
    setTimeout(()=>{    this.show = true; } , 100);
  },
  computed:{
      key(){
          return this.$route.path + Math.random();
      }
  }

}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
