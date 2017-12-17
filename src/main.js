import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import {Swipe, SwipeItem} from 'mint-ui'
import './mock/mock'
import './common/resetCss/reset.css'
import './common/stylus/base.styl'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
