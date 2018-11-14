import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import dh from './components/nav.vue'

//引入element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.component('dh',dh);

//注册登录组件
import login from './components/loginOrRegister/login.vue'
Vue.component('login',login);
//注册注册组件
import register from './components/loginOrRegister/register.vue'
Vue.component('register',register);

//注册包含登录和注册总组件
import logReg from './components/loginOrRegister/logReg.vue';
Vue.component('logReg',logReg);

window.axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
