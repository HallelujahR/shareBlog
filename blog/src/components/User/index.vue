<style type="scoped" type="scss">
@import '../../assets/css/user.scss';
</style>

<template>
    <div>
        <div id="background-imgUser"></div>

        <div id="main-user">
            <div id="user-head">
                <img class="headPic"  :src=user.avatar alt="" v-if="user.avatar">
                <avatar  class="headPic" :size="120" :username="user.name || '' "  v-else></avatar>

                <div>
                    <span id="user-name">{{user.name}}</span>
                    <span id="edit-information">「编辑个人资料」</span>

                    <span class="user-introduction" v-if="user.introduction"> {{user.introduction}} </span>
                    <span class="user-introduction"
                          v-else>
                    </span>

                </div>


            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters,mapState } from 'vuex'
    export default {
        data() {
            return {
                msg:'1',
                name:'',
                id:'',
                user:{},
            }
        },
        computed:{
            ...mapState([
                'user',
            ]),
            ...mapGetters([
                'user',
                'verbState',
            ])
        },
        created:function(){
           // console.log(this.user);
        },
        mounted:function(){
            this.id = this.$route.params.id;
            let paramsObj = {
                id:this.id,
            }
            this.$server.getInformation(paramsObj).then(data =>{
                console.log(data);
            }).catch(err =>{

            })
        },
        moethods:{

        }
    }
</script>