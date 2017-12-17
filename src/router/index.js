import Vue from 'vue'
import VueRouter from 'vue-router'
import firstPage from '../pages/firstPage/firstPage.vue'
import shopping from '../pages/shopping/shopping.vue'
import classify from '../pages/classify/classify.vue'
import userCenter from '../pages/userCenter/userCenter.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      'redirect': '/firstPage'
    },
    {
      path: '/firstPage',
      component: firstPage
    },
    {
      path: '/shopping',
      component: shopping
    },
    {
      path: '/classify',
      component: classify
    },
    {
      path: '/userCenter',
      component: userCenter
    }
  ]
})
