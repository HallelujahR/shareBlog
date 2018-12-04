import Vue from 'vue'
import Router from 'vue-router'

//注册路由
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import('./components/User/index.vue'),
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('./views/Article.vue'),
    },
    {
      path:'/photo',
      name: 'photo',
      component:() => import('./views/Photo.vue'),
    },
    {
      path:'/logReg',
      name:'logReg',
      component:() => import('./components/loginOrRegister/logReg.vue'),
    },

  ]
})
