<style scoped lang="scss">
@import "../../assets/css/login.scss";
</style>

<template>
  <div id="login-body"
       v-loading="Loading">
    <div id="login">
      <div id="login-title">
        <img src="../../assets/riveredlogo.png"
             width="150"
             alt="">
      </div>
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               class="demo-ruleForm">
        <div>
          <el-form-item prop="account"
                        :error="errorMsg">
            <el-input placeholder="输入账号"
                      suffix-icon="el-icon-phone"
                      v-model="ruleForm.account"
                      class="login-user-input">
            </el-input>
          </el-form-item>
        </div>
        <div>
          <el-form-item prop="password">
            <el-input placeholder="输入密码"
                      suffix-icon="el-icon-edit"
                      v-model="ruleForm.password"
                      class="login-user-input"
                      type="password">
            </el-input>
          </el-form-item>
        </div>

        <div id="login-foot">
          <el-button class="login-btn"
                     type="primary"
                     @click="submitForm('ruleForm')">立即登录</el-button>
          <div class="findPass">
            <span> 找回密码</span>
          </div>

        </div>
      </el-form>

      <div id="login-ds">
        <div id="ds-title">
          <span>———————— 社交账号登录 ————————</span>
        </div>
        <div id="ds-in">
          <img class="login-icon"
               width="25px;"
               src="../../assets/qq.png" />
          <img class="login-icon"
               width="25px;"
               src="../../assets/sina.png" />
        </div>
      </div>

      <div class="register">
        <router-link to="/register">
          还没有账号？立即注册
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data: function () {
    return {
      show: false,
      ruleForm: {
        account: '',
        password: '',
      },
      errorMsg: '',
      rules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
      },
      Loading: true,
    }
  },
  computed: {
    ...mapState([
      "verbState"
    ]),
    ...mapActions([
      "setUser",
    ]),

  },
  created: function () {
    if (localStorage.verbState === 'true') this.$router.push({ name: 'index' })
  },
  mounted: function () {
    setTimeout(function () { this.Loading = false; }.bind(this), 200);
    if (localStorage.relogin === 'true') {
      this.$message({
        message: '登录过期，请重新登录',
        type: 'warning'
      });
      localStorage.removeItem('relogin')
    }
  },
  methods: {
    ...mapMutations({
      setverbState: 'SET_VERBSTATE',
      setToken: 'SET_TOKEN',
    }),

    submitForm: function (formName) {
      this.errorMsg = '';
      this.$refs[formName].validate((valid) => {


        if (valid) {

          let paramObj = {
            username: this.ruleForm.account,
            password: this.ruleForm.password,
          };
          // console.log(this.$server);
          this.$server.login(paramObj).then(data => {
            // console.log(data);
            //用户的token
            const token = data.access_token;

            //使用localStorage 存储登录信息
            localStorage.setItem('access_token', token);
            localStorage.setItem('verbState', 'true');

            //把登录后的token 存储在vuex 中
            this.setverbState(true);
            this.setToken(token);

            //获取用户信息
            this.setUser;

            //登录成功后的提示信息
            this.$message({
              message: '登录成功，开始您的流域',
              type: 'success'
            });

            //登录成功跳转到首页
            this.$router.push({ name: 'index' });
          })
            .catch(err => {

              if (err.status === 401) {
                this.$message.error('用户或密码错误');
                localStorage.removeItem('relogin');
                return false;
              }
            })

        } else {
          // console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm: function (formName) {
      this.$refs[formName].resetFields();
    },
    //获取用户数据

  }

}
</script>