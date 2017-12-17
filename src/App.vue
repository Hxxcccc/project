<template>
  <div id="app">
    <div class="content">
      <router-view></router-view>
    </div>
    <ul class="footerNav border-1px">
      <li class="firstPage">
        <router-link to="/firstPage">
          <span></span>
        </router-link>
      </li>
      <li class="classify">
        <router-link to="/classify">
          <span></span>
        </router-link>
      </li>
      <li class="shopping">
        <router-link to="/shopping">
          <span></span>
        </router-link>
      </li>
      <li class="userCenter">
        <router-link to="/userCenter">
          <span></span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'app',
    mounted () {
      this.$store.dispatch('reqDogMessage')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"
  #app
    width 100%
    height 100%
    .footerNav
      topBorder-1px(rgba(7, 17, 27, 0.1))
      position fixed
      left 0
      bottom 0
      width 100%
      height 2rem
      background #fff
      li
        float left
        width: 25%
        height: 2rem
        &.firstPage
          text-align center
          span
            display inline-block
            width 2rem
            height 2rem
            background-image: url("./common/images/footer.png")
            background-position 45% -1%
            background-repeat no-repeat
            background-size 550%
        &.classify
          text-align center
          span
            display inline-block
            width 2rem
            height 2rem
            background-image: url("./common/images/footer.png")
            background-position 45% 33%
            background-repeat no-repeat
            background-size 550%
        &.shopping
          text-align center
          span
            display inline-block
            width 2rem
            height 2rem
            background-image: url("./common/images/footer.png")
            background-position 45% 67%
            background-repeat no-repeat
            background-size 550%
        &.userCenter
          text-align center
          span
            display inline-block
            width 2rem
            height 2rem
            background-image: url("./common/images/footer.png")
            background-position 45% 101%
            background-repeat no-repeat
            background-size 550%
    .content
      height 100%
      >div
        height 100%
</style>
