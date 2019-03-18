<style scoped lang="scss">
@import "@/assets/css/user.scss";
</style>


<template>
  <div id="user"
       v-loading="loading">
    <div id="user-head">

      <croppa class="user-backgroundImg"
              v-bind:style="cursorFlag ? 'cursor:move' : 'cursor:default'"
              v-model="croppa"
              :width=width
              :height=height
              placeholder="背景图片 😲"
              :placeholder-font-size="30"
              :disabled="false"
              accept="image/png,image/jpeg,image/jpg,image/gif"
              :prevent-white-space="true"
              :disable-scroll-to-zoom="true"
              disable-click-to-choose
              :show-remove-button="false"
              @new-image-drawn="onNewImage"
              @zoom="onZoom"
              remove-button-color="#1DA1F2">
        <img crossOrigin="anonymous"
             :width=width
             :src="detail.backgroundImg ? root+detail.backgroundImg : ''"
             slot="initial">
        <el-button round
                   v-if="verbState && self.id == user.id"
                   id="alterImg"
                   @click="alterImg()"
                   style="">编辑图片</el-button>
      </croppa>

      <div id="user-head-foot"
           v-bind:style="{ width: width+'px'}">

        <div id="user-head-foot-main">
          <avatar class="headPic"
                  :size="200"
                  :src="user.avatar ? this.root+user.avatar : ''"
                  background-color="#1DA1F2"
                  :username="user.name || '' "
                  v-if="!verbState"></avatar>

          <el-dropdown v-else>
            <span class="el-dropdown-link HeadPicSpan">
              <avatar class="headPic"
                      :size="200"
                      :src="user.avatar ? this.root+user.avatar : ''"
                      background-color="#1DA1F2"
                      :username="user.name || '' "></avatar>
            </span>
            <el-dropdown-menu slot="dropdown">

              <el-dropdown-item v-if="verbState && self.id == user.id">
                <span @click="centerDialogVisible = true"><i class="el-icon-picture-outline"></i> 修改头像</span>
              </el-dropdown-item>

            </el-dropdown-menu>
          </el-dropdown>

          <transition mode="out-in"
                      name="slide-fade">
            <div v-if="alterImgFlag"
                 key="usernav"
                 id="user-head-foot-nav">

              <div class="foot-nav-list">
                <i class="el-icon-edit-outline"></i>
                写的文章
              </div>
              <div class="foot-nav-list">
                <i class="el-icon-picture"></i>
                拍的照片
              </div>
              <div class="foot-nav-list">
                <!-- <i class="el-icon-view"></i> -->
                关注了
              </div>
              <div class="foot-nav-list">
                <!-- <i class="el-icon-picture"></i> -->
                关注者
              </div>
              <span v-if="alterDetail">
                <router-link :to="'/user/'+user.id+'/alterDetail'"
                             id="edit-information-btn"
                             @click.native="alterDetails()"
                             v-if="verbState && self.id == user.id">编辑个人资料</router-link>

                <div v-else
                     id="follow-btn">关注</div>
              </span>
              <span v-else>
                <router-link :to="'/user/'+user.id"
                             id="edit-information-btn"
                             @click.native="alterDetails()"
                             v-if="verbState && self.id == user.id">取消</router-link>

                <div v-else
                     id="follow-btn">关注</div>
              </span>
            </div>
            <div v-else
                 id="user-head-foot-nav-alterImg"
                 key="img">
              <input class="user-head-foot-nav-alterImg_btn"
                     type="range"
                     id="range"
                     @input="onSliderChange"
                     :min="sliderMin"
                     :max="sliderMax"
                     step=".001"
                     v-model="sliderVal">
              <el-button @click="croppa.chooseFile()"
                         class="user-head-foot-nav-alterImg_btn"
                         round
                         plain>选择背景</el-button>
              <el-button type="primary"
                         class="user-head-foot-nav-alterImg_btn"
                         round
                         @click="upload"
                         plain>保存</el-button>
              <el-button type="info"
                         class="user-head-foot-nav-alterImg_btn"
                         @click="alterImg()"
                         round>取消</el-button>
              <el-button type="danger"
                         class="user-head-foot-nav-alterImg_btn"
                         @click="removeBackgroundImg()"
                         icon="el-icon-delete"
                         circle></el-button>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <transition mode="out-in"
                name="slide-fade">
      <router-view></router-view>
    </transition>

    <!-- 更改头像start -->
    <el-dialog title="更改头像"
               :visible.sync="centerDialogVisible"
               width="40%"
               center>
      <center>
        <croppa class="user-backgroundImg changeAvatar"
                v-model="croppa"
                :width=208
                :height=208
                placeholder="Avatar 😎"
                placeholder-color="white"
                :placeholder-font-size="30"
                :disabled="false"
                accept="image/png,image/jpeg,image/jpg,image/gif"
                :prevent-white-space="true"
                :disable-scroll-to-zoom="true"
                disable-click-to-choose
                :show-remove-button="false"
                @new-image-drawn="onNewImage"
                @init="onInit"
                @zoom="onZoom">
          <img crossOrigin="anonymous"
               :width=width
               :src="user.avatar ? root+user.avatar : ''"
               slot="initial">
        </croppa>
        <div id="changeAvatarBtn">
          <el-button @click="croppa.chooseFile()"
                     class="user-head-foot-nav-alterImg_btn"
                     round
                     plain>选择图片</el-button>
          <input class="user-head-foot-nav-alterImg_btn"
                 type="range"
                 id="range"
                 @input="onSliderChange"
                 :min="sliderMin"
                 :max="sliderMax"
                 step=".001"
                 v-model="sliderVal">
          <el-button type="primary"
                     class="user-head-foot-nav-alterImg_btn"
                     round
                     @click="uploadAvatar"
                     plain>保存</el-button>
          <el-button type="info"
                     class="user-head-foot-nav-alterImg_btn"
                     @click="centerDialogVisible = false, noEditAvatar()"
                     round>取消</el-button>
          <el-button type="danger"
                     class="user-head-foot-nav-alterImg_btn"
                     @click="removeAvatarImg()"
                     icon="el-icon-delete"
                     circle></el-button>
        </div>
      </center>
    </el-dialog>
    <!-- 更改头像end -->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      state: false,//判断是不是本人
      user: {},//用户基本信息
      detail: {},//用户详情
      loading: true,
      width: '',
      height: 230,
      //初始化背景图插件
      croppa: {},
      //初始化图片滑动放大缩小input range
      sliderVal: 0,
      sliderMin: 0,
      sliderMax: 0,
      root: '',//网站api根目录
      alterImgFlag: true,//是否出现处理背景图片按钮
      freshFlag: false,//判断是否上传过图片
      alterDetail: true,//跳转到编辑个人资料开关
      cursorFlag: false,//控制鼠标在背景图上的样式
      centerDialogVisible: false,//修改头像的对话框控制
    }
  },
  computed: {
    ...mapGetters([
      'verbState',//登录状态
      'token',//登录的用户的token
      'self',//获取当前登录的用户信息
    ]),
  },
  //监听路由变化
  watch: {
    $route () {
      //获取网页url判断是否在更改详情页面
      if (this.$route.path.endsWith('alterDetail')) this.alterDetail = false;
    }
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
      console.log(this.user);
      //获取到用户的详细信息
      this.detail = data.user_detail;
      //判断用户是否有背景图片 且是否是本人页面 然后更改高度
      //之所以使用定时器 是因为我别无他法 只能用定时器延迟然后获取数据
      setTimeout(() => {
        if (this.user.backgroundImg != '' || this.user.id == this.self.id || this.user.backgroundImg != null) {
          this.height = 430;
        }
      }, 200);

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
    if (this.$route.path.endsWith('alterDetail')) this.alterDetail = false;
  },
  methods: {
    ...mapMutations({
      setuser: 'SET_USER',
    }),
    onFileTypeMismatch () {
      this.$message({
        message: '文件格式不对呦 😳',
        type: 'warning',
      })
    },
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

      //判断是否有图片选中
      if (!this.croppa.hasImage()) {
        this.$message({
          message: '你还没有选择图片 😳',
          type: 'warning'
        });

        return false;
      }

      //获取到文件 但是是blob 二进制资源
      this.croppa.generateBlob((blob) => {
        //二进制转文件
        const file = new File([blob], 'backImg', {
          type: 'image/jpeg',
        });
        var fd = new FormData()
        fd.append('image', file);
        fd.append('type', 'backgroundImg');

        //发送axios更改图片
        this.$server.uploadImg(fd).then(data => {
          //更改默认图片路径
          this.detail.backgroundImg = data;
          //更改按钮状态
          this.alterImgFlag = !this.alterImgFlag;
          //上传成功提示
          this.$message({
            type: 'success',
            message: '上传成功 😊'
          });
        }).catch(err => {
          // eslint-disable-next-line no-console
          console.log('err', err);
        })


        return false;
      })
    },
    alterImg () {
      this.alterImgFlag = !this.alterImgFlag;
      this.cursorFlag = !this.cursorFlag;
      this.croppa.refresh()
    },
    removeBackgroundImg () {
      this.$confirm('移除背景, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {

        //参数
        let paramsObj = {
          type: 'backgroundImg',
        }
        //发送axios 删除图片
        this.$server.deleteImg(paramsObj).then(data => {
          if (data == 2) {
            this.$message({
              type: 'warning',
              message: '还没有背景图 😓'
            });
            return false;
          }
          //更改默认图片路径
          this.detail.backgroundImg = '';
          //触发插件移除
          this.croppa.remove();
          //成功提示
          this.$message({
            type: 'success',
            message: '移除成功!'
          });
          //更改按钮状态
          this.alterImgFlag = !this.alterImgFlag;

        }).catch(err => {
          // eslint-disable-next-line no-console
          console.log(err)
        })

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      });
    },
    alterDetails () {
      this.alterDetail = !this.alterDetail;
    },
    //更改头像的croppa 更改为圆圈
    onInit () {
      this.croppa.addClipPlugin(function (ctx, x, y, w, h) {
        /*
         * ctx: canvas context
         * x: start point (top-left corner) x coordination
         * y: start point (top-left corner) y coordination
         * w: croppa width
         * h: croppa height
        */

        ctx.beginPath()
        ctx.arc(x + w / 2, y + h / 2, w / 2, 0, 2 * Math.PI, true)
        ctx.closePath()
      })
    },
    //上传头像的方法
    uploadAvatar () {

      //判断是否有图片选中
      if (!this.croppa.hasImage()) {
        this.$message({
          message: '你还没有选择图片 😳',
          type: 'warning'
        });

        return false;
      }

      //获取到文件 但是是blob 二进制资源
      this.croppa.generateBlob((blob) => {
        //二进制转文件
        const file = new File([blob], 'backImg', {
          type: 'image/jpeg',
        });
        var fd = new FormData()
        fd.append('image', file);
        fd.append('type', 'avatar');

        //发送axios更改图片
        this.$server.uploadImg(fd).then(data => {

          if (data == 2) {
            //上传失败提示
            this.$message({
              type: 'success',
              message: '上传失败 😓'
            });
            return false;
          }
          //上传成功提示
          this.$message({
            type: 'success',
            message: '上传成功 😊'
          });

          //更改默认图片路径
          this.user.avatar = data;
          this.setuser(this.user);
          this.centerDialogVisible = false;//修改头像的对话框控制
        }).catch(err => {
          // eslint-disable-next-line no-console
          console.log('err', err);
        })
        return false;
      })
    },
    //点击取消修改头像按钮
    noEditAvatar () {
      this.croppa.refresh();
    },
    //移除头像
    removeAvatarImg () {
      this.$confirm('移除背景头像, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {

        //参数
        let paramsObj = {
          type: 'avatar',
        }
        //发送axios 删除图片
        this.$server.deleteImg(paramsObj).then(data => {
          if (data == 2) {
            this.$message({
              type: 'warning',
              message: '还没有头像 😓'
            });
            return false;
          }
          //更改默认图片路径
          this.user.avatar = '';
          //触发插件移除
          this.croppa.remove();
          //成功提示
          this.$message({
            type: 'success',
            message: '移除成功!'
          });
          this.user.avatar = '';
          this.setuser(this.user);


        }).catch(err => {
          // eslint-disable-next-line no-console
          console.log(err)
        })

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      });
    }
  }
}
</script>