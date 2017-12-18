import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueScroller from 'vue-scroller'
import {Swipe, SwipeItem} from 'mint-ui'
import './mock/mock'
import './common/resetCss/reset.css'
import './common/stylus/base.styl'
import './common/stylus/verify.css'


Vue.use(VueScroller)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
