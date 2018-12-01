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
            <router-link to="/user" @click.native="myHome(0)"  :class="{'active': 0 === index}">我的主页</router-link>
        </div>
        <div class="stateBoard-alone">
            消息通知
        </div>
        <div class="stateBoard-alone">
            我的私信
        </div>
        <div class="stateBoard-alone">
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
                'verbState'
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