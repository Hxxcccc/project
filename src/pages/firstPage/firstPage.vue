<template>
  <div>
    <section id="firstPage">
      <header class="header border-1px">
        <div class="headerNav">
          <router-link to="/firstPage/getCity">
            <div class="headerTitle">
              <a href="javascript:;">
                <span>狗狗站</span>
                <span>|</span>
                <span class="city">重庆</span>
                <span class="headerTitleIcon"></span>
              </a>
            </div>
          </router-link>
          <div class="headerSearch">
            <p class="search-text">
              <a href="javascript:;">
                <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
                <span class="search-icon"></span>
              </a>
            </p>
          </div>
          <a href="javascript:;" class="headerCategory">
            <img src="./mydope.png">
          </a>
        </div>
        <div class="findNav" ref="findNav">
          <ul class="findNavList">
            <li v-for="(menu, index) in dogs.menus" :key="index" @click="setClass(index)">
              <router-link :to=menu.menu_param>
                <span :class="classList[index]?'rela':''">
                  <span>{{menu.menu_name}}</span>
                  <span class="line"></span>
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </header>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        classList: [true, false, false, false, false, false, false]
      }
    },
    mounted () {
      this.$router.push('/firstPage/content')
      this.$nextTick(() => {
        new BScroll(this.$refs.findNav, {
          click: true,
          scrollX:true
        })
      })
    },
    methods: {
      setClass (cIndex) {
        this.classList = this.classList.map((flag, index) => {
          if (index == cIndex) {
            return true
          } else {
            return false
          }
        })
      },
    },
    computed: {
      ...mapState(['dogs', 'surprise'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  #firstPage
    position relative
    width: 100%
    height 100%
    .header
      bottomBorder-1px(rgba(7, 17, 27, 0.1))
      position fixed
      width 100%
      height 3.5rem
      overflow hidden
      background: #fff
      z-index 99
      .headerNav
        clearFix()
        width: 100%
        .headerTitle
          float left
          position relative
          margin-left .2rem
          padding .2rem
          width 3.9rem
          span
            font-size .6rem
            line-height .6rem
            color #898989
            &.city
              font-size .5rem
            &.headerTitleIcon
              position absolute
              top 1rem
              right 0
              border-width .2rem
              font-size 0
              line-height 0
              border-style solid solid dotted
              border-color #898989 transparent transparent

        .headerSearch
          float left
          width 9.5rem
          margin-top .2rem
          margin-left .2rem
          a
            position relative
            input
              box-sizing border-box
              width 100%
              border 0
              height 25px
              background #e9e9e9
              border-radius 4px
              color #bcbcbc
              text-indent 10px
              font-size 13px
              outline 0
            .search-icon
              position absolute
              top .6rem
              right 0.3rem
              width .5rem
              height .5rem
              background url("./search.png") no-repeat
              background-size 100%
        .headerCategory
          float right
          width 1.2rem
          height 1.2rem
          margin-top .5rem
          margin-right .3rem
          img
            width 100%
            height: 100%
      .findNav
        margin-top .2rem
        width 100%
        .findNavList
          clearFix()
          width 140%
          li
            float left
            width 14%
            text-align center
            span
              line-height .6rem
              font-size .6rem
              color #666
            .rela
              position relative
              >span
                color #459d36
                &.line
                  position absolute
                  bottom -.2rem
                  left 0
                  font-size 0
                  width 100%
                  height .1rem
                  background #459d36

</style>

