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
            <li v-for="(menu, index) in dogs.menus" :key="index">
              <router-link :to=menu.menu_param>
                <span class="rela">
                  <span>{{menu.menu_name}}</span>
                  <span></span>
                </span>
              </router-link>
            </li>
          </ul>
        </div>
        <!--<div class="switchtype">
          <div type="dog" class="go-dog pointer dog"></div>
          <div class="changepop bgfff">
            <div class="cartc-bg db"></div>
            <div class="cartc-box rela overflow" style="overflow: hidden; display: block;">
              <div class="main"><p class="ftc c999 ft16 rela">DOG<b class="b-line c000 ft12">▁</b></p>
                <p class="ftc mt20 ft20 c666">亲爱的小主</p>
                <p class="ftc c333 ft20">您即将进入<span>狗狗站</span></p>
                <ul class="clearfix ftc change-ul">
                  <li type="cat" class="fl pet1 cat"><img
                    src="//static.epetbar.com/static_web/wap/src/images/change-cat.png">
                    <div class="pet1name">猫猫站</div>
                  </li>
                  <li type="dog" class="fl pet2 mainpet rela dog"><img
                    src="//static.epetbar.com/static_web/wap/src/images/change-dog1.png">
                    <div>狗狗站</div>
                    <b class="current-line c000 ft12">▁</b> <a href="javascript:;"
                                                               class="cfff ft14 ftc once-into mt15 dib">立即进入</a></li>
                  <li type="fish" class="fl pet3 fish"><img
                    src="//static.epetbar.com/static_web/wap/src/images/change-fish.png">
                    <div class="pet3name">水族站</div>
                  </li>
                </ul>
              </div>
            </div>
            <a href="javascript:;" class="cartc-close afff ft20 ftc c666"><img
              src="//static.epetbar.com/static_web/wap/src/images/close2.png"></a></div>
        </div>-->
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
    mounted () {
      this.$router.push('/firstPage/dogFoods')
      this.$nextTick(() => {
        new BScroll(this.$refs.findNav, {
          click: true,
          scrollX:true
        })
      })
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
</style>

