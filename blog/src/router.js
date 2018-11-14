import Vue from 'vue'
import Router from 'vue-router'
import test from './components/test.vue'

//引入网页上方导航栏
import nav from './components/nav.vue'

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
      path: '/article',
      name: 'article',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/Article.vue')
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
