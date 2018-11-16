<style type="scoped" lang="scss">
@import '@/assets/css/register.scss';
</style>

<template>
	<div>
		<div id="register">
			<div id="register-title">
				加入流域
			</div>

			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
				<div class="register-user">
					<el-form-item prop="account" :error="errorphone">
						<el-input
						    placeholder="输入手机号"
						    suffix-icon="el-icon-phone"
						    v-model="ruleForm.account"
						    id="register-user-input0"
						    @input="oninput()"
						    >
						    <el-button :disabled='isdis' @click="getCap('ruleForm', 'account')" slot="append">下一步</el-button>
						</el-input>
					</el-form-item>
				</div>
				<transition-group name="slide-fade">
				<div :key="1" class="register-user" v-if="showcaptchas" >
					<el-form-item prop="yzm" :error="errorMsg" >
						<el-input
						    placeholder="输入验证码"
						    suffix-icon="el-icon-document"
						    v-model="ruleForm.yzm"
						    id="register-user-input"

						    >

						    <el-button  slot="prepend" style="padding:0px;">
						    	<img v-if="isreloadYzm" @click="reloadYzm()" width="120px" style="margin-top:11px;" :src="captchas">
						    	<i v-else class="el-icon-loading"></i>
						    </el-button>


							<el-button :disabled='issendSms'  slot="append" @click="checkYzm('ruleForm', 'yzm', $event)" style="width:84px;padding:0px;">发送短信</el-button>
						</el-input>
					</el-form-item>
				</div>

				<div :key="2" class="register-user" v-if="showSms" >
					<el-form-item :error="errorName" prop="name">
						<el-input
						    placeholder="输入昵称"
						    suffix-icon="el-icon-tickets"
						    v-model="ruleForm.name"
						    id="register-user-input3"
						    >

							
						</el-input>
					</el-form-item>

					<el-form-item prop="password">
						<el-input
						    placeholder="请输入密码"
						    suffix-icon="el-icon-edit-outline"
						    v-model="ruleForm.password"
						    id="register-user-input4"
						    type="password"
						    >

						</el-input>
					</el-form-item>

					<el-form-item prop="sms" :error="errorSms">
						<el-input
						    placeholder="输入短信验证码"
						    suffix-icon="el-icon-message"
						    v-model="ruleForm.sms"
						    id="register-user-input5"
						    >

							<el-button slot="append" @click="regNow('ruleForm','name', 'password', 'sms')">注册</el-button>

						</el-input>
					</el-form-item>

				</div>

				</transition-group>
			</el-form>

			<div id="register-ds">
				<span style="float:left">第三方登录:</span>
				<img class="register-icon" src="@/assets/qqicon.png" /> 
				<img class="register-icon" src="@/assets/weibo.png" />

				<div class="register"  @click="register()" style="margin-left:200px;">已有账号？立即账号</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				show:false,
				//表单数据
				ruleForm:{
					account:'',
					password:'',
					name:'',
					yzm:'',
					sms:'',
				},
				//验证码图片
				captchas:'',
				//验证码的key
				captcha_key:'',
				//是否显示验证码输入框
				showcaptchas:false,
				//是否显示短信验证
				showSms:false,
				//短信验证码的key
				smskey:'',

				//控制下一步按钮是否可以点击
				isdis:false,
				issendSms:false,

				//自定义错误消息
				errorMsg:'',
				errorphone:'',
				errorSms:'',
				errorName:'',

				//验证码刷新等待
				isreloadYzm:true,

				rules:{
					account: [
			            { required: true, message: '请输入账号', trigger: 'blur' },
			            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' },
			            { pattern: /^1[34578]\d{9}$/, message: '手机号格式不正确',trigger: 'blur'}
          			],
          			yzm: [
          				{required:true, message:'请输入验证码',trigger: 'blur'}
          			],
          			sms: [
          				{required:true, message:'请输入短信验证码',trigger:'blur'}
          			],
          			name: [
          				{required: true,message:'请输入昵称' , trigger:'blur'},
          				{min:2,max:10, message:'长度在 2 到 10 个字符' ,  trigger:'blur'}
          			],
          			password:[
          				{required: true,message:'请输入密码', trigger:'blur' },
          				// {pattern:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/, message:"请输入密码，不可以全是字母或数字,且长度在8位以上",trigger:'blur'},
          				{min:6, max:20, message:'长度在 6 到 20 个字符',trigger:'blur'}
          			],
          			
				}
			}
		},
	    mounted:function(){
	      var _this = this;
	      setTimeout(function(){ _this.show = true} ,200);
	    },
	    methods:{
		    register() {
		    	this.$emit('log',true);
		    },
		    getCap(formName, field) {

		    	//验证手机号是否正确进行下一步
		    	var _this = this;
				_this.errorphone = '';
		    	//使用了element ui 的form组件 个别字段验证  验证手机号
	    	  	this.$refs[formName].validateField(field,(valid) => {

		    		if(valid == ''){

		    			//验证手机获取图片验证码
				    	axios.post('http://api.blog.com/captchas',{
				    		phone:_this.ruleForm.account,
			            })
			            .then(response => {

			            	//把获取到的图片和key 传递给下一个步骤
			            	_this.captchas = response.data.captcha_image_content;
			            	_this.captcha_key = response.data.captcha_key;
			            	_this.showcaptchas = true;
			            	_this.isdis = true;

			            	_this.isreloadYzm = true;
			            })	
			            .catch(error => {
			            	if (error.response.data.status_code == 429) {

			            		_this.errorphone = '操作次数错过，请稍后再试';
			            		

	    	  				}else if(error.response.data.status_code == 422) {
			            		_this.errorphone = '电话号已存在';

	    	  				}
			            });

		    			return false;

		    		}

		    		return false;

		    	})

		    },
		    //监听用户是否改变手机号 重新获取验证码
		    oninput() {
		    	this.isdis = false;
		    	this.showcaptchas = false;
		    	this.ruleForm.yzm = '';
		    },
		    reloadYzm() {
		    	this.isreloadYzm =false;
		    	setTimeout(()=>{ this.getCap('ruleForm','account'); },500)
		    	
		    },
		    checkYzm(formName, field, event) {

		    	var _this = this;

		    	//请空自定义消息
		    	_this.errorMsg = '';
		    	//使用了element ui 的form组件 个别字段验证 验证 验证码
	    	  	this.$refs[formName].validateField(field,(valid) => {

	    	  		if(valid == ''){

	    	  			axios.post('http://api.blog.com/verificationCodes',{
	    	  				captcha_key:_this.captcha_key,
	    	  				captcha_code:_this.ruleForm.yzm,
	    	  			})
	    	  			.then(response => {
	    	  				var num = 60;
	    	  				var time = setInterval(() => {
	    	  					event.target.innerHTML=num;	
	    	  					num--;
	    	  					if(num == 0) {
									clearInterval(time);
									_this.issendSms = false;
									event.target.innerHTML='发送短信';	
	    	  					}
	    	  				} ,1000);

	    	  				_this.issendSms = true;

	    	  				//存入验证短信验证码的key
	    	  				_this.smskey = response.data.key;

	    	  				//显示密码 昵称等输入框
	    	  				_this.showSms = true;


	    	  				

	    	  			})
	    	  			.catch(error => {

	    	  				if (error.response.data.status_code == 401) {

	    	  					_this.getCap('ruleForm', 'yzm');
			            		_this.errorMsg = error.response.data.message;

	    	  				}else if(error.response.data.status_code == 429) {

	    	  					_this.errorMsg = '操作次数过多，请稍后再试';
	    	  					//让输入验证码input 消失
	    	  					this.isdis = false;
						    	this.showcaptchas = false;
						    	this.ruleForm.yzm = '';

	    	  				}else if(error.response.data.status_code == 422) {

	    	  					_this.errorMsg = '图片验证码已失效,点就图片重新获取';
	    	  					

	    	  				}
	    	  				
	    	  			})

	    	  			return false;

	    	  		}

	    	  		return false;

	    	  	})
		    },
		    //提交注册
		    regNow(formName, field1, field2, field3) {
		    	console.log(1);
		    	var _this = this;
		    	//name
		    	var name = '';
		    	//pass
		    	var pass = '';
		    	//sms
		    	var sms = '';

		    	//昵称验证
		    	this.$refs[formName].validateField(field1,(valid) => {
		    		name = valid;
		    	});
		    	//密码验证
		    	this.$refs[formName].validateField(field2,(valid) => {
		    		pass = valid;
		    	});

		    	//短信验证码验证
		    	if(pass == '' && name== ''){

		    		this.$refs[formName].validateField(field3,(valid) => {
		    			console.log(valid);
						if(valid == ''){
							console.log(_this.smskey);
							console.log(_this.ruleForm.password);
							console.log(_this.ruleForm.name);
							//判断短信验证码是否完成注册
							axios.post('http://api.blog.com/users',{
								verification_key:_this.smskey,
								password:_this.ruleForm.password,
								name:_this.ruleForm.name,
								phone:_this.ruleForm.phone,
								verification_code:_this.ruleForm.sms,
							})
							.then(response => {
								alert('注册成功！');
								console.log(response);
							})
							.catch(error => {
								if (error.response.data.status_code == 422) {
									_this.errorName = '昵称已存在';
								}else if(error.response.data.status_code == 401){
									_this.errorSms = '验证码错误';
								}else if(error.response.data.status_code == 423){
									_this.errorSms = '验证码失效，请重新发送';
									_this.getCap('ruleForm','account');
								}	


							})

			    		}

			    		return false;
		    		});
		    	}


		    }

	    }

	}
</script>