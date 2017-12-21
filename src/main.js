import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueScroller from 'vue-scroller'
import VueLazyload from 'vue-lazyload'
import {Swipe, SwipeItem} from 'mint-ui'
import './mock/mock'
import './common/resetCss/reset.css'
import './common/stylus/base.styl'
import './common/stylus/verify.css'
import loading from './common/images/loading.gif'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: loading,
  attempt: 1
})

Vue.use(VueScroller)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
