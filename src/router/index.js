import Vue from 'vue'
import Router from 'vue-router'
import firstPage from '@/components/firstPage'
import secondPage from '@/components/secondPage'
import thirdPage from '@/components/thirdPage'
import fourthPage from '@/components/fourthPage'
import showPage from '@/components/showPage'
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
      path: '/secondPage',
      name: 'secondPage',
      component: secondPage,
      meta:{title:'输入想传达新意的Ta的姓名或昵称'}
    },
    {
      path: '/thirdPage',
      name: 'thirdPage',
      component: thirdPage,
      meta:{title:'请选择不超过3个内容关键词'}
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
    }
  ]
})
