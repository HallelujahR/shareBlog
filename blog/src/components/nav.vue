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
                   :class="{'route' : route == '/'}"
                   @click.native="change('/')">
        <i class="el-icon-menu"></i>
        首页</router-link>
    </div>

    <div class="head-text">
      <router-link to="/article"
                   :class="{'route' : route == '/article'}"
                   @click.native="change('/article')">
        <i class="el-icon-document"></i>
        博客/文章</router-link>
    </div>

    <div class="head-text">
      <router-link to="/photo"
                   :class="{'route' : route == '/photo'}"
                   @click.native="change('/photo')">
        <i class="el-icon-picture-outline"></i>
        摄影/照片</router-link>
    </div>

    <div class="head-text">
      <router-link to="/aboutMe"
                   :class="{'route' : route == '/aboutMe'}"
                   @click.native="change('/aboutMe')">
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

    <div id="regLog"
         class="head-text"
         v-if="!verbState">
      <router-link to="/login"
                   @click.native="change('/login')"
                   :class="{'route' : route == '/login'}"> 登录 </router-link>
      <router-link to="/register"
                   @click.native="change('/register')"
                   :class="{'route' : route == '/register'}"> 注册 </router-link>

    </div>

    <el-dropdown class="select"
                 @command="handleCommand"
                 v-else>
      <span class="el-dropdown-link">
        <avatar class="headImg"
                :src="user.avatar ? this.root+user.avatar :'' "
                :size="40"
                background-color="#1DA1F2"
                :username="user.name || '' "></avatar>
      </span>
      <el-dropdown-menu slot="dropdown">
        <router-link class="user-link username"
                     :to="{ name: 'user', params: { id: user.id }}">
          <el-dropdown-item class="user-a">
            <i class="el-icon-info"></i>
            {{user.name}}
            <div><i style="margin-right:5px;"
                 class="el-icon-mobile-phone"></i>{{user.phone}}</div>

          </el-dropdown-item>
        </router-link>
        <router-link class="user-link"
                     :to="{ name: 'user', params: { id: user.id }}">
          <el-dropdown-item class="user-a">
            <i class="el-icon-news"></i>
            个人中心
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item>
          <i class="el-icon-bell"></i>
          通知消息</el-dropdown-item>
        <el-dropdown-item>
          <i class="el-icon-message
"></i>
          私信消息</el-dropdown-item>

        <router-link class="user-link"
                     :to="{ name: 'alterDetail', params: { id: user.id }}">
          <el-dropdown-item>
            <i class="el-icon-setting"></i>
            编辑资料
          </el-dropdown-item>
        </router-link>

        <el-dropdown-item command="logout">
          <i class="el-icon-circle-close-outline"
             style="margin-right:5px;"></i>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>

</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      msg: '',
      status: true,
      search: '',
      route: '',
      input6: '',
      root: '',
    }
  },
  computed: {
    ...mapState([
      'verbState',
      'user',
    ]),

  },
  mounted: function () {
    // 根据路径变更颜色
    setTimeout(() => { this.route = this.$route.path }, 100);
    this.root = this.$URL;
  },
  methods: {
    ...mapMutations({
      setverbState: 'SET_VERBSTATE',
      setToken: 'SET_TOKEN',
    }),
    logstatus: function (logstatus) {
      this.status = logstatus;
    },
    //变更颜色根据路径
    change: function (route) {
      this.route = route;
    },
    handleCommand: function (command) {
      if (command === 'logout') this.logout();
    },
    logout: function () {
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

      this.$router.push({ name: 'login' });

    },
  }
}
</script>