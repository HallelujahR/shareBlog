import axios from "axios/index";
import qs from 'qs';
import router from '../router'
import store from '../store'
// import { SET_VERBSTATE } from "../store/mutation-types";

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://api.blog.com'; //填写域名

//http request 拦截器
axios.interceptors.request.use(
  config => {

    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    //判断提交上来的方法 题爱奥过来的数据需要序列化才能被后端处理
    if (config.method.toLocaleLowerCase() === 'post'
      || config.method.toLocaleLowerCase() === 'put'
      || config.method.toLocaleLowerCase() === 'delete') {

      config.data = qs.stringify(config.data)
    }

    //判断token是否存在
    if (localStorage.access_token) {
      //判断token 的格式 因为新的token和旧的token返回的字符串不同
      if (localStorage.access_token.startsWith('Bearer')) {

        localStorage.access_token = localStorage.access_token.replace(/Bearer /, "");

        config.headers.Authorization = 'Bearer ' + localStorage.access_token;
      } else {
        config.headers.Authorization = 'Bearer ' + localStorage.access_token;
      }
    }

    return config;
  },
  err => {
    return Promise.reject(err);

  }
);

//响应拦截器即异常处理
axios.interceptors.response.use(response => {

  var token = response.headers.authorization;

  if (token) {
    // 如果 header 中存在 token，那么触发 refreshToken 方法，替换本地的 token
    localStorage.access_token = token;

  }

  return response;

}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        // eslint-disable-next-line no-console
        console.log('错误请求')
        break;
      case 401:
        //更改本地存储的状态
        localStorage.verbState = 'false';
        //提交到vuex中 当前的状态
        store.commit('SET_VERBSTATE', false);
        store.commit('SET_TOKEN', '');
        //跳转到登录页面
        router.push({ name: 'logReg' });
        //设置是否重新登录提示
        localStorage.setItem('relogin', 'true');
        // eslint-disable-next-line no-console
        console.log('未授权，请重新登录');
        break;
      case 403:
        // eslint-disable-next-line no-console
        console.log('拒绝访问')
        break;
      case 404:
        // eslint-disable-next-line no-console
        console.log('请求错误,未找到该资源')
        break;
      case 405:
        // eslint-disable-next-line no-console
        console.log('请求方法未允许')
        break;
      case 408:
        // eslint-disable-next-line no-console
        console.log('请求超时')
        break;
      case 500:
        // eslint-disable-next-line no-console
        console.log('服务器端出错')
        break;
      case 501:
        // eslint-disable-next-line no-console
        console.log('网络未实现')
        break;
      case 502:
        // eslint-disable-next-line no-console
        console.log('网络错误')
        break;
      case 503:
        // eslint-disable-next-line no-console
        console.log('服务不可用')
        break;
      case 504:
        // eslint-disable-next-line no-console
        console.log('网络超时')
        break;
      case 505:
        // eslint-disable-next-line no-console
        console.log('http版本不支持该请求');
        break;
      default:
        // eslint-disable-next-line no-console
        console.log(`${err.response.status}`)
    }
  } else {
    // eslint-disable-next-line no-console
    console.log('连接到服务器失败')
  }
  return Promise.reject(err.response);
});

