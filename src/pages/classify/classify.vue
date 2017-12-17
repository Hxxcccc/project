<template>
  <div id="classify">
    <div class="header border-1px">
      <span>分类</span>
      <span>品牌</span>
      <a class="search" href="javascript:;"></a>
    </div>
    <div class="classifyContent">
      <div class="leftBar" ref="leftBar">
        <ul class="leftBarList">
          <li v-for="(category, index) in classify.categorys" :key="index">
            {{category.name}}
          </li>
        </ul>
      </div>
      <div class="rightContent">

      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  export default {
    mounted () {
      this.$store.dispatch('reqClassify')
      if(this.classify.categorys){
        this.setScroll()
      }
    },
    methods: {
      setScroll () {
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.leftBar, {
            click: true
          })
        })
      }
    },
    watch: {
      classify () {
        if(this.classify.categorys && !this.scroll){
          this.setScroll()
        }
      }
    },
    computed: {
      ...mapState(['classify'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl'
  #classify
    position relative
    width 100%
    height 100%
  .header
    bottomBorder-1px(#cbcbcb)
    position relative
    z-index 99
    width 100%
    height 1.7rem
    text-align center
    background #fff
    span
      padding   0 .8rem
      font-size .6rem
    .search
      float right
      margin-top .5rem
      margin-right: .7rem
      width .7rem
      height .7rem
      background url("../firstPage/search.png") no-repeat
      background-size 100%
  .classifyContent
    position absolute
    top 1.7rem
    left 0
    bottom 2rem
    right 0
    .leftBar
      position absolute
      top 0
      left 0
      bottom 0
      width 3.5rem
      .leftBarList
        width 100%
        >li
          bottomBorder-1px(#f3f4f5)
          height .6rem
          padding .7rem 0
          text-align center
          font-size .6rem
          line-height .6rem
</style>
