(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dfa75244"],{"155a":function(e,t,r){},1573:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAADXklEQVRIS51WS2wTVxQ9Z2aSNEJpMlMICZRf4gmolconLJBYAeGzQSwodNuCaJoYIVUsKrrKphsWICQ8ISA+K0ARAgk2tMCOZcKnakWbcXCBQJoQeVy5lCYez0U2BOx4nk14y3fPved+331EudMnVVYQ3ygBdgJoJ6VZgLkEJkQ4CsoARbuSNFpvoZMZlSmqBJbj7oLgCIhPyzoCQIDHgeDgP1H7Uhi2hKThaKJBq/EvAthayXiJXPBLMGV8lfp+WapQVkRS15dYYfj+dRJLZk3wRkEEj3zD2JbuXPbHtI23JHNOPZxfk/EHAS78UIJ3evJ0sspof7GvZSx395qkRzRznjtIclVZAsEYIH8JMQ/gEgK6Ci8i97zndjt6GORJGpyhbzTwjJpARkX03V609fY0Jhd59VT2AokNKr0AsifV3XaW6BfdnIgnCCwKAwuQ9aF/nu5u+bNE3i+69dz9DeQKhe5jbzzSyvrjw5t0LbipDBty0utu61TJzZi7ncRVlTwbaB00Hdch0KUMWbSdqWjrZWUqjzyptT76/z+1k+il5bgDuWlWhCsZsunfrsh4uYYwHfcOgdUKzCCtmDsKoimURHDHi9qhDhTiTcf9icCPoSSCv2nGhjIkjZkAATz6+CJ5wB6pNDd1x0c+qdJe/hyWERHxaTlDzwA2l5CI/OBF2w5XIpiWm73x9RR52+IFgzmqromPRe8TRaETVmzoQUg7D4Z2l0AmvC670YrFP0vut3+vFM2cWKLpRV1t2kqnz4H4shAvQC/rneEOHcGNYoFkIMjdLfCyXIcD9mTZ7oq5J0FppmANyAWF2Cy0zUSPGGZjfJjA4hBD44Gmb0l913JfRZJfDdX+DRBrQ5rniTceaXn9dvW6ezTB6VIQT3jdkaJBzU24F7WvFdXCiX8LSN9M/YDYm+qyz0y/wobZ6A4QXFkEFLwMIIeg8T4DWQ5yB4BtAC4E0M5S8DEZdFDwNYjaGSn/1Ztrr8FuZt/tk1iiqQb+XdVgVir+DOfGJqv1lcX75A2iznm43IB/neDSWRktAOc3I/Wtha92yY6vdx6ZmkydJ/Npmd15nx1fXEx3FyDHwl6DEmbBCAQHk/vt/jCvlF+iPLhPqur9+AYN+QEL/3eRl5NjkVvooa8K+xV6iVzSKFN0fQAAAABJRU5ErkJggg=="},"3f42":function(e,t,r){"use strict";var s=r("155a"),a=r.n(s);a.a},"7f7f":function(e,t,r){var s=r("86cc").f,a=Function.prototype,i=/^\s*function ([^ (]*)/,o="name";o in a||r("9e1e")&&s(a,o,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},"87d5":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.Loading,expression:"Loading"}],attrs:{id:"register-body"}},[r("div",{attrs:{id:"register"}},[e._m(0),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules}},[r("div",{staticClass:"register-user"},[r("el-form-item",{attrs:{prop:"account",error:e.errorphone}},[r("el-input",{attrs:{placeholder:"输入手机号","suffix-icon":"el-icon-phone"},on:{input:function(t){e.oninput()}},model:{value:e.ruleForm.account,callback:function(t){e.$set(e.ruleForm,"account",t)},expression:"ruleForm.account"}},[r("el-button",{attrs:{slot:"append",disabled:e.isdis},on:{click:function(t){e.getCap("ruleForm","account")}},slot:"append"},[e._v("下一步")])],1)],1)],1),r("transition-group",{attrs:{name:"slide-fade"}},[e.showcaptchas?r("div",{key:1,staticClass:"register-user"},[r("el-form-item",{attrs:{prop:"yzm",error:e.errorMsg}},[r("el-input",{attrs:{placeholder:"输入验证码","suffix-icon":"el-icon-document"},model:{value:e.ruleForm.yzm,callback:function(t){e.$set(e.ruleForm,"yzm",t)},expression:"ruleForm.yzm"}},[r("el-button",{staticStyle:{padding:"0px"},attrs:{slot:"prepend"},slot:"prepend"},[e.isreloadYzm?r("img",{staticStyle:{"margin-top":"11px"},attrs:{width:"120px",src:e.captchas},on:{click:function(t){e.reloadYzm()}}}):r("i",{staticClass:"el-icon-loading"})]),r("el-button",{staticStyle:{width:"84px",padding:"0px"},attrs:{slot:"append",disabled:e.issendSms},on:{click:function(t){e.checkYzm("ruleForm","yzm",t)}},slot:"append"},[e._v("发送短信")])],1)],1)],1):e._e(),e.showSms?r("div",{key:2,staticClass:"register-user"},[r("el-form-item",{attrs:{error:e.errorName,prop:"name"}},[r("el-input",{attrs:{placeholder:"输入昵称","suffix-icon":"el-icon-tickets"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{placeholder:"请输入密码","suffix-icon":"el-icon-edit-outline",type:"password"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),r("el-form-item",{attrs:{prop:"sms",error:e.errorSms}},[r("el-input",{attrs:{placeholder:"输入短信验证码","suffix-icon":"el-icon-message"},model:{value:e.ruleForm.sms,callback:function(t){e.$set(e.ruleForm,"sms",t)},expression:"ruleForm.sms"}},[r("el-button",{attrs:{slot:"append"},on:{click:function(t){e.regNow("ruleForm","name","password","sms")}},slot:"append"},[e.isZc?r("span",[e._v("注册")]):r("i",{staticClass:"el-icon-loading"})])],1)],1)],1):e._e()])],1),e._m(1),r("div",{staticClass:"register"},[r("router-link",{attrs:{to:"/login"}},[e._v("已有账号？立即登录")])],1)],1)])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"registerLogo"}},[s("img",{attrs:{src:r("899d"),width:"130px",alt:""}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"register-ds"}},[s("div",{attrs:{id:"register-title"}},[s("span",[e._v("———————— 社交账号登录 ————————")])]),s("div",{attrs:{id:"register-in"}},[s("img",{staticClass:"register-icon",attrs:{width:"25px;",src:r("1573")}}),s("img",{staticClass:"register-icon",attrs:{width:"25px;",src:r("ad1b")}})])])}],i=(r("7f7f"),r("be94")),o=(r("cadf"),r("551c"),r("097d"),r("2f62")),n={data:function(){return{show:!1,ruleForm:{account:"",password:"",name:"",yzm:"",sms:""},captchas:"",captcha_key:"",showcaptchas:!1,showSms:!1,smskey:"",isdis:!1,issendSms:!1,errorMsg:"",errorphone:"",errorSms:"",errorName:"",isreloadYzm:!0,isZc:!0,Loading:!0,rules:{account:[{required:!0,message:"请输入账号",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"},{pattern:/^1[34578]\d{9}$/,message:"手机号格式不正确",trigger:"blur"}],yzm:[{required:!0,message:"请输入验证码",trigger:"blur"}],sms:[{required:!0,message:"请输入短信验证码",trigger:"blur"}],name:[{required:!0,message:"请输入昵称",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"}]}}},created:function(){this.fullscreenLoading=!0,"true"===localStorage.verbState&&this.$router.push({name:"index"})},mounted:function(){setTimeout(function(){this.Loading=!1}.bind(this),200)},methods:Object(i["a"])({},Object(o["d"])({setverbState:"SET_VERBSTATE",setToken:"SET_TOKEN"}),Object(o["b"])(["setUser"]),{register:function(){this.$emit("log",!0)},getCap:function(e,t){var r=this;this.errorphone="",this.$refs[e].validateField(t,function(e){if(""===e){var t={phone:r.ruleForm.account};r.$server.getCaptchas(t).then(function(e){r.captchas=e.captcha_image_content,r.captcha_key=e.captcha_key,r.showcaptchas=!0,r.isdis=!0,r.isreloadYzm=!0}).catch(function(e){return 422===e.status?(r.errorphone="电话号已存在",!1):429===e.status?(r.errorphone="操作次数错过，请稍后再试",r.showcaptchas=!1,!1):void 0})}})},oninput:function(){this.isdis=!1,this.showcaptchas=!1,this.ruleForm.yzm=""},reloadYzm:function(){var e=this;this.isreloadYzm=!1,setTimeout(function(){e.getCap("ruleForm","account")},500)},checkYzm:function(e,t,r){var s=this;this.errorMsg="",this.$refs[e].validateField(t,function(e){if(""===e){var t={captcha_key:s.captcha_key,captcha_code:s.ruleForm.yzm};s.$server.checkYzm(t).then(function(e){var t=60,a=setInterval(function(){r.target.innerHTML=t,t--,0===t&&(clearInterval(a),s.issendSms=!1,r.target.innerHTML="发送短信")},1e3);s.issendSms=!0,s.smskey=e.key,s.showSms=!0}).catch(function(e){return 412===e.status?(s.getCap("ruleForm","yzm"),s.errorMsg="验证码错误",!1):429===e.status?(s.errorMsg="操作次数过多，请稍后再试",s.isdis=!1,s.showcaptchas=!1,s.ruleForm.yzm="",!1):422===e.status?(s.errorMsg="图片验证码已失效,点就图片重新获取",!1):void 0})}})},regNow:function(e,t,r,s){var a=this,i="",o="";this.isZc=!1,this.$refs[e].validateField(t,function(e){i=e}),this.$refs[e].validateField(r,function(e){o=e}),""===o&&""===i&&this.$refs[e].validateField(s,function(e){if(""===e){var t={verification_key:a.smskey,password:a.ruleForm.password,name:a.ruleForm.name,phone:a.ruleForm.account,verification_code:a.ruleForm.sms};a.$server.regNow(t).then(function(e){var t=e.meta.access_token;a.setverbState(!0),a.setToken(t),localStorage.setItem("access_token",t),localStorage.setItem("verbState","true"),a.setUser,a.$message({message:"注册成功，开始您的流域",type:"success"}),a.isZc=!0,a.$router.push({name:"index"})}).catch(function(e){return console.log(e),422===e.status?(a.errorName="昵称已存在",a.isZc=!0,!1):433===e.status?(a.errorSms="验证码错误",a.isZc=!0,!1):423===e.status?(a.errorSms="验证码失效，请重新发送",a.getCap("ruleForm","account"),a.isZc=!0,!1):void 0})}})}})},c=n,u=(r("3f42"),r("2877")),l=Object(u["a"])(c,s,a,!1,null,"e91e137a",null);l.options.__file="register.vue";t["default"]=l.exports},"899d":function(e,t,r){e.exports=r.p+"img/riveredlogo.c0d2b77a.png"},ad1b:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAEG0lEQVRIS71VbYiUVRg9574fKYkaaeXuvGvK7s5MFlISSJZghEhaP6wk+jKCBaOIPhAzFEqIQNYSlj4oJVSE9odgJApBJJFUIGpQ7owfa847uxpJhOmic9+5J95Zd5wxzVTw/rv3Pu859zzPeZ6XuA6L14ED10xysDWYmXiclz7WOOcczCF/qLKt40+cHBFwzSR9beFXBBY0ZkTAcVN1z2QHkm/S82smKbQgC89fRGk3jJkg8G0AUwVZSAvycfL1ZUkOtHrznTHzQXRK+Dkf2zcurOOhDNot/IxnkhJLGKhG4QoQKwD9paptvyTJwZbg7sTDJpLTGkHpqg9ny9UdjWeFtrAfwBRJCYmluZJd2xeFW0gsJNzyi5L0tfnLIa4i6V/4ajm9ki/bnmYSf5Zg5gLoIjBJiZvlkUPO415A+5pIjtyOUWdduBHAE5eydqqEMsccNReGd0KI0kKHp+ySymh/Gn2zS9KaXGyXFaPgrAhXJxHgFaNwG4iaHa90EeoxVbu66oUxhO5cXFlaiIKhJncVo+Bzkc9fKfhIvKQNudh2FTP+a2E16U3PK0H4m6A9NSV9mfApGmxuIpAEsB/Ut6bqtlbJ08P3poXUQyKeJhjWv3FuWa6crK6TAn4hCtZ51GYeGY/xZ8cGRwGOrQWk4ESPn9ju9kHEl1K2fzImGResBLAEJCE5Ab2jztjXp/yB402OLLQFrwL84Bz+kJF7fMSih2/CuGRMOE9wHaTx5NxP2XKtudwISCEKXgC5vkHBcZNU7soO4kR9rPRFwQ8kZw4XSIuzJZu6C4VW/0EYfgFyYnMasTUbVxYSUAPRdyAfaKjPh/nYvtxI8jfJMZB252J7b3pxsBWZxAQFkjcOB+qkhO0kn6ztnJuTLyc7R0CKUfiuiLfOP0a7ciV7fyPJCZI3S3p/ZGQUM0GXDD+FtFbSlyRfFOkReKym2KkrW7brGpR8DHJJA8mmXMk+VycpROGOtDckbczHdnEtVW3hIkCf5Up2XG2f8ZfCmLpzvEQzOgbtnvTu0K24xYZB/4hqQRWJM+6IK7+cV9Li30eP34M4BdlcLsZgnMHo0wwPCOoF3U7K+wRE6zlzbMjHttZPAoJiFG4B8UgdUHopG9uPmtyVbopt/puCeS9tnBusXTj1GI4WW4PpMtgAcvpwWTBAaE1nbHsIJEcm4rYzo4JekrMbnPVOvlRJR33Tqo+VQuQ9KnjdoCZTWG9ouztL6C9m0EoFEzsH7L5ChBYonCOj2RSeBTl6mF97jdyqbFzdeiFBrYaNh78CoReFKwGlDTYBwmFB5XOBqdNm1BpvGHkQ1HavivUdA/bHi4HXU3ixy3SeFNqCe+iYB91k0QSUSyj+DrhyUK3uT1P6X8D/qsn/Db7auMv+fq8WuPG7fwB1u89Xx/9c8AAAAABJRU5ErkJggg=="}}]);