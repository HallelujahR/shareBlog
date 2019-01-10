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
      path: '/login',
      name: 'login',
      component: () => import('./components/loginOrRegister/login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./components/loginOrRegister/register.vue'),
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import('./components/User/index.vue'),
      children: [
        {
          path: 'alterDetail',
          name: 'alterDetail',
          component: () => import('./components/User/alterDetail.vue'),
        }
      ]
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('./views/Article.vue'),
    },
    {
      path: '/photo',
      name: 'photo',
      component: () => import('./views/Photo.vue'),
    },
  ]
})
