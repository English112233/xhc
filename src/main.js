import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from '@/axios'


Vue.prototype.$axios=Axios

Vue.config.productionTip = false



import LazyLoad from 'vue-lazyload'
Vue.use(LazyLoad,{
  loading: require('assets/logo.png'),
  attempt: 1
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
