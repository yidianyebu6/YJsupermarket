import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/Index.vue'
import Model from './views/Model.vue'
import Usermanage from './views/Usermanage.vue'
import Adduser from './views/Adduser.vue'
import Amendpad from './views/Amendpad.vue'
import Commodity from './views/Commodity.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      component: ( ) => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/model',
      component: ( ) => import(/* webpackChunkName: "about" */ './views/Model')
    },
    {
      path: '/usermanage',
      component: () => import(/* webpackChunkName: "about" */ './views/Usermanage.vue')
    },
    {
      path: '/adduser',
      component: () => import(/* webpackChunkName: "about" */ './views/Adduser.vue')
    },
    {
      path: '/amendpad',
      component: () => import(/* webpackChunkName: "about" */ './views/Amendpad.vue')
    },
    {
      path: '/commodity',
      component: () => import(/* webpackChunkName: "about" */ './views/Commodity.vue')
    }
  ]
})
