<style type="scoped" lang="scss">
@import "../../assets/css/login.scss";
</style>

<template>
  <div>
    <div id="login">
      <div id="login-title">
        登录流域
      </div>
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               class="demo-ruleForm">
        <div class="login-user">
          <el-form-item prop="account"
                        :error="errorMsg">
            <el-input placeholder="输入账号"
                      suffix-icon="el-icon-phone"
                      v-model="ruleForm.account"
                      id="login-user-input">
            </el-input>
          </el-form-item>
        </div>
        <div class="login-user">
          <el-form-item prop="password">
            <el-input placeholder="输入密码"
                      suffix-icon="el-icon-edit"
                      v-model="ruleForm.password"
                      id="login-user-input2"
                      type="password">
            </el-input>
          </el-form-item>
        </div>

        <div class="login-user">
          <el-form-item>
            <el-button class="login-btn"
                       type="primary"
                       @click="submitForm('ruleForm')">立即登录</el-button>
            <div class="register">找回密码</div>
            <div class="register"
                 @click="register()"
                 style="margin-left:200px;">还没有账号？立即注册</div>
          </el-form-item>
        </div>
      </el-form>

      <div id="login-ds">
        <span style="float:left">第三方登录:</span>
        <img class="login-icon"
             src="../../assets/qqicon.png" />
        <img class="login-icon"
             src="../../assets/weibo.png" />
      </div>
      <div v-if="verbState">
        {{verbState}}
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
      }
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
  mounted: function () {
    setTimeout(function () { this.show = true }, 200);
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
            this.$router.push({ name: 'index' })

          })
            .catch(err => {

              if (err.status === 401) {

                this.errorMsg = '用户或密码错误';
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
    register () {
      this.$emit('reg', true);
    },
    //获取用户数据

  }

}
</script>