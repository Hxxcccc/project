import Vue from 'vue'
import VueRouter from 'vue-router'
import firstPage from '../pages/firstPage/firstPage.vue'
import shopping from '../pages/shopping/shopping.vue'
import classify from '../pages/classify/classify.vue'
import userCenter from '../pages/userCenter/userCenter.vue'
import content from '../components/content/content.vue'
import dogFoods from '../components/dogFoods/dogFoods.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      'redirect': '/firstPage/content'
    },
    {
      path: '/firstPage',
      component: firstPage,
      children: [
        {
          path: 'dogFoods',
          component: dogFoods
        },
        {
          path: 'content',
          component: content
        }
      ]
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
