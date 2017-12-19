<template>
  <div>
    <div id="classifyHome" v-show="isShow">
      <div class="header border-1px">
        <router-link to="/classify/category">分类 <span></span></router-link>
        <router-link to="/classify/brand">品牌<span></span></router-link>
        <a class="search" href="javascript:;"></a>
      </div>
      <router-view :classify="classify" :showAll="showAll"></router-view>
    </div>
    <div class="allGoods" v-if="!isShow">
        <allGoods :showAll="showAll"/>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import allGoods from '../../components/allGoods/allGoods.vue'
  export default {
    data () {
      return {
        isShow: true
      }
    },
    mounted () {
      this.$store.dispatch('reqClassify', this.jumpTo)
    },
    methods: {
      jumpTo () {
        this.$router.push('/classify/category')
      },
      showAll () {
        this.isShow = !this.isShow
      }
    },
    computed: {
      ...mapState(['classify'])
    },
    components: {
      allGoods
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl'
  #classifyHome
    position relative
    width 100%
    height 100%
    background #f3f4f5
  .header
    bottomBorder-1px(#cbcbcb)
    position relative
    z-index 99
    width 100%
    height 1.7rem
    text-align center
    background #fff
    >a
      position relative
      margin 0 .8rem
      font-size .6rem
      font-weight 500
      color #000
      &.active
        color #ed4044
        >span
          position absolute
          bottom -.4rem
          left -0.1rem
          width 100%
          height 2px
          background #ed4044
    .search
      float right
      margin-top .5rem
      margin-right: .7rem
      width .7rem
      height .7rem
      background url("../firstPage/search.png") no-repeat
      background-size 100%

  .allGoods
    position relative
    width 100%
    height 100%
</style>
