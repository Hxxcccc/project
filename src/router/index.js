import Vue from 'vue'
import VueRouter from 'vue-router'
import firstPage from '../pages/firstPage/firstPage.vue'
import shopping from '../pages/shopping/shopping.vue'
import classify from '../pages/classify/classify.vue'
import userCenter from '../pages/userCenter/userCenter.vue'
import content from '../components/content/content.vue'
import dogFoods from '../components/dogFoods/dogFoods.vue'
import category from '../components/category/category.vue'
import brand from '../components/brand/brand.vue'

Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass: 'active',
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
      component: classify,
      children: [
        {
          path: 'category',
          component: category
        },
        {
          path: 'brand',
          component: brand
        }
      ]
    },
    {
      path: '/userCenter',
      component: userCenter
    }
  ]
})
