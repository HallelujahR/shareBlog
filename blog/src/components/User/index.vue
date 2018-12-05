<style lang="scss">
@import "../../assets/css/user.scss";
</style>

<template>
  <div>
    <div id="background-imgUser"></div>

    <div id="main-user">
      <div id="user-head">
        <img class="headPic"
             :src=user.avatar
             alt=""
             v-if="user.avatar">
        <avatar class="headPic"
                :size="120"
                :username="user.name || '' "
                v-else></avatar>

        <div class="user-detail">
          <div id="user-name">
            {{user.name}}
            <router-link to="/alterDetail"
                         id="edit-information"
                         v-if="state">「
              编辑个人资料」
            </router-link>
          </div>
          <div class="user-web">
            个人博客站点： <a :href="detail.web">{{detail.web}}</a>
          </div>

          <div class="user-introduction"
               v-if="user.introduction"> 一句话：{{user.introduction}} </div>
          <div class="user-introduction"
               v-else>
            一句话：这个人很懒～还什么都没有留下～
          </div>

        </div>

        <div class="user-detail">
          <div class="user-detail-right">
            职业经历: <span class="udr-line"
                  v-if="detail.occupation">{{detail.occupation}}</span> <span v-else
                  class="udr-line">未知</span></div>
          <div class="user-detail-right">
            教育经历: <span class="udr-line"
                  v-if="detail.education">{{detail.education}}</span>
            <span v-else
                  class="udr-line">未知</span> </div>
          <div class="user-detail-right">
            爱好: <span class="udr-line"
                  v-if="detail.hobby">{{detail.hobby}}</span>
            <span v-else
                  class="udr-line">未知的爱好= =|||</span> </div>
        </div>
      </div>

      <div id="user-body">
        <!-- <div class="user-body-title">
          写的文章
        </div>
        <div class="user-body-title">
          拍的照片
        </div> -->

        <el-tabs v-model="activeName"
                 @tab-click="handleClick">

          <el-tab-pane style="color:white"
                       label="写的文章"
                       name="first">写的文章</el-tab-pane>
          <el-tab-pane style="color:white"
                       label="拍的照片"
                       name="second">拍的照片</el-tab-pane>

        </el-tabs>

      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      state: null,
      user: {},
      detail: {},
      activeName: 'first',
    }
  },
  computed: {
    ...mapGetters([
      'verbState',
      'token',
    ])
  },
  created: function () {
    // console.log(this.user);
    if (this.token == localStorage.access_token) { this.state = true; }

    this.id = this.$route.params.id;
    let paramsObj = {
      id: this.id,
    }
    this.$server.getInformation(paramsObj).then(data => {
      this.user = data;
      this.detail = data.user_detail;

      // eslint-disable-next-line no-console
      console.log(data);
    }).catch(err => {
      // eslint-disable-next-line no-console
      console.log(err);
    })
  },
  mounted: function () {

  },
  methods: {
    handleClick (tab, event) {
      // eslint-disable-next-line no-console
      console.log(tab, event);
    }
  }
}
</script>