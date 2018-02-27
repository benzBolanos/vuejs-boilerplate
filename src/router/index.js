import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/containers/home/index'
import MyPage from '@/containers/my-page/index'
import Login from '@/containers/login/index'
import Assets from '@/containers/assets/index'
import Ssf from '@/containers/ssf/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/my-page',
      name: 'My Page',
      component: MyPage
    },
    {
      path: '/login',
      name: 'User Login',
      component: Login
    },
    {
      path: '/assets',
      name: 'Assets',
      component: Assets
    },
    {
      path: '/ssf',
      name: 'SSF',
      component: Ssf
    }
  ]
})
