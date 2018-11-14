
 <style scoped lang="scss">
@import '../assets/css/nav.scss';
body{
    margin:0px;
    padding:0px;
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

        <div class="aside-main-text" v-if="status">
           <router-link to="/logReg" @click.native="changeColor($event, '0')"> 登录 </router-link> 
            <transition name="slide-fade">
                <i class="el-icon-caret-left"  v-if="nav.a0" ></i>
            </transition>
        </div>

         <div class="aside-main-text">
            <router-link to="/" @click.native="changeColor($event, '4')">首页</router-link>
            <transition name="slide-fade">
                <i class="el-icon-caret-left" v-if="nav.a4" ></i>       
            </transition>    
        </div>

        <div class="aside-main-text">
            <router-link to="/article" @click.native="changeColor($event, '1')">博客/文章</router-link>
            <transition name="slide-fade">
                <i class="el-icon-caret-left" v-if="nav.a1" ></i>       
            </transition>    
        </div>

        <div class="aside-main-text">
            <router-link to="/photo" @click.native="changeColor($event, '2')">摄影/照片</router-link>
            <transition name="slide-fade">
                <i class="el-icon-caret-left" v-if="nav.a2" ></i>       
            </transition>    
        </div>

        <div class="aside-main-text">
            <router-link to="" @click.native="changeColor($event, '3')">关于我</router-link>
            <transition name="slide-fade">
                <i class="el-icon-caret-left" v-if="nav.a3" ></i>       
            </transition>    
        </div>

    </div>

   
</template>

<script>


    export default {
        data(){
            return {
                msg:'',
                status:true,
                search:'',
                show:false,
                nav: {
                    a0:false,
                    a1:false,
                    a2:false,
                    a3:false,
                    a4:false,
                },
                test1:'1',
                test2:'2',
            }
        },
        methods:{
            logstatus:function(logstatus){
                this.status = logstatus;
            },
            changeColor:function(e, num){
                switch(num){

                    case '0':
                        this.nav.a0 = true;
                        this.nav.a1 = false;
                        this.nav.a2 = false;
                        this.nav.a3 = false;
                        this.nav.a4 = false;
                    break;
                    case '1':
                        this.nav.a0 = false;
                        this.nav.a1 = true;
                        this.nav.a2 = false;
                        this.nav.a3 = false;
                        this.nav.a4 = false;
                    break;
                    case '2':
                        this.nav.a0 = false;
                        this.nav.a1 = false;
                        this.nav.a2 = true;
                        this.nav.a3 = false;
                        this.nav.a4 = false;
                    break;
                    case '3':
                        this.nav.a0 = false;
                        this.nav.a1 = false;
                        this.nav.a2 = false;
                        this.nav.a3 = true;
                        this.nav.a4 = false;
                    break;
                    case '4':
                        this.nav.a0 = false;
                        this.nav.a1 = false;
                        this.nav.a2 = false;
                        this.nav.a3 = false;
                        this.nav.a4 = true;
                    break;
                }
            }
        }
    }
</script>