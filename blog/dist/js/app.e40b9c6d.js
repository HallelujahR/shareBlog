(function(e){function t(t){for(var n,s,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)s=i[u],a[s]&&d.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);m&&m(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var i=r[s];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},s={app:0},a={app:0},o=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-03279cfa":"213dca6c","chunk-14029885":"43f712fa","chunk-5594133c":"8aa5f48d"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-03279cfa":1,"chunk-14029885":1,"chunk-5594133c":1};s[e]?t.push(s[e]):0!==s[e]&&r[e]&&t.push(s[e]=new Promise(function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-03279cfa":"a440213b","chunk-14029885":"74509c15","chunk-5594133c":"75531a66"}[e]+".css",s=c.p+n,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var i=a[o],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===n||l===s))return t()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){i=u[o],l=i.getAttribute("data-href");if(l===n||l===s)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||s,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.request=n,r(a)},d.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(d)}).then(function(){s[e]=0}));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=o);var l,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=i(e),l=function(t){d.onerror=d.onload=null,clearTimeout(m);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+n+": "+s+")");o.type=n,o.request=s,r[1](o)}a[e]=void 0}};var m=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,u.appendChild(d)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var m=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"07bb":function(e,t,r){},"1bb7":function(e,t,r){},"3f62":function(e,t,r){e.exports=r.p+"img/qqicon.d52aff20.png"},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"app-son"}}),r("transition",{attrs:{name:"el-fade-in"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"transition-box app-main"},[r("el-container",[r("el-aside",[r("dh")],1),r("el-main",{attrs:{id:"main"}},[r("router-view",{key:e.key})],1)],1)],1)])],1)},a=[],o={data:function(){return{qwer:1,msg:"as",show:!1}},methods:{},mounted:function(){var e=this;setTimeout(function(){e.show=!0},100)},computed:{key:function(){return this.$route.path+Math.random()}}},i=o,c=(r("5c0b"),r("b0a0"),r("2877")),l=Object(c["a"])(i,s,a,!1,null,null,null);l.options.__file="App.vue";var u=l.exports,d=r("8c4f"),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._v("\n\t这是一个测试页面\n")])},p=[],f={},h=f,g=Object(c["a"])(h,m,p,!1,null,null,null);g.options.__file="test.vue";g.exports;var v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"aside-main"}},[r("div",{staticClass:"aside-main-title"},[e._v(" Rivered/流域")]),r("div",{staticClass:"aside-main-search"},[r("el-input",{staticClass:"input-with-search",attrs:{placeholder:"搜索，你期待的..."},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1),e.status?r("div",{staticClass:"aside-main-text"},[r("router-link",{attrs:{to:"/logReg"},nativeOn:{click:function(t){e.changeColor(t,"0")}}},[e._v(" 登录 ")]),r("transition",{attrs:{name:"slide-fade"}},[e.nav.a0?r("i",{staticClass:"el-icon-caret-left"}):e._e()])],1):e._e(),r("div",{staticClass:"aside-main-text"},[r("router-link",{attrs:{to:"/"},nativeOn:{click:function(t){e.changeColor(t,"4")}}},[e._v("首页")]),r("transition",{attrs:{name:"slide-fade"}},[e.nav.a4?r("i",{staticClass:"el-icon-caret-left"}):e._e()])],1),r("div",{staticClass:"aside-main-text"},[r("router-link",{attrs:{to:"/article"},nativeOn:{click:function(t){e.changeColor(t,"1")}}},[e._v("博客/文章")]),r("transition",{attrs:{name:"slide-fade"}},[e.nav.a1?r("i",{staticClass:"el-icon-caret-left"}):e._e()])],1),r("div",{staticClass:"aside-main-text"},[r("router-link",{attrs:{to:"/photo"},nativeOn:{click:function(t){e.changeColor(t,"2")}}},[e._v("摄影/照片")]),r("transition",{attrs:{name:"slide-fade"}},[e.nav.a2?r("i",{staticClass:"el-icon-caret-left"}):e._e()])],1),r("div",{staticClass:"aside-main-text"},[r("router-link",{attrs:{to:""},nativeOn:{click:function(t){e.changeColor(t,"3")}}},[e._v("关于我")]),r("transition",{attrs:{name:"slide-fade"}},[e.nav.a3?r("i",{staticClass:"el-icon-caret-left"}):e._e()])],1)])},b=[],_={data:function(){return{msg:"",status:!0,search:"",show:!1,nav:{a0:!1,a1:!1,a2:!1,a3:!1,a4:!1},test1:"1",test2:"2"}},methods:{logstatus:function(e){this.status=e},changeColor:function(e,t){switch(t){case"0":this.nav.a0=!0,this.nav.a1=!1,this.nav.a2=!1,this.nav.a3=!1,this.nav.a4=!1;break;case"1":this.nav.a0=!1,this.nav.a1=!0,this.nav.a2=!1,this.nav.a3=!1,this.nav.a4=!1;break;case"2":this.nav.a0=!1,this.nav.a1=!1,this.nav.a2=!0,this.nav.a3=!1,this.nav.a4=!1;break;case"3":this.nav.a0=!1,this.nav.a1=!1,this.nav.a2=!1,this.nav.a3=!0,this.nav.a4=!1;break;case"4":this.nav.a0=!1,this.nav.a1=!1,this.nav.a2=!1,this.nav.a3=!1,this.nav.a4=!0;break}}}},w=_,k=(r("f171"),Object(c["a"])(w,v,b,!1,null,"96506cba",null));k.options.__file="nav.vue";var y=k.exports;n["default"].use(d["a"]);var F=new d["a"]({routes:[{path:"/",name:"index",component:function(){return r.e("chunk-5594133c").then(r.bind(null,"d504"))}},{path:"/article",name:"article",component:function(){return r.e("chunk-03279cfa").then(r.bind(null,"3ad6"))}},{path:"/photo",name:"photo",component:function(){return r.e("chunk-14029885").then(r.bind(null,"6ec5"))}},{path:"/logReg",name:"logReg",component:function(){return Promise.resolve().then(r.bind(null,"cdaa"))}}]}),x=r("bc3a"),C=r.n(x),$=r("5c96"),S=r.n($),z=(r("0fae"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{attrs:{id:"login"}},[r("div",{attrs:{id:"login-title"}},[e._v("\n\t\t\t登录流域\n\t\t")]),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules}},[r("div",{staticClass:"login-user"},[r("el-form-item",{attrs:{prop:"account"}},[r("el-input",{attrs:{placeholder:"输入账号","suffix-icon":"el-icon-phone",id:"login-user-input"},model:{value:e.ruleForm.account,callback:function(t){e.$set(e.ruleForm,"account",t)},expression:"ruleForm.account"}})],1)],1),r("div",{staticClass:"login-user"},[r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{placeholder:"输入密码","suffix-icon":"el-icon-edit",id:"login-user-input2",type:"password"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1)],1),r("div",{staticClass:"login-user"},[r("el-form-item",[r("el-button",{staticClass:"login-btn",attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("立即登录")]),r("div",{staticClass:"register"},[e._v("找回密码")]),r("div",{staticClass:"register",staticStyle:{"margin-left":"200px"},on:{click:function(t){e.register()}}},[e._v("还没有账号？立即注册")])],1)],1)]),e._m(0)],1)])}),O=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login-ds"}},[n("span",{staticStyle:{float:"left"}},[e._v("第三方登录:")]),n("img",{staticClass:"login-icon",attrs:{src:r("3f62")}}),n("img",{staticClass:"login-icon",attrs:{src:r("794d")}})])}],j={data:function(){return{show:!1,ruleForm:{account:"",password:""},rules:{account:[{required:!0,message:"请输入账号",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"}]}}},mounted:function(){var e=this;setTimeout(function(){e.show=!0},200)},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;axios.post("http://api.blog.com/authorizations",{username:t.ruleForm.account,password:t.ruleForm.password}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})})},resetForm:function(e){this.$refs[e].resetFields()},register:function(){this.$emit("reg",!0)}}},E=j,T=(r("7b1b"),Object(c["a"])(E,z,O,!1,null,null,null));T.options.__file="login.vue";var M=T.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"register"}},[n("div",{attrs:{id:"register-title"}},[e._v("\n\t\t\t加入流域\n\t\t")]),n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules}},[n("div",{staticClass:"register-user"},[n("el-form-item",{attrs:{prop:"account",error:e.errorphone}},[n("el-input",{attrs:{placeholder:"输入手机号","suffix-icon":"el-icon-phone",id:"register-user-input0"},on:{input:function(t){e.oninput()}},model:{value:e.ruleForm.account,callback:function(t){e.$set(e.ruleForm,"account",t)},expression:"ruleForm.account"}},[n("el-button",{attrs:{slot:"append",disabled:e.isdis},on:{click:function(t){e.getCap("ruleForm","account")}},slot:"append"},[e._v("下一步")])],1)],1)],1),n("transition-group",{attrs:{name:"slide-fade"}},[e.showcaptchas?n("div",{key:1,staticClass:"register-user"},[n("el-form-item",{attrs:{prop:"yzm",error:e.errorMsg}},[n("el-input",{attrs:{placeholder:"输入验证码","suffix-icon":"el-icon-document",id:"register-user-input"},model:{value:e.ruleForm.yzm,callback:function(t){e.$set(e.ruleForm,"yzm",t)},expression:"ruleForm.yzm"}},[n("el-button",{staticStyle:{padding:"0px"},attrs:{slot:"prepend"},slot:"prepend"},[e.isreloadYzm?n("img",{staticStyle:{"margin-top":"11px"},attrs:{width:"120px",src:e.captchas},on:{click:function(t){e.reloadYzm()}}}):n("i",{staticClass:"el-icon-loading"})]),n("el-button",{staticStyle:{width:"84px",padding:"0px"},attrs:{slot:"append",disabled:e.issendSms},on:{click:function(t){e.checkYzm("ruleForm","yzm",t)}},slot:"append"},[e._v("发送短信")])],1)],1)],1):e._e(),e.showSms?n("div",{key:2,staticClass:"register-user"},[n("el-form-item",{attrs:{error:e.errorName,prop:"name"}},[n("el-input",{attrs:{placeholder:"输入昵称","suffix-icon":"el-icon-tickets",id:"register-user-input3"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{placeholder:"请输入密码","suffix-icon":"el-icon-edit-outline",id:"register-user-input4",type:"password"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),n("el-form-item",{attrs:{prop:"sms",error:e.errorSms}},[n("el-input",{attrs:{placeholder:"输入短信验证码","suffix-icon":"el-icon-message",id:"register-user-input5"},model:{value:e.ruleForm.sms,callback:function(t){e.$set(e.ruleForm,"sms",t)},expression:"ruleForm.sms"}},[n("el-button",{attrs:{slot:"append"},on:{click:function(t){e.regNow("ruleForm","name","password","sms")}},slot:"append"},[e._v("注册")])],1)],1)],1):e._e()])],1),n("div",{attrs:{id:"register-ds"}},[n("span",{staticStyle:{float:"left"}},[e._v("第三方登录:")]),n("img",{staticClass:"register-icon",attrs:{src:r("3f62")}}),n("img",{staticClass:"register-icon",attrs:{src:r("794d")}}),n("div",{staticClass:"register",staticStyle:{"margin-left":"200px"},on:{click:function(t){e.register()}}},[e._v("已有账号？立即账号")])])],1)])},N=[],P=(r("7f7f"),{data:function(){return{show:!1,ruleForm:{account:"",password:"",name:"",yzm:"",sms:""},captchas:"",captcha_key:"",showcaptchas:!1,showSms:!1,smskey:"",isdis:!1,issendSms:!1,errorMsg:"",errorphone:"",errorSms:"",errorName:"",isreloadYzm:!0,rules:{account:[{required:!0,message:"请输入账号",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"},{pattern:/^1[34578]\d{9}$/,message:"手机号格式不正确",trigger:"blur"}],yzm:[{required:!0,message:"请输入验证码",trigger:"blur"}],sms:[{required:!0,message:"请输入短信验证码",trigger:"blur"}],name:[{required:!0,message:"请输入昵称",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"}]}}},mounted:function(){var e=this;setTimeout(function(){e.show=!0},200)},methods:{register:function(){this.$emit("log",!0)},getCap:function(e,t){var r=this;r.errorphone="",this.$refs[e].validateField(t,function(e){return""==e&&(axios.post("http://api.blog.com/captchas",{phone:r.ruleForm.account}).then(function(e){console.log(e),r.captchas=e.data.captcha_image_content,r.captcha_key=e.data.captcha_key,r.showcaptchas=!0,r.isdis=!0,r.isreloadYzm=!0}).catch(function(e){429==e.response.data.status_code?(r.errorphone="操作次数错过，请稍后再试",r.showcaptchas=!1):422==e.response.data.status_code&&(r.errorphone="电话号已存在")}),!1)})},oninput:function(){this.isdis=!1,this.showcaptchas=!1,this.ruleForm.yzm=""},reloadYzm:function(){var e=this;this.isreloadYzm=!1,setTimeout(function(){e.getCap("ruleForm","account")},500)},checkYzm:function(e,t,r){var n=this,s=this;s.errorMsg="",this.$refs[e].validateField(t,function(e){return""==e&&(axios.post("http://api.blog.com/verificationCodes",{captcha_key:s.captcha_key,captcha_code:s.ruleForm.yzm}).then(function(e){var t=60,n=setInterval(function(){r.target.innerHTML=t,t--,0==t&&(clearInterval(n),s.issendSms=!1,r.target.innerHTML="发送短信")},1e3);s.issendSms=!0,s.smskey=e.data.key,s.showSms=!0}).catch(function(e){401==e.response.data.status_code?(s.getCap("ruleForm","yzm"),s.errorMsg=e.response.data.message):429==e.response.data.status_code?(s.errorMsg="操作次数过多，请稍后再试",n.isdis=!1,n.showcaptchas=!1,n.ruleForm.yzm=""):422==e.response.data.status_code&&(s.errorMsg="图片验证码已失效,点就图片重新获取")}),!1)})},regNow:function(e,t,r,n){var s=this;console.log(1);var a=this,o="",i="";this.$refs[e].validateField(t,function(e){o=e}),this.$refs[e].validateField(r,function(e){i=e}),""==i&&""==o&&this.$refs[e].validateField(n,function(e){return console.log(e),""==e&&(console.log(a.smskey),console.log(a.ruleForm.password),console.log(a.ruleForm.name),axios.post("http://api.blog.com/users",{verification_key:a.smskey,password:a.ruleForm.password,name:a.ruleForm.name,phone:a.ruleForm.phone,verification_code:a.ruleForm.sms}).then(function(e){s.$notify({title:"成功",message:"注册成功，开始您的流域",type:"success"}),console.log(e),a.register()}).catch(function(e){422==e.response.data.status_code?a.errorName="昵称已存在":401==e.response.data.status_code?a.errorSms="验证码错误":423==e.response.data.status_code&&(a.errorSms="验证码失效，请重新发送",a.getCap("ruleForm","account"))})),!1})}}}),Y=P,R=(r("e185"),Object(c["a"])(Y,q,N,!1,null,null,null));R.options.__file="register.vue";var A=R.exports,B=r("cdaa");n["default"].use(S.a),n["default"].component("dh",y),n["default"].component("login",M),n["default"].component("register",A),n["default"].component("logReg",B["default"]),window.axios=C.a,n["default"].config.productionTip=!1,new n["default"]({router:F,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("5e27"),s=r.n(n);s.a},"5e27":function(e,t,r){},7198:function(e,t,r){},"74b8":function(e,t,r){},"794d":function(e,t,r){e.exports=r.p+"img/weibo.f801195e.png"},"7b1b":function(e,t,r){"use strict";var n=r("74b8"),s=r.n(n);s.a},8705:function(e,t,r){"use strict";var n=r("ba5c"),s=r.n(n);s.a},b0a0:function(e,t,r){"use strict";var n=r("07bb"),s=r.n(n);s.a},ba5c:function(e,t,r){},cdaa:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{attrs:{id:"background-img0"}}),r("div",{attrs:{id:"log-main"}},[r("transition",{attrs:{name:"slide-fade"}},[e.show1?r("login",{on:{reg:e.reg}}):r("register",{on:{log:e.log}})],1)],1)])},s=[],a=(r("cadf"),r("551c"),r("097d"),{data:function(){return{show:!1,show1:!0}},mounted:function(){var e=this;e.show=!0},methods:{reg:function(){this.show1=!1},log:function(){this.show1=!0}}}),o=a,i=(r("8705"),r("2877")),c=Object(i["a"])(o,n,s,!1,null,null,null);c.options.__file="logReg.vue";t["default"]=c.exports},e185:function(e,t,r){"use strict";var n=r("7198"),s=r.n(n);s.a},f171:function(e,t,r){"use strict";var n=r("1bb7"),s=r.n(n);s.a}});