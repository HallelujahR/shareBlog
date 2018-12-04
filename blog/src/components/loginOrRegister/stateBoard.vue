<style scoped lang="scss">
    .stateBoard-alone{
        height:58px;
        text-align:center;
        line-height:80px;
        float:left;
        color:white;
        margin-left:20px;

        a {
            color:white;
            text-decoration:none;

            &:hover{
                color:#d8a868;
                transition:all 0.3s;
            }
        }
    }
    #stateBoard {
        border-bottom:1px solid white;
        width:100%;
        float:left;
    }
    .active{
        color:#d8a868 !important;
    }
</style>
<template>

    <div v-if="verbState" id="stateBoard">

        <div class="stateBoard-alone" >
            <i class="el-icon-tickets"></i>
            <router-link :to="{ name: 'user', params: { id: user.id }}" @click.native="myHome(0)"  :class="{'active': 0
            === index}">我的主页</router-link>
        </div>
        <div class="stateBoard-alone">
            <i class="el-icon-bell"></i>
            消息通知
        </div>
        <div class="stateBoard-alone">
            <i class="el-icon-message"></i>
            我的私信
        </div>
        <div class="stateBoard-alone">
            <i class="el-icon-picture-outline"></i>
            发个照片
        </div>
        <div class="stateBoard-alone">
            <i class="el-icon-edit-outline"></i>
            写篇文章
        </div>
        <div class="stateBoard-alone">
            <i class="el-icon-circle-close-outline"></i>
            <a @click="logout()" href="javascript:void(0)">退出</a>
        </div>

    </div>

</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    export default {
        data() {
            return {
                index:'',
            }
        },
        watch: {
            '$route':'judge'
        },
        computed:{
            ...mapState([
                'verbState',
                'user'
            ]),


        },
        created:() => {

        },
        mounted:() => {

        },
        methods:{
            ...mapMutations({
                setverbState: 'SET_VERBSTATE',
                setToken: 'SET_TOKEN',
            }),
            //退出操作
            logout:function(){

                localStorage.removeItem('access_token');
                localStorage.removeItem('verbState');
                localStorage.removeItem('relogin');
                //把登录后的token 存储在vuex 中
                this.setverbState(false);
                this.setToken('');

                this.$message({
                    message: '已经成功退出',
                    type: 'warning'
                });

                this.$router.push({name:'logReg'});

            },
            myHome:function(index){

                this.index = index;
            },
            //监听路由触发的事件
            judge:function(){
                //判断是否属于上方导航栏的路由
                if(this.$route.path !== '/user'){
                    this.index = 'x';
                }
            }

        },


    }
</script>