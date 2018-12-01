import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' //引入 vuex store
import ElementUI from 'element-ui';//引入element ui
import 'element-ui/lib/theme-chalk/index.css';
import {server} from './providers/http-service'//引入二次封装的axios

Vue.prototype.$server=server;//定义全局变量axios
Vue.use(ElementUI);


Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
