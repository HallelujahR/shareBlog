(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a215732a"],{2216:function(e,t,n){},3402:function(e,t,n){},"6eac":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:{width:e.width+"px"},attrs:{id:"alterDetail"}},[n("div",{attrs:{id:"detail-body"}},[n("el-tabs",{staticStyle:{height:"100%","margin-left":"150px"},attrs:{"tab-position":e.tabPosition}},[n("el-tab-pane",{attrs:{label:"基本信息"}},[n("Detail")],1),n("el-tab-pane",{attrs:{label:"设置"}},[e._v("配置管理")])],1)],1)])},r=[],a=(n("cadf"),n("551c"),n("097d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{id:"detail"}},[n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-position":e.labelPosition,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"手机号"}},[n("el-input",{attrs:{disabled:!0},model:{value:e.ruleForm.phone,callback:function(t){e.$set(e.ruleForm,"phone",t)},expression:"ruleForm.phone"}})],1),n("el-form-item",{attrs:{label:"昵称",prop:"name"}},[n("el-input",{attrs:{placeholder:"昵称"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),n("el-form-item",{attrs:{label:"一句话介绍",prop:"introduction"}},[n("el-input",{attrs:{placeholder:"一句话介绍"},model:{value:e.ruleForm.introduction,callback:function(t){e.$set(e.ruleForm,"introduction",t)},expression:"ruleForm.introduction"}})],1),n("el-form-item",{attrs:{label:"教育经历",prop:"education"}},[n("el-input",{attrs:{placeholder:"教育经历"},model:{value:e.ruleForm.education,callback:function(t){e.$set(e.ruleForm,"education",t)},expression:"ruleForm.education"}})],1),n("el-form-item",{attrs:{label:"职业",prop:"occupation"}},[n("el-input",{attrs:{placeholder:"职业"},model:{value:e.ruleForm.occupation,callback:function(t){e.$set(e.ruleForm,"occupation",t)},expression:"ruleForm.occupation"}})],1),n("el-form-item",{attrs:{label:"爱好",prop:"hobby"}},[e._l(e.dynamicTags,function(t){return n("el-tag",{key:t,staticStyle:{"margin-right":"10px"},attrs:{closable:"","disable-transitions":!1},on:{close:function(n){e.handleClose(t)}}},[e._v("\n        "+e._s(t)+"\n      ")])}),e.inputVisible?n("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:e.handleInputConfirm},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleInputConfirm(t):null}},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}}):n("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:e.showInput}},[e._v("添加爱好")])],2),n("el-form-item",{attrs:{label:"个人站点",prop:"web"}},[n("el-input",{attrs:{placeholder:"如：http://www.rivered.cn（如果没有默认为空）"},model:{value:e.ruleForm.web,callback:function(t){e.$set(e.ruleForm,"web",t)},expression:"ruleForm.web"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("保存")]),n("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)}),o=[],l=n("be94"),s=(n("7f7f"),n("2f62")),u={data:function(){return{dynamicTags:["篮球","摄影","看书"],inputVisible:!1,inputValue:"",detail:{},labelPosition:"left",loading:!0,ruleForm:{phone:"",name:"",introduction:"",education:"",occupation:"",hobby:"",web:""},rules:{name:[{required:!0,message:"请填写昵称",trigger:"blur"},{min:3,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],introduction:[{required:!0,message:"请填写介绍",trigger:"blur"},{min:3,max:40,message:"长度在 3 到 40 个字符",trigger:"blur"}],education:[{required:!0,message:"请填写教育",trigger:"blur"},{min:2,max:40,message:"长度在 2 到 40 个字符",trigger:"blur"}],occupation:[{required:!0,message:"请填写职业",trigger:"blur"},{min:2,max:40,message:"长度在 2 到 40 个字符",trigger:"blur"}],web:[{pattern:/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\\\/])+$/,message:"网站格式不正确",trigger:"blur"}]}}},mounted:function(){this.loading=!1},computed:{},created:function(){var e=this;this.id=this.$route.params.id;var t={id:this.id};this.$server.getInformation(t).then(function(t){e.user=t,e.ruleForm=t.user_detail,e.ruleForm["name"]=t.name,e.ruleForm["phone"]=t.phone,e.ruleForm["introduction"]=t.introduction}).catch(function(e){console.log(e)})},methods:Object(l["a"])({},Object(s["b"])(["setUser"]),{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return alert("error submit!!"),!1;var n=t.ruleForm;t.$server.editDetail(n).then(function(e){t.$message({type:"success",message:"修改成功 😊"}),console.log(t.setUser),t.setUser(e)}).catch(function(e){t.$message({type:"warning",message:"修改失败 😓"}),console.log(e)})})},resetForm:function(e){this.$refs[e].resetFields()},handleClose:function(e){this.dynamicTags.splice(this.dynamicTags.indexOf(e),1)},showInput:function(){var e=this;this.inputVisible=!0,this.$nextTick(function(){e.$refs.saveTagInput.$refs.input.focus()})},handleInputConfirm:function(){var e=this.inputValue;e&&this.dynamicTags.push(e),this.inputVisible=!1,this.inputValue=""}})},c=u,m=(n("7dc6"),n("2877")),d=Object(m["a"])(c,a,o,!1,null,"2b3f245e",null);d.options.__file="detail.vue";var p=d.exports,f={components:{Detail:p},data:function(){return{tabPosition:"left",width:""}},mounted:function(){this.width=window.screen.width}},b=f,h=(n("d1dd"),Object(m["a"])(b,i,r,!1,null,"b2ec55ac",null));h.options.__file="alterDetail.vue";t["default"]=h.exports},"7dc6":function(e,t,n){"use strict";var i=n("2216"),r=n.n(i);r.a},"7f7f":function(e,t,n){var i=n("86cc").f,r=Function.prototype,a=/^\s*function ([^ (]*)/,o="name";o in r||n("9e1e")&&i(r,o,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},d1dd:function(e,t,n){"use strict";var i=n("3402"),r=n.n(i);r.a}}]);