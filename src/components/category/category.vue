<template>
  <div class="classifyContent" v-if="classify">
    <div class="leftBar" ref="leftBar">
      <ul class="leftBarList">
        <li v-for="(category, index) in classify.categorys" :key="index" @click="getCateList(index)" :class="classList[index]?'active':''">
          {{category.name}}
        </li>
      </ul>
    </div>
    <div class="rightContent" ref="rightContent">
      <div>
        <cargo :cateList="classify['cate_list'+cateListIndex]"/>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import cargo from '../../components/cargo/cargo.vue'
  export default {
    props: {
      classify: Object
    },
    data () {
      return {
        cateListIndex: 1,
        classList: [true, false, false, false, false, false, false, false, false, false, false, false, false]
      }
    },
    mounted () {
      if(this.classify){
        this.setScroll()
      }
    },
    methods: {
      setScroll () {
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.leftBar, {
            click: true
          })
          new BScroll(this.$refs.rightContent, {
            click: true
          })
        })
      },
      getCateList (cIndex) {
        this.cateListIndex = cIndex % 6 + 1
        this.classList = this.classList.map((flag, index) => {
          if (index == cIndex) {
            return true
          } else {
            return false
          }
        })
      }
    },
    components: {
      cargo
    },
    watch: {
      classify () {
        if(this.classify && !this.scroll){
          this.setScroll()
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl'
  .classifyContent
    position absolute
    top 1.7rem
    left 0
    right 0
    bottom 2rem
    .leftBar
      width 3.5rem
      height 100%
      .leftBarList
        width 100%
        >li
          bottomBorder-1px(#f3f4f5)
          height .6rem
          padding .7rem 0
          text-align center
          font-size .55rem
          line-height .6rem
          background #fff
          &.active
            background #f3f4f5
            color #ed4044
    .rightContent
      position absolute
      top 0
      right 0
      bottom 0
      width 12.2rem
      margin .2rem .1rem .1rem .2rem
</style>
