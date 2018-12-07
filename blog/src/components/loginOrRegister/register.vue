<style type="scoped" lang="scss">
@import "../../assets/css/register.scss";
</style>

<template>
  <div id="register-body"
       v-loading.fullscreen.lock="fullscreenLoading">
    <div id="register">
      <div id="registerLogo">
        <img src="../../assets/riveredlogo.png"
             width="130px"
             alt="">
      </div>

      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               class="demo-ruleForm">
        <div class="register-user">
          <el-form-item prop="account"
                        :error="errorphone">
            <el-input placeholder="输入手机号"
                      suffix-icon="el-icon-phone"
                      v-model="ruleForm.account"
                      @input="oninput()">
              <el-button :disabled='isdis'
                         @click="getCap('ruleForm', 'account')"
                         slot="append">下一步</el-button>
            </el-input>
          </el-form-item>
        </div>
        <transition-group name="slide-fade">
          <div :key="1"
               class="register-user"
               v-if="showcaptchas">
            <el-form-item prop="yzm"
                          :error="errorMsg">
              <el-input placeholder="输入验证码"
                        suffix-icon="el-icon-document"
                        v-model="ruleForm.yzm">

                <el-button slot="prepend"
                           style="padding:0px;">
                  <img v-if="isreloadYzm"
                       @click="reloadYzm()"
                       width="120px"
                       style="margin-top:11px;"
                       :src="captchas">
                  <i v-else
                     class="el-icon-loading"></i>
                </el-button>

                <el-button :disabled='issendSms'
                           slot="append"
                           @click="checkYzm('ruleForm', 'yzm', $event)"
                           style="width:84px;padding:0px;">发送短信</el-button>
              </el-input>
            </el-form-item>
          </div>

          <div :key="2"
               class="register-user"
               v-if="showSms">
            <el-form-item :error="errorName"
                          prop="name">
              <el-input placeholder="输入昵称"
                        suffix-icon="el-icon-tickets"
                        v-model="ruleForm.name">

              </el-input>
            </el-form-item>

            <el-form-item prop="password">
              <el-input placeholder="请输入密码"
                        suffix-icon="el-icon-edit-outline"
                        v-model="ruleForm.password"
                        type="password">

              </el-input>
            </el-form-item>

            <el-form-item prop="sms"
                          :error="errorSms">
              <el-input placeholder="输入短信验证码"
                        suffix-icon="el-icon-message"
                        v-model="ruleForm.sms">

                <el-button slot="append"
                           @click="regNow('ruleForm','name', 'password', 'sms')">
                  <span v-if="isZc">注册</span>
                  <i v-else
                     class="el-icon-loading"></i>
                </el-button>

              </el-input>
            </el-form-item>

          </div>

        </transition-group>
      </el-form>

      <div id="register-ds">
        <div id="register-title">
          <span>———————— 社交账号登录 ————————</span>
        </div>
        <div id="register-in">
          <img class="register-icon"
               width="25px;"
               src="../../assets/qq.png" />
          <img class="register-icon"
               width="25px;"
               src="../../assets/sina.png" />
        </div>

      </div>
      <div class="register">
        <router-link to='/login'>已有账号？立即登录</router-link>
      </div>
    </div>

  </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {
      show: false,
      //表单数据
      ruleForm: {
        account: '',
        password: '',
        name: '',
        yzm: '',
        sms: '',
      },
      //验证码图片
      captchas: '',
      //验证码的key
      captcha_key: '',
      //是否显示验证码输入框
      showcaptchas: false,
      //是否显示短信验证
      showSms: false,
      //短信验证码的key
      smskey: '',

      //控制下一步按钮是否可以点击
      isdis: false,
      issendSms: false,

      //自定义错误消息
      errorMsg: '',
      errorphone: '',
      errorSms: '',
      errorName: '',

      //验证码刷新等待
      isreloadYzm: true,

      //注册按钮的显示
      isZc: true,

      fullscreenLoading: false,

      rules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' },
          { pattern: /^1[34578]\d{9}$/, message: '手机号格式不正确', trigger: 'blur' }
        ],
        yzm: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ],
        sms: [
          { required: true, message: '请输入短信验证码', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          // {pattern:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/, message:"请输入密码，不可以全是字母或数字,且长度在8位以上",trigger:'blur'},
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ],

      }
    }
  },
  created: function () {
    this.fullscreenLoading = true;
    if (localStorage.verbState === 'true') this.$router.push({ name: 'index' })
  },
  mounted: function () {

    setTimeout(function () { this.fullscreenLoading = false; }.bind(this), 200);

  },
  computed: {
    ...mapActions([
      'setUser',
    ]),
  },
  methods: {
    ...mapMutations({
      setverbState: 'SET_VERBSTATE',
      setToken: 'SET_TOKEN',
    }),

    register () {
      this.$emit('log', true);
    },
    getCap (formName, field) {

      //验证手机号是否正确进行下一步
      this.errorphone = '';

      //使用了element ui 的form组件 个别字段验证  验证手机号
      this.$refs[formName].validateField(field, (valid) => {

        if (valid === '') {

          //验证手机获取图片验证码
          let paramObj = {
            phone: this.ruleForm.account,
          };

          this.$server.getCaptchas(paramObj).then(data => {

            //把获取到的图片和key 传递给下一个步骤
            this.captchas = data.captcha_image_content;
            this.captcha_key = data.captcha_key;
            this.showcaptchas = true;
            this.isdis = true;
            this.isreloadYzm = true;

          }).catch(err => {

            if (err.status === 422) {
              this.errorphone = '电话号已存在';
              return false;
            }

            if (err.status === 429) {
              this.errorphone = '操作次数错过，请稍后再试';
              this.showcaptchas = false;
              return false;
            }
          })


        }

      })
    },
    //监听用户是否改变手机号 重新获取验证码
    oninput () {
      this.isdis = false;
      this.showcaptchas = false;
      this.ruleForm.yzm = '';
    },
    reloadYzm () {
      this.isreloadYzm = false;
      setTimeout(() => { this.getCap('ruleForm', 'account'); }, 500)
    },
    checkYzm (formName, field, event) {


      //请空自定义消息
      this.errorMsg = '';
      //使用了element ui 的form组件 个别字段验证 验证 验证码
      this.$refs[formName].validateField(field, (valid) => {

        if (valid === '') {

          let paramObj = {

            captcha_key: this.captcha_key,
            captcha_code: this.ruleForm.yzm,

          };

          this.$server.checkYzm(paramObj).then(data => {
            let num = 60;

            const time = setInterval(() => {

              event.target.innerHTML = num;

              num--;

              if (num === 0) {

                clearInterval(time);
                this.issendSms = false;
                event.target.innerHTML = '发送短信';

              }

            }, 1000);

            this.issendSms = true;

            //存入验证短信验证码的key
            this.smskey = data.key;

            //显示密码 昵称等输入框
            this.showSms = true;

          }).catch(err => {

            if (err.status === 401) {
              this.getCap('ruleForm', 'yzm');
              this.errorMsg = '验证码错误';
              return false;

            } else if (err.status === 429) {

              this.errorMsg = '操作次数过多，请稍后再试';
              //让输入验证码input 消失
              this.isdis = false;
              this.showcaptchas = false;
              this.ruleForm.yzm = '';
              return false;

            } else if (err.status === 422) {

              this.errorMsg = '图片验证码已失效,点就图片重新获取';
              return false;

            }
          });

        }

      })
    },
    //提交注册
    regNow (formName, field1, field2, field3) {
      // console.log(1);
      //name
      let name = '';
      //pass
      let pass = '';
      //sms
      // let sms = '';

      //按钮控制
      this.isZc = false;
      //昵称验证
      this.$refs[formName].validateField(field1, (valid) => {
        name = valid;
      });
      //密码验证
      this.$refs[formName].validateField(field2, (valid) => {
        pass = valid;
      });

      //短信验证码验证
      if (pass === '' && name === '') {

        this.$refs[formName].validateField(field3, (valid) => {

          if (valid === '') {

            //判断短信验证码是否完成注册
            let paramObj = {
              verification_key: this.smskey,
              password: this.ruleForm.password,
              name: this.ruleForm.name,
              phone: this.ruleForm.account,
              verification_code: this.ruleForm.sms,

            };

            this.$server.regNow(paramObj).then(data => {

              const token = data.meta.access_token;

              //把注册后的token 存储在vuex 中 还有登录状态
              this.setverbState(true);
              this.setToken(token);


              //使用localStorage 存储登录信息
              localStorage.setItem('access_token', token);

              localStorage.setItem('verbState', 'true');
              //获取user基本信息
              this.setUser;
              //登录成功后的提示信息
              this.$message({
                message: '注册成功，开始您的流域',
                type: 'success'
              });

              //判断按钮状态
              this.isZc = true;

              //跳转到主页
              this.$router.push({ name: 'index' })

            }).catch(err => {
              // eslint-disable-next-line no-console
              console.log(err);
              if (err.status === 422) {

                this.errorName = '昵称已存在';
                //判断按钮状态
                this.isZc = true;
                return false;

              } else if (err.status === 401) {

                this.errorSms = '验证码错误';
                //判断按钮状态
                this.isZc = true;
                return false;

              } else if (err.status === 423) {

                this.errorSms = '验证码失效，请重新发送';
                this.getCap('ruleForm', 'account');
                //判断按钮状态
                this.isZc = true;
                return false;

              }

            });

          }

        });
      }


    }

  }

}
</script>