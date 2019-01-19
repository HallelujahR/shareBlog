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
      redirect: '/user/:id',//设置redirect属性为对应子路由路径即转发到默认的子路由路径
      children: [
        {
          path: '/user/:id',
          name: 'this',
          component: () => import('./components/User/main.vue'),
        },
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
