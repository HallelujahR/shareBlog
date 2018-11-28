import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'
import store from './store' //引入 vuex store
import ElementUI from 'element-ui';//引入element ui
import 'element-ui/lib/theme-chalk/index.css';
import {server} from './providers/http-service'//引入二次封装的axios
import dh from './components/nav.vue'

// window.axios = axios;
Vue.component('dh',dh);
Vue.prototype.$server=server;//定义全局变量axios
Vue.use(ElementUI);

import login from './components/loginOrRegister/login.vue' //注册登录组件
Vue.component('login',login);

import register from './components/loginOrRegister/register.vue' //注册注册组件
Vue.component('register',register);

import logReg from './components/loginOrRegister/logReg.vue'; //注册包含登录和注册总组件
Vue.component('logReg',logReg);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
