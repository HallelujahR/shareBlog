<style type="scoped" lang="scss">
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

        <div id="user-detail">
          <div id="user-name">
            {{user.name}}
            <span id="edit-information"
                  v-if="state">「
              编辑个人资料」
            </span>
          </div>
          <div class="user-web">
            个人博客站点： <a href='http://www.rivered.cn'>www.rivered.cn</a>
          </div>

          <div class="user-introduction"
               v-if="user.introduction"> 一句话：{{user.introduction}} </div>
          <div class="user-introduction"
               v-else>
            一句话：这个人很懒～还什么都没有留下～
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      msg: '1',
      state: null,
      user: {},
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
  },
  mounted: function () {

    if (this.token == localStorage.access_token) { this.state = true; }

    this.id = this.$route.params.id;
    let paramsObj = {
      id: this.id,
    }
    this.$server.getInformation(paramsObj).then(data => {
      this.user = data;
      // eslint-disable-next-line no-console
      console.log(data);
    }).catch(err => {
      // eslint-disable-next-line no-console
      console.log(err);
    })
  },
  moethods: {

  }
}
</script>