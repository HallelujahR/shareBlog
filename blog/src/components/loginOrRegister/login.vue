<style type="scoped" lang="scss">
@import '@/assets/css/login.scss';
</style>

<template>
	<div>
		<div id="login">
			<div id="login-title">
				登录流域
			</div>

			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
				<div class="login-user">
					<el-form-item prop="account">
						<el-input
						    placeholder="输入账号"
						    suffix-icon="el-icon-phone"
						    v-model="ruleForm.account"
						    id="login-user-input"
						    >
						</el-input>
					</el-form-item>
				</div>
				<div class="login-user">
					<el-form-item prop="password">
						<el-input
						    placeholder="输入密码"
						    suffix-icon="el-icon-edit"
						    v-model="ruleForm.password"
						    id="login-user-input2"
						    type="password"
						    >
						</el-input>
					</el-form-item>
				</div>

				<div class="login-user">
					<el-form-item>
				    	<el-button class="login-btn" type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
				    	<div class="register">找回密码</div>
				    <div class="register" @click="register()" style="margin-left:200px;">还没有账号？立即注册</div>
				    </el-form-item>
				</div>
			</el-form>

			<div id="login-ds">
				<span style="float:left">第三方登录:</span>
				<img class="login-icon" src="@/assets/qqicon.png" /> 
				<img class="login-icon" src="@/assets/weibo.png" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				show:false,
				ruleForm:{
					account:'',
					password:'',
				},
				rules:{
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
	    mounted:function(){
	      var _this = this;
	      setTimeout(function(){ _this.show = true} ,200);
	    },
	    methods:{
	    	submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          if (valid) {
		            axios.post('http://api.blog.com/version',{
		            	
		            })
		            .then(response => {
		            	console.log(response);
		            })
		            .catch(error => {
		            	console.log(error);
		            })
		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        });
		      },
		    resetForm(formName) {
		        this.$refs[formName].resetFields();
		    },
		    register() {
		    	this.$emit('reg',true);
		    }
	    }

	}
</script>