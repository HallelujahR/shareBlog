
 <style scoped lang="scss">
@import '../assets/css/nav.scss';
body{
    margin:0;
    padding:0;
}

</style>

<template>

    <div id="aside-main" >
        <div class="aside-main-title"> Rivered/流域</div>

        <div class="aside-main-search">
         <el-input placeholder="搜索，你期待的..." v-model="search" class="input-with-search">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>

        <div class="aside-main-text" v-if="!verbState">
           <router-link to="/logReg" @click.native="changeColor($event, '0')"> 登录 </router-link> 
            <transition name="slide-fade">
                <i class="el-icon-caret-left"  v-if="route === '/logReg'" ></i>
            </transition>
        </div>

        <div class="aside-main-text" v-else>
            <div id="user">

                <img src="../assets/defaultHead.png" class="headImg" width="60px;">
                <span class="userName"><a href="">{{user.name}}</a></span>

            </div>
        </div>

         <div class="aside-main-text">
            <router-link to="/" @click.native="changeColor($event, '4')">首页</router-link>
            <transition name="slide-fade">
                <i class="el-icon-caret-left" v-if="route === '/'" ></i>
            </transition>    
        </div>

        <div class="aside-main-text">
            <router-link to="/article" @click.native="changeColor($event, '1')">博客/文章</router-link>
            <transition name="slide-fade">
                <i class="el-icon-caret-left" v-if="route === '/article'" ></i>
            </transition>    
        </div>

        <div class="aside-main-text">
            <router-link to="/photo" @click.native="changeColor($event, '2')">摄影/照片</router-link>
            <transition name="slide-fade">
                <i class="el-icon-caret-left" v-if="route === '/photo'" ></i>
            </transition>    
        </div>

        <div class="aside-main-text">
            <router-link to="" @click.native="changeColor($event, '3')">关于我</router-link>
            <transition name="slide-fade">
                <i class="el-icon-caret-left" v-if="route === '/aboutMe'" ></i>
            </transition>    
        </div>

    </div>

   
</template>

<script>
import { mapState, } from 'vuex'

    export default {
        data(){
            return {
                msg:'',
                status:true,
                search:'',
                route:'',
            }
        },
        computed:{
            ...mapState([
                'verbState',
                'user',
            ]),

        },
        mounted:function(){

        },
        methods:{
            logstatus:function(logstatus){
                this.status = logstatus;
            },
            changeColor:function(e, num){

                setTimeout(() => { this.route = this.$route.path },100);

                console.log(this.route);

            }
        }
    }
</script>