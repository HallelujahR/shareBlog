import axios from 'axios';
import intercept from './intercept';
import * as types from './axios-method';

/**
 * 下面是获取数据的接口
 */
export const server = {
  getCaptchas: function (paramObj) {
    return types.post('/captchas', paramObj);
  },
  login: function (paramObj) {
    return types.post('/authorizations', paramObj);
  },
  checkYzm: function (paramObj) {
    return types.post('/verificationCodes', paramObj);
  },
  regNow: function (paramObj) {
    return types.post('/users', paramObj);
  },
  //在action中获取用户基本信息
  getUser: function () {
    return types.fetch('/user');
  },
  //刷新token
  refreshToken: function () {
    return types.put('/authorizations/current');
  },
  //获取用户的信息
  getInformation: function (paramObj) {
    return types.fetch('/users/all', paramObj);
  },
  //上传图片
  uploadImg: function (paramObj) {
    return types.post('/images', paramObj, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    });
  },
  //删除图片
  deleteImg: function (paramObj) {
    return types.patch('/images/delete', paramObj);
  },
  //编辑个人资料哦
  editDetail: function (paramObj) {
    return types.patch('/user', paramObj);
  },
  //获取所有个性标签
  allTopic: function (paramObj) {
    return types.fetch('/topic/index', paramObj);
  },
  //创建标签
  storeTopic: function (paramObj) {
    return types.post('topics', paramObj);
  },
  //增加个人标签
  addTopic: function (paramObj) {
    return types.post('/addTopic', paramObj);
  },
  //获取个人标签
  getPersonalTopic: function (paramObj) {
    return types.fetch('/getPersonalTopic', paramObj);
  },
  //从个人编辑删除标签
  delPersonalTopic: function (paramObj) {
    return types.patch('/delPersonalTopic', paramObj)
  },
  //发布文章
  storeArticle: function (paramObj) {
    return types.post('/storeArticle', paramObj);
  }

};

