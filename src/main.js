import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import VueLazyload from 'vue-lazyload'
import Moment from 'moment'

import {
  request
}
from './network/request'
Vue.config.productionTip = false
Vue.prototype.$http = request;

// 定义全局时间戳过滤器
Vue.filter('formatDate', function (value) {
  return Moment(value).format('YYYY-MM-DD')
})

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require("@/assets/loading.svg"),
  error: require("@/assets/loaderr.svg"),
  attempt: 3,
  // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
  listenEvents: ['scroll']
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')