
 <style lang="scss">
@import "../assets/css/nav.scss";
</style>

<template>

  <div id="head-main">
    <div class="head-title">
      <img src="../assets/riveredlogo.png"
           alt="">
    </div>

    <div class="head-text">
      <router-link to="/"
                   @click.native="changeColor($event, '4')">
        <i class="el-icon-menu"></i>
        首页</router-link>
    </div>

    <div class="head-text">
      <router-link to="/article"
                   @click.native="changeColor($event, '1')">
        <i class="el-icon-document"></i>
        博客/文章</router-link>
    </div>

    <div class="head-text">
      <router-link to="/photo"
                   @click.native="changeColor($event, '2')">
        <i class="el-icon-picture-outline"></i>
        摄影/照片</router-link>
    </div>

    <div class="head-text">
      <router-link to="/aboutMe"
                   @click.native="changeColor($event, '3')">
        <i class="el-icon-info"></i>
        关于我</router-link>
    </div>

    <div class="head-search">
      <el-input class="search"
                size="medium"
                placeholder="搜索流域"
                suffix-icon="el-icon-search"
                v-model="input6">
      </el-input>
    </div>

    <div class="head-text"
         v-if="!verbState">
      <router-link to="/login"
                   @click.native="changeColor($event, '0')"> 登录 </router-link>
      <router-link to="/register"
                   @click.native="changeColor($event, '0')"> 注册 </router-link>
    </div>

    <el-dropdown v-else>
      <span class="el-dropdown-link">
        <img class="headImg"
             :src=user.avatar
             alt=""
             width="40px;"
             v-if="user.avatar">
        <avatar class="headImg"
                :size="40"
                :username="user.name || '' "
                v-else></avatar>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <router-link :to="{ name: 'user', params: { id: user.id }}"
                       style="margin-right:10px;">{{user.name}}</router-link>
        </el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>

</template>

<script>
import { mapState, } from 'vuex'

export default {
  data () {
    return {
      msg: '',
      status: true,
      search: '',
      route: '',
      input6: '',
    }
  },
  computed: {
    ...mapState([
      'verbState',
      'user',
    ]),

  },
  mounted: function () {

  },
  methods: {
    logstatus: function (logstatus) {
      this.status = logstatus;
    },
    changeColor: function () {

      setTimeout(() => { this.route = this.$route.path }, 100);
      // eslint-disable-next-line no-console
      console.log(this.route);

    }
  }
}
</script>