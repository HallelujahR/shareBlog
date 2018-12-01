<style type="scoped" lang="scss">

  #app-son{
    background-color: rgba(15,26,29,0.6);
    width:100%;
    height:100%;
    margin:0;
    position:fixed;
    top:0px;
    left:0px;
    z-index:-1;
  }
  .app-main{
    width:100%;
    margin:0 auto;
  }
  #aside-main{
    left:0px;
  }
  #app-header{
    padding-left:0px;margin-top:52px;
  }
  .el-aside{
    border:1px sold red;
    float:left;
    left:0px;
    width:300px;
    height:200px;
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

          <el-container>
            <el-header id="app-header">
              <state-board></state-board>
            </el-header>

            <el-main id="main"  style="margin-top:40px;border:1px solid red">
              <router-view :key="key"></router-view>
            </el-main>
          </el-container>
        </el-container>
      </div>

    </transition>

  </div>
</template>

<script>
    import { mapMutations, mapActions } from 'vuex'

    export default {

        data () {
            return {
                qwer:1,
                msg:'as',
                show:false,
            }
        },
        components:{
            'state-board': () => import('./components/loginOrRegister/stateBoard'),//引入上方导航栏组件
            'dh': () => import ('./components/nav.vue'),//引入左侧导航组件
        },
        computed:{
            key(){
                return this.$route.path + Math.random();
            }
        },
        methods:{
            ...mapMutations({
                setverbState: 'SET_VERBSTATE',
                setToken: 'SET_TOKEN',
            }),
            ...mapActions([
                'setUser',
            ]),
        },
        created:function(){

            //判断登录的状态
            const verbState = localStorage.getItem('verbState');
            const token = localStorage.getItem('access_token');

            if(verbState === 'true'){

                this.setverbState(true);
                this.setToken(token);
                this.setUser();

            }else{
                this.setverbState(false);
                this.setToken('');
            }
        },
        mounted:function(){

            setTimeout(()=>{    this.show = true; } , 100);

        },


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
