import Vue from 'vue'
import Router from 'vue-router'
import firstPage from '@/components/firstPage'
import secondPage from '@/components/secondPage'
import thirdPage from '@/components/thirdPage'
import fourthPage from '@/components/fourthPage'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/firstPage'
    },
    {
      path: '/firstPage',
      name: 'firstPage',
      component: firstPage
    },
    {
      path: '/secondPage',
      name: 'secondPage',
      component: secondPage
    },
    {
      path: '/thirdPage',
      name: 'thirdPage',
      component: thirdPage
    },
    {
      path: '/fourthPage',
      name: 'fourthPage',
      component: fourthPage
    }
  ]
})
