<style lang="scss" scoped>
@import "@/assets/css/user/main.scss";
</style>

<template>
  <div v-bind:style="{ width: width+'px'}">
    <div id="main-user">
      <div id="main-user-left">

        <div id="user-name">
          {{user.name}}
        </div>
        <div id="user-web"
             v-if="detail.web">
          个性站点： <a id="user-web-a"
             :href="detail.web"
             target="_blank">{{detail.web}}</a>
        </div>

        <div class="user-detail"
             v-if="user.introduction"> 一句话介绍：{{user.introduction}} </div>
        <div class=""
             v-else>
          一句话：这个人很懒～还什么都没有留下～
        </div>

        <div class="user-detail"
             v-if="detail.occupation">
          职业经历: <span class="udr-line">{{detail.occupation}}</span> </div>
        <div class="user-detail"
             v-if="detail.education">
          教育经历: <span class="udr-line">{{detail.education}}</span>
        </div>
        <div class="user-detail"
             v-if="detail.hobby">
          爱好: <span class="udr-line">{{detail.hobby}}</span>
        </div>
      </div>

      <div id="main-user-right">

      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      user: {},//用户基本信息
      detail: {},//用户详情
      loading: true,
      root: '',//网站api根目录
      width: '',

    }
  },
  computed: {
    ...mapGetters([
      'verbState',//登录状态
      'token',//登录的用户的token
      'self',//获取当前登录的用户信息
    ]),
  },
  created: function () {
    //获取浏览器窗口的宽度
    this.width = window.screen.width;
    //判断是否登录
    this.state = localStorage.getItem('verbState');
    //获取路由传递过来的用户id
    this.id = this.$route.params.id;

    //数据
    let paramsObj = {
      id: this.id,
    }
    //发送axios 获取传递过来id对用的用户的数据
    this.$server.getInformation(paramsObj).then(data => {
      //获取到用户的基本信息
      this.user = data;
      //获取到用户的详细信息
      this.detail = data.user_detail;

      // console.log(this.detail);

    }).catch(err => {
      // eslint-disable-next-line no-console
      console.log(err);
    })
  },
  mounted: function () {
    //网页加载状态
    this.loading = false;
    //api地址
    this.root = this.$URL;
    //获取网页url判断是否在更改详情页面
    if (this.$route.path.endsWith('alterDetail')) this.alterDetail = !this.alterDetail;
    //获取浏览器窗口的宽度 
    this.width = window.screen.width;
  },
  methods: {
    ...mapMutations({
      setuser: 'SET_USER',
    }),
  }
}
</script>
