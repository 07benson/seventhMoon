import Vue from 'vue'
import Router from 'vue-router'
import firstPage from '@/components/firstPage'
import fourthPage from '@/components/fourthPage'
import showPage from '@/components/showPage'
import canvasPage from '@/components/canvasPage'
import VueWechatTitle from 'vue-wechat-title'

Vue.use(Router);
Vue.use(VueWechatTitle);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/firstPage',
      meta:{title:'请选择藏头诗主题'}
    },
    {
      path: '/firstPage',
      name: 'firstPage',
      component: firstPage,
      meta:{title:'请选择藏头诗主题'}
    },
    {
      path: '/fourthPage',
      name: 'fourthPage',
      component: fourthPage,
      meta:{title:'给Ta的诗'}
    },
    {
      path: '/showPage',
      name: 'showPage',
      component: showPage,
      meta:{title:'一封来自Ta的诗'}
    },
    {
      path: '/canvasPage',
      name: 'canvasPage',
      component: canvasPage,
      meta:{title:'canvasPage'}
    }
  ]
})
