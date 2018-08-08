// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import 'animate.css'
import './style/base.css'
import './style/common.css'
import { post,get } from './http/http'

Vue.config.productionTip = false;
Vue.prototype.$post = post;
Vue.prototype.$get = get;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
