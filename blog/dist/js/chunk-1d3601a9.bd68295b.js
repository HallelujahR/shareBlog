(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d3601a9"],{"0278":function(t,a,e){"use strict";var s=e("46e3"),i=e.n(s);i.a},"345a":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{attrs:{id:"background-imgUser"}}),e("div",{attrs:{id:"main-user"}},[e("div",{attrs:{id:"user-head"}},[t.user.avatar?e("img",{staticClass:"headPic",attrs:{src:t.user.avatar,alt:""}}):e("avatar",{staticClass:"headPic",attrs:{size:120,username:t.user.name||""}}),e("div",{staticClass:"user-detail"},[e("div",{attrs:{id:"user-name"}},[t._v("\n          "+t._s(t.user.name)+"\n          "),t.state?e("router-link",{attrs:{to:"/alterDetail",id:"edit-information"}},[t._v("「\n            编辑个人资料」\n          ")]):t._e()],1),e("div",{staticClass:"user-web"},[t._v("\n          个人博客站点： "),e("a",{attrs:{href:t.detail.web}},[t._v(t._s(t.detail.web))])]),t.user.introduction?e("div",{staticClass:"user-introduction"},[t._v(" 一句话："+t._s(t.user.introduction)+" ")]):e("div",{staticClass:"user-introduction"},[t._v("\n          一句话：这个人很懒～还什么都没有留下～\n        ")])]),e("div",{staticClass:"user-detail"},[e("div",{staticClass:"user-detail-right"},[t._v("\n          职业经历: "),t.detail.occupation?e("span",{staticClass:"udr-line"},[t._v(t._s(t.detail.occupation))]):e("span",{staticClass:"udr-line"},[t._v("未知")])]),e("div",{staticClass:"user-detail-right"},[t._v("\n          教育经历: "),t.detail.education?e("span",{staticClass:"udr-line"},[t._v(t._s(t.detail.education))]):e("span",{staticClass:"udr-line"},[t._v("未知")])]),e("div",{staticClass:"user-detail-right"},[t._v("\n          爱好: "),t.detail.hobby?e("span",{staticClass:"udr-line"},[t._v(t._s(t.detail.hobby))]):e("span",{staticClass:"udr-line"},[t._v("未知的爱好= =|||")])])])],1),e("div",{attrs:{id:"user-body"}},[e("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[e("el-tab-pane",{staticStyle:{color:"white"},attrs:{label:"写的文章",name:"first"}},[t._v("写的文章")]),e("el-tab-pane",{staticStyle:{color:"white"},attrs:{label:"拍的照片",name:"second"}},[t._v("拍的照片")])],1)],1)])])},i=[],n=e("be94"),r=e("2f62"),l={data:function(){return{state:null,user:{},detail:{},activeName:"first"}},computed:Object(n["a"])({},Object(r["c"])(["verbState","token"])),created:function(){var t=this;this.token==localStorage.access_token&&(this.state=!0),this.id=this.$route.params.id;var a={id:this.id};this.$server.getInformation(a).then(function(a){t.user=a,t.detail=a.user_detail,console.log(a)}).catch(function(t){console.log(t)})},mounted:function(){},methods:{handleClick:function(t,a){console.log(t,a)}}},c=l,d=(e("0278"),e("2877")),o=Object(d["a"])(c,s,i,!1,null,null,null);o.options.__file="index.vue";a["default"]=o.exports},"46e3":function(t,a,e){}}]);