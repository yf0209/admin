import Vue from 'vue'
import Router from 'vue-router'
import login from '../pages/login'
import index from '../pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/index',
      component: index
    },
    {
      path:'*',
      redirect:'/login'
    }
  ]
})
