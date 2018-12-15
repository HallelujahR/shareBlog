<style scpoed lang="scss">
@import "../../assets/css/user.scss";
</style>

<template>
  <div id="user"
       v-loading="loading">
    <div id="user-head">

      <croppa class="user-backgroundImg"
              v-model="croppa"
              :width=width
              :height=height
              placeholder="选择背景图片"
              :placeholder-font-size="30"
              :disabled="false"
              :prevent-white-space="true"
              :disable-scroll-to-zoom="true"
              disable-click-to-choose
              :show-remove-button="false"
              @new-image-drawn="onNewImage"
              @zoom="onZoom"
              remove-button-color="#1DA1F2">
        <img :src=backimg
             slot="initial">
      </croppa>

      <div id="user-head-foot">

        <div id="user-head-foot-main">
          <avatar class="
             headPic"
                  :size="200"
                  :src=user.avatar
                  background-color="#1DA1F2"
                  :username="user.name || '' "></avatar>

          <div id="user-head-foot-nav">

            <div class="foot-nav-list">
              <i class="el-icon-edit-outline"></i>
              写的文章
            </div>
            <div class="foot-nav-list">
              <i class="el-icon-picture"></i>
              拍的照片
            </div>
            <div class="foot-nav-list">
              <i class="el-icon-picture"></i>
              关注了
            </div>
            <div class="foot-nav-list">
              <i class="el-icon-picture"></i>
              关注者
            </div>
            <input type="range"
                   @input="onSliderChange"
                   :min="sliderMin"
                   :max="sliderMax"
                   step=".001"
                   v-model="sliderVal">
            <button @click="croppa.chooseFile()">CHOOSE FILE...</button>
            <button @click="upload">UPLOAD</button>
            <router-link to="/alterDetail"
                         id="edit-information-btn"
                         v-if="verbState && self.id == user.id">编辑个人资料</router-link>

            <div v-else
                 id="follow-btn">关注</div>

          </div>
        </div>
      </div>
    </div>

    <div id="main-user">
      <div id="main-user-left">

        <div id="user-name">
          {{user.name}}
        </div>

        <div class="user-web"
             v-if="detail.web">
          个性站点： <a :href="detail.web">{{detail.web}}</a>
        </div>

        <div class="user-detail"
             v-if="user.introduction"> 一句话：{{user.introduction}} </div>
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
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      state: null,
      user: {},
      detail: {},
      loading: true,
      width: 1600,
      height: 230,
      //初始化背景图插件
      croppa: {},
      //初始化图片滑动放大缩小inputrang
      sliderVal: 0,
      sliderMin: 0,
      sliderMax: 0,
      backimg: '',
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

    //获取浏览器窗口的宽度 然后赋值给背景图片宽度
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
      //判断用户是否有背景图片 且是否是本人页面 然后更改高度
      //之所以使用定时器 是因为我别无他法 只能用定时器延迟然后获取数据
      setTimeout(() => {
        if (this.user.backgroundImg != null || this.user.id == this.self.id) {
          this.height = 430;
        }
      }, 200);

      // eslint-disable-next-line no-console
      console.log(data);
    }).catch(err => {
      // eslint-disable-next-line no-console
      console.log(err);
    })
  },
  mounted: function () {
    this.loading = false;
  },
  methods: {

    onNewImage () {
      this.sliderVal = this.croppa.scaleRatio
      this.sliderMin = this.croppa.scaleRatio / 2
      this.sliderMax = this.croppa.scaleRatio * 5
    },

    onSliderChange (evt) {
      var increment = evt.target.value
      this.croppa.scaleRatio = +increment
    },

    onZoom () {
      // To prevent zooming out of range when using scrolling to zoom
      // if (this.sliderMax && this.croppa.scaleRatio >= this.sliderMax) {
      //   this.croppa.scaleRatio = this.sliderMax
      // } else if (this.sliderMin && this.croppa.scaleRatio <= this.sliderMin) {
      //   this.croppa.scaleRatio = this.sliderMin
      // }

      this.sliderVal = this.croppa.scaleRatio
    },
    upload () {
      if (!this.croppa.hasImage()) {
        this.$message({
          message: '你还没有选择图片 😳',
          type: 'warning'
        });

        return false;
      }

      this.croppa.generateBlob((blob) => {
        var fd = new FormData()
        fd.append('file', blob, 'filename.jpg')
        console.log(fd);
        return false;
      })
    }

  }
}
</script>