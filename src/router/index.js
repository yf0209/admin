import Vue from 'vue'
import Router from 'vue-router'
import login from '../pages/login'
import index from '../pages/index'
import device from '../components/device'
import user from '../components/user'
import notice from '../components/notice'
import wel from '../components/welcome'
import manage from '../pages/manage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/index',
      component: index,
      children:[
        {
          path:"",
          component:wel
        },
        {
          path:"manage",
          component:manage
        },
        {
          path:"user",
          component:user
        },
        {
          path:"notice",
          component:notice
        },
        {
          path:"device",
          component:device
        }
      ]
    },
    {
      path:'*',
      redirect:'/login'
    }
  ]
})
