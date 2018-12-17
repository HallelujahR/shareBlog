import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' //引入 vuex store
import ElementUI from 'element-ui';//引入element ui
import 'element-ui/lib/theme-chalk/index.css';
import { server } from './providers/http-service'//引入二次封装的axios
import { Loading } from 'element-ui'; // 引入加载效果组建
import 'vue-croppa/dist/vue-croppa.css'; //引入裁剪图片插件
import Croppa from 'vue-croppa';
Vue.use(Croppa);

Vue.component('avatar', () => import('vue-avatar'));  //引入自动生成头像插件

Vue.prototype.$server = server;//定义全局变量axios
Vue.prototype.$URL = 'http://api.blog.com';
Vue.use(ElementUI);


Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
